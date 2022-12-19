export const checkEnterArguments = (arg) => {
  const parameters = ['--EOL', '--cpus', '--homedir', '--architecture', '--username'];
  if (parameters.includes(arg)) return true;
  return false;
};
