import fs from 'fs';
import path from 'path';
import { errorMessage } from './common/errorMessage.js';
import { getFullPath } from './common/getFullPath.js';

const create = async () => {
  const { __dirname } = getFullPath(import.meta.url);
  await fs.writeFile(path.join(__dirname, 'files', 'fresh.txt'), 'I am fresh and young', { flag: 'wx' }, (error) => {
    console.log(__dirname);
    if (error) throw new Error(errorMessage);
  });
};
await create();
