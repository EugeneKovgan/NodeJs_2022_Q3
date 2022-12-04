const parseEnv = () => {
  const rssVar = Object.entries(process.env).reduce((acc, [key, val]) => {
    if (key.startsWith('RSS_')) acc.push(`${key}=${val}`);
    return acc;
  }, []);
  console.log(rssVar.join('; '));
};

parseEnv();
