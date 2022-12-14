import { fork } from 'child_process';
import path from 'path';
import { getFullPath } from '../fs/common/getFullPath.js';

const spawnChildProcess = async (args) => {
  const { __dirname } = getFullPath(import.meta.url);
  const pathToFile = path.join(__dirname, 'files', 'script.js');
  try {
    fork(pathToFile, args);
  } catch (error) {
    throw new Error(error);
  }
};

spawnChildProcess(['5', 2]);
