import { createReadStream } from 'fs';
import path from 'path';
import { getFullPath } from '../fs/common/getFullPath.js';

const read = async () => {
  const { __dirname } = getFullPath(import.meta.url);
  const pathToFile = path.join(__dirname, 'files', 'fileToRead.txt');

  try {
    const readStream = createReadStream(pathToFile, 'utf-8');
    await readStream.pipe(process.stdout);
  } catch (error) {
    throw new Error(error);
  }
};

await read();
