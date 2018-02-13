
const memwatch = require('memwatch-next');

memwatch.on('leak', function (info) {
  console.err('memory leak detected');
  throw new Error(info);
  process.exit(42);
});

const { generateMinimalVast } = require('./helpers');

for (let i = 0; i < 20000; i++) {
  const vast = generateMinimalVast();
  vast.toXml();
}

process.exit(0);