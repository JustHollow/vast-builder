
const fs = require('fs-extra');
const path = require('path');
const diff = require('jest-diff');
const { NO_DIFF_MESSAGE } = require('jest-diff/build/constants');
const createVast = require('../lib/index');
const createVastCompat = require('../lib/index').compat();
const nodeVersion = require('node-version');

const currentNodeVersion = nodeVersion.major;

function assertEqual(base, expected) {
  const out = diff(base.trim(), expected.trim());
  if (out !== NO_DIFF_MESSAGE) {
    throw new Error('\n' + out);
  }
}

function createTestVast(version, options = {}) {
  if (currentNodeVersion < 8) {
    if (version === 2) {
      return createVastCompat.v2(options);
    } else if (version === 3) {
      return createVastCompat.v3(options);
    } else if (version === 4) {
      return createVastCompat.v4(options);
    }
  } else {
    if (version === 2) {
      return createVast.v2(options);
    } else if (version === 3) {
      return createVast.v3(options);
    } else if (version === 4) {
      return createVast.v4(options);
    }
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
  const vast = createTestVast(2)
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
  createTestVast,
  generateMinimalVast
};