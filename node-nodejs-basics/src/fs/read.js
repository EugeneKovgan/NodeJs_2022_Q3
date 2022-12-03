import fs from 'fs';
import { errorMessage } from './common/errorMessage.js';

const read = async () => {
  await fs.readFile('./files/fileToRead.txt', (error, data) => {
    if (error) {
      console.log(errorMessage);
    } else {
      console.log(data.toString());
    }
  });
};

await read();
