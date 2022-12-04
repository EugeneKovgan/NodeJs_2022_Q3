import path from 'path';
import { fileURLToPath } from 'node:url';

export const getFullPath = (url) => {
  const __filename = fileURLToPath(url);
  const __dirname = path.dirname(__filename);

  return { __filename, __dirname };
};
