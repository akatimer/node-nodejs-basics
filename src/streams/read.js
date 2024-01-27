import path from 'path';
import url from 'url';
import { createReadStream } from 'fs';

const read = async () => {
  const currentFileUrl = import.meta.url;
  const currentDir = path.dirname(url.fileURLToPath(currentFileUrl));
  const dirPath = path.join(currentDir, 'files');
  const currentFilePath = path.join(dirPath, 'fileToRead.txt');

  return new Promise((resolve, reject) => {
    const readStream = createReadStream(currentFilePath, { encoding: 'utf-8' });
    
    readStream.on('data', (chunk) => {
      process.stdout.write(chunk);
    });
    
    readStream.on('end', () => {
      resolve();
    });
    
    readStream.on('error', (error) => {
      reject(error);
    });
  });
}


await read();