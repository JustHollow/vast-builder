
// const { runFixture } = require('../helpers');
const { assert } = require('chai');
const VastElement = require('../lib/vast-element');

const testOptions = {
  throwOnError: true,
  logWarn: false
}

// initialized just for autocomplete
let vast = new VastElement();

describe('VAST Element', () => {
  beforeEach(() => {
    vast = new VastElement();
    vast.parseOptions(testOptions);
  });
  it('should correctly create child', () => {
    vast = new VastElement('name', null, {});
    assert.isNull(vast.content);
    assert.deepEqual(vast.attrs, {});
  });
  it('should correctly create child with content', () => {
    vast = new VastElement('name', null, {}, 'content');
    assert.equal(vast.content, 'content');
    assert.deepEqual(vast.attrs, {});
  });
  it('should correctly create child with attributes', () => {
    vast = new VastElement('name', null, {}, {cool:'ok'});
    assert.isNull(vast.content);
    assert.deepEqual(vast.attrs, { cool: 'ok' });
  });
  it('should correctly create child with attributes', () => {
    vast = new VastElement('name', null, {}, 'content', {cool:'ok'});
    assert.equal(vast.content, 'content');
    assert.deepEqual(vast.attrs, { cool: 'ok' });
  });
  it('should correctly create child with infos on fields', () => {
    vast = new VastElement('name', null, {attrs:['foo', 'bar']});
    assert.deepEqual(vast.infos.attrs, ['foo', 'bar']);
  });
  it('should correctly return all attrs', () => {
    vast = new VastElement('name', null, { attrs: 'all' }, {cool:'ok'});
    assert.deepEqual(vast.getAttrs('all'), { cool: 'ok' });
  });
  it('should correctly return only valid attrs', () => {
    vast = new VastElement('name', null, { attrs: ['foo', 'bar'] }, { bar: '33', cool: 'ok' });
    vast.parseOptions(testOptions);
    assert.deepEqual(vast.getAttrs('all'), { bar: '33' });
  });
  it('should correctly return only valid attrs', () => {
    vast = new VastElement('name', null, { attrs: ['foo', 'bar'] }, { bar: '33', cool: 'ok' });
    vast.parseOptions(testOptions);
    assert.deepEqual(vast.getAttrs('all'), { bar: '33' });
  });
// TODO getChilds
// TODO getRoot
// TODO getJson

  it('should return the vast version', () => {
    vast.dangerouslyAddCustomTag('VAST', { version: 44 });
    assert.equal(vast.getVastVersion(), 44);
  });
  it('should return the vast code', () => {
    vast.dangerouslyAddCustomTag('VAST', 'content', { version: 44 });
    assert.isTrue(vast.toXml().indexOf('<VAST version="44"><![CDATA[content]]></VAST>') !== -1);
  });
  // TODO this one is not passing :
  it('should return the vast code without cdata config', () => {
    vast.dangerouslyAddCustomTag('VAST', 'content', { version: 44 });
    vast.parseOptions({ cdata: false });
    // console.log(vast.toXml());
    assert.isTrue(vast.toXml().indexOf('<VAST version="44">content</VAST>') !== -1);
  });
  it('should return the vast code with forced cdata by attribute', () => {
    vast.dangerouslyAddCustomTag('VAST', 'content', { version: 44 });
    vast.parseOptions({ cdata: false });
    assert.isTrue(vast.cdata().toXml().indexOf('<VAST version="44"><![CDATA[content]]></VAST>') !== -1);
  });

  it('should correctly parse options', () => {
    vast.parseOptions({
      cdata: false,
      logWarn: true,
      validateOnBuild: true,
      throwOnError: false,
      spaces: 24
    });
    assert.equal(vast.options.cdata, false);
    assert.equal(vast.options.logWarn, true);
    assert.equal(vast.options.validateOnBuild, true);
    assert.equal(vast.options.throwOnError, false);
    assert.equal(vast.options.spaces, 24);
  });
});