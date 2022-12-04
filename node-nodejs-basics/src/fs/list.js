import * as fs from 'fs/promises';
import path from 'path';
import { errorMessage } from './common/errorMessage.js';
import { getFullPath } from './common/getFullPath.js';

const list = async () => {
  const { __dirname } = getFullPath(import.meta.url);
  const currentPath = path.join(__dirname, 'files');
  try {
    const listOfFiles = await fs.readdir(currentPath);
    console.log(listOfFiles);
  } catch (err) {
    throw new Error(errorMessage);
  }
};

await list();
