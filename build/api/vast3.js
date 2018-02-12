// @flow
// this file is generated, dont edit it

/*::
type Infos = {
  attrs?: Array<string>,
  required?: boolean,
  uniq?: boolean,
  alo?: boolean,
};
*/

const VastElement = require('../../lib/vast-element');

class Error_4 extends VastElement {
  /**
   * @param {string} n
   * @param {VAST_3} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class AdSystem_7 extends VastElement {
  /**
   * @param {string} n
   * @param {InLine_6} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class AdTitle_8 extends VastElement {
  /**
   * @param {string} n
   * @param {InLine_6} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Description_9 extends VastElement {
  /**
   * @param {string} n
   * @param {InLine_6} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Advertiser_10 extends VastElement {
  /**
   * @param {string} n
   * @param {InLine_6} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Pricing_11 extends VastElement {
  /**
   * @param {string} n
   * @param {InLine_6} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Survey_12 extends VastElement {
  /**
   * @param {string} n
   * @param {InLine_6} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Error_13 extends VastElement {
  /**
   * @param {string} n
   * @param {InLine_6} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Impression_14 extends VastElement {
  /**
   * @param {string} n
   * @param {InLine_6} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class CreativeExtension_18 extends VastElement {
  /**
   * @param {string} n
   * @param {CreativeExtensions_17} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class CreativeExtensions_17 extends VastElement {
  /**
   * @param {string} n
   * @param {Creative_16} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @returns {CreativeExtension_18} 
   */
  attachCreativeExtension(content) {
    const newElem = new CreativeExtension_18('CreativeExtension', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {CreativeExtensions_17} 
   */
  addCreativeExtension(content) {
    return this.attachCreativeExtension(content).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class AdParameters_20 extends VastElement {
  /**
   * @param {string} n
   * @param {Linear_19} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Duration_21 extends VastElement {
  /**
   * @param {string} n
   * @param {Linear_19} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class MediaFile_23 extends VastElement {
  /**
   * @param {string} n
   * @param {MediaFiles_22} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class MediaFiles_22 extends VastElement {
  /**
   * @param {string} n
   * @param {Linear_19} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @param {{id: string, delivery:("progressive"|"streaming"), type: string, bitrate: string, minBitrate: string, maxBitrate: string, width: string, height: string, scalable: string, mantainAspectRatio: string, codec: string, apiFramework: string}} attributes
   * @returns {MediaFile_23} 
   */
  attachMediaFile(content, attributes) {
    const newElem = new MediaFile_23('MediaFile', this, {"attrs":["id","delivery","type","bitrate","minBitrate","maxBitrate","width","height","scalable","mantainAspectRatio","codec","apiFramework"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{id: string, delivery:("progressive"|"streaming"), type: string, bitrate: string, minBitrate: string, maxBitrate: string, width: string, height: string, scalable: string, mantainAspectRatio: string, codec: string, apiFramework: string}} attributes
   * @returns {MediaFiles_22} 
   */
  addMediaFile(content, attributes) {
    return this.attachMediaFile(content, attributes).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Tracking_25 extends VastElement {
  /**
   * @param {string} n
   * @param {TrackingEvents_24} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class TrackingEvents_24 extends VastElement {
  /**
   * @param {string} n
   * @param {Linear_19} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @param {{event:("creativeView"|"start"|"firstQuartile"|"midpoint"|"thirdQuartile"|"complete"|"mute"|"unmute"|"pause"|"rewind"|"resume"|"fullscreen"|"exitFullscreen"|"expand"|"collapse"|"acceptInvitationLinear"|"closeLinear"|"skip"|"progress")}} attributes
   * @returns {Tracking_25} 
   */
  attachTracking(content, attributes) {
    const newElem = new Tracking_25('Tracking', this, {"attrs":["event"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{event:("creativeView"|"start"|"firstQuartile"|"midpoint"|"thirdQuartile"|"complete"|"mute"|"unmute"|"pause"|"rewind"|"resume"|"fullscreen"|"exitFullscreen"|"expand"|"collapse"|"acceptInvitationLinear"|"closeLinear"|"skip"|"progress")}} attributes
   * @returns {TrackingEvents_24} 
   */
  addTracking(content, attributes) {
    return this.attachTracking(content, attributes).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class ClickThrough_27 extends VastElement {
  /**
   * @param {string} n
   * @param {VideoClicks_26} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class ClickTracking_28 extends VastElement {
  /**
   * @param {string} n
   * @param {VideoClicks_26} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class CustomClick_29 extends VastElement {
  /**
   * @param {string} n
   * @param {VideoClicks_26} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class VideoClicks_26 extends VastElement {
  /**
   * @param {string} n
   * @param {Linear_19} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {ClickThrough_27} 
   */
  attachClickThrough(content, attributes) {
    const newElem = new ClickThrough_27('ClickThrough', this, {"attrs":["id"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {VideoClicks_26} 
   */
  addClickThrough(content, attributes) {
    return this.attachClickThrough(content, attributes).and();
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {ClickTracking_28} 
   */
  attachClickTracking(content, attributes) {
    const newElem = new ClickTracking_28('ClickTracking', this, {"attrs":["id"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {VideoClicks_26} 
   */
  addClickTracking(content, attributes) {
    return this.attachClickTracking(content, attributes).and();
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {CustomClick_29} 
   */
  attachCustomClick(content, attributes) {
    const newElem = new CustomClick_29('CustomClick', this, {"attrs":["id"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {VideoClicks_26} 
   */
  addCustomClick(content, attributes) {
    return this.attachCustomClick(content, attributes).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class StaticResource_32 extends VastElement {
  /**
   * @param {string} n
   * @param {Icon_31} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class IFrameResource_33 extends VastElement {
  /**
   * @param {string} n
   * @param {Icon_31} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class HTMLResource_34 extends VastElement {
  /**
   * @param {string} n
   * @param {Icon_31} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class IconClickThrough_36 extends VastElement {
  /**
   * @param {string} n
   * @param {IconClicks_35} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class IconClickTracking_37 extends VastElement {
  /**
   * @param {string} n
   * @param {IconClicks_35} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class IconClicks_35 extends VastElement {
  /**
   * @param {string} n
   * @param {Icon_31} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @returns {IconClickThrough_36} 
   */
  attachIconClickThrough(content) {
    const newElem = new IconClickThrough_36('IconClickThrough', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {IconClicks_35} 
   */
  addIconClickThrough(content) {
    return this.attachIconClickThrough(content).and();
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {IconClickTracking_37} 
   */
  attachIconClickTracking(content, attributes) {
    const newElem = new IconClickTracking_37('IconClickTracking', this, {"attrs":["id"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {IconClicks_35} 
   */
  addIconClickTracking(content, attributes) {
    return this.attachIconClickTracking(content, attributes).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class IconViewTracking_38 extends VastElement {
  /**
   * @param {string} n
   * @param {Icon_31} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Icon_31 extends VastElement {
  /**
   * @param {string} n
   * @param {Icons_30} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @param {{creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash")}} attributes
   * @returns {StaticResource_32} 
   */
  attachStaticResource(content, attributes) {
    const newElem = new StaticResource_32('StaticResource', this, {"attrs":["creativeType"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash")}} attributes
   * @returns {Icon_31} 
   */
  addStaticResource(content, attributes) {
    return this.attachStaticResource(content, attributes).and();
  }
  /** 
   * @param {string} content
   * @returns {IFrameResource_33} 
   */
  attachIFrameResource(content) {
    const newElem = new IFrameResource_33('IFrameResource', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {Icon_31} 
   */
  addIFrameResource(content) {
    return this.attachIFrameResource(content).and();
  }
  /** 
   * @param {string} content
   * @returns {HTMLResource_34} 
   */
  attachHTMLResource(content) {
    const newElem = new HTMLResource_34('HTMLResource', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {Icon_31} 
   */
  addHTMLResource(content) {
    return this.attachHTMLResource(content).and();
  }
  /** 
   * @returns {IconClicks_35} 
   */
  attachIconClicks() {
    const newElem = new IconClicks_35('IconClicks', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {IconViewTracking_38} 
   */
  attachIconViewTracking(content) {
    const newElem = new IconViewTracking_38('IconViewTracking', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {Icon_31} 
   */
  addIconViewTracking(content) {
    return this.attachIconViewTracking(content).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Icons_30 extends VastElement {
  /**
   * @param {string} n
   * @param {Linear_19} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {{program: string, width: string, height: string, xPosition: string, yPosition: string, duration: string, offset: string, apiFramework: string}} attributes
   * @returns {Icon_31} 
   */
  attachIcon(attributes) {
    const newElem = new Icon_31('Icon', this, {"attrs":["program","width","height","xPosition","yPosition","duration","offset","apiFramework"]} /*: Infos*/, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Linear_19 extends VastElement {
  /**
   * @param {string} n
   * @param {Creative_16} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @param {{xmlEncoded: string}} attributes
   * @returns {AdParameters_20} 
   */
  attachAdParameters(content, attributes) {
    const newElem = new AdParameters_20('AdParameters', this, {"attrs":["xmlEncoded"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{xmlEncoded: string}} attributes
   * @returns {Linear_19} 
   */
  addAdParameters(content, attributes) {
    return this.attachAdParameters(content, attributes).and();
  }
  /** @description required in Vast 3
   * @param {string} content
   * @returns {Duration_21} 
   */
  attachDuration(content) {
    const newElem = new Duration_21('Duration', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** @description required in Vast 3
   * @param {string} content
   * @returns {Linear_19} 
   */
  addDuration(content) {
    return this.attachDuration(content).and();
  }
  /** @description required in Vast 3
   * @returns {MediaFiles_22} 
   */
  attachMediaFiles() {
    const newElem = new MediaFiles_22('MediaFiles', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @returns {TrackingEvents_24} 
   */
  attachTrackingEvents() {
    const newElem = new TrackingEvents_24('TrackingEvents', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @returns {VideoClicks_26} 
   */
  attachVideoClicks() {
    const newElem = new VideoClicks_26('VideoClicks', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @returns {Icons_30} 
   */
  attachIcons() {
    const newElem = new Icons_30('Icons', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class StaticResource_41 extends VastElement {
  /**
   * @param {string} n
   * @param {Companion_40} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class IFrameResource_42 extends VastElement {
  /**
   * @param {string} n
   * @param {Companion_40} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class HTMLResource_43 extends VastElement {
  /**
   * @param {string} n
   * @param {Companion_40} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class AdParameters_44 extends VastElement {
  /**
   * @param {string} n
   * @param {Companion_40} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class AltText_45 extends VastElement {
  /**
   * @param {string} n
   * @param {Companion_40} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class CompanionClickThrough_46 extends VastElement {
  /**
   * @param {string} n
   * @param {Companion_40} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class CompanionClickTracking_47 extends VastElement {
  /**
   * @param {string} n
   * @param {Companion_40} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Tracking_49 extends VastElement {
  /**
   * @param {string} n
   * @param {TrackingEvents_48} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class TrackingEvents_48 extends VastElement {
  /**
   * @param {string} n
   * @param {Companion_40} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @param {{event:("creativeView")}} attributes
   * @returns {Tracking_49} 
   */
  attachTracking(content, attributes) {
    const newElem = new Tracking_49('Tracking', this, {"attrs":["event"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{event:("creativeView")}} attributes
   * @returns {TrackingEvents_48} 
   */
  addTracking(content, attributes) {
    return this.attachTracking(content, attributes).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Companion_40 extends VastElement {
  /**
   * @param {string} n
   * @param {CompanionAds_39} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @param {{creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash")}} attributes
   * @returns {StaticResource_41} 
   */
  attachStaticResource(content, attributes) {
    const newElem = new StaticResource_41('StaticResource', this, {"attrs":["creativeType"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash")}} attributes
   * @returns {Companion_40} 
   */
  addStaticResource(content, attributes) {
    return this.attachStaticResource(content, attributes).and();
  }
  /** 
   * @param {string} content
   * @returns {IFrameResource_42} 
   */
  attachIFrameResource(content) {
    const newElem = new IFrameResource_42('IFrameResource', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {Companion_40} 
   */
  addIFrameResource(content) {
    return this.attachIFrameResource(content).and();
  }
  /** 
   * @param {string} content
   * @returns {HTMLResource_43} 
   */
  attachHTMLResource(content) {
    const newElem = new HTMLResource_43('HTMLResource', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {Companion_40} 
   */
  addHTMLResource(content) {
    return this.attachHTMLResource(content).and();
  }
  /** 
   * @param {string} content
   * @param {{xmlEncoded: string}} attributes
   * @returns {AdParameters_44} 
   */
  attachAdParameters(content, attributes) {
    const newElem = new AdParameters_44('AdParameters', this, {"attrs":["xmlEncoded"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{xmlEncoded: string}} attributes
   * @returns {Companion_40} 
   */
  addAdParameters(content, attributes) {
    return this.attachAdParameters(content, attributes).and();
  }
  /** 
   * @param {string} content
   * @returns {AltText_45} 
   */
  attachAltText(content) {
    const newElem = new AltText_45('AltText', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {Companion_40} 
   */
  addAltText(content) {
    return this.attachAltText(content).and();
  }
  /** 
   * @param {string} content
   * @returns {CompanionClickThrough_46} 
   */
  attachCompanionClickThrough(content) {
    const newElem = new CompanionClickThrough_46('CompanionClickThrough', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {Companion_40} 
   */
  addCompanionClickThrough(content) {
    return this.attachCompanionClickThrough(content).and();
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {CompanionClickTracking_47} 
   */
  attachCompanionClickTracking(content, attributes) {
    const newElem = new CompanionClickTracking_47('CompanionClickTracking', this, {"attrs":["id"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {Companion_40} 
   */
  addCompanionClickTracking(content, attributes) {
    return this.attachCompanionClickTracking(content, attributes).and();
  }
  /** 
   * @returns {TrackingEvents_48} 
   */
  attachTrackingEvents() {
    const newElem = new TrackingEvents_48('TrackingEvents', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class CompanionAds_39 extends VastElement {
  /**
   * @param {string} n
   * @param {Creative_16} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {{id: string, width: string, height: string, assetWidth: string, assetHeight: string, expandedWidth: string, expandedHeight: string, apiFramework: string, adSlotID: string}} attributes
   * @returns {Companion_40} 
   */
  attachCompanion(attributes) {
    const newElem = new Companion_40('Companion', this, {"attrs":["id","width","height","assetWidth","assetHeight","expandedWidth","expandedHeight","apiFramework","adSlotID"]} /*: Infos*/, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class StaticResource_52 extends VastElement {
  /**
   * @param {string} n
   * @param {NonLinear_51} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class IFrameResource_53 extends VastElement {
  /**
   * @param {string} n
   * @param {NonLinear_51} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class HTMLResource_54 extends VastElement {
  /**
   * @param {string} n
   * @param {NonLinear_51} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class NonLinearClickThrough_55 extends VastElement {
  /**
   * @param {string} n
   * @param {NonLinear_51} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class NonLinearClickTracking_56 extends VastElement {
  /**
   * @param {string} n
   * @param {NonLinear_51} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class AdParameters_57 extends VastElement {
  /**
   * @param {string} n
   * @param {NonLinear_51} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class NonLinear_51 extends VastElement {
  /**
   * @param {string} n
   * @param {NonLinearAds_50} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @param {{creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash")}} attributes
   * @returns {StaticResource_52} 
   */
  attachStaticResource(content, attributes) {
    const newElem = new StaticResource_52('StaticResource', this, {"attrs":["creativeType"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash")}} attributes
   * @returns {NonLinear_51} 
   */
  addStaticResource(content, attributes) {
    return this.attachStaticResource(content, attributes).and();
  }
  /** 
   * @param {string} content
   * @returns {IFrameResource_53} 
   */
  attachIFrameResource(content) {
    const newElem = new IFrameResource_53('IFrameResource', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {NonLinear_51} 
   */
  addIFrameResource(content) {
    return this.attachIFrameResource(content).and();
  }
  /** 
   * @param {string} content
   * @returns {HTMLResource_54} 
   */
  attachHTMLResource(content) {
    const newElem = new HTMLResource_54('HTMLResource', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {NonLinear_51} 
   */
  addHTMLResource(content) {
    return this.attachHTMLResource(content).and();
  }
  /** 
   * @param {string} content
   * @returns {NonLinearClickThrough_55} 
   */
  attachNonLinearClickThrough(content) {
    const newElem = new NonLinearClickThrough_55('NonLinearClickThrough', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {NonLinear_51} 
   */
  addNonLinearClickThrough(content) {
    return this.attachNonLinearClickThrough(content).and();
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {NonLinearClickTracking_56} 
   */
  attachNonLinearClickTracking(content, attributes) {
    const newElem = new NonLinearClickTracking_56('NonLinearClickTracking', this, {"attrs":["id"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {NonLinear_51} 
   */
  addNonLinearClickTracking(content, attributes) {
    return this.attachNonLinearClickTracking(content, attributes).and();
  }
  /** 
   * @param {string} content
   * @param {{xmlEncoded: string}} attributes
   * @returns {AdParameters_57} 
   */
  attachAdParameters(content, attributes) {
    const newElem = new AdParameters_57('AdParameters', this, {"attrs":["xmlEncoded"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{xmlEncoded: string}} attributes
   * @returns {NonLinear_51} 
   */
  addAdParameters(content, attributes) {
    return this.attachAdParameters(content, attributes).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Tracking_59 extends VastElement {
  /**
   * @param {string} n
   * @param {TrackingEvents_58} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class TrackingEvents_58 extends VastElement {
  /**
   * @param {string} n
   * @param {NonLinearAds_50} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @param {{event:("creativeView"|"start"|"firstQuartile"|"midpoint"|"thirdQuartile"|"complete"|"mute"|"unmute"|"pause"|"rewind"|"resume"|"fullscreen"|"exitFullscreen"|"expand"|"collapse"|"acceptInvitation"|"close"|"progress")}} attributes
   * @returns {Tracking_59} 
   */
  attachTracking(content, attributes) {
    const newElem = new Tracking_59('Tracking', this, {"attrs":["event"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{event:("creativeView"|"start"|"firstQuartile"|"midpoint"|"thirdQuartile"|"complete"|"mute"|"unmute"|"pause"|"rewind"|"resume"|"fullscreen"|"exitFullscreen"|"expand"|"collapse"|"acceptInvitation"|"close"|"progress")}} attributes
   * @returns {TrackingEvents_58} 
   */
  addTracking(content, attributes) {
    return this.attachTracking(content, attributes).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class NonLinearAds_50 extends VastElement {
  /**
   * @param {string} n
   * @param {Creative_16} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {{id: string, width: string, height: string, expandedWidth: string, expandedHeight: string, scalable: string, maintainAspectRatio: string, minSuggestedDuration: string, apiFramework: string}} attributes
   * @returns {NonLinear_51} 
   */
  attachNonLinear(attributes) {
    const newElem = new NonLinear_51('NonLinear', this, {"attrs":["id","width","height","expandedWidth","expandedHeight","scalable","maintainAspectRatio","minSuggestedDuration","apiFramework"]} /*: Infos*/, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @returns {TrackingEvents_58} 
   */
  attachTrackingEvents() {
    const newElem = new TrackingEvents_58('TrackingEvents', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Creative_16 extends VastElement {
  /**
   * @param {string} n
   * @param {Creatives_15} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @returns {CreativeExtensions_17} 
   */
  attachCreativeExtensions() {
    const newElem = new CreativeExtensions_17('CreativeExtensions', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {{skipoffset: string}} attributes
   * @returns {Linear_19} 
   */
  attachLinear(attributes) {
    const newElem = new Linear_19('Linear', this, {"attrs":["skipoffset"]} /*: Infos*/, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {{required:("all"|"any"|"none")}} attributes
   * @returns {CompanionAds_39} 
   */
  attachCompanionAds(attributes) {
    const newElem = new CompanionAds_39('CompanionAds', this, {"attrs":["required"]} /*: Infos*/, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @returns {NonLinearAds_50} 
   */
  attachNonLinearAds() {
    const newElem = new NonLinearAds_50('NonLinearAds', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Creatives_15 extends VastElement {
  /**
   * @param {string} n
   * @param {InLine_6} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {{id: string, sequence: string, adID: string, apiFramework: string}} attributes
   * @returns {Creative_16} 
   */
  attachCreative(attributes) {
    const newElem = new Creative_16('Creative', this, {"attrs":["id","sequence","adID","apiFramework"]} /*: Infos*/, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Extension_61 extends VastElement {
  /**
   * @param {string} n
   * @param {Extensions_60} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Extensions_60 extends VastElement {
  /**
   * @param {string} n
   * @param {InLine_6} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** @description required in Vast 3
   * @param {string} content
   * @param {{type: string}} attributes
   * @returns {Extension_61} 
   */
  attachExtension(content, attributes) {
    const newElem = new Extension_61('Extension', this, {"attrs":["type"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** @description required in Vast 3
   * @param {string} content
   * @param {{type: string}} attributes
   * @returns {Extensions_60} 
   */
  addExtension(content, attributes) {
    return this.attachExtension(content, attributes).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class InLine_6 extends VastElement {
  /**
   * @param {string} n
   * @param {Ad_5} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** @description required in Vast 3
   * @param {string} content
   * @param {{version: string}} attributes
   * @returns {AdSystem_7} 
   */
  attachAdSystem(content, attributes) {
    const newElem = new AdSystem_7('AdSystem', this, {"attrs":["version"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** @description required in Vast 3
   * @param {string} content
   * @param {{version: string}} attributes
   * @returns {InLine_6} 
   */
  addAdSystem(content, attributes) {
    return this.attachAdSystem(content, attributes).and();
  }
  /** @description required in Vast 3
   * @param {string} content
   * @returns {AdTitle_8} 
   */
  attachAdTitle(content) {
    const newElem = new AdTitle_8('AdTitle', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** @description required in Vast 3
   * @param {string} content
   * @returns {InLine_6} 
   */
  addAdTitle(content) {
    return this.attachAdTitle(content).and();
  }
  /** 
   * @param {string} content
   * @returns {Description_9} 
   */
  attachDescription(content) {
    const newElem = new Description_9('Description', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {InLine_6} 
   */
  addDescription(content) {
    return this.attachDescription(content).and();
  }
  /** 
   * @param {string} content
   * @returns {Advertiser_10} 
   */
  attachAdvertiser(content) {
    const newElem = new Advertiser_10('Advertiser', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {InLine_6} 
   */
  addAdvertiser(content) {
    return this.attachAdvertiser(content).and();
  }
  /** 
   * @param {string} content
   * @param {{currency: string, model:("CPM"|"CPC"|"CPE"|"CPV")}} attributes
   * @returns {Pricing_11} 
   */
  attachPricing(content, attributes) {
    const newElem = new Pricing_11('Pricing', this, {"attrs":["currency","model"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{currency: string, model:("CPM"|"CPC"|"CPE"|"CPV")}} attributes
   * @returns {InLine_6} 
   */
  addPricing(content, attributes) {
    return this.attachPricing(content, attributes).and();
  }
  /** 
   * @param {string} content
   * @returns {Survey_12} 
   */
  attachSurvey(content) {
    const newElem = new Survey_12('Survey', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {InLine_6} 
   */
  addSurvey(content) {
    return this.attachSurvey(content).and();
  }
  /** 
   * @param {string} content
   * @returns {Error_13} 
   */
  attachError(content) {
    const newElem = new Error_13('Error', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {InLine_6} 
   */
  addError(content) {
    return this.attachError(content).and();
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {Impression_14} 
   */
  attachImpression(content, attributes) {
    const newElem = new Impression_14('Impression', this, {"attrs":["id"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {InLine_6} 
   */
  addImpression(content, attributes) {
    return this.attachImpression(content, attributes).and();
  }
  /** @description required in Vast 3
   * @returns {Creatives_15} 
   */
  attachCreatives() {
    const newElem = new Creatives_15('Creatives', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @returns {Extensions_60} 
   */
  attachExtensions() {
    const newElem = new Extensions_60('Extensions', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class AdSystem_63 extends VastElement {
  /**
   * @param {string} n
   * @param {Wrapper_62} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class VASTAdTagURI_64 extends VastElement {
  /**
   * @param {string} n
   * @param {Wrapper_62} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Error_65 extends VastElement {
  /**
   * @param {string} n
   * @param {Wrapper_62} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Impression_66 extends VastElement {
  /**
   * @param {string} n
   * @param {Wrapper_62} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Tracking_71 extends VastElement {
  /**
   * @param {string} n
   * @param {TrackingEvents_70} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class TrackingEvents_70 extends VastElement {
  /**
   * @param {string} n
   * @param {Linear_69} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @param {{event:("creativeView"|"start"|"firstQuartile"|"midpoint"|"thirdQuartile"|"complete"|"mute"|"unmute"|"pause"|"rewind"|"resume"|"fullscreen"|"exitFullscreen"|"expand"|"collapse"|"acceptInvitationLinear"|"closeLinear"|"skip"|"progress")}} attributes
   * @returns {Tracking_71} 
   */
  attachTracking(content, attributes) {
    const newElem = new Tracking_71('Tracking', this, {"attrs":["event"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{event:("creativeView"|"start"|"firstQuartile"|"midpoint"|"thirdQuartile"|"complete"|"mute"|"unmute"|"pause"|"rewind"|"resume"|"fullscreen"|"exitFullscreen"|"expand"|"collapse"|"acceptInvitationLinear"|"closeLinear"|"skip"|"progress")}} attributes
   * @returns {TrackingEvents_70} 
   */
  addTracking(content, attributes) {
    return this.attachTracking(content, attributes).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class ClickTracking_73 extends VastElement {
  /**
   * @param {string} n
   * @param {VideoClicks_72} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class CustomClick_74 extends VastElement {
  /**
   * @param {string} n
   * @param {VideoClicks_72} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class VideoClicks_72 extends VastElement {
  /**
   * @param {string} n
   * @param {Linear_69} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {ClickTracking_73} 
   */
  attachClickTracking(content, attributes) {
    const newElem = new ClickTracking_73('ClickTracking', this, {"attrs":["id"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {VideoClicks_72} 
   */
  addClickTracking(content, attributes) {
    return this.attachClickTracking(content, attributes).and();
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {CustomClick_74} 
   */
  attachCustomClick(content, attributes) {
    const newElem = new CustomClick_74('CustomClick', this, {"attrs":["id"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {VideoClicks_72} 
   */
  addCustomClick(content, attributes) {
    return this.attachCustomClick(content, attributes).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class StaticResource_77 extends VastElement {
  /**
   * @param {string} n
   * @param {Icon_76} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class IFrameResource_78 extends VastElement {
  /**
   * @param {string} n
   * @param {Icon_76} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class HTMLResource_79 extends VastElement {
  /**
   * @param {string} n
   * @param {Icon_76} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class IconClickThrough_81 extends VastElement {
  /**
   * @param {string} n
   * @param {IconClicks_80} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class IconClickTracking_82 extends VastElement {
  /**
   * @param {string} n
   * @param {IconClicks_80} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class IconClicks_80 extends VastElement {
  /**
   * @param {string} n
   * @param {Icon_76} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @returns {IconClickThrough_81} 
   */
  attachIconClickThrough(content) {
    const newElem = new IconClickThrough_81('IconClickThrough', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {IconClicks_80} 
   */
  addIconClickThrough(content) {
    return this.attachIconClickThrough(content).and();
  }
  /** 
   * @param {string} content
   * @returns {IconClickTracking_82} 
   */
  attachIconClickTracking(content) {
    const newElem = new IconClickTracking_82('IconClickTracking', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {IconClicks_80} 
   */
  addIconClickTracking(content) {
    return this.attachIconClickTracking(content).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class IconViewTracking_83 extends VastElement {
  /**
   * @param {string} n
   * @param {Icon_76} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Icon_76 extends VastElement {
  /**
   * @param {string} n
   * @param {Icons_75} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @param {{creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash")}} attributes
   * @returns {StaticResource_77} 
   */
  attachStaticResource(content, attributes) {
    const newElem = new StaticResource_77('StaticResource', this, {"attrs":["creativeType"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash")}} attributes
   * @returns {Icon_76} 
   */
  addStaticResource(content, attributes) {
    return this.attachStaticResource(content, attributes).and();
  }
  /** 
   * @param {string} content
   * @returns {IFrameResource_78} 
   */
  attachIFrameResource(content) {
    const newElem = new IFrameResource_78('IFrameResource', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {Icon_76} 
   */
  addIFrameResource(content) {
    return this.attachIFrameResource(content).and();
  }
  /** 
   * @param {string} content
   * @returns {HTMLResource_79} 
   */
  attachHTMLResource(content) {
    const newElem = new HTMLResource_79('HTMLResource', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {Icon_76} 
   */
  addHTMLResource(content) {
    return this.attachHTMLResource(content).and();
  }
  /** 
   * @returns {IconClicks_80} 
   */
  attachIconClicks() {
    const newElem = new IconClicks_80('IconClicks', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {IconViewTracking_83} 
   */
  attachIconViewTracking(content) {
    const newElem = new IconViewTracking_83('IconViewTracking', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {Icon_76} 
   */
  addIconViewTracking(content) {
    return this.attachIconViewTracking(content).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Icons_75 extends VastElement {
  /**
   * @param {string} n
   * @param {Linear_69} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {{program: string, width: string, height: string, xPosition: string, yPosition: string, duration: string, offset: string, apiFramework: string}} attributes
   * @returns {Icon_76} 
   */
  attachIcon(attributes) {
    const newElem = new Icon_76('Icon', this, {"attrs":["program","width","height","xPosition","yPosition","duration","offset","apiFramework"]} /*: Infos*/, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Linear_69 extends VastElement {
  /**
   * @param {string} n
   * @param {Creative_68} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @returns {TrackingEvents_70} 
   */
  attachTrackingEvents() {
    const newElem = new TrackingEvents_70('TrackingEvents', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @returns {VideoClicks_72} 
   */
  attachVideoClicks() {
    const newElem = new VideoClicks_72('VideoClicks', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @returns {Icons_75} 
   */
  attachIcons() {
    const newElem = new Icons_75('Icons', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class StaticResource_86 extends VastElement {
  /**
   * @param {string} n
   * @param {Companion_85} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class IFrameResource_87 extends VastElement {
  /**
   * @param {string} n
   * @param {Companion_85} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class HTMLResource_88 extends VastElement {
  /**
   * @param {string} n
   * @param {Companion_85} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class AdParameters_89 extends VastElement {
  /**
   * @param {string} n
   * @param {Companion_85} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class AltText_90 extends VastElement {
  /**
   * @param {string} n
   * @param {Companion_85} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class CompanionClickThrough_91 extends VastElement {
  /**
   * @param {string} n
   * @param {Companion_85} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class CompanionClickTracking_92 extends VastElement {
  /**
   * @param {string} n
   * @param {Companion_85} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Tracking_94 extends VastElement {
  /**
   * @param {string} n
   * @param {TrackingEvents_93} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class TrackingEvents_93 extends VastElement {
  /**
   * @param {string} n
   * @param {Companion_85} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @param {{event:("creativeView")}} attributes
   * @returns {Tracking_94} 
   */
  attachTracking(content, attributes) {
    const newElem = new Tracking_94('Tracking', this, {"attrs":["event"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{event:("creativeView")}} attributes
   * @returns {TrackingEvents_93} 
   */
  addTracking(content, attributes) {
    return this.attachTracking(content, attributes).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Companion_85 extends VastElement {
  /**
   * @param {string} n
   * @param {CompanionAds_84} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @param {{creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash")}} attributes
   * @returns {StaticResource_86} 
   */
  attachStaticResource(content, attributes) {
    const newElem = new StaticResource_86('StaticResource', this, {"attrs":["creativeType"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash")}} attributes
   * @returns {Companion_85} 
   */
  addStaticResource(content, attributes) {
    return this.attachStaticResource(content, attributes).and();
  }
  /** 
   * @param {string} content
   * @returns {IFrameResource_87} 
   */
  attachIFrameResource(content) {
    const newElem = new IFrameResource_87('IFrameResource', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {Companion_85} 
   */
  addIFrameResource(content) {
    return this.attachIFrameResource(content).and();
  }
  /** 
   * @param {string} content
   * @returns {HTMLResource_88} 
   */
  attachHTMLResource(content) {
    const newElem = new HTMLResource_88('HTMLResource', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {Companion_85} 
   */
  addHTMLResource(content) {
    return this.attachHTMLResource(content).and();
  }
  /** 
   * @param {string} content
   * @param {{xmlEncoded: string}} attributes
   * @returns {AdParameters_89} 
   */
  attachAdParameters(content, attributes) {
    const newElem = new AdParameters_89('AdParameters', this, {"attrs":["xmlEncoded"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{xmlEncoded: string}} attributes
   * @returns {Companion_85} 
   */
  addAdParameters(content, attributes) {
    return this.attachAdParameters(content, attributes).and();
  }
  /** 
   * @param {string} content
   * @returns {AltText_90} 
   */
  attachAltText(content) {
    const newElem = new AltText_90('AltText', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {Companion_85} 
   */
  addAltText(content) {
    return this.attachAltText(content).and();
  }
  /** 
   * @param {string} content
   * @returns {CompanionClickThrough_91} 
   */
  attachCompanionClickThrough(content) {
    const newElem = new CompanionClickThrough_91('CompanionClickThrough', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {Companion_85} 
   */
  addCompanionClickThrough(content) {
    return this.attachCompanionClickThrough(content).and();
  }
  /** 
   * @param {string} content
   * @returns {CompanionClickTracking_92} 
   */
  attachCompanionClickTracking(content) {
    const newElem = new CompanionClickTracking_92('CompanionClickTracking', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {Companion_85} 
   */
  addCompanionClickTracking(content) {
    return this.attachCompanionClickTracking(content).and();
  }
  /** 
   * @returns {TrackingEvents_93} 
   */
  attachTrackingEvents() {
    const newElem = new TrackingEvents_93('TrackingEvents', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class CompanionAds_84 extends VastElement {
  /**
   * @param {string} n
   * @param {Creative_68} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {{id: string, width: string, height: string, assetWidth: string, assetHeight: string, expandedWidth: string, expandedHeight: string, apiFramework: string, adSlotID: string}} attributes
   * @returns {Companion_85} 
   */
  attachCompanion(attributes) {
    const newElem = new Companion_85('Companion', this, {"attrs":["id","width","height","assetWidth","assetHeight","expandedWidth","expandedHeight","apiFramework","adSlotID"]} /*: Infos*/, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class NonLinearClickTracking_97 extends VastElement {
  /**
   * @param {string} n
   * @param {NonLinear_96} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class NonLinear_96 extends VastElement {
  /**
   * @param {string} n
   * @param {NonLinearAds_95} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @returns {NonLinearClickTracking_97} 
   */
  attachNonLinearClickTracking(content) {
    const newElem = new NonLinearClickTracking_97('NonLinearClickTracking', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {NonLinear_96} 
   */
  addNonLinearClickTracking(content) {
    return this.attachNonLinearClickTracking(content).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Tracking_99 extends VastElement {
  /**
   * @param {string} n
   * @param {TrackingEvents_98} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class TrackingEvents_98 extends VastElement {
  /**
   * @param {string} n
   * @param {NonLinearAds_95} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @param {{event:("creativeView"|"start"|"firstQuartile"|"midpoint"|"thirdQuartile"|"complete"|"mute"|"unmute"|"pause"|"rewind"|"resume"|"fullscreen"|"exitFullscreen"|"expand"|"collapse"|"acceptInvitation"|"close"|"progress")}} attributes
   * @returns {Tracking_99} 
   */
  attachTracking(content, attributes) {
    const newElem = new Tracking_99('Tracking', this, {"attrs":["event"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{event:("creativeView"|"start"|"firstQuartile"|"midpoint"|"thirdQuartile"|"complete"|"mute"|"unmute"|"pause"|"rewind"|"resume"|"fullscreen"|"exitFullscreen"|"expand"|"collapse"|"acceptInvitation"|"close"|"progress")}} attributes
   * @returns {TrackingEvents_98} 
   */
  addTracking(content, attributes) {
    return this.attachTracking(content, attributes).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class NonLinearAds_95 extends VastElement {
  /**
   * @param {string} n
   * @param {Creative_68} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {{id: string, width: string, height: string, expandedWidth: string, expandedHeight: string, scalable: string, maintainAspectRatio: string, minSuggestedDuration: string, apiFramework: string}} attributes
   * @returns {NonLinear_96} 
   */
  attachNonLinear(attributes) {
    const newElem = new NonLinear_96('NonLinear', this, {"attrs":["id","width","height","expandedWidth","expandedHeight","scalable","maintainAspectRatio","minSuggestedDuration","apiFramework"]} /*: Infos*/, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @returns {TrackingEvents_98} 
   */
  attachTrackingEvents() {
    const newElem = new TrackingEvents_98('TrackingEvents', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Creative_68 extends VastElement {
  /**
   * @param {string} n
   * @param {Creatives_67} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @returns {Linear_69} 
   */
  attachLinear() {
    const newElem = new Linear_69('Linear', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {{required:("all"|"any"|"none")}} attributes
   * @returns {CompanionAds_84} 
   */
  attachCompanionAds(attributes) {
    const newElem = new CompanionAds_84('CompanionAds', this, {"attrs":["required"]} /*: Infos*/, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @returns {NonLinearAds_95} 
   */
  attachNonLinearAds() {
    const newElem = new NonLinearAds_95('NonLinearAds', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Creatives_67 extends VastElement {
  /**
   * @param {string} n
   * @param {Wrapper_62} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {{id: string, sequence: string, adID: string}} attributes
   * @returns {Creative_68} 
   */
  attachCreative(attributes) {
    const newElem = new Creative_68('Creative', this, {"attrs":["id","sequence","adID"]} /*: Infos*/, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Extension_101 extends VastElement {
  /**
   * @param {string} n
   * @param {Extensions_100} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Extensions_100 extends VastElement {
  /**
   * @param {string} n
   * @param {Wrapper_62} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** @description required in Vast 3
   * @param {string} content
   * @param {{type: string}} attributes
   * @returns {Extension_101} 
   */
  attachExtension(content, attributes) {
    const newElem = new Extension_101('Extension', this, {"attrs":["type"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** @description required in Vast 3
   * @param {string} content
   * @param {{type: string}} attributes
   * @returns {Extensions_100} 
   */
  addExtension(content, attributes) {
    return this.attachExtension(content, attributes).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Wrapper_62 extends VastElement {
  /**
   * @param {string} n
   * @param {Ad_5} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** @description required in Vast 3
   * @param {string} content
   * @param {{version: string}} attributes
   * @returns {AdSystem_63} 
   */
  attachAdSystem(content, attributes) {
    const newElem = new AdSystem_63('AdSystem', this, {"attrs":["version"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** @description required in Vast 3
   * @param {string} content
   * @param {{version: string}} attributes
   * @returns {Wrapper_62} 
   */
  addAdSystem(content, attributes) {
    return this.attachAdSystem(content, attributes).and();
  }
  /** @description required in Vast 3
   * @param {string} content
   * @returns {VASTAdTagURI_64} 
   */
  attachVASTAdTagURI(content) {
    const newElem = new VASTAdTagURI_64('VASTAdTagURI', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** @description required in Vast 3
   * @param {string} content
   * @returns {Wrapper_62} 
   */
  addVASTAdTagURI(content) {
    return this.attachVASTAdTagURI(content).and();
  }
  /** 
   * @param {string} content
   * @returns {Error_65} 
   */
  attachError(content) {
    const newElem = new Error_65('Error', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {Wrapper_62} 
   */
  addError(content) {
    return this.attachError(content).and();
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {Impression_66} 
   */
  attachImpression(content, attributes) {
    const newElem = new Impression_66('Impression', this, {"attrs":["id"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {Wrapper_62} 
   */
  addImpression(content, attributes) {
    return this.attachImpression(content, attributes).and();
  }
  /** 
   * @returns {Creatives_67} 
   */
  attachCreatives() {
    const newElem = new Creatives_67('Creatives', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @returns {Extensions_100} 
   */
  attachExtensions() {
    const newElem = new Extensions_100('Extensions', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Ad_5 extends VastElement {
  /**
   * @param {string} n
   * @param {VAST_3} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @returns {InLine_6} 
   */
  attachInLine() {
    const newElem = new InLine_6('InLine', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {{followAdditonalWrappers: string, allowMultipleAds: string, fallbackOnNoAd: string}} attributes
   * @returns {Wrapper_62} 
   */
  attachWrapper(attributes) {
    const newElem = new Wrapper_62('Wrapper', this, {"attrs":["followAdditonalWrappers","allowMultipleAds","fallbackOnNoAd"]} /*: Infos*/, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class VAST_3 extends VastElement {
  /**
   * @param {string} n
   * @param {apiv3} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @returns {Error_4} 
   */
  attachError(content) {
    const newElem = new Error_4('Error', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {VAST_3} 
   */
  addError(content) {
    return this.attachError(content).and();
  }
  /** 
   * @param {{id: string, sequence: string}} attributes
   * @returns {Ad_5} 
   */
  attachAd(attributes) {
    const newElem = new Ad_5('Ad', this, {"attrs":["id","sequence"]} /*: Infos*/, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class apiv3 extends VastElement {
  /**
   * @param {string} n
   * @param {apiv3} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {{version:("3.0")}} attributes
   * @returns {VAST_3} 
   */
  attachVAST(attributes) {
    const newElem = new VAST_3('VAST', this, {"attrs":["version"]} /*: Infos*/, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  and() { return this.parent || this; }
  back() { return this.and().and(); }
}


const validator = {"only":{"VAST":{"alo":{"Ad":{"uniq":{"InLine":{"required":{"AdSystem":{},"AdTitle":{},"Creatives":{"alo":{"Creative":{"uniq":{"Linear":{"required":{"Duration":{},"MediaFiles":{"alo":{"MediaFile":{"attrsRequired":{"delivery":["progressive","streaming"],"type":null,"width":null,"height":null}}}}},"follow":{"AdParameters":{},"TrackingEvents":{"follow":{"Tracking":{"attrsRequired":{"event":["creativeView","start","firstQuartile","midpoint","thirdQuartile","complete","mute","unmute","pause","rewind","resume","fullscreen","exitFullscreen","expand","collapse","acceptInvitationLinear","closeLinear","skip","progress"]}}}},"VideoClicks":{"follow":{"ClickThrough":{},"ClickTracking":{},"CustomClick":{}}},"Icons":{"alo":{"Icon":{"alo":{"StaticResource":{"attrsRequired":{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}},"IFrameResource":{},"HTMLResource":{}},"follow":{"IconClicks":{"follow":{"IconClickThrough":{},"IconClickTracking":{}}},"IconViewTracking":{}},"attrsRequired":{"program":null,"width":null,"height":null,"xPosition":null,"yPosition":null}}}}}},"CompanionAds":{"follow":{"Companion":{"alo":{"StaticResource":{"attrsRequired":{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}},"IFrameResource":{},"HTMLResource":{}},"follow":{"AdParameters":{},"AltText":{},"CompanionClickThrough":{},"CompanionClickTracking":{},"TrackingEvents":{"follow":{"Tracking":{"attrsRequired":{"event":["creativeView"]}}}}},"attrsRequired":{"width":null,"height":null}}},"attrsRequired":{"required":["all","any","none"]}},"NonLinearAds":{"follow":{"NonLinear":{"alo":{"StaticResource":{"attrsRequired":{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}},"IFrameResource":{},"HTMLResource":{}},"follow":{"NonLinearClickThrough":{},"NonLinearClickTracking":{},"AdParameters":{}},"attrsRequired":{"width":null,"height":null}},"TrackingEvents":{"follow":{"Tracking":{"attrsRequired":{"event":["creativeView","start","firstQuartile","midpoint","thirdQuartile","complete","mute","unmute","pause","rewind","resume","fullscreen","exitFullscreen","expand","collapse","acceptInvitation","close","progress"]}}}}}}},"follow":{"CreativeExtensions":{"follow":{"CreativeExtension":{}}}}}}}},"alo":{"Impression":{}},"follow":{"Description":{},"Advertiser":{},"Pricing":{"attrsRequired":{"currency":null,"model":["CPM","CPC","CPE","CPV"]}},"Survey":{},"Error":{},"Extensions":{"required":{"Extension":{}}}}},"Wrapper":{"required":{"AdSystem":{},"VASTAdTagURI":{}},"alo":{"Impression":{}},"follow":{"Error":{},"Creatives":{"follow":{"Creative":{"uniq":{"Linear":{"follow":{"TrackingEvents":{"follow":{"Tracking":{"attrsRequired":{"event":["creativeView","start","firstQuartile","midpoint","thirdQuartile","complete","mute","unmute","pause","rewind","resume","fullscreen","exitFullscreen","expand","collapse","acceptInvitationLinear","closeLinear","skip","progress"]}}}},"VideoClicks":{"follow":{"ClickTracking":{},"CustomClick":{}}},"Icons":{"alo":{"Icon":{"alo":{"StaticResource":{"attrsRequired":{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}},"IFrameResource":{},"HTMLResource":{}},"follow":{"IconClicks":{"follow":{"IconClickThrough":{},"IconClickTracking":{}}},"IconViewTracking":{}},"attrsRequired":{"program":null,"width":null,"height":null,"xPosition":null,"yPosition":null}}}}}},"CompanionAds":{"follow":{"Companion":{"alo":{"StaticResource":{"attrsRequired":{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}},"IFrameResource":{},"HTMLResource":{}},"follow":{"AdParameters":{},"AltText":{},"CompanionClickThrough":{},"CompanionClickTracking":{},"TrackingEvents":{"follow":{"Tracking":{"attrsRequired":{"event":["creativeView"]}}}}},"attrsRequired":{"width":null,"height":null}}},"attrsRequired":{"required":["all","any","none"]}},"NonLinearAds":{"follow":{"NonLinear":{"follow":{"NonLinearClickTracking":{}},"attrsRequired":{"width":null,"height":null}},"TrackingEvents":{"follow":{"Tracking":{"attrsRequired":{"event":["creativeView","start","firstQuartile","midpoint","thirdQuartile","complete","mute","unmute","pause","rewind","resume","fullscreen","exitFullscreen","expand","collapse","acceptInvitation","close","progress"]}}}}}}}}}},"Extensions":{"required":{"Extension":{}}}}}}}},"follow":{"Error":{}},"attrsRequired":{"version":["3.0"]}}}};

module.exports = {
  apiv3,
  validator
};
