
const {runFixture} = require('../helpers');
const { assert } = require('chai');
const createVast = require('../../lib');

const testOptions = {
  throwOnError: true,
  logWarn: false
}

describe('VAST3', () => {
  it('should generate a minimal valid VAST', () => {
    const vast = createVast.v3(testOptions);
    vast
      .attachAd()
      .attachInLine()
      .addAdSystem('test ad system')
      .addAdTitle('test title')
      .addImpression('impression url')
      .attachCreatives()
      .attachCreative()
      .attachLinear()
      .addDuration('00:00:00')
      .attachMediaFiles()
      .attachMediaFile('mediafile url', {
        delivery: 'progressive',
        type: 'video/mp4',
        width: '800',
        height: '600',
      })

    assert.isTrue(vast.validate(), 'vast is invalid');
    runFixture(vast.toXml(), 'v3', 'minimal_vast');
  });
  it('should throw if missing elements', () => {
    const vast = createVast.v3(testOptions);
    assert.throws(() => vast.validate(), /At least one child of "Ad" is needed below "VAST"/);
    const Ad = vast.attachAd();
    assert.throws(() => vast.validate(), /One child of "InLine,Wrapper" is needed below "Ad"/);
    const InLine = Ad.attachInLine();
    assert.throws(() => vast.validate(), /Tag "AdSystem" not found below "InLine"/);
    const AdSystem = InLine.attachAdSystem();
    assert.throws(() => vast.validate(), /No content found in "AdSystem"/);
    AdSystem.content = 'ok';
    assert.throws(() => vast.validate(), /Tag "AdTitle" not found below "InLine"/);
    const AdTitle = InLine.attachAdTitle();
    assert.throws(() => vast.validate(), /No content found in "AdTitle"/);
    AdTitle.content = 'ok';
    assert.throws(() => vast.validate(), /Tag "Creatives" not found below "InLine"/);
    const Creatives = InLine.attachCreatives();
    assert.throws(() => vast.validate(), /At least one child of "Creative" is needed below "Creatives"/);
    const Creative = Creatives.attachCreative();
    assert.throws(() => vast.validate(), /One child of "Linear,CompanionAds,NonLinearAds" is needed below "Creative"/);
    const Linear = Creative.attachLinear();
    assert.throws(() => vast.validate(), /Tag "Duration" not found below "Linear"/);
    const Duration = Linear.attachDuration();
    assert.throws(() => vast.validate(), /No content found in "Duration"/);
    Duration.content = 'ok';
    assert.throws(() => vast.validate(), /Tag "MediaFiles" not found below "Linear"/);
    const MediaFiles = Linear.attachMediaFiles();
    assert.throws(() => vast.validate(), /At least one child of "MediaFile" is needed below "MediaFiles"/);
    const MediaFile = MediaFiles.attachMediaFile();
    assert.throws(() => vast.validate(), /No content found in "MediaFile"/);
    MediaFile.content = 'ok';
    assert.throws(() => vast.validate(), /Required attribute "delivery" not found in "MediaFile" Tag/);
    MediaFile.attrs.delivery = 'ko';
    assert.throws(() => vast.validate(), /Required attribute "delivery" in "MediaFile" has incorrect value/);
    MediaFile.attrs.delivery = 'streaming';
    assert.throws(() => vast.validate(), /Required attribute "type" not found in "MediaFile" Tag/);
    MediaFile.attrs.type = 'type';
    assert.throws(() => vast.validate(), /Required attribute "width" not found in "MediaFile" Tag/);
    MediaFile.attrs.width = '3';
    assert.throws(() => vast.validate(), /Required attribute "height" not found in "MediaFile" Tag/);
    MediaFile.attrs.height = '3';
    assert.throws(() => vast.validate(), /At least one child of "Impression" is needed below "InLine"/);
    const Impression = InLine.attachImpression();
    assert.throws(() => vast.validate(), /No content found in "Impression"/);
    Impression.content = 'ok';
    assert.isTrue(vast.validate());
  });
});