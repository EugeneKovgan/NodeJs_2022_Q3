import * as fs from 'fs/promises';
import path from 'path';
import { errorMessage } from './common/errorMessage.js';
import { getFullPath } from './common/getFullPath.js';

const rename = async () => {
  const { __dirname } = getFullPath(import.meta.url);
  const currentPath = path.join(__dirname, 'files', 'wrongFilename.txt');
  const newPath = path.join(__dirname, 'files', 'properFilename.md');
  try {
    await fs.rename(currentPath, newPath);
  } catch (err) {
    throw new Error(errorMessage);
  }
};

await rename();
