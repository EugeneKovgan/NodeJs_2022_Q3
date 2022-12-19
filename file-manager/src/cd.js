import { resolve } from 'path';
import { chdir } from 'process';
import { errorMessage } from './common/errorMessage.js';

export const cd = async (newPath) => {
  try {
    chdir(resolve(newPath));
  } catch (err) {
    errorMessage(err);
  }
};
