const parseArgs = () => {
  const [path, file, ...rest] = process.argv;
  const result = [];

  rest.forEach((val, ind, arr) => {
    if (val.startsWith('--') && !arr[ind + 1].startsWith('--') && ind + 1 < arr.length) {
      result.push(`${val} is ${arr[ind + 1]}`);
    }
  });
  console.log(result.join(', '));
};

parseArgs();
