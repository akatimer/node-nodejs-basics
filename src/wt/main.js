import { Worker } from 'worker_threads';
import path from 'path';
import { availableParallelism } from 'os';
import url from 'url';

const start = 10;
const currentFileUrl = import.meta.url;
const currentDir = path.dirname(url.fileURLToPath(currentFileUrl));
const workerPath = path.join(currentDir, 'worker.js');

const fibonachiWorkerService = (number) => new Promise (resolve => {
  const worker = new Worker(workerPath, {workerData: number});
  worker.on('message', data => resolve ({
    status: 'resolved',
    data
  }));
  worker.on('error', data => resolve ({
    status: 'error',
    data: null
  }));
})

const performCalculations = async () => {
  const work = Array.from({length: availableParallelism()}, (_, i) => fibonachiWorkerService(start + i));
  const result = await Promise.all(work);
  console.log(result);
};

await performCalculations();