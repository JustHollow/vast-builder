
const fs = require('fs-extra');
const path = require('path');
const diff = require('jest-diff');
const { NO_DIFF_MESSAGE } = require('jest-diff/build/constants');

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

module.exports = {
  runFixture
};