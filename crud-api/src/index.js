import * as fs from 'fs';
import * as path from 'path';
console.log(fs.Stats);

fs.mkdir(path.join(__dirname, 'notes'), (err) => {
  if (err) throw new Error(err);

  console.log('folder new');
});
