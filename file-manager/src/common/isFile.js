import { stat } from 'fs/promises';
import { resolve } from 'path';

export const isFile = async (path) => {
  try {
    newPath = resolve(path);
    const stats = await stat(newPath);
    return stats.isFile();
  } catch (err) {
    return false;
  }
};
