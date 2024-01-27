import { existsSync, mkdirSync, readdirSync, copyFileSync } from 'fs';
import { join } from 'path';

const copy = async () => {

  try {

    if (!existsSync('files')) {
      throw new Error('FS operation failed!');
    }

    if (existsSync('files_copy')) {
      throw new Error('FS operation failed!');
    }

    mkdirSync('files_copy');

    const files = readdirSync('files');

    files.forEach((file) => {
      const source = join('files', file);
      const destination = join('files_copy', file);

      copyFileSync(source, destination);

      console.log('File copied!', destination);
    });

    console.log('Folder copied!', 'files_copy');
  } catch (error) {

    console.error(error.message);
  }
}


await copy();
