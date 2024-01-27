import path from 'path';
import url from 'url';
import { createServer as createServerHttp } from 'http';
import { release, version } from 'os';
import './files/c.js';
import { createRequire } from 'module';

const fileName = url.fileURLToPath(import.meta.url);
const dir = path.dirname(fileName);

const req = createRequire(import.meta.url);
const separator = path.sep;
const random = Math.random();

let unknownObject = 
  random > 0.5 
  ? req('./files/a.json')
  : req('./files/b.json');

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${separator}"`);

console.log(`Path to current file is ${fileName}`);
console.log(`Path to current directory is ${dir}`);

const myServer = createServerHttp((_, res) => {
  res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log('To terminate it, use Ctrl+C combination');
});

export { unknownObject, myServer };
