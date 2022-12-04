import * as fs from 'fs/promises';
import path from 'path';
import { errorMessage } from './common/errorMessage.js';
import { getFullPath } from './common/getFullPath.js';

const remove = async () => {
  const { __dirname } = getFullPath(import.meta.url);
  const currentPath = path.join(__dirname, 'files', 'fileToRemove.txt');
  try {
    await fs.rm(currentPath);
  } catch (err) {
    throw new Error(errorMessage);
  }
};

await remove();
