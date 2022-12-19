export const errorMessage = (err) => {
  if (err) {
    console.log(`FS operation failed\n(${err})\n`);
  } else {
    console.log(`FS operation failed\n`);
  }
};
