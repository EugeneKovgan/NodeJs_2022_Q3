import { createWriteStream } from 'fs';
import path from 'path';
import { getFullPath } from '../fs/common/getFullPath.js';

const write = async () => {
  const { __dirname } = getFullPath(import.meta.url);
  const pathToFile = path.join(__dirname, 'files', 'fileToWrite.txt');

  try {
    await process.stdin.pipe(createWriteStream(pathToFile));
  } catch (error) {
    throw new Error(error);
  }
};

await write();
