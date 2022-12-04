import * as fs from 'fs/promises';
// import fs from 'fs';
import path from 'path';
import { errorMessage } from './common/errorMessage.js';
import { getFullPath } from './common/getFullPath.js';

const copy = async () => {
  const { __dirname } = getFullPath(import.meta.url);
  const currentPath = path.join(__dirname, 'files');
  const newPath = path.join(__dirname, 'files_copy');

  const files = await fs.readdir(currentPath);
  try {
    await fs.mkdir(newPath);
    files.forEach((item) => {
      fs.cp(path.join(currentPath, item), path.join(newPath, item));
    });
  } catch (err) {
    throw new Error(errorMessage);
  }
};

copy();
