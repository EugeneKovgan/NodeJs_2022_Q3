import { chdir } from 'process';
import { errorMessage } from './common/errorMessage.js';

export const up = async () => {
  try {
    chdir('..');
    showCurrentPosition();
  } catch (err) {
    errorMessage();
  }
};
