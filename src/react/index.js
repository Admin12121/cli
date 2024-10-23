import { fileURLToPath } from 'url';
import { spawn } from "child_process";
import ora from "ora";
import chalk from "chalk";
import path, { dirname } from "path";
import fs from "fs";
import inquirer from "inquirer";
import { devDependencies, cssContent, tailwindConfigContent, AppContent, routes, mainContent , dependencies, middlewareContent, viteconfig, tsconfigapp, tsconfig } from "./contents.js";
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

  answers.useTailwind = true;
  return answers;
}


export async function setupReact({ projectName = 'my-project', continueSetup = false }) {
  const spinner = ora();
  try {
    if(!continueSetup){
      const answers = await askProjectQuestions();
  
      spinner.start(chalk.blue(`creating react project`));
      const createReactAppArgs = [`create-vite@latest`, projectName, `--template react-swc-ts`];
      await runCommand("npx", createReactAppArgs, { stdio: 'ignore' });
      spinner.stop();
      spinner.start(chalk.blue('installing react'));
      process.chdir(projectName);
      await runCommand("npm", ['i'], { stdio: 'ignore' });
      spinner.stop();
      console.log(chalk.green(`🟢 react installed.`))
    }else{
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
    }

    spinner.start(chalk.blue(`Installing dependencies...`));
    for (const dep of dependencies) {
      const animationInterval = startDotAnimation(spinner, `Installing ${dep}`);
      await runCommand('npm', ['install', dep, '--legacy-peer-deps'], { stdio: 'ignore' });
      clearInterval(animationInterval);
    }
    spinner.stop();
    console.log(chalk.green(`🟢 Dependencies installed.`))

    spinner.start(chalk.blue(`Installing devDependencies...`));
    for (const dep of devDependencies) {
      const animationInterval = startDotAnimation(spinner, `Installing ${dep}`);
      await runCommand('npm', ['install', dep, '--legacy-peer-deps'], { stdio: 'ignore' });
      clearInterval(animationInterval);
    }
    spinner.stop();
    console.log(chalk.green(`🟢 devDependencies installed.`))

    const basePath = "src";

    const directories = ["api","components", "constants", "hooks", "icons", "lib", "pages", "schemas"];
    for (const dir of directories) {
      spinner.start(chalk.blue(`Downloading ${dir}...`));
      await runCommand('degit', [`Admin12121/Starter-Package/package/react-package/src/${dir}`, path.join(basePath, dir)], { stdio: 'ignore' });
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

    fs.writeFileSync(path.join(basePath, 'index.css'), updatedCssContent);
    fs.writeFileSync(path.join('.', 'tailwind.config.ts'), tailwindConfigContent);
    fs.writeFileSync(path.join(basePath, 'App.tsx'), AppContent);
    fs.writeFileSync(path.join(basePath, 'main.tsx'), mainContent);
    fs.writeFileSync(path.join(basePath, 'middleware.tsx'), middlewareContent);
    fs.writeFileSync(path.join(basePath, 'routes.ts'), routes);
    fs.writeFileSync(path.join('.', 'vite.config.ts'), viteconfig);
    fs.writeFileSync(path.join('.', 'tsconfig.app.json'), tsconfigapp);
    fs.writeFileSync(path.join('.', 'tsconfig.json'), tsconfig);

    const appCssPath = path.join(basePath, 'App.css');
    if (fs.existsSync(appCssPath)) {
        fs.unlinkSync(appCssPath);
    }
    
    spinner.stop();
    console.log(chalk.green(`🟢 Project setup complete.`))
    console.log(`- cd ${projectName}`);
    console.log(`- npm run dev`);
  } catch (error) {
    spinner.stop();
    console.log(chalk.red(`🔴 An error occurred: ${error.message}`));
  }
}