import { createReadStream, createWriteStream } from 'fs';
import path from 'path';
import { pipeline } from 'stream/promises';
import * as zlib from 'zlib';
import { getFullPath } from '../fs/common/getFullPath.js';

const decompress = async () => {
  const { __dirname } = getFullPath(import.meta.url);
  const pathToFile = path.join(__dirname, 'files');

  try {
    const currentPath = path.join(pathToFile, 'archive.gz');
    const newPath = path.join(pathToFile, 'fileToCompress.txt');
    const unzip = zlib.createGunzip();

    await pipeline(createReadStream(currentPath), unzip, createWriteStream(newPath));
  } catch (error) {
    throw new Error(error);
  }
};

await decompress();
