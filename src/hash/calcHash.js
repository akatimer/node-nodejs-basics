import { createReadStream } from 'fs';
import { createHash } from 'crypto';
import path from 'path';
import url from 'url';

const calculateHash = async () => {
    const currentFileUrl = import.meta.url;
    const currentDir = path.dirname(url.fileURLToPath(currentFileUrl));
    const dirPath = path.join(currentDir, 'files');
    const currentFilePath = path.join(dirPath, 'fileToCalculateHashFor.txt');

    return new Promise((resolve, reject) => {
        const hash = createHash('sha256');
        const readStream = createReadStream(currentFilePath);
    
        readStream.on('data', (chunk) => {
          hash.update(chunk);
        });
    
        readStream.on('end', () => {
          const hashResult = hash.digest('hex');
          console.log(hashResult);
          resolve(hashResult);
        });
    
        readStream.on('error', (error) => {
          reject(error);
        });
      });
};

await calculateHash();