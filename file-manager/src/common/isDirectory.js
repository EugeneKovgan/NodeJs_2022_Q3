import { stat } from 'fs/promises';
import { resolve } from 'path';

export const isDirectory = async (path) => {
  try {
    newPath = resolve(path);
    const stats = await stat(newPath);
    return stats.isDirectory();
  } catch (err) {
    return false;
  }
};
