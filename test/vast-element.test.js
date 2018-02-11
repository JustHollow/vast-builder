
// const { runFixture } = require('../helpers');
const { assert } = require('chai');
const VastElement = require('../lib/vast-element');

const testOptions = {
  throwOnError: true,
  logWarn: false
}

let vast;
describe('VAST Element', () => {
  beforeEach(() => {
    vast = new VastElement();
    vast.parseOptions(testOptions);
  });
  it('should return the vast version', () => {
    // vast.att
  });
  it('should create a valid VastElement', () => {
  });
});