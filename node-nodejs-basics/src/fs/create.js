import fs from 'fs';
import path from 'path';
import { errorMessage } from './common/errorMessage.js';

const create = async () => {
  await fs.writeFile(path.join('./files/', 'fresh.txt'), 'I am fresh and young', { flag: 'wx' }, (error) => {
    if (error) console.log(errorMessage);
  });
};
await create();
