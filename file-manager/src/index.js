import { stdin, stdout, exit, argv, chdir, cwd } from 'process';
import { homedir } from 'os';
import readline from 'readline';
import { up } from './up.js';
import { ls } from './ls.js';
import { cat } from './cat.js';
import { add } from './add.js';
// import { compress } from './compress.js';
// import { decompress } from './decompress.js';
import { rm } from './rm.js';
import { rn } from './rn.js';
import { mv } from './mv.js';
import { cp } from './cp.js';
import { hash } from './hash.js';
import { showCurrentPosition } from './common/showCurrentPosition.js';
import { checkEnterParameters } from './common/checkEnterParameters.js';
import { checkEnterArguments } from './common/checkEnterArguments.js';
import { errorMessage } from './common/errorMessage.js';
import { errorMessageCheckTheCommand } from './common/checkTheCommand.js';

chdir(homedir());

const args = Object.fromEntries(
  argv.slice(2).map((arg) => {
    const [key, value] = arg.split('=');
    return [key, value];
  })
);

const username = args['--username'] ? args['--username'] : 'User';

console.log(`Welcome to the File Manager, ${username}!`);

init();

function init() {
  showCurrentPosition();

  const rl = readline.createInterface({
    input: stdin,
    output: stdout,
  });

  rl.on('line', async (line) => {
    console.log(line);
    const inputData = line.trim().split(' ');
    const [command, arg] = [inputData[0], inputData.slice(1)];
    switch (command) {
      case '.exit':
        rl.close();
        stdout.write(`Thank you for using File Manager, ${username}, goodbye!\n`);
        break;
      case 'up':
        if (!checkEnterParameters(arg, 0)) {
          errorMessage();
        } else {
          up();
        }
        break;
      case 'cd':
        if (!checkEnterParameters(arg, 1)) {
          errorMessage();
        } else {
          cd(arg[0]);
        }
        break;
      case 'ls':
        if (!checkEnterParameters(arg, 0)) {
          errorMessage();
        } else {
          await ls();
        }
        break;
      case 'cat':
        if (!checkEnterParameters(arg, 1)) {
          errorMessage();
        } else {
          await cat(arg[0]);
        }
        break;
      case 'add':
        if (!checkEnterParameters(arg, 1)) {
          errorMessage();
        } else {
          await add(arg[0]);
        }
        break;
      case 'rn':
        if (!checkEnterParameters(arg, 2)) {
          errorMessage();
        } else {
          await rn(arg[0], arg[1]);
        }
        break;
      case 'cp':
        if (!checkEnterParameters(arg, 2)) {
          errorMessage();
        } else {
          await cp(arg[0], arg[1]);
        }
        break;
      case 'mv':
        if (!checkEnterParameters(arg, 2)) {
          errorMessage();
        } else {
          await mv(arg[0], arg[1]);
        }
        break;
      case 'rm':
        if (!checkEnterParameters(arg, 1)) {
          errorMessage();
        } else {
          await rm(arg[0]);
        }
        break;
      case 'os':
        if (!checkEnterParameters(arg, 1)) {
          errorMessage();
          break;
        }
        if (!checkEnterArguments(arg[0])) {
          errorMessage();
        } else {
          os(arg[0]);
        }
        break;
      case 'hash':
        if (!checkEnterParameters(arg, 1)) {
          errorMessage();
        } else {
          await hash(arg[0]);
        }
        break;
      case 'compress':
        if (!checkEnterParameters(arg, 2)) {
          console.log(arg);
          errorMessage();
        } else {
          await compress(arg[0], arg[1]);
        }
        break;
      case 'decompress':
        if (!checkEnterParameters(arg, 2)) {
          errorMessage();
        } else {
          await decompress(arg[0], arg[1]);
        }
        break;
      default:
        errorMessageCheckTheCommand();
        break;
    }
    showCurrentPosition();
  });

  if (process.platform === 'win32') {
    rl.on('SIGINT', () => process.emit('SIGINT'));
  }

  process.on('SIGINT', () => {
    stdout.write(`Thank you for using File Manager, ${username}, goodbye!\n`);
    nextTick(() => exit());
  });
}
