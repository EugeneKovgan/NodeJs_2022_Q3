import fs from 'fs';
import path from 'path';
import { errorMessage } from './common/errorMessage.js';
import { getFullPath } from './common/getFullPath.js';

const read = async () => {
  const { __dirname } = getFullPath(import.meta.url);
  await fs.readFile(path.join(__dirname, 'files', 'fileToRead.txt'), (error, data) => {
    if (error) {
      throw new Error(errorMessage);
    } else {
      console.log(data.toString());
    }
  });
};

await read();
