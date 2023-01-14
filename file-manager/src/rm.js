import * as fs from 'fs/promises';
import { resolve } from 'path';
import { errorMessage } from './common/errorMessage.js';

export const rm = async (filePath) => {
  try {
    await fs.rm(resolve(filePath));
  } catch (err) {
    errorMessage(err);
  }
};
