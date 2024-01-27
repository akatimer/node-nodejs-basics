import fs from 'fs/promises';

const list = async () => {

  try {
    const folderPath = 'files';
    const files = await fs.readdir(folderPath);

    console.log('List of "files":');
    files.forEach((file) => {
      console.log(file);
    });
  } catch (error) {

    throw new Error(`FS operation failed!`);
  }
}

await list();