#!/usr/bin/env node
import { Command } from 'commander';
import inquirer from 'inquirer';
import { setupNext } from './next/index.js';
import { setupReact } from './react/index.js';

import fs  from 'fs';
import path from 'path';
import semver from 'semver';
import chalk from 'chalk';

function displayLogo(){
  console.log(chalk.hex('#ff5200')(`                                                              
                                                ..:::..                                             
                                          :!?5GBB#####BBG5J!^.                                      
                                      .!YB&&&#BBBBBBBBBB##@@&B57:                                   
                                    ^Y#@@@@&&&@@@@@@@@@@@@@@@@###5~                                 
                                  :5&@@@@@@@&B5J??7??JY5GB&@@@&#GG#G~                               
                                 7&@@@@@@&P7~~~^^::..::^~7?YG&@@@#PP&5.                             
                                Y@@@@@@&J:~7~:            .:!JP&@@@BY##~                            
                               J@@@@@@G:.J!.                 :7Y#@@@&Y#@J                           
                              ?@@@@@@G..Y^                     ^Y#@@@&P&@P:                          
   ..   ...:^~~^:..:^^~~!7?YB@#BY::5~ ^5                         5@@@@@@@&##BP5YYJ7~^::::.:::...    
   ~7!~~7?JY5GGGPPPGGBBB#&&&&&BBGGGGGB#GPPPGGGGGGGGGGGGGGGGGGGGGPG##########BBGGGGPP5J7^^^^^^^^:.   
                                5@@@&#P.:7.                   .??!P@@@~                             
                                :#@@@@@#7.~~:               .~5#@@@@@7                              
                                 :P#@@@@@B?~^^:..       .:^75#@@@@@&!                               
                                   7G#@@@@@&GY?!!~~~~!!?JPB&@@@@@#P^                                
                                    .75B&@@@@@@@&#####&&@@@@@@&BY~                                  
                                      .^?5G#&&@@##BBBB##&&&BGY!:                                    
                                          :~7JY5PGGGGGP5Y?!^.                                       
                                               ...::...                                             
    `))
}


async function checkProjectName(projectName) {
  const projectPath = path.resolve(process.cwd(), projectName);
  if (fs.existsSync(projectPath)) {
    throw new Error(`Project name "${projectName}" already exists. Please choose a different name.`);
  }
}

async function checkPackageJson() {
  const packageJsonPath = path.resolve(process.cwd(), 'package.json');
  if (fs.existsSync(packageJsonPath)) {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
    const nextVersion = packageJson.dependencies?.next || packageJson.devDependencies?.next;
    const projectName = packageJson.name || 'my-project';
    if (nextVersion && semver.satisfies(semver.coerce(nextVersion), '>=14.0.0')) {
      return { framework: 'next', projectName };
    }
    return { framework: 'react', projectName };
  }
  return null;
}

const program = new Command();

displayLogo();

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
    const existingFrameworkData = await checkPackageJson();

    if (existingFrameworkData) {
      const { framework, projectName } = existingFrameworkData;
      await checkProjectName(projectName);
      const continueSetup = true
      if (framework === 'next') {
        await setupNext({projectName, continueSetup});
      } else {
        await setupReact({projectName, continueSetup});
      }
      return;
    }

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
      let { projectName, framework } = await promptUser();
      let validName = false;
      while (!validName) {
        try {
          await checkProjectName(projectName);
          validName = true;
        } catch (error) {
          console.error('🔴', error.message);
          const response = await inquirer.prompt([
            {
              type: 'input',
              name: 'projectName',
              message: 'Enter a new project name:',
              validate: (input) => (input ? true : 'Project name cannot be empty.'),
            },
          ]);
          projectName = response.projectName;
        }
      }

      const selectedFramework = options.framework || framework;

      if (selectedFramework === 'next') {
        await setupNext({ projectName, continueSetup: false });
      } else if (selectedFramework === 'react') {
        await setupReact({ projectName, continueSetup: false });
      }
    } catch (error) {
      console.error('🔴 An error occurred:', error.message);
    }
  });

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}
