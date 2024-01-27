import path from 'path';
import fs from 'fs/promises';
import url from 'url';

const rename = async () => {
    const currentFileName = 'wrongFilename.txt';
    const newFileName = 'properFilename.md';

  try {
    const currentFileUrl = import.meta.url;
    const currentDir = path.dirname(url.fileURLToPath(currentFileUrl));
    const dirPath = path.join(currentDir, 'files');
    const currentFilePath = path.join(dirPath, currentFileName);
    const newFilePath = path.join(dirPath, newFileName);

    await fs.rename(currentFilePath, newFilePath);

    console.log('File renamed successfully!');
  } catch {
    throw new Error(`FS operation failed!`);
  }
};

await rename();