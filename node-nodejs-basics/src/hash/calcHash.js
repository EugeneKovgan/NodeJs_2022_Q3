import * as fs from 'fs/promises';
import path from 'path';
import { getFullPath } from '../fs/common/getFullPath.js';
import { createHmac } from 'crypto';

const calculateHash = async () => {
  const { __dirname } = getFullPath(import.meta.url);
  const pathToFile = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');
  try {
    const contentFromFile = await fs.readFile(pathToFile, { encoding: 'utf-8' });
    const hash = createHmac('sha256', contentFromFile).digest('hex');
    console.log(hash);
  } catch (error) {
    throw new Error(error);
  }
};

await calculateHash();
