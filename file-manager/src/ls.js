import { resolve } from 'path';
import { readdir } from 'fs/promises';
import { cwd } from 'process';
import { errorMessage } from './common/errorMessage.js';

export const ls = async () => {
  try {
    const getPath = resolve(cwd());
    const currentFolder = await readdir(getPath);
    console.table(currentFolder);
  } catch (err) {
    errorMessage(err);
  }
};
