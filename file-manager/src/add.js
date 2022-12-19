import { open } from 'fs/promises';
import { resolve } from 'path';
import { cwd } from 'process';
import { errorMessage } from './common/errorMessage.js';

export const add = async (name) => {
  let filehandle;
  try {
    const pathToFile = resolve(cwd(), name);
    filehandle = await open(pathToFile, 'w');
  } catch (err) {
    errorMessage(err);
  } finally {
    await filehandle?.close();
  }
};
