const fs = require('fs');
const dotenv = require('dotenv');

const buildDotenvResultFile = () => {
  createEnvLocalIfNecessary();
  createEnvDevIfNecessary()

  const baseEnv = dotenv.parse(fs.readFileSync('./env/.env.base'));
  const devEnv = dotenv.parse(fs.readFileSync('./env/.env.dev'));
  const localEnv = dotenv.parse(fs.readFileSync('./env/.env.local'));

  const nodeEnv = process.env.NODE_ENV || 'development';

  let resultEnv = baseEnv;
  resultEnv = nodeEnv === 'local' ? { ...resultEnv, ...localEnv } : resultEnv;
  resultEnv = nodeEnv === 'development' ? { ...resultEnv, ...devEnv } : resultEnv;

  const resultFilePayload = buildFilePayloadFromObject(resultEnv);
  fs.writeFileSync('./.env', `#THIS FILE IS AUTO GENERATED DO NOT TOUCH IT.\n#OVERRIDE VARIABLES IN ./env/.env.local FILE\n\n${resultFilePayload}`);

  console.info(`Dotenv file was generated in ${nodeEnv} mode\n\n${resultFilePayload}`);
}

const buildFilePayloadFromObject = (environmentsObject) => {
  let resultFilePayload = '';

  for (const key in environmentsObject) {
    const newLine = `${key}=${environmentsObject[key]}\n`;
    resultFilePayload += newLine;
  }

  return resultFilePayload;
};

const createEnvLocalIfNecessary = () => {
  if (fs.existsSync('./env/.env.local')) {
    return;
  }

  const filePayload = '#LOCAL ENVIRONMENTS OVERRIDING\n\n';
  fs.writeFileSync('./env/.env.local', filePayload);
};

const createEnvDevIfNecessary = () => {
  if (fs.existsSync('./env/.env.dev')) {
    return;
  }

  const filePayload = '#DEV ENVIRONMENTS OVERRIDING\n\n';
  fs.writeFileSync('./env/.env.dev', filePayload);
};

module.exports = { buildDotenvResultFile }
