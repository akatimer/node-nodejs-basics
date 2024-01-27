import { existsSync, unlinkSync } from 'fs';
import path, { join } from 'path';
import url from 'url';
import fs from 'fs/promises';

const remove = async () => {

  try {
    const currentFileUrl = import.meta.url;
    const currentDir = path.dirname(url.fileURLToPath(currentFileUrl));
    const dirPath = path.join(currentDir, 'files');

    const filePath = path.join(dirPath, 'fileToRemove.txt');

    await fs.unlink(filePath);

    console.log('File deleted!', 'fileToRemove.txt');
  } catch {
    throw new Error(`FS operation failed!`);
  } 
};

await remove();