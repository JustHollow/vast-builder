
// const { runFixture } = require('../helpers');
const chai = require('chai');
const assert = chai.assert;
const sinonChai = require('sinon-chai');
chai.use(sinonChai);
const sinon = require('sinon');

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
  it('should assert object has attrs ', () => {
    assert.equal(vast.hasAttrs(), false);
  });
  it('should assert object has attrs ', () => {
    vast = new VastElement('name', null, {}, {cool:'ok'});
    assert.equal(vast.hasAttrs(), true);
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
  it('should correctly return childs filtered by name', () => {
    vast = new VastElement('name', null, { attrs: ['foo', 'bar'] }, { bar: '33', cool: 'ok' });
    vast.parseOptions(testOptions);
    assert.deepEqual(vast.getAttrs('all'), { bar: '33' });
  });
  it('should correctly return itself', () => {
    const whoAmI = vast.and();
    const whoAmI2 = vast.back();
    assert.deepEqual(whoAmI, vast);
    assert.deepEqual(whoAmI2, vast);
  });
  it('should correctly return parent', () => {
    const parentParent = new VastElement('name', null);
    const parent = new VastElement('name', parentParent);
    const vast = new VastElement('name', parent);
    const whoAmI = vast.and();
    const whoAmI2 = vast.back();
    assert.deepEqual(whoAmI, parent);
    assert.deepEqual(whoAmI2, parentParent);
  });
  it('should correctly return root', () => {
    const parentParent = new VastElement('name', null);
    const parent = new VastElement('name', parentParent);
    const vast = new VastElement('name', parent);
    assert.deepEqual(vast.getRoot(), parentParent);
  });
  // internal test
  it('should correctly return json trace', () => {
    vast.parseOptions({
      cdata: false
    });
    vast.dangerouslyAddCustomTag('test1', { id: 11 })
      .dangerouslyAttachCustomTag('test2', 'content2')
      .dangerouslyAttachCustomTag('test3', 'content3', { id: 33 }).cdata();

    const expected = {
      test1: [{
        _attributes: {
          id: 11
        }
      }],
      test2: [{
        _text: "content2",
        test3: [{
          _attributes: {
            id: 33
          },
          _cdata: "content3"
        }]
      }]
    };
    assert.deepEqual(vast.getJson(), expected);
  });
  it('should return the vast version', () => {
    vast.dangerouslyAddCustomTag('VAST', { version: 44 });
    assert.equal(vast.getVastVersion(), 44);
  });
  it('should return the vast code', () => {
    vast.dangerouslyAddCustomTag('VAST', 'content', { version: 44 });
    assert.isTrue(vast.toXml().indexOf('<VAST version="44"><![CDATA[content]]></VAST>') !== -1);
  });
  it('should return the vast code without cdata config', () => {
    vast.parseOptions({ cdata: false });
    vast.dangerouslyAddCustomTag('VAST', 'content', { version: 44 });
    assert.isTrue(vast.toXml().indexOf('<VAST version="44">content</VAST>') !== -1);
  });
  it('should return the vast code with forced cdata by attribute', () => {
    vast.parseOptions({ cdata: false });
    vast.dangerouslyAttachCustomTag('VAST', 'content', { version: 44 }).cdata();
    assert.isTrue(vast.toXml().indexOf('<VAST version="44"><![CDATA[content]]></VAST>') !== -1);
  });
  it('should return the vast code with cdata forced recursively', () => {
    vast.parseOptions({ cdata: false });
    vast.dangerouslyAddCustomTag('VAST', 'content', { version: 44 }).cdata();
    assert.isTrue(vast.toXml().indexOf('<VAST version="44"><![CDATA[content]]></VAST>') !== -1);
  });
  it('should print a warning if trying to put cdata directly', () => {
    const stub = sinon.stub(VastElement.prototype, 'warn');
    vast = new VastElement('test', null, {}, '<![CDATA[content]]>');
    vast.parseOptions(testOptions);
    assert.isTrue(stub.called);
    assert.isTrue(stub.calledWith('dont put CDATA item in content, use .cdata() instead'));
    stub.restore();
  });
  it('should print a warning', () => {
    const stubWarn = sinon.stub(console, 'warn');
    const stubError = sinon.stub(console, 'error');

    vast.parseOptions({
      logWarn: true
    });
    vast.warn('something');
    vast.err('something');
    assert.isTrue(stubWarn.called);
    assert.isTrue(stubWarn.calledWithMatch('something'));
    assert.isTrue(stubError.called);
    assert.isTrue(stubError.calledWithMatch('something'));

    stubWarn.restore();
    stubError.restore();
  });
  it('should validate on build', () => {
    const stub = sinon.stub(VastElement.prototype, 'validate');
    vast.parseOptions({
      validateOnBuild: true
    });
    vast.toXml();
    assert.isTrue(stub.called);
    stub.restore();
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