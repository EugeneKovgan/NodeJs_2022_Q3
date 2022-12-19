import * as fs from 'fs/promises';
import { resolve } from 'path';
import { createHash } from 'node:crypto';
import { errorMessage } from './common/errorMessage.js';

export const hash = async (filePath) => {
  try {
    const data = await fs.readFile(resolve(filePath));
    const hash = createHash('sha256').update(data).digest('hex');
    console.log(hash);
  } catch (err) {
    errorMessage(err);
  }
};
