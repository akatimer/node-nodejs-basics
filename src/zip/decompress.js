import path from 'path';
import url from 'url';
import { createReadStream, createWriteStream } from 'fs';
import { createGunzip } from 'zlib';

const decompress = async () => {
  const currentFileUrl = import.meta.url;
  const currentDir = path.dirname(url.fileURLToPath(currentFileUrl));
  const dirPath = path.join(currentDir, 'files');
  const decompressFilePath = path.join(dirPath, 'fileToCompress.txt');
  const archiveFilePath = path.join(dirPath, 'archive.gz');
  
  return new Promise((resolve, reject) => {
    const readStream = createReadStream(archiveFilePath);
    const writeStream = createWriteStream(decompressFilePath);
    const gunzip = createGunzip();
    
    readStream.pipe(gunzip).pipe(writeStream);
    
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

await decompress();