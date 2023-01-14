import { createReadStream } from 'fs';
import { resolve } from 'path';
import { errorMessage } from './common/errorMessage.js';

export const cat = async (pathToFile) => {
  try {
    const readableStream = new createReadStream(resolve(pathToFile));
    readableStream.on('error', function (err) {
      errorMessage(err);
    });
    await readableStream.pipe(process.stdout);
  } catch (err) {
    errorMessage(err);
  }
};
