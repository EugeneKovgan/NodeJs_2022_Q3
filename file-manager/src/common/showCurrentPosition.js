import { cwd } from 'process';

export const showCurrentPosition = () => {
  const fullPath = cwd();
  console.log(`You are here ${fullPath}`);
};
