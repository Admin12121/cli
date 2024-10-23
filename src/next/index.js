import { fileURLToPath } from 'url';
import { spawn } from "child_process";
import latestVersion from "latest-version";
import ora from "ora";
import chalk from "chalk";
import path, { dirname } from "path";
import fs from "fs";
import inquirer from "inquirer";
import { cssContent, getTailwindConfig, pageContent, notFoundContent, layoutContent , dependencies } from "./contents.js";
import { startDotAnimation } from "./components/animation.js"

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function runCommand(command, args, options = {}) {
  return new Promise((resolve, reject) => {
    const process = spawn(command, args, { stdio: 'inherit', shell: true, ...options });

    process.on('close', (code) => {
      if (code !== 0) {
        reject(new Error(`Command failed with exit code ${code}`));
      } else {
        resolve();
      }
    });
  });
}

async function askProjectQuestions() {
  const answers = await inquirer.prompt([
    {
      type: "list",
      name: "useSrcDir",
      message: `Would you like your code inside a ${chalk.blue("src/")} directory?`,
      choices: [
        { name: chalk.red("no"), value: false },
        { name: chalk.green("yes"), value: true },
      ],
      default: true,
      prefix: '🔵',
    },
    {
      type: "list",
      name: "useAppRouter",
      message: "Would you like to use App Router? (recommended)",
      choices: [
        { name: chalk.red("no"), value: false },
        { name: chalk.green("yes"), value: true },
      ],
      default: true, 
      prefix: '🔵',
    },
    {
      type: "list",
      name: "Theme",
      message: "Which color would you like to use as base color?",
      choices: [
        { name: chalk.red("zinc"), value: 'zinc' },
        { name: chalk.green("neutral"), value: 'neutral' },
        { name: chalk.green("gray"), value: 'gray' },
        { name: chalk.green("salate"), value: 'salate' },
        { name: chalk.green("stone"), value: 'stone' },
      ],
      default: true, 
      prefix: '🔵',
    },
  ]);

  answers.useTailwind = true;
  return answers;
}


export async function setupNext({ projectName , continueSetup }) {
  const spinner = ora();
  let answers;
  try {
    if (!continueSetup) {
      const nextVersion = await latestVersion("next");
      answers = await askProjectQuestions();
      spinner.start(chalk.blue(`Installing Next.js...`));
      const createNextAppArgs = [
        `create-next-app@${nextVersion}`,
        projectName,
        "--ts",
        "--eslint",
        "--turbopack",
        "--no-import-alias",
      ];

      if (answers.useTailwind) createNextAppArgs.push("--tailwind");
      if (answers.useSrcDir) createNextAppArgs.push("--src-dir");
      if (answers.useAppRouter) createNextAppArgs.push("--app");

      await runCommand("npx", createNextAppArgs, { stdio: 'ignore' });
      spinner.stop();
      console.log(chalk.green(`🟢 Next.js installed.`))

      process.chdir(projectName);
    } else{
      const useSrc = fs.existsSync("src");
      answers = await inquirer.prompt([
        {
          type: "list",
          name: "Theme",
          message: "Which color would you like to use as base color?",
          choices: [
            { name: chalk.red("zinc"), value: 'zinc' },
            { name: chalk.green("neutral"), value: 'neutral' },
            { name: chalk.green("gray"), value: 'gray' },
            { name: chalk.green("salate"), value: 'salate' },
            { name: chalk.green("stone"), value: 'stone' },
          ],
          default: true, 
        },
      ]);
      answers.useSrcDir = useSrc; 
    }

    spinner.start(chalk.blue(`Installing dependencies...`));
    for (const dep of dependencies) {
      const animationInterval = startDotAnimation(spinner, `Installing ${dep}`);
      await runCommand('npm', ['install', dep, '--legacy-peer-deps'], { stdio: 'ignore' });
      clearInterval(animationInterval);
    }
    spinner.stop();
    console.log(chalk.green(`🟢 Dependencies installed.`))

    const useSrc = fs.existsSync("src");
    const basePath = useSrc ? "src" : ".";

    const directories = ["components", "constants", "hooks", "icons", "lib", "schemas"];
    for (const dir of directories) {
      spinner.start(chalk.blue(`Downloading ${dir}...`));
      await runCommand('degit', [`Admin12121/Starter-Package/package/next-package/src/${dir}`, path.join(basePath, dir)], { stdio: 'ignore' });
      spinner.stop();
      console.log(chalk.green(`🟢 ${dir} downloaded.`))
    }

    spinner.start(chalk.blue(`Setting up project files...`));

    const themeFilePath = path.join(__dirname, 'theme', `${answers.Theme}.json`);
    const themeData = JSON.parse(fs.readFileSync(themeFilePath, 'utf-8'));
    
    const updatedCssContent = cssContent.replace(
      /:root {[^}]*}/,
      `:root {${Object.entries(themeData.cssVars.light).map(([key, value]) => `--${key}: ${value};`).join(' ')}}`
    ).replace(
      /\.dark {[^}]*}/,
      `.dark {${Object.entries(themeData.cssVars.dark).map(([key, value]) => `--${key}: ${value};`).join(' ')}}`
    );

    fs.writeFileSync(path.join(basePath, 'app', 'globals.css'), updatedCssContent);
    const tailwindConfigContentUpdated = getTailwindConfig(answers.useSrcDir);
    fs.writeFileSync(path.join('.', 'tailwind.config.ts'), tailwindConfigContentUpdated);
    // fs.writeFileSync(path.join(basePath, 'app', 'page.tsx'), pageContent);
    fs.writeFileSync(path.join(basePath, 'app', 'layout.tsx'), layoutContent);
    fs.writeFileSync(path.join(basePath, 'app', 'not-found.tsx'), notFoundContent);

    spinner.stop();
    console.log(chalk.green(`🟢 Project setup complete.`))
    if(!continueSetup){
      console.log(`- cd ${projectName}`);
      console.log(`- npm run dev`);
    }
  } catch (error) {
    spinner.stop();
    console.log(chalk.red(`🔴 An error occurred: ${error.message}`));
  }
}