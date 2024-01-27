const parseArgs = () => {
  const args = process.argv.slice(2);
  for (let i = 0; i < args.length; i += 2) {
    const name = args[i].replace(/^--/, '');
    const val = args[i + 1];

    console.log(`${name} is ${val}`);
  }
};

parseArgs();