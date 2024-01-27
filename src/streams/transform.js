import { Transform, pipeline } from 'stream';

const reverseTransform = new Transform({
    transform(chunk, encoding, callback) {
      const reversedChunk = chunk.toString().split('').reverse().join('');
      this.push(reversedChunk);
      callback(null,'\n');
    },
  });

  const cliIn = process.stdin;
  const cliOut = process.stdout;

const transform = async () => {
 pipeline(
    cliIn,
    reverseTransform,
    cliOut,
    (error) => console.error(error)
 )
};

await transform();