import * as fs from 'fs/promises';
import { resolve } from 'path';
import { errorMessage } from './common/errorMessage.js';

export const rn = async (from, newName) => {
  try {
    const currentPath = resolve(from);
    const dir = parse(currentPath).dir;
    const newPath = join(dir, newName);
    await fs.rename(currentPath, newPath);
  } catch (err) {
    errorMessage(err);
  }
};
