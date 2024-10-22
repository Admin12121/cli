import { execSync } from "child_process";
import latestVersion from "latest-version";
import ora from "ora";
import chalk from "chalk";
import path from "path";
import fs from "fs";
import { cssContent, tailwindConfigContent, pageContent, notFoundContent, layoutContent } from "./contents.js";


function runCommand(command, hideOutput = true) {
  return execSync(command, { stdio: hideOutput ? 'pipe' : 'inherit' });
}

export async function setupNext(projectName) {
  const spinner = ora();
  try {
    const nextVersion = await latestVersion("next");

    // Start installing Next.js
    spinner.start(chalk.blue(`Installing Next.js ${nextVersion}...`));
    runCommand(`npx create-next-app@latest ${projectName} --ts --silent`, false);
    process.chdir(projectName);
    spinner.succeed(chalk.green(`🟢 Next.js installed.`));

    // Start installing dependencies
    spinner.start(chalk.blue(`Installing dependencies...`));

    const dependencies = [
      "@hookform/error-message",
      "@hookform/resolvers",
      "@radix-ui/react-accordion",
      "@radix-ui/react-alert-dialog",
      "@radix-ui/react-aspect-ratio",
      "@radix-ui/react-avatar",
      "@radix-ui/react-checkbox",
      "@radix-ui/react-collapsible",
      "@radix-ui/react-context-menu",
      "@radix-ui/react-dialog",
      "@radix-ui/react-dropdown-menu",
      "@radix-ui/react-hover-card",
      "@radix-ui/react-icons",
      "@radix-ui/react-label",
      "@radix-ui/react-menubar",
      "@radix-ui/react-navigation-menu",
      "@radix-ui/react-popover",
      "@radix-ui/react-progress",
      "@radix-ui/react-radio-group",
      "@radix-ui/react-scroll-area",
      "@radix-ui/react-select",
      "@radix-ui/react-separator",
      "@radix-ui/react-slider",
      "@radix-ui/react-slot",
      "@radix-ui/react-switch",
      "@radix-ui/react-tabs",
      "@radix-ui/react-toast",
      "@radix-ui/react-toggle",
      "@radix-ui/react-toggle-group",
      "@radix-ui/react-tooltip",
      "@types/bcryptjs",
      "bcryptjs",
      "class-variance-authority",
      "clsx",
      "cmdk",
      "date-fns",
      "embla-carousel-react",
      "framer-motion",
      "html-react-parser",
      "input-otp",
      "js-cookie",
      "lucide-react",
      "next-auth",
      "next-themes",
      "novel",
      "react-day-picker",
      "react-hook-form",
      "react-resizable-panels",
      "recharts",
      "sass",
      "sonner",
      "swiper",
      "tailwind-merge",
      "tailwindcss-animate",
      "vaul",
      "zod",
    ].join(" ");

    runCommand(`npm install ${dependencies} --legacy-peer-deps --silent`);
    spinner.succeed(chalk.green(`🟢 Dependencies installed.`));

    const useSrc = fs.existsSync("src");
    const basePath = useSrc ?  "src" : ".";

    // Start downloading components
    spinner.start(chalk.blue(`Downloading components...`));
    const directories = ["components", "constants", "hooks", "icons", "lib", "schemas"];
    directories.forEach(dir => {
      runCommand(`degit Admin12121/Starter-Package/package/next-package/src/${dir} ${path.join(basePath, dir)}`);
      console.log(chalk.green(`🟢 ${dir} downloaded.`));
    });

    // Set up project files
    spinner.start(chalk.blue(`Setting up project files...`));
    fs.writeFileSync(path.join(basePath, 'app', 'globals.css'), cssContent);
    fs.writeFileSync(path.join('.', 'tailwind.config.ts'), tailwindConfigContent);
    fs.writeFileSync(path.join(basePath, 'app', 'page.tsx'), pageContent);
    fs.writeFileSync(path.join(basePath, 'app', 'layout.tsx'), layoutContent);
    fs.writeFileSync(path.join(basePath, 'app', 'not-found.tsx'), notFoundContent);

    spinner.succeed(chalk.green(`🟢 Project setup complete.`));
    console.log(`- cd ${projectName}`);
    console.log(`- npm run dev`);
  } catch (error) {
    spinner.fail(chalk.red(`🔴 An error occurred: ${error.message}`));
  }
}
