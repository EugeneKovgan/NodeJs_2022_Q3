import { createReadStream, createWriteStream } from 'fs';
import { resolve, parse } from 'path';
import { showCurrentPosition } from './common/showCurrentPosition.js';
import * as zlib from 'zlib';
import { errorMessage } from './common/errorMessage.js';
import { pipeline } from 'stream';

export const decompress = async (from, to) => {
  try {
    const isNotDirectory = !(await isDirectory(to));
    const isNotFile = !(await isFile(from));

    if (isNotDirectory) throw new Error(`it's not a directory`);
    if (isNotFile) throw new Error(`it's not a file`);

    const pathToFile = resolve(from);
    const { name, ext } = parse(pathToFile);

    if (!ext.includes('.br')) throw Error('invalid file extention');
    const pathToDestination = resolve(to, name);

    const readableStream = createReadStream(pathToFile);
    const writableStream = createWriteStream(pathToDestination);
    const brotliCompress = zlib.createBrotliDecompress();
    await pipeline(readableStream, brotliCompress, writableStream);
    showCurrentPosition();
  } catch (err) {
    errorMessage(err);
  }
};
