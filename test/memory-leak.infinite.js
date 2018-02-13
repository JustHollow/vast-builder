
const memwatch = require('memwatch-next');

memwatch.on('leak', function (info) {
  console.err('memory leak detected');
  throw new Error(info);
  process.exit(42);
});

const { generateMinimalVast } = require('./helpers');

while (true) {
  const vast = generateMinimalVast();
  vast.validate();
  vast.toXml();
}