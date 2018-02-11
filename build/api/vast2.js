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

class AdSystem_5 extends VastElement {
  /**
   * @param {string} n
   * @param {InLine_4} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class AdTitle_6 extends VastElement {
  /**
   * @param {string} n
   * @param {InLine_4} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Description_7 extends VastElement {
  /**
   * @param {string} n
   * @param {InLine_4} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Survey_8 extends VastElement {
  /**
   * @param {string} n
   * @param {InLine_4} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Error_9 extends VastElement {
  /**
   * @param {string} n
   * @param {InLine_4} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Impression_10 extends VastElement {
  /**
   * @param {string} n
   * @param {InLine_4} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Duration_14 extends VastElement {
  /**
   * @param {string} n
   * @param {Linear_13} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Tracking_16 extends VastElement {
  /**
   * @param {string} n
   * @param {TrackingEvents_15} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class TrackingEvents_15 extends VastElement {
  /**
   * @param {string} n
   * @param {Linear_13} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @param {{event:("creativeView"|"start"|"midpoint"|"firstQuartile"|"thirdQuartile"|"complete"|"mute"|"unmute"|"pause"|"rewind"|"resume"|"fullscreen"|"expand"|"collapse"|"acceptInvitation"|"close")}} attributes
   * @returns {Tracking_16} 
   */
  attachTracking(content, attributes) {
    const newElem = new Tracking_16('Tracking', this, {"attrs":["event"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{event:("creativeView"|"start"|"midpoint"|"firstQuartile"|"thirdQuartile"|"complete"|"mute"|"unmute"|"pause"|"rewind"|"resume"|"fullscreen"|"expand"|"collapse"|"acceptInvitation"|"close")}} attributes
   * @returns {TrackingEvents_15} 
   */
  addTracking(content, attributes) {
    return this.attachTracking(content, attributes).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class AdParameters_17 extends VastElement {
  /**
   * @param {string} n
   * @param {Linear_13} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class ClickThrough_19 extends VastElement {
  /**
   * @param {string} n
   * @param {VideoClicks_18} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class ClickTracking_20 extends VastElement {
  /**
   * @param {string} n
   * @param {VideoClicks_18} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class CustomClick_21 extends VastElement {
  /**
   * @param {string} n
   * @param {VideoClicks_18} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class VideoClicks_18 extends VastElement {
  /**
   * @param {string} n
   * @param {Linear_13} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @returns {ClickThrough_19} 
   */
  attachClickThrough(content) {
    const newElem = new ClickThrough_19('ClickThrough', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {VideoClicks_18} 
   */
  addClickThrough(content) {
    return this.attachClickThrough(content).and();
  }
  /** 
   * @param {string} content
   * @returns {ClickTracking_20} 
   */
  attachClickTracking(content) {
    const newElem = new ClickTracking_20('ClickTracking', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {VideoClicks_18} 
   */
  addClickTracking(content) {
    return this.attachClickTracking(content).and();
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {CustomClick_21} 
   */
  attachCustomClick(content, attributes) {
    const newElem = new CustomClick_21('CustomClick', this, {"attrs":["id"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {VideoClicks_18} 
   */
  addCustomClick(content, attributes) {
    return this.attachCustomClick(content, attributes).and();
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
   * @param {Linear_13} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @param {{id: string, delivery:("progressive"|"streaming"), type: string, bitrate: string, width: string, height: string, scalable: string, mantainAspectRatio: string, apiFramework: string}} attributes
   * @returns {MediaFile_23} 
   */
  attachMediaFile(content, attributes) {
    const newElem = new MediaFile_23('MediaFile', this, {"attrs":["id","delivery","type","bitrate","width","height","scalable","mantainAspectRatio","apiFramework"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{id: string, delivery:("progressive"|"streaming"), type: string, bitrate: string, width: string, height: string, scalable: string, mantainAspectRatio: string, apiFramework: string}} attributes
   * @returns {MediaFiles_22} 
   */
  addMediaFile(content, attributes) {
    return this.attachMediaFile(content, attributes).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Linear_13 extends VastElement {
  /**
   * @param {string} n
   * @param {Creative_12} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** @description required in Vast 2
   * @param {string} content
   * @returns {Duration_14} 
   */
  attachDuration(content) {
    const newElem = new Duration_14('Duration', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** @description required in Vast 2
   * @param {string} content
   * @returns {Linear_13} 
   */
  addDuration(content) {
    return this.attachDuration(content).and();
  }
  /** 
   * @returns {TrackingEvents_15} 
   */
  attachTrackingEvents() {
    const newElem = new TrackingEvents_15('TrackingEvents', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {AdParameters_17} 
   */
  attachAdParameters(content) {
    const newElem = new AdParameters_17('AdParameters', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {Linear_13} 
   */
  addAdParameters(content) {
    return this.attachAdParameters(content).and();
  }
  /** 
   * @returns {VideoClicks_18} 
   */
  attachVideoClicks() {
    const newElem = new VideoClicks_18('VideoClicks', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  /** @description required in Vast 2
   * @returns {MediaFiles_22} 
   */
  attachMediaFiles() {
    const newElem = new MediaFiles_22('MediaFiles', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class StaticResource_26 extends VastElement {
  /**
   * @param {string} n
   * @param {Companion_25} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class IFrameResource_27 extends VastElement {
  /**
   * @param {string} n
   * @param {Companion_25} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class HTMLResource_28 extends VastElement {
  /**
   * @param {string} n
   * @param {Companion_25} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Tracking_30 extends VastElement {
  /**
   * @param {string} n
   * @param {TrackingEvents_29} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class TrackingEvents_29 extends VastElement {
  /**
   * @param {string} n
   * @param {Companion_25} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @param {{event:("creativeView")}} attributes
   * @returns {Tracking_30} 
   */
  attachTracking(content, attributes) {
    const newElem = new Tracking_30('Tracking', this, {"attrs":["event"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{event:("creativeView")}} attributes
   * @returns {TrackingEvents_29} 
   */
  addTracking(content, attributes) {
    return this.attachTracking(content, attributes).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class CompanionClickThrough_31 extends VastElement {
  /**
   * @param {string} n
   * @param {Companion_25} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class AltText_32 extends VastElement {
  /**
   * @param {string} n
   * @param {Companion_25} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class AdParameters_33 extends VastElement {
  /**
   * @param {string} n
   * @param {Companion_25} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Companion_25 extends VastElement {
  /**
   * @param {string} n
   * @param {CompanionAds_24} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @param {{creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash")}} attributes
   * @returns {StaticResource_26} 
   */
  attachStaticResource(content, attributes) {
    const newElem = new StaticResource_26('StaticResource', this, {"attrs":["creativeType"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash")}} attributes
   * @returns {Companion_25} 
   */
  addStaticResource(content, attributes) {
    return this.attachStaticResource(content, attributes).and();
  }
  /** 
   * @param {string} content
   * @returns {IFrameResource_27} 
   */
  attachIFrameResource(content) {
    const newElem = new IFrameResource_27('IFrameResource', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {Companion_25} 
   */
  addIFrameResource(content) {
    return this.attachIFrameResource(content).and();
  }
  /** 
   * @param {string} content
   * @returns {HTMLResource_28} 
   */
  attachHTMLResource(content) {
    const newElem = new HTMLResource_28('HTMLResource', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {Companion_25} 
   */
  addHTMLResource(content) {
    return this.attachHTMLResource(content).and();
  }
  /** 
   * @returns {TrackingEvents_29} 
   */
  attachTrackingEvents() {
    const newElem = new TrackingEvents_29('TrackingEvents', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {CompanionClickThrough_31} 
   */
  attachCompanionClickThrough(content) {
    const newElem = new CompanionClickThrough_31('CompanionClickThrough', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {Companion_25} 
   */
  addCompanionClickThrough(content) {
    return this.attachCompanionClickThrough(content).and();
  }
  /** 
   * @param {string} content
   * @returns {AltText_32} 
   */
  attachAltText(content) {
    const newElem = new AltText_32('AltText', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {Companion_25} 
   */
  addAltText(content) {
    return this.attachAltText(content).and();
  }
  /** 
   * @param {string} content
   * @returns {AdParameters_33} 
   */
  attachAdParameters(content) {
    const newElem = new AdParameters_33('AdParameters', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {Companion_25} 
   */
  addAdParameters(content) {
    return this.attachAdParameters(content).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class CompanionAds_24 extends VastElement {
  /**
   * @param {string} n
   * @param {Creative_12} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {{id: string, width: string, height: string, expandedWidth: string, expandedHeight: string, apiFramework: string}} attributes
   * @returns {Companion_25} 
   */
  attachCompanion(attributes) {
    const newElem = new Companion_25('Companion', this, {"attrs":["id","width","height","expandedWidth","expandedHeight","apiFramework"]} /*: Infos*/, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class StaticResource_36 extends VastElement {
  /**
   * @param {string} n
   * @param {NonLinear_35} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class IFrameResource_37 extends VastElement {
  /**
   * @param {string} n
   * @param {NonLinear_35} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class HTMLResource_38 extends VastElement {
  /**
   * @param {string} n
   * @param {NonLinear_35} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class NonLinear_35 extends VastElement {
  /**
   * @param {string} n
   * @param {NonLinearAds_34} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @param {{creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash")}} attributes
   * @returns {StaticResource_36} 
   */
  attachStaticResource(content, attributes) {
    const newElem = new StaticResource_36('StaticResource', this, {"attrs":["creativeType"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash")}} attributes
   * @returns {NonLinear_35} 
   */
  addStaticResource(content, attributes) {
    return this.attachStaticResource(content, attributes).and();
  }
  /** 
   * @param {string} content
   * @returns {IFrameResource_37} 
   */
  attachIFrameResource(content) {
    const newElem = new IFrameResource_37('IFrameResource', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {NonLinear_35} 
   */
  addIFrameResource(content) {
    return this.attachIFrameResource(content).and();
  }
  /** 
   * @param {string} content
   * @returns {HTMLResource_38} 
   */
  attachHTMLResource(content) {
    const newElem = new HTMLResource_38('HTMLResource', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {NonLinear_35} 
   */
  addHTMLResource(content) {
    return this.attachHTMLResource(content).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Tracking_40 extends VastElement {
  /**
   * @param {string} n
   * @param {TrackingEvents_39} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class TrackingEvents_39 extends VastElement {
  /**
   * @param {string} n
   * @param {NonLinearAds_34} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @param {{event:("creativeView"|"start"|"midpoint"|"firstQuartile"|"thirdQuartile"|"complete"|"mute"|"unmute"|"pause"|"rewind"|"resume"|"fullscreen"|"expand"|"collapse"|"acceptInvitation"|"close")}} attributes
   * @returns {Tracking_40} 
   */
  attachTracking(content, attributes) {
    const newElem = new Tracking_40('Tracking', this, {"attrs":["event"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{event:("creativeView"|"start"|"midpoint"|"firstQuartile"|"thirdQuartile"|"complete"|"mute"|"unmute"|"pause"|"rewind"|"resume"|"fullscreen"|"expand"|"collapse"|"acceptInvitation"|"close")}} attributes
   * @returns {TrackingEvents_39} 
   */
  addTracking(content, attributes) {
    return this.attachTracking(content, attributes).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class NonLinearClickThrough_41 extends VastElement {
  /**
   * @param {string} n
   * @param {NonLinearAds_34} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class AdParameters_42 extends VastElement {
  /**
   * @param {string} n
   * @param {NonLinearAds_34} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class NonLinearAds_34 extends VastElement {
  /**
   * @param {string} n
   * @param {Creative_12} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {{id: string, width: string, height: string, expandedWidth: string, expandedHeight: string, scalable: string, maintainAspectRatio: string, minSuggestedDuration: string, apiFramework: string}} attributes
   * @returns {NonLinear_35} 
   */
  attachNonLinear(attributes) {
    const newElem = new NonLinear_35('NonLinear', this, {"attrs":["id","width","height","expandedWidth","expandedHeight","scalable","maintainAspectRatio","minSuggestedDuration","apiFramework"]} /*: Infos*/, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @returns {TrackingEvents_39} 
   */
  attachTrackingEvents() {
    const newElem = new TrackingEvents_39('TrackingEvents', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {NonLinearClickThrough_41} 
   */
  attachNonLinearClickThrough(content) {
    const newElem = new NonLinearClickThrough_41('NonLinearClickThrough', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {NonLinearAds_34} 
   */
  addNonLinearClickThrough(content) {
    return this.attachNonLinearClickThrough(content).and();
  }
  /** 
   * @param {string} content
   * @returns {AdParameters_42} 
   */
  attachAdParameters(content) {
    const newElem = new AdParameters_42('AdParameters', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {NonLinearAds_34} 
   */
  addAdParameters(content) {
    return this.attachAdParameters(content).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Creative_12 extends VastElement {
  /**
   * @param {string} n
   * @param {Creatives_11} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @returns {Linear_13} 
   */
  attachLinear() {
    const newElem = new Linear_13('Linear', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @returns {CompanionAds_24} 
   */
  attachCompanionAds() {
    const newElem = new CompanionAds_24('CompanionAds', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @returns {NonLinearAds_34} 
   */
  attachNonLinearAds() {
    const newElem = new NonLinearAds_34('NonLinearAds', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Creatives_11 extends VastElement {
  /**
   * @param {string} n
   * @param {InLine_4} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {{id: string, sequence: string, adID: string}} attributes
   * @returns {Creative_12} 
   */
  attachCreative(attributes) {
    const newElem = new Creative_12('Creative', this, {"attrs":["id","sequence","adID"]} /*: Infos*/, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Extension_44 extends VastElement {
  /**
   * @param {string} n
   * @param {Extensions_43} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Extensions_43 extends VastElement {
  /**
   * @param {string} n
   * @param {InLine_4} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** @description required in Vast 2
   * @param {string} content
   * @param {{type: string}} attributes
   * @returns {Extension_44} 
   */
  attachExtension(content, attributes) {
    const newElem = new Extension_44('Extension', this, {"attrs":["type"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** @description required in Vast 2
   * @param {string} content
   * @param {{type: string}} attributes
   * @returns {Extensions_43} 
   */
  addExtension(content, attributes) {
    return this.attachExtension(content, attributes).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class InLine_4 extends VastElement {
  /**
   * @param {string} n
   * @param {Ad_3} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** @description required in Vast 2
   * @param {string} content
   * @param {{version: string}} attributes
   * @returns {AdSystem_5} 
   */
  attachAdSystem(content, attributes) {
    const newElem = new AdSystem_5('AdSystem', this, {"attrs":["version"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** @description required in Vast 2
   * @param {string} content
   * @param {{version: string}} attributes
   * @returns {InLine_4} 
   */
  addAdSystem(content, attributes) {
    return this.attachAdSystem(content, attributes).and();
  }
  /** @description required in Vast 2
   * @param {string} content
   * @returns {AdTitle_6} 
   */
  attachAdTitle(content) {
    const newElem = new AdTitle_6('AdTitle', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** @description required in Vast 2
   * @param {string} content
   * @returns {InLine_4} 
   */
  addAdTitle(content) {
    return this.attachAdTitle(content).and();
  }
  /** 
   * @param {string} content
   * @returns {Description_7} 
   */
  attachDescription(content) {
    const newElem = new Description_7('Description', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {InLine_4} 
   */
  addDescription(content) {
    return this.attachDescription(content).and();
  }
  /** 
   * @param {string} content
   * @returns {Survey_8} 
   */
  attachSurvey(content) {
    const newElem = new Survey_8('Survey', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {InLine_4} 
   */
  addSurvey(content) {
    return this.attachSurvey(content).and();
  }
  /** 
   * @param {string} content
   * @returns {Error_9} 
   */
  attachError(content) {
    const newElem = new Error_9('Error', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {InLine_4} 
   */
  addError(content) {
    return this.attachError(content).and();
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {Impression_10} 
   */
  attachImpression(content, attributes) {
    const newElem = new Impression_10('Impression', this, {"attrs":["id"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {InLine_4} 
   */
  addImpression(content, attributes) {
    return this.attachImpression(content, attributes).and();
  }
  /** @description required in Vast 2
   * @returns {Creatives_11} 
   */
  attachCreatives() {
    const newElem = new Creatives_11('Creatives', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @returns {Extensions_43} 
   */
  attachExtensions() {
    const newElem = new Extensions_43('Extensions', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class AdSystem_46 extends VastElement {
  /**
   * @param {string} n
   * @param {Wrapper_45} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class VASTAdTagURI_47 extends VastElement {
  /**
   * @param {string} n
   * @param {Wrapper_45} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Error_48 extends VastElement {
  /**
   * @param {string} n
   * @param {Wrapper_45} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Impression_49 extends VastElement {
  /**
   * @param {string} n
   * @param {Wrapper_45} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Tracking_54 extends VastElement {
  /**
   * @param {string} n
   * @param {TrackingEvents_53} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class TrackingEvents_53 extends VastElement {
  /**
   * @param {string} n
   * @param {Linear_52} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @param {{event:("creativeView"|"start"|"midpoint"|"firstQuartile"|"thirdQuartile"|"complete"|"mute"|"unmute"|"pause"|"rewind"|"resume"|"fullscreen"|"expand"|"collapse"|"acceptInvitation"|"close")}} attributes
   * @returns {Tracking_54} 
   */
  attachTracking(content, attributes) {
    const newElem = new Tracking_54('Tracking', this, {"attrs":["event"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{event:("creativeView"|"start"|"midpoint"|"firstQuartile"|"thirdQuartile"|"complete"|"mute"|"unmute"|"pause"|"rewind"|"resume"|"fullscreen"|"expand"|"collapse"|"acceptInvitation"|"close")}} attributes
   * @returns {TrackingEvents_53} 
   */
  addTracking(content, attributes) {
    return this.attachTracking(content, attributes).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class ClickThrough_56 extends VastElement {
  /**
   * @param {string} n
   * @param {VideoClicks_55} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class ClickTracking_57 extends VastElement {
  /**
   * @param {string} n
   * @param {VideoClicks_55} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class CustomClick_58 extends VastElement {
  /**
   * @param {string} n
   * @param {VideoClicks_55} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class VideoClicks_55 extends VastElement {
  /**
   * @param {string} n
   * @param {Linear_52} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @returns {ClickThrough_56} 
   */
  attachClickThrough(content) {
    const newElem = new ClickThrough_56('ClickThrough', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {VideoClicks_55} 
   */
  addClickThrough(content) {
    return this.attachClickThrough(content).and();
  }
  /** 
   * @param {string} content
   * @returns {ClickTracking_57} 
   */
  attachClickTracking(content) {
    const newElem = new ClickTracking_57('ClickTracking', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {VideoClicks_55} 
   */
  addClickTracking(content) {
    return this.attachClickTracking(content).and();
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {CustomClick_58} 
   */
  attachCustomClick(content, attributes) {
    const newElem = new CustomClick_58('CustomClick', this, {"attrs":["id"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {VideoClicks_55} 
   */
  addCustomClick(content, attributes) {
    return this.attachCustomClick(content, attributes).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Linear_52 extends VastElement {
  /**
   * @param {string} n
   * @param {Creative_51} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @returns {TrackingEvents_53} 
   */
  attachTrackingEvents() {
    const newElem = new TrackingEvents_53('TrackingEvents', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @returns {VideoClicks_55} 
   */
  attachVideoClicks() {
    const newElem = new VideoClicks_55('VideoClicks', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class StaticResource_61 extends VastElement {
  /**
   * @param {string} n
   * @param {Companion_60} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class IFrameResource_62 extends VastElement {
  /**
   * @param {string} n
   * @param {Companion_60} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class HTMLResource_63 extends VastElement {
  /**
   * @param {string} n
   * @param {Companion_60} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Tracking_65 extends VastElement {
  /**
   * @param {string} n
   * @param {TrackingEvents_64} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class TrackingEvents_64 extends VastElement {
  /**
   * @param {string} n
   * @param {Companion_60} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @param {{event:("creativeView")}} attributes
   * @returns {Tracking_65} 
   */
  attachTracking(content, attributes) {
    const newElem = new Tracking_65('Tracking', this, {"attrs":["event"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{event:("creativeView")}} attributes
   * @returns {TrackingEvents_64} 
   */
  addTracking(content, attributes) {
    return this.attachTracking(content, attributes).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class CompanionClickThrough_66 extends VastElement {
  /**
   * @param {string} n
   * @param {Companion_60} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class AltText_67 extends VastElement {
  /**
   * @param {string} n
   * @param {Companion_60} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class AdParameters_68 extends VastElement {
  /**
   * @param {string} n
   * @param {Companion_60} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Companion_60 extends VastElement {
  /**
   * @param {string} n
   * @param {CompanionAds_59} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @param {{creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash")}} attributes
   * @returns {StaticResource_61} 
   */
  attachStaticResource(content, attributes) {
    const newElem = new StaticResource_61('StaticResource', this, {"attrs":["creativeType"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash")}} attributes
   * @returns {Companion_60} 
   */
  addStaticResource(content, attributes) {
    return this.attachStaticResource(content, attributes).and();
  }
  /** 
   * @param {string} content
   * @returns {IFrameResource_62} 
   */
  attachIFrameResource(content) {
    const newElem = new IFrameResource_62('IFrameResource', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {Companion_60} 
   */
  addIFrameResource(content) {
    return this.attachIFrameResource(content).and();
  }
  /** 
   * @param {string} content
   * @returns {HTMLResource_63} 
   */
  attachHTMLResource(content) {
    const newElem = new HTMLResource_63('HTMLResource', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {Companion_60} 
   */
  addHTMLResource(content) {
    return this.attachHTMLResource(content).and();
  }
  /** 
   * @returns {TrackingEvents_64} 
   */
  attachTrackingEvents() {
    const newElem = new TrackingEvents_64('TrackingEvents', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {CompanionClickThrough_66} 
   */
  attachCompanionClickThrough(content) {
    const newElem = new CompanionClickThrough_66('CompanionClickThrough', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {Companion_60} 
   */
  addCompanionClickThrough(content) {
    return this.attachCompanionClickThrough(content).and();
  }
  /** 
   * @param {string} content
   * @returns {AltText_67} 
   */
  attachAltText(content) {
    const newElem = new AltText_67('AltText', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {Companion_60} 
   */
  addAltText(content) {
    return this.attachAltText(content).and();
  }
  /** 
   * @param {string} content
   * @returns {AdParameters_68} 
   */
  attachAdParameters(content) {
    const newElem = new AdParameters_68('AdParameters', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {Companion_60} 
   */
  addAdParameters(content) {
    return this.attachAdParameters(content).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class CompanionAds_59 extends VastElement {
  /**
   * @param {string} n
   * @param {Creative_51} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {{id: string, width: string, height: string, expandedWidth: string, expandedHeight: string, apiFramework: string}} attributes
   * @returns {Companion_60} 
   */
  attachCompanion(attributes) {
    const newElem = new Companion_60('Companion', this, {"attrs":["id","width","height","expandedWidth","expandedHeight","apiFramework"]} /*: Infos*/, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class StaticResource_71 extends VastElement {
  /**
   * @param {string} n
   * @param {NonLinear_70} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class IFrameResource_72 extends VastElement {
  /**
   * @param {string} n
   * @param {NonLinear_70} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class HTMLResource_73 extends VastElement {
  /**
   * @param {string} n
   * @param {NonLinear_70} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class NonLinear_70 extends VastElement {
  /**
   * @param {string} n
   * @param {NonLinearAds_69} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @param {{creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash")}} attributes
   * @returns {StaticResource_71} 
   */
  attachStaticResource(content, attributes) {
    const newElem = new StaticResource_71('StaticResource', this, {"attrs":["creativeType"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash")}} attributes
   * @returns {NonLinear_70} 
   */
  addStaticResource(content, attributes) {
    return this.attachStaticResource(content, attributes).and();
  }
  /** 
   * @param {string} content
   * @returns {IFrameResource_72} 
   */
  attachIFrameResource(content) {
    const newElem = new IFrameResource_72('IFrameResource', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {NonLinear_70} 
   */
  addIFrameResource(content) {
    return this.attachIFrameResource(content).and();
  }
  /** 
   * @param {string} content
   * @returns {HTMLResource_73} 
   */
  attachHTMLResource(content) {
    const newElem = new HTMLResource_73('HTMLResource', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {NonLinear_70} 
   */
  addHTMLResource(content) {
    return this.attachHTMLResource(content).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Tracking_75 extends VastElement {
  /**
   * @param {string} n
   * @param {TrackingEvents_74} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class TrackingEvents_74 extends VastElement {
  /**
   * @param {string} n
   * @param {NonLinearAds_69} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @param {{event:("creativeView"|"start"|"midpoint"|"firstQuartile"|"thirdQuartile"|"complete"|"mute"|"unmute"|"pause"|"rewind"|"resume"|"fullscreen"|"expand"|"collapse"|"acceptInvitation"|"close")}} attributes
   * @returns {Tracking_75} 
   */
  attachTracking(content, attributes) {
    const newElem = new Tracking_75('Tracking', this, {"attrs":["event"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{event:("creativeView"|"start"|"midpoint"|"firstQuartile"|"thirdQuartile"|"complete"|"mute"|"unmute"|"pause"|"rewind"|"resume"|"fullscreen"|"expand"|"collapse"|"acceptInvitation"|"close")}} attributes
   * @returns {TrackingEvents_74} 
   */
  addTracking(content, attributes) {
    return this.attachTracking(content, attributes).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class NonLinearAds_69 extends VastElement {
  /**
   * @param {string} n
   * @param {Creative_51} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {{id: string, width: string, height: string, expandedWidth: string, expandedHeight: string, scalable: string, maintainAspectRatio: string, minSuggestedDuration: string, apiFramework: string}} attributes
   * @returns {NonLinear_70} 
   */
  attachNonLinear(attributes) {
    const newElem = new NonLinear_70('NonLinear', this, {"attrs":["id","width","height","expandedWidth","expandedHeight","scalable","maintainAspectRatio","minSuggestedDuration","apiFramework"]} /*: Infos*/, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @returns {TrackingEvents_74} 
   */
  attachTrackingEvents() {
    const newElem = new TrackingEvents_74('TrackingEvents', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Creative_51 extends VastElement {
  /**
   * @param {string} n
   * @param {Creatives_50} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @returns {Linear_52} 
   */
  attachLinear() {
    const newElem = new Linear_52('Linear', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @returns {CompanionAds_59} 
   */
  attachCompanionAds() {
    const newElem = new CompanionAds_59('CompanionAds', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @returns {NonLinearAds_69} 
   */
  attachNonLinearAds() {
    const newElem = new NonLinearAds_69('NonLinearAds', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Creatives_50 extends VastElement {
  /**
   * @param {string} n
   * @param {Wrapper_45} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {{id: string, sequence: string, adID: string}} attributes
   * @returns {Creative_51} 
   */
  attachCreative(attributes) {
    const newElem = new Creative_51('Creative', this, {"attrs":["id","sequence","adID"]} /*: Infos*/, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Extension_77 extends VastElement {
  /**
   * @param {string} n
   * @param {Extensions_76} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Extensions_76 extends VastElement {
  /**
   * @param {string} n
   * @param {Wrapper_45} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** @description required in Vast 2
   * @param {string} content
   * @param {{type: string}} attributes
   * @returns {Extension_77} 
   */
  attachExtension(content, attributes) {
    const newElem = new Extension_77('Extension', this, {"attrs":["type"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** @description required in Vast 2
   * @param {string} content
   * @param {{type: string}} attributes
   * @returns {Extensions_76} 
   */
  addExtension(content, attributes) {
    return this.attachExtension(content, attributes).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Wrapper_45 extends VastElement {
  /**
   * @param {string} n
   * @param {Ad_3} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** @description required in Vast 2
   * @param {string} content
   * @param {{version: string}} attributes
   * @returns {AdSystem_46} 
   */
  attachAdSystem(content, attributes) {
    const newElem = new AdSystem_46('AdSystem', this, {"attrs":["version"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** @description required in Vast 2
   * @param {string} content
   * @param {{version: string}} attributes
   * @returns {Wrapper_45} 
   */
  addAdSystem(content, attributes) {
    return this.attachAdSystem(content, attributes).and();
  }
  /** @description required in Vast 2
   * @param {string} content
   * @returns {VASTAdTagURI_47} 
   */
  attachVASTAdTagURI(content) {
    const newElem = new VASTAdTagURI_47('VASTAdTagURI', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** @description required in Vast 2
   * @param {string} content
   * @returns {Wrapper_45} 
   */
  addVASTAdTagURI(content) {
    return this.attachVASTAdTagURI(content).and();
  }
  /** 
   * @param {string} content
   * @returns {Error_48} 
   */
  attachError(content) {
    const newElem = new Error_48('Error', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {Wrapper_45} 
   */
  addError(content) {
    return this.attachError(content).and();
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {Impression_49} 
   */
  attachImpression(content, attributes) {
    const newElem = new Impression_49('Impression', this, {"attrs":["id"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {Wrapper_45} 
   */
  addImpression(content, attributes) {
    return this.attachImpression(content, attributes).and();
  }
  /** @description required in Vast 2
   * @returns {Creatives_50} 
   */
  attachCreatives() {
    const newElem = new Creatives_50('Creatives', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @returns {Extensions_76} 
   */
  attachExtensions() {
    const newElem = new Extensions_76('Extensions', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Ad_3 extends VastElement {
  /**
   * @param {string} n
   * @param {VAST_2} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @returns {InLine_4} 
   */
  attachInLine() {
    const newElem = new InLine_4('InLine', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @returns {Wrapper_45} 
   */
  attachWrapper() {
    const newElem = new Wrapper_45('Wrapper', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class VAST_2 extends VastElement {
  /**
   * @param {string} n
   * @param {apiv2} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {{id: string}} attributes
   * @returns {Ad_3} 
   */
  attachAd(attributes) {
    const newElem = new Ad_3('Ad', this, {"attrs":["id"]} /*: Infos*/, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class apiv2 extends VastElement {
  /**
   * @param {string} n
   * @param {apiv2} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {{version:("2.0")}} attributes
   * @returns {VAST_2} 
   */
  attachVAST(attributes) {
    const newElem = new VAST_2('VAST', this, {"attrs":["version"]} /*: Infos*/, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  and() { return this.parent || this; }
  back() { return this.and().and(); }
}


const validator = {"only":{"VAST":{"alo":{"Ad":{"uniq":{"InLine":{"required":{"AdSystem":{},"AdTitle":{},"Creatives":{"alo":{"Creative":{"uniq":{"Linear":{"required":{"Duration":{},"MediaFiles":{"alo":{"MediaFile":{"attrsRequired":{"delivery":["progressive","streaming"],"type":null,"width":null,"height":null}}}}},"follow":{"TrackingEvents":{"follow":{"Tracking":{"attrsRequired":{"event":["creativeView","start","midpoint","firstQuartile","thirdQuartile","complete","mute","unmute","pause","rewind","resume","fullscreen","expand","collapse","acceptInvitation","close"]}}}},"AdParameters":{},"VideoClicks":{"follow":{"ClickThrough":{},"ClickTracking":{},"CustomClick":{}}}}},"CompanionAds":{"follow":{"Companion":{"alo":{"StaticResource":{"attrsRequired":{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}},"IFrameResource":{},"HTMLResource":{}},"follow":{"TrackingEvents":{"follow":{"Tracking":{"attrsRequired":{"event":["creativeView"]}}}},"CompanionClickThrough":{},"AltText":{},"AdParameters":{}},"attrsRequired":{"width":null,"height":null}}}},"NonLinearAds":{"follow":{"NonLinear":{"alo":{"StaticResource":{"attrsRequired":{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}},"IFrameResource":{},"HTMLResource":{}},"attrsRequired":{"width":null,"height":null}},"TrackingEvents":{"follow":{"Tracking":{"attrsRequired":{"event":["creativeView","start","midpoint","firstQuartile","thirdQuartile","complete","mute","unmute","pause","rewind","resume","fullscreen","expand","collapse","acceptInvitation","close"]}}}},"NonLinearClickThrough":{},"AdParameters":{}}}}}}}},"alo":{"Impression":{}},"follow":{"Description":{},"Survey":{},"Error":{},"Extensions":{"required":{"Extension":{}}}}},"Wrapper":{"required":{"AdSystem":{},"VASTAdTagURI":{},"Creatives":{"follow":{"Creative":{"uniq":{"Linear":{"follow":{"TrackingEvents":{"follow":{"Tracking":{"attrsRequired":{"event":["creativeView","start","midpoint","firstQuartile","thirdQuartile","complete","mute","unmute","pause","rewind","resume","fullscreen","expand","collapse","acceptInvitation","close"]}}}},"VideoClicks":{"follow":{"ClickThrough":{},"ClickTracking":{},"CustomClick":{}}}}},"CompanionAds":{"follow":{"Companion":{"alo":{"StaticResource":{"attrsRequired":{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}},"IFrameResource":{},"HTMLResource":{}},"follow":{"TrackingEvents":{"follow":{"Tracking":{"attrsRequired":{"event":["creativeView"]}}}},"CompanionClickThrough":{},"AltText":{},"AdParameters":{}},"attrsRequired":{"width":null,"height":null}}}},"NonLinearAds":{"follow":{"NonLinear":{"alo":{"StaticResource":{"attrsRequired":{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}},"IFrameResource":{},"HTMLResource":{}},"attrsRequired":{"width":null,"height":null}},"TrackingEvents":{"follow":{"Tracking":{"attrsRequired":{"event":["creativeView","start","midpoint","firstQuartile","thirdQuartile","complete","mute","unmute","pause","rewind","resume","fullscreen","expand","collapse","acceptInvitation","close"]}}}}}}}}}}},"alo":{"Impression":{}},"follow":{"Error":{},"Extensions":{"required":{"Extension":{}}}}}},"attrsRequired":{"id":null}}},"attrsRequired":{"version":["2.0"]}}}};

module.exports = {
  apiv2,
  validator
};
