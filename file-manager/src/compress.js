import { createReadStream, createWriteStream } from 'fs';
import { resolve, parse } from 'path';
import { showCurrentPosition } from './common/showCurrentPosition.js';
import * as zlib from 'zlib';
import { errorMessage } from './common/errorMessage.js';
import { pipeline } from 'stream';
import { isFile } from './common/isFile.js';
import { isDirectory } from './common/isDirectory.js';
export const compress = async (from, to) => {
  try {
    const isNotDirectory = !(await isDirectory(to));
    const isNotFile = !(await isFile(from));

    if (isNotDirectory) throw new Error(`it's not a directory`);
    if (isNotFile) throw new Error(`it's not a file`);

    const pathToFile = resolve(from);
    const { base } = parse(pathToFile);
    const fileName = `${base}.br`;
    const pathToDestination = resolve(to, fileName);

    const readableStream = createReadStream(pathToFile);
    const writableStream = createWriteStream(pathToDestination);
    const brotliCompress = zlib.createBrotliCompress();
    await pipeline(readableStream, brotliCompress, writableStream);
    showCurrentPosition();
  } catch (err) {
    errorMessage(err);
  }
};
