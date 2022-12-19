import { resolve, parse } from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream';
import { errorMessage } from './common/errorMessage.js';
import { showCurrentPosition } from './common/showCurrentPosition.js';

export const cp = async (from, to) => {
  try {
    const pathToFile = resolve(from);
    const { base } = parse(pathToFile);
    const pathToDirectory = resolve(to, base);
    const readableStream = createReadStream(pathToFile);
    const writableStream = createWriteStream(pathToDirectory);
    await pipeline(readableStream, writableStream);
    showCurrentPosition();
  } catch (err) {
    errorMessage(err);
  }
};
