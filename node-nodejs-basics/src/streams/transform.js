import * as stream from 'stream';
import { EOL } from 'os';

const transform = async () => {
  const reversedStream = new stream.Transform({
    transform(chunk, encoding, callback) {
      callback(null, chunk.toString().replace(EOL, '').split('').reverse().join('') + EOL);
    },
  });

  stream.pipeline(process.stdin, reversedStream, process.stdout, (error) => {
    throw new Error(error);
  });
};

await transform();
