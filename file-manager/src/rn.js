import * as fs from 'fs/promises';
import { resolve, parse } from 'path';
import { errorMessage } from './common/errorMessage.js';

export const rn = async (from, newName) => {
  try {
    const currentPath = resolve(from);
    const { dir } = parse(currentPath);
    const newPath = resolve(dir, newName);
    await fs.rename(currentPath, newPath);
  } catch (err) {
    errorMessage(err);
  }
};
