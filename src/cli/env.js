const parseEnv = () => {
  const variables = process.env;
  const rssVariables = Object.entries(variables)
    .filter(([v]) => v.startsWith('RSS_'))
    .map(([key, value]) => `${key}=${value}`)
    .join('; ');

  console.log('Environment variables with RSS_ prefix:');
  console.log(rssVariables);
};

parseEnv();