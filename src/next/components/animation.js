import chalk from "chalk";

export function startDotAnimation(spinner, text) {
    const frames = ['.', '..', '...', '....', '', '.', '..','...','....'];
    let i = 0;
    
    const intervalId = setInterval(() => {
      spinner.text = chalk.blue(`${text} ${frames[i % frames.length]}`);
      i++;
    }, 200);
  
    return intervalId;
  }
  