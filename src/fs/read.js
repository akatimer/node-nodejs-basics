import path from 'path';
import url from 'url';
import fs from 'fs/promises';

const read = async () => {
  const fileName = 'fileToRead.txt';

    try {
      const currentFileUrl = import.meta.url;
      const currentDir = path.dirname(url.fileURLToPath(currentFileUrl));
      const dirPath = path.join(currentDir, 'files');
      const filePath = path.join(dirPath, fileName);
      const content = await fs.readFile(filePath, 'utf-8');
  
      console.log(`Content of ${fileName}:`);
      console.log(content);
    } catch (error) {
      console.error(error.message);
    }
}

await read();