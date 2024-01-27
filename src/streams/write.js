import path from 'path';
import url from 'url';
import { createWriteStream } from 'fs';

const write = async () => {
  const currentFileUrl = import.meta.url;
  const currentDir = path.dirname(url.fileURLToPath(currentFileUrl));
  const dirPath = path.join(currentDir, 'files');
  const currentFilePath = path.join(dirPath, 'fileToWrite.txt');

  return new Promise((resolve, reject) => {
    const writeStream = createWriteStream(currentFilePath, { encoding: 'utf-8' });
    
    process.stdin.pipe(writeStream);
    
    process.stdin.on('end', () => {
      resolve();
    });
    
    writeStream.on('error', (error) => {
      reject(error);
    });
  });
};

await write();