import { errorMessage } from './common/errorMessage.js';
import { showCurrentPosition } from './common/showCurrentPosition.js';
import { cpus, EOL, userInfo } from 'os';
import { arch } from 'os';

export const os = async (param) => {
  try {
    if (!param) throw new Error('param is not specified');

    const { username, homedir } = userInfo();
    const cpusInfo = cpus().map(({ model, speed }) => {
      speed = `${speed / 1000}Ghz`;
      return { model, speed };
    });

    const osInfo = {
      '--EOL': JSON.stringify(EOL),
      '--cpus': cpusInfo,
      '--homedir': homedir,
      '--username': username,
      '--architecture': arch,
    };

    if (!osInfo[param]) throw new Error('no such parameters');

    console.table(osInfo[param]);
    showCurrentPosition();
  } catch (err) {
    errorMessage(err);
  }
};
