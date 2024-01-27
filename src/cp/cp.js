import path from 'path';
import { spawn } from 'child_process';
import url from 'url';


const spawnChildProcess = async (args) => {
  const currentFileUrl = import.meta.url;
  const currentDir = path.dirname(url.fileURLToPath(currentFileUrl));
  const dirPath = path.join(currentDir, 'files');
  const cModule = path.join(dirPath, 'script.js');

  const childProcess = spawn('node', [cModule, ...args])

  process.stdin.pipe(childProcess.stdin);
  childProcess.stdout.pipe(process.stdout);
};

spawnChildProcess([2, 5, 'c', 4, 'd']);
