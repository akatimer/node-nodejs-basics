import path from 'path';
import url from 'url';
import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';

const compress = async () => {
  const currentFileUrl = import.meta.url;
  const currentDir = path.dirname(url.fileURLToPath(currentFileUrl));
  const dirPath = path.join(currentDir, 'files');
  const currentFilePath = path.join(dirPath, 'fileToCompress.txt');
  const archiveFilePath = path.join(dirPath, 'archive.gz');
  
  return new Promise((resolve, reject) => {
    const readStream = createReadStream(currentFilePath);
    const writeStream = createWriteStream(archiveFilePath);
    const gzip = createGzip();
    
    readStream.pipe(gzip).pipe(writeStream);
    
    readStream.on('error', (error) => {
      reject(error);
    });
    
    writeStream.on('finish', () => {
      resolve();
    });
    
    writeStream.on('error', (error) => {
      reject(error);
    });
  });
}

await compress();