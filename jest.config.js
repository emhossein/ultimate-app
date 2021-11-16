// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  verbose: true,
};

module.exports = config;

// Or async function
module.exports = async () => {
  return {
    verbose: true,
    snapshotSerializers: [
      '@emotion/jest/serializer' /* if needed other snapshotSerializers should go here */,
    ],
    testURL: 'http://localhost/',
  };
};
