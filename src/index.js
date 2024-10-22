#!/usr/bin/env node
import { Command } from 'commander';
import inquirer from 'inquirer';
import { setupNext } from './next/index.js';
import { setupReact } from './react/index.js';

const program = new Command();


program
  .name('jhapali-ui')
  .version('1.0.0') 
  .usage('[options] [command]')
  .option('-h, --help', 'display help for command')
  .option('-n, --name <name>', 'Project name')
  .option('-f, --framework <framework>', 'Framework to use (next, react)')
  .command('init')
  .description('Setup Js Framework with modern components')
  .action(async () => {
    const options = program.opts();
    const promptUser = async () => {
      const questions = [
        {
          type: 'input',
          name: 'projectName',
          message: 'Enter your project name:',
          default: options.name || 'my-project',
          validate: (input) => (input ? true : 'Project name cannot be empty.'),
        },
        {
          type: 'list',
          name: 'framework',
          message: 'Choose a framework:',
          choices: [
            { name: 'Next.js', value: 'next' },
            { name: 'React', value: 'react' }
          ],
          when: () => !options.framework,
        },
      ];
      return await inquirer.prompt(questions);
    };

    try {
      const { projectName, framework } = await promptUser();
      const selectedFramework = options.framework || framework;

      if (selectedFramework === 'next') {
        await setupNext(projectName);
      } else if (selectedFramework === 'react') {
        await setupReact(projectName);
      }
    } catch (error) {
      console.error('🔴 An error occurred:', error.message);
    }
  });

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}
