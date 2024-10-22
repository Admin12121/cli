#!/usr/bin/env node

import { execSync } from "child_process";
import latestVersion from "latest-version";
import inquirer from "inquirer";
import { setupNext } from "./next/index.js";
import { setupReact } from "./react/index.js";

const promptUser = async () => {
  const questions = [
    {
      type: 'input',
      name: 'projectName',
      message: 'Enter your project name:',
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

    if (framework === "next") {
      await setupNext(projectName);
    } else if (framework === "react") {
      await setupReact(projectName);
    }
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
})();
