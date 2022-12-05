import { Worker } from 'worker_threads';
import { cpus } from 'os';

const performCalculations = async () => {
  console.log(cpus());
};

await performCalculations();
