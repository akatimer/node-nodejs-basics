import { existsSync, writeFileSync } from 'fs';
import { join } from 'path';

const create = async () => {
    const filePath = join('files', 'fresh.txt');
  
    try {
      if (existsSync(filePath)) {
        throw new Error('FS operation failed');
      }
  
      writeFileSync(filePath, 'I am fresh and young');
  
      console.log('File created', filePath);
    } catch (error) {
      console.error(error.message);
    }
};

await create();