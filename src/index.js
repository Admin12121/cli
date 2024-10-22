#!/usr/bin/env node
import ora from 'ora';
import chalk from 'chalk';
import inquirer from "inquirer";
import { setupNext } from "./next/index.js";
import { setupReact } from "./react/index.js";

process.removeAllListeners('warning');

const promptUser = async () => {
  const questions = [
    {
      type: 'input',
      name: 'projectName',
      message: 'Enter your project name:',
      default: 'my-project',
      validate: (input) => input ? true : 'Project name cannot be empty.',
    },
    {
      type: 'list',
      name: 'framework',
      message: 'Choose a framework:',
      choices: [
        { name: 'Next.js', value: 'next' },
        { name: 'React', value: 'react' }
      ],
    },
  ];

  return await inquirer.prompt(questions);
};

(async () => {
  try {
    const { projectName, framework } = await promptUser();
    const spinner = ora();

    if (framework === "next") {
      await setupNext(projectName);
    } else if (framework === "react") {
      await setupReact(projectName);
    }
  } catch (error) {
    console.error("🔴 An error occurred:", error.message);
  }
})();
