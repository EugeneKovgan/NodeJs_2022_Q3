import { Worker, workerData } from 'worker_threads';
import { cpus } from 'os';
import path from 'path';
import { getFullPath } from '../fs/common/getFullPath.js';

const performCalculations = async () => {
  const { __dirname } = getFullPath(import.meta.url);
  const pathToFile = path.join(__dirname, 'worker.js');

  const cp = cpus();
  let countOfCPU = 10;
  console.log(__dirname);
  console.log(pathToFile);

  const workersRes = await Promise.allSettled(
    cp.map(() => {
      return new Promise((resolve, reject) => {
        const worker = new Worker(pathToFile, {
          workerData: countOfCPU++,
        });
        worker.on('message', (message) => resolve(message));
        worker.on('error', (message) => reject(message));
      });
    })
  );
  const finalResult = workersRes.map(({ status, value }) => ({
    status: status === 'fulfilled' ? 'resolved' : 'error',
    data: status === 'fulfilled' ? value : null,
  }));

  console.log(finalResult);
  return finalResult;
};

await performCalculations();
