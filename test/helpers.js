
const fs = require('fs-extra');
const path = require('path');
const diff = require('jest-diff');
const { NO_DIFF_MESSAGE } = require('jest-diff/build/constants');
const createVast = require('../lib/index');

function assertEqual(base, expected) {
  const out = diff(base.trim(), expected.trim());
  if (out !== NO_DIFF_MESSAGE) {
    throw new Error('\n' + out);
  }
}

function runFixture(toCompare, version, fixtureName) {
  // return;

  const fixtureFile = path.join(__dirname, version, 'fixtures', fixtureName + '.xml');

  let expectedResponse;
  try {
    expectedResponse = fs.readFileSync(path.join(fixtureFile), 'utf8');
  } catch (e) {
    console.log('Didnt find expected resources, create it from received resources');
    expectedResponse = toCompare;
    fs.writeFileSync(path.join(fixtureFile), expectedResponse);
  }

  assertEqual(toCompare, expectedResponse);
}

function generateMinimalVast() {
  const vast = createVast.v2()
    .attachAd({id: 'identifier'})
    .attachInLine()
    .addImpression('imp_link')
    .addAdSystem('Society')
    .addAdTitle('Title')
    .attachCreatives()
    .attachCreative()
    .attachLinear()
    .addDuration('00:30:00')
    .attachMediaFiles()
    .attachMediaFile('my_video', {
      delivery: 'streaming',
      type: 'video/mp4',
      width: '600',
      height: '400'
    });
  return vast;
}

module.exports = {
  runFixture,
  generateMinimalVast
};