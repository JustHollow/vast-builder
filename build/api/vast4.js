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

class Error_5 extends VastElement {
  /**
   * @param {string} n
   * @param {VAST_4} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class AdSystem_8 extends VastElement {
  /**
   * @param {string} n
   * @param {InLine_7} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class AdTitle_9 extends VastElement {
  /**
   * @param {string} n
   * @param {InLine_7} p
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
   * @param {InLine_7} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Category_11 extends VastElement {
  /**
   * @param {string} n
   * @param {InLine_7} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Description_12 extends VastElement {
  /**
   * @param {string} n
   * @param {InLine_7} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Advertiser_13 extends VastElement {
  /**
   * @param {string} n
   * @param {InLine_7} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Pricing_14 extends VastElement {
  /**
   * @param {string} n
   * @param {InLine_7} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Survey_15 extends VastElement {
  /**
   * @param {string} n
   * @param {InLine_7} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Error_16 extends VastElement {
  /**
   * @param {string} n
   * @param {InLine_7} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Viewable_18 extends VastElement {
  /**
   * @param {string} n
   * @param {ViewableImpression_17} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class NotViewable_19 extends VastElement {
  /**
   * @param {string} n
   * @param {ViewableImpression_17} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class ViewUndetermined_20 extends VastElement {
  /**
   * @param {string} n
   * @param {ViewableImpression_17} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class ViewableImpression_17 extends VastElement {
  /**
   * @param {string} n
   * @param {InLine_7} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @returns {Viewable_18} 
   */
  attachViewable(content) {
    const newElem = new Viewable_18('Viewable', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {ViewableImpression_17} 
   */
  addViewable(content) {
    return this.attachViewable(content).and();
  }
  /** 
   * @param {string} content
   * @returns {NotViewable_19} 
   */
  attachNotViewable(content) {
    const newElem = new NotViewable_19('NotViewable', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {ViewableImpression_17} 
   */
  addNotViewable(content) {
    return this.attachNotViewable(content).and();
  }
  /** 
   * @param {string} content
   * @returns {ViewUndetermined_20} 
   */
  attachViewUndetermined(content) {
    const newElem = new ViewUndetermined_20('ViewUndetermined', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {ViewableImpression_17} 
   */
  addViewUndetermined(content) {
    return this.attachViewUndetermined(content).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class JavaScriptResource_23 extends VastElement {
  /**
   * @param {string} n
   * @param {Verification_22} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class FlashResource_24 extends VastElement {
  /**
   * @param {string} n
   * @param {Verification_22} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class ViewableImpression_25 extends VastElement {
  /**
   * @param {string} n
   * @param {Verification_22} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Verification_22 extends VastElement {
  /**
   * @param {string} n
   * @param {AdVerifications_21} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @param {{apiFramework: string}} attributes
   * @returns {JavaScriptResource_23} 
   */
  attachJavaScriptResource(content, attributes) {
    const newElem = new JavaScriptResource_23('JavaScriptResource', this, {"attrs":["apiFramework"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{apiFramework: string}} attributes
   * @returns {Verification_22} 
   */
  addJavaScriptResource(content, attributes) {
    return this.attachJavaScriptResource(content, attributes).and();
  }
  /** 
   * @param {string} content
   * @param {{apiFramework: string}} attributes
   * @returns {FlashResource_24} 
   */
  attachFlashResource(content, attributes) {
    const newElem = new FlashResource_24('FlashResource', this, {"attrs":["apiFramework"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{apiFramework: string}} attributes
   * @returns {Verification_22} 
   */
  addFlashResource(content, attributes) {
    return this.attachFlashResource(content, attributes).and();
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {ViewableImpression_25} 
   */
  attachViewableImpression(content, attributes) {
    const newElem = new ViewableImpression_25('ViewableImpression', this, {"attrs":["id"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {Verification_22} 
   */
  addViewableImpression(content, attributes) {
    return this.attachViewableImpression(content, attributes).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class AdVerifications_21 extends VastElement {
  /**
   * @param {string} n
   * @param {InLine_7} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {{vendor: string}} attributes
   * @returns {Verification_22} 
   */
  attachVerification(attributes) {
    const newElem = new Verification_22('Verification', this, {"attrs":["vendor"]} /*: Infos*/, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Extension_27 extends VastElement {
  /**
   * @param {string} n
   * @param {Extensions_26} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Extensions_26 extends VastElement {
  /**
   * @param {string} n
   * @param {InLine_7} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** @description required in Vast 4
   * @param {string} content
   * @param {{type: string}} attributes
   * @returns {Extension_27} 
   */
  attachExtension(content, attributes) {
    const newElem = new Extension_27('Extension', this, {"attrs":["type"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** @description required in Vast 4
   * @param {string} content
   * @param {{type: string}} attributes
   * @returns {Extensions_26} 
   */
  addExtension(content, attributes) {
    return this.attachExtension(content, attributes).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class UniversalAdId_30 extends VastElement {
  /**
   * @param {string} n
   * @param {Creative_29} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class CreativeExtension_32 extends VastElement {
  /**
   * @param {string} n
   * @param {CreativeExtensions_31} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class CreativeExtensions_31 extends VastElement {
  /**
   * @param {string} n
   * @param {Creative_29} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @param {{type: string}} attributes
   * @returns {CreativeExtension_32} 
   */
  attachCreativeExtension(content, attributes) {
    const newElem = new CreativeExtension_32('CreativeExtension', this, {"attrs":["type"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{type: string}} attributes
   * @returns {CreativeExtensions_31} 
   */
  addCreativeExtension(content, attributes) {
    return this.attachCreativeExtension(content, attributes).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Duration_34 extends VastElement {
  /**
   * @param {string} n
   * @param {Linear_33} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class AdParameters_35 extends VastElement {
  /**
   * @param {string} n
   * @param {Linear_33} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Mezzanine_37 extends VastElement {
  /**
   * @param {string} n
   * @param {MediaFiles_36} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class MediaFile_38 extends VastElement {
  /**
   * @param {string} n
   * @param {MediaFiles_36} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class InteractiveCreativeFile_39 extends VastElement {
  /**
   * @param {string} n
   * @param {MediaFiles_36} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class MediaFiles_36 extends VastElement {
  /**
   * @param {string} n
   * @param {Linear_33} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @returns {Mezzanine_37} 
   */
  attachMezzanine(content) {
    const newElem = new Mezzanine_37('Mezzanine', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {MediaFiles_36} 
   */
  addMezzanine(content) {
    return this.attachMezzanine(content).and();
  }
  /** 
   * @param {string} content
   * @param {{id: string, delivery:("progressive"|"streaming"), type: string, bitrate: string, minBitrate: string, maxBitrate: string, width: string, height: string, scalable: string, mantainAspectRatio: string, codec: string, apiFramework: string}} attributes
   * @returns {MediaFile_38} 
   */
  attachMediaFile(content, attributes) {
    const newElem = new MediaFile_38('MediaFile', this, {"attrs":["id","delivery","type","bitrate","minBitrate","maxBitrate","width","height","scalable","mantainAspectRatio","codec","apiFramework"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{id: string, delivery:("progressive"|"streaming"), type: string, bitrate: string, minBitrate: string, maxBitrate: string, width: string, height: string, scalable: string, mantainAspectRatio: string, codec: string, apiFramework: string}} attributes
   * @returns {MediaFiles_36} 
   */
  addMediaFile(content, attributes) {
    return this.attachMediaFile(content, attributes).and();
  }
  /** 
   * @param {string} content
   * @returns {InteractiveCreativeFile_39} 
   */
  attachInteractiveCreativeFile(content) {
    const newElem = new InteractiveCreativeFile_39('InteractiveCreativeFile', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {MediaFiles_36} 
   */
  addInteractiveCreativeFile(content) {
    return this.attachInteractiveCreativeFile(content).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class ClickThrough_41 extends VastElement {
  /**
   * @param {string} n
   * @param {VideoClicks_40} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class ClickTracking_42 extends VastElement {
  /**
   * @param {string} n
   * @param {VideoClicks_40} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class CustomClick_43 extends VastElement {
  /**
   * @param {string} n
   * @param {VideoClicks_40} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class VideoClicks_40 extends VastElement {
  /**
   * @param {string} n
   * @param {Linear_33} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {ClickThrough_41} 
   */
  attachClickThrough(content, attributes) {
    const newElem = new ClickThrough_41('ClickThrough', this, {"attrs":["id"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {VideoClicks_40} 
   */
  addClickThrough(content, attributes) {
    return this.attachClickThrough(content, attributes).and();
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {ClickTracking_42} 
   */
  attachClickTracking(content, attributes) {
    const newElem = new ClickTracking_42('ClickTracking', this, {"attrs":["id"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {VideoClicks_40} 
   */
  addClickTracking(content, attributes) {
    return this.attachClickTracking(content, attributes).and();
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {CustomClick_43} 
   */
  attachCustomClick(content, attributes) {
    const newElem = new CustomClick_43('CustomClick', this, {"attrs":["id"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {VideoClicks_40} 
   */
  addCustomClick(content, attributes) {
    return this.attachCustomClick(content, attributes).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Tracking_45 extends VastElement {
  /**
   * @param {string} n
   * @param {TrackingEvents_44} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class TrackingEvents_44 extends VastElement {
  /**
   * @param {string} n
   * @param {Linear_33} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @param {{offset: string, event:("mute"|"unmute"|"pause"|"resume"|"rewind"|"skip"|"playerExpand"|"playerCollapse"|"otherAdInteraction"|"start"|"firstQuartile"|"midpoint"|"thirdQuartile"|"complete"|"acceptInvitationLinear"|"timeSpentViewing"|"progress")}} attributes
   * @returns {Tracking_45} 
   */
  attachTracking(content, attributes) {
    const newElem = new Tracking_45('Tracking', this, {"attrs":["offset","event"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{offset: string, event:("mute"|"unmute"|"pause"|"resume"|"rewind"|"skip"|"playerExpand"|"playerCollapse"|"otherAdInteraction"|"start"|"firstQuartile"|"midpoint"|"thirdQuartile"|"complete"|"acceptInvitationLinear"|"timeSpentViewing"|"progress")}} attributes
   * @returns {TrackingEvents_44} 
   */
  addTracking(content, attributes) {
    return this.attachTracking(content, attributes).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class StaticResource_48 extends VastElement {
  /**
   * @param {string} n
   * @param {Icon_47} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class IFrameResource_49 extends VastElement {
  /**
   * @param {string} n
   * @param {Icon_47} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class HTMLResource_50 extends VastElement {
  /**
   * @param {string} n
   * @param {Icon_47} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class IconClickThrough_52 extends VastElement {
  /**
   * @param {string} n
   * @param {IconClicks_51} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class IconClickTracking_53 extends VastElement {
  /**
   * @param {string} n
   * @param {IconClicks_51} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class IconClicks_51 extends VastElement {
  /**
   * @param {string} n
   * @param {Icon_47} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @returns {IconClickThrough_52} 
   */
  attachIconClickThrough(content) {
    const newElem = new IconClickThrough_52('IconClickThrough', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {IconClicks_51} 
   */
  addIconClickThrough(content) {
    return this.attachIconClickThrough(content).and();
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {IconClickTracking_53} 
   */
  attachIconClickTracking(content, attributes) {
    const newElem = new IconClickTracking_53('IconClickTracking', this, {"attrs":["id"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {IconClicks_51} 
   */
  addIconClickTracking(content, attributes) {
    return this.attachIconClickTracking(content, attributes).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class IconViewTracking_54 extends VastElement {
  /**
   * @param {string} n
   * @param {Icon_47} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Icon_47 extends VastElement {
  /**
   * @param {string} n
   * @param {Icons_46} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @param {{creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash")}} attributes
   * @returns {StaticResource_48} 
   */
  attachStaticResource(content, attributes) {
    const newElem = new StaticResource_48('StaticResource', this, {"attrs":["creativeType"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash")}} attributes
   * @returns {Icon_47} 
   */
  addStaticResource(content, attributes) {
    return this.attachStaticResource(content, attributes).and();
  }
  /** 
   * @param {string} content
   * @returns {IFrameResource_49} 
   */
  attachIFrameResource(content) {
    const newElem = new IFrameResource_49('IFrameResource', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {Icon_47} 
   */
  addIFrameResource(content) {
    return this.attachIFrameResource(content).and();
  }
  /** 
   * @param {string} content
   * @returns {HTMLResource_50} 
   */
  attachHTMLResource(content) {
    const newElem = new HTMLResource_50('HTMLResource', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {Icon_47} 
   */
  addHTMLResource(content) {
    return this.attachHTMLResource(content).and();
  }
  /** 
   * @returns {IconClicks_51} 
   */
  attachIconClicks() {
    const newElem = new IconClicks_51('IconClicks', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {IconViewTracking_54} 
   */
  attachIconViewTracking(content) {
    const newElem = new IconViewTracking_54('IconViewTracking', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {Icon_47} 
   */
  addIconViewTracking(content) {
    return this.attachIconViewTracking(content).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Icons_46 extends VastElement {
  /**
   * @param {string} n
   * @param {Linear_33} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {{program: string, width: string, height: string, xPosition: string, yPosition: string, duration: string, offset: string, apiFramework: string, pxratio: string}} attributes
   * @returns {Icon_47} 
   */
  attachIcon(attributes) {
    const newElem = new Icon_47('Icon', this, {"attrs":["program","width","height","xPosition","yPosition","duration","offset","apiFramework","pxratio"]} /*: Infos*/, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Linear_33 extends VastElement {
  /**
   * @param {string} n
   * @param {Creative_29} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** @description required in Vast 4
   * @param {string} content
   * @returns {Duration_34} 
   */
  attachDuration(content) {
    const newElem = new Duration_34('Duration', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** @description required in Vast 4
   * @param {string} content
   * @returns {Linear_33} 
   */
  addDuration(content) {
    return this.attachDuration(content).and();
  }
  /** 
   * @param {string} content
   * @param {{xmlEncoded: string}} attributes
   * @returns {AdParameters_35} 
   */
  attachAdParameters(content, attributes) {
    const newElem = new AdParameters_35('AdParameters', this, {"attrs":["xmlEncoded"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{xmlEncoded: string}} attributes
   * @returns {Linear_33} 
   */
  addAdParameters(content, attributes) {
    return this.attachAdParameters(content, attributes).and();
  }
  /** @description required in Vast 4
   * @returns {MediaFiles_36} 
   */
  attachMediaFiles() {
    const newElem = new MediaFiles_36('MediaFiles', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @returns {VideoClicks_40} 
   */
  attachVideoClicks() {
    const newElem = new VideoClicks_40('VideoClicks', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @returns {TrackingEvents_44} 
   */
  attachTrackingEvents() {
    const newElem = new TrackingEvents_44('TrackingEvents', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @returns {Icons_46} 
   */
  attachIcons() {
    const newElem = new Icons_46('Icons', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class NonLinearClickThrough_57 extends VastElement {
  /**
   * @param {string} n
   * @param {NonLinear_56} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class NonLinearClickTracking_58 extends VastElement {
  /**
   * @param {string} n
   * @param {NonLinear_56} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class NonLinear_56 extends VastElement {
  /**
   * @param {string} n
   * @param {NonLinearAds_55} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @returns {NonLinearClickThrough_57} 
   */
  attachNonLinearClickThrough(content) {
    const newElem = new NonLinearClickThrough_57('NonLinearClickThrough', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {NonLinear_56} 
   */
  addNonLinearClickThrough(content) {
    return this.attachNonLinearClickThrough(content).and();
  }
  /** 
   * @param {string} content
   * @returns {NonLinearClickTracking_58} 
   */
  attachNonLinearClickTracking(content) {
    const newElem = new NonLinearClickTracking_58('NonLinearClickTracking', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {NonLinear_56} 
   */
  addNonLinearClickTracking(content) {
    return this.attachNonLinearClickTracking(content).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Tracking_60 extends VastElement {
  /**
   * @param {string} n
   * @param {TrackingEvents_59} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class TrackingEvents_59 extends VastElement {
  /**
   * @param {string} n
   * @param {NonLinearAds_55} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @param {{event:("mute"|"unmute"|"pause"|"resume"|"rewind"|"skip"|"playerExpand"|"playerCollapse"|"otherAdInteraction"|"creativeView"|"acceptInvitation"|"adExpand"|"adCollapse"|"minimize"|"close"|"overlayViewDuration")}} attributes
   * @returns {Tracking_60} 
   */
  attachTracking(content, attributes) {
    const newElem = new Tracking_60('Tracking', this, {"attrs":["event"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{event:("mute"|"unmute"|"pause"|"resume"|"rewind"|"skip"|"playerExpand"|"playerCollapse"|"otherAdInteraction"|"creativeView"|"acceptInvitation"|"adExpand"|"adCollapse"|"minimize"|"close"|"overlayViewDuration")}} attributes
   * @returns {TrackingEvents_59} 
   */
  addTracking(content, attributes) {
    return this.attachTracking(content, attributes).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class NonLinearAds_55 extends VastElement {
  /**
   * @param {string} n
   * @param {Creative_29} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @returns {NonLinear_56} 
   */
  attachNonLinear() {
    const newElem = new NonLinear_56('NonLinear', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @returns {TrackingEvents_59} 
   */
  attachTrackingEvents() {
    const newElem = new TrackingEvents_59('TrackingEvents', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class StaticResource_63 extends VastElement {
  /**
   * @param {string} n
   * @param {Companion_62} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class IFrameResource_64 extends VastElement {
  /**
   * @param {string} n
   * @param {Companion_62} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class HTMLResource_65 extends VastElement {
  /**
   * @param {string} n
   * @param {Companion_62} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class AdParameters_66 extends VastElement {
  /**
   * @param {string} n
   * @param {Companion_62} p
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
   * @param {Companion_62} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class CompanionClickThrough_68 extends VastElement {
  /**
   * @param {string} n
   * @param {Companion_62} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class CompanionClickTracking_69 extends VastElement {
  /**
   * @param {string} n
   * @param {Companion_62} p
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
   * @param {Companion_62} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @param {{event:("creativeView")}} attributes
   * @returns {Tracking_71} 
   */
  attachTracking(content, attributes) {
    const newElem = new Tracking_71('Tracking', this, {"attrs":["event"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{event:("creativeView")}} attributes
   * @returns {TrackingEvents_70} 
   */
  addTracking(content, attributes) {
    return this.attachTracking(content, attributes).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Companion_62 extends VastElement {
  /**
   * @param {string} n
   * @param {CompanionAds_61} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @param {{creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash")}} attributes
   * @returns {StaticResource_63} 
   */
  attachStaticResource(content, attributes) {
    const newElem = new StaticResource_63('StaticResource', this, {"attrs":["creativeType"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash")}} attributes
   * @returns {Companion_62} 
   */
  addStaticResource(content, attributes) {
    return this.attachStaticResource(content, attributes).and();
  }
  /** 
   * @param {string} content
   * @returns {IFrameResource_64} 
   */
  attachIFrameResource(content) {
    const newElem = new IFrameResource_64('IFrameResource', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {Companion_62} 
   */
  addIFrameResource(content) {
    return this.attachIFrameResource(content).and();
  }
  /** 
   * @param {string} content
   * @returns {HTMLResource_65} 
   */
  attachHTMLResource(content) {
    const newElem = new HTMLResource_65('HTMLResource', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {Companion_62} 
   */
  addHTMLResource(content) {
    return this.attachHTMLResource(content).and();
  }
  /** 
   * @param {string} content
   * @param {{xmlEncoded: string}} attributes
   * @returns {AdParameters_66} 
   */
  attachAdParameters(content, attributes) {
    const newElem = new AdParameters_66('AdParameters', this, {"attrs":["xmlEncoded"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{xmlEncoded: string}} attributes
   * @returns {Companion_62} 
   */
  addAdParameters(content, attributes) {
    return this.attachAdParameters(content, attributes).and();
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
   * @returns {Companion_62} 
   */
  addAltText(content) {
    return this.attachAltText(content).and();
  }
  /** 
   * @param {string} content
   * @returns {CompanionClickThrough_68} 
   */
  attachCompanionClickThrough(content) {
    const newElem = new CompanionClickThrough_68('CompanionClickThrough', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {Companion_62} 
   */
  addCompanionClickThrough(content) {
    return this.attachCompanionClickThrough(content).and();
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {CompanionClickTracking_69} 
   */
  attachCompanionClickTracking(content, attributes) {
    const newElem = new CompanionClickTracking_69('CompanionClickTracking', this, {"attrs":["id"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {Companion_62} 
   */
  addCompanionClickTracking(content, attributes) {
    return this.attachCompanionClickTracking(content, attributes).and();
  }
  /** 
   * @returns {TrackingEvents_70} 
   */
  attachTrackingEvents() {
    const newElem = new TrackingEvents_70('TrackingEvents', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class CompanionAds_61 extends VastElement {
  /**
   * @param {string} n
   * @param {Creative_29} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {{id: string, width: string, height: string, assetWidth: string, assetHeight: string, expandedWidth: string, expandedHeight: string, apiFramework: string, adSlotID: string, pxratio: string}} attributes
   * @returns {Companion_62} 
   */
  attachCompanion(attributes) {
    const newElem = new Companion_62('Companion', this, {"attrs":["id","width","height","assetWidth","assetHeight","expandedWidth","expandedHeight","apiFramework","adSlotID","pxratio"]} /*: Infos*/, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Creative_29 extends VastElement {
  /**
   * @param {string} n
   * @param {Creatives_28} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** @description required in Vast 4
   * @param {string} content
   * @param {{idRegistry: string, idValue: string}} attributes
   * @returns {UniversalAdId_30} 
   */
  attachUniversalAdId(content, attributes) {
    const newElem = new UniversalAdId_30('UniversalAdId', this, {"attrs":["idRegistry","idValue"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** @description required in Vast 4
   * @param {string} content
   * @param {{idRegistry: string, idValue: string}} attributes
   * @returns {Creative_29} 
   */
  addUniversalAdId(content, attributes) {
    return this.attachUniversalAdId(content, attributes).and();
  }
  /** 
   * @returns {CreativeExtensions_31} 
   */
  attachCreativeExtensions() {
    const newElem = new CreativeExtensions_31('CreativeExtensions', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {{skipoffset: string}} attributes
   * @returns {Linear_33} 
   */
  attachLinear(attributes) {
    const newElem = new Linear_33('Linear', this, {"attrs":["skipoffset"]} /*: Infos*/, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @returns {NonLinearAds_55} 
   */
  attachNonLinearAds() {
    const newElem = new NonLinearAds_55('NonLinearAds', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {{required:("all"|"any"|"none")}} attributes
   * @returns {CompanionAds_61} 
   */
  attachCompanionAds(attributes) {
    const newElem = new CompanionAds_61('CompanionAds', this, {"attrs":["required"]} /*: Infos*/, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Creatives_28 extends VastElement {
  /**
   * @param {string} n
   * @param {InLine_7} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {{id: string, sequence: string, adId: string, apiFramework: string}} attributes
   * @returns {Creative_29} 
   */
  attachCreative(attributes) {
    const newElem = new Creative_29('Creative', this, {"attrs":["id","sequence","adId","apiFramework"]} /*: Infos*/, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class InLine_7 extends VastElement {
  /**
   * @param {string} n
   * @param {Ad_6} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** @description required in Vast 4
   * @param {string} content
   * @param {{version: string}} attributes
   * @returns {AdSystem_8} 
   */
  attachAdSystem(content, attributes) {
    const newElem = new AdSystem_8('AdSystem', this, {"attrs":["version"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** @description required in Vast 4
   * @param {string} content
   * @param {{version: string}} attributes
   * @returns {InLine_7} 
   */
  addAdSystem(content, attributes) {
    return this.attachAdSystem(content, attributes).and();
  }
  /** @description required in Vast 4
   * @param {string} content
   * @returns {AdTitle_9} 
   */
  attachAdTitle(content) {
    const newElem = new AdTitle_9('AdTitle', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** @description required in Vast 4
   * @param {string} content
   * @returns {InLine_7} 
   */
  addAdTitle(content) {
    return this.attachAdTitle(content).and();
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
   * @returns {InLine_7} 
   */
  addImpression(content, attributes) {
    return this.attachImpression(content, attributes).and();
  }
  /** 
   * @param {string} content
   * @param {{authority: string}} attributes
   * @returns {Category_11} 
   */
  attachCategory(content, attributes) {
    const newElem = new Category_11('Category', this, {"attrs":["authority"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{authority: string}} attributes
   * @returns {InLine_7} 
   */
  addCategory(content, attributes) {
    return this.attachCategory(content, attributes).and();
  }
  /** 
   * @param {string} content
   * @returns {Description_12} 
   */
  attachDescription(content) {
    const newElem = new Description_12('Description', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {InLine_7} 
   */
  addDescription(content) {
    return this.attachDescription(content).and();
  }
  /** 
   * @param {string} content
   * @returns {Advertiser_13} 
   */
  attachAdvertiser(content) {
    const newElem = new Advertiser_13('Advertiser', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {InLine_7} 
   */
  addAdvertiser(content) {
    return this.attachAdvertiser(content).and();
  }
  /** 
   * @param {string} content
   * @param {{currency: string, model:("CPM"|"CPC"|"CPE"|"CPV")}} attributes
   * @returns {Pricing_14} 
   */
  attachPricing(content, attributes) {
    const newElem = new Pricing_14('Pricing', this, {"attrs":["currency","model"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{currency: string, model:("CPM"|"CPC"|"CPE"|"CPV")}} attributes
   * @returns {InLine_7} 
   */
  addPricing(content, attributes) {
    return this.attachPricing(content, attributes).and();
  }
  /** 
   * @param {string} content
   * @param {{type: string}} attributes
   * @returns {Survey_15} 
   */
  attachSurvey(content, attributes) {
    const newElem = new Survey_15('Survey', this, {"attrs":["type"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{type: string}} attributes
   * @returns {InLine_7} 
   */
  addSurvey(content, attributes) {
    return this.attachSurvey(content, attributes).and();
  }
  /** 
   * @param {string} content
   * @returns {Error_16} 
   */
  attachError(content) {
    const newElem = new Error_16('Error', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {InLine_7} 
   */
  addError(content) {
    return this.attachError(content).and();
  }
  /** 
   * @param {{id: string}} attributes
   * @returns {ViewableImpression_17} 
   */
  attachViewableImpression(attributes) {
    const newElem = new ViewableImpression_17('ViewableImpression', this, {"attrs":["id"]} /*: Infos*/, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @returns {AdVerifications_21} 
   */
  attachAdVerifications() {
    const newElem = new AdVerifications_21('AdVerifications', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @returns {Extensions_26} 
   */
  attachExtensions() {
    const newElem = new Extensions_26('Extensions', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  /** @description required in Vast 4
   * @returns {Creatives_28} 
   */
  attachCreatives() {
    const newElem = new Creatives_28('Creatives', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Impression_73 extends VastElement {
  /**
   * @param {string} n
   * @param {Wrapper_72} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class VASTAdTagURI_74 extends VastElement {
  /**
   * @param {string} n
   * @param {Wrapper_72} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class AdSystem_75 extends VastElement {
  /**
   * @param {string} n
   * @param {Wrapper_72} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Pricing_76 extends VastElement {
  /**
   * @param {string} n
   * @param {Wrapper_72} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Error_77 extends VastElement {
  /**
   * @param {string} n
   * @param {Wrapper_72} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Viewable_79 extends VastElement {
  /**
   * @param {string} n
   * @param {ViewableImpression_78} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class NotViewable_80 extends VastElement {
  /**
   * @param {string} n
   * @param {ViewableImpression_78} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class ViewUndetermined_81 extends VastElement {
  /**
   * @param {string} n
   * @param {ViewableImpression_78} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class ViewableImpression_78 extends VastElement {
  /**
   * @param {string} n
   * @param {Wrapper_72} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @returns {Viewable_79} 
   */
  attachViewable(content) {
    const newElem = new Viewable_79('Viewable', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {ViewableImpression_78} 
   */
  addViewable(content) {
    return this.attachViewable(content).and();
  }
  /** 
   * @param {string} content
   * @returns {NotViewable_80} 
   */
  attachNotViewable(content) {
    const newElem = new NotViewable_80('NotViewable', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {ViewableImpression_78} 
   */
  addNotViewable(content) {
    return this.attachNotViewable(content).and();
  }
  /** 
   * @param {string} content
   * @returns {ViewUndetermined_81} 
   */
  attachViewUndetermined(content) {
    const newElem = new ViewUndetermined_81('ViewUndetermined', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {ViewableImpression_78} 
   */
  addViewUndetermined(content) {
    return this.attachViewUndetermined(content).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class ViewableImpression_84 extends VastElement {
  /**
   * @param {string} n
   * @param {Verification_83} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Verification_83 extends VastElement {
  /**
   * @param {string} n
   * @param {AdVerifications_82} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {ViewableImpression_84} 
   */
  attachViewableImpression(content, attributes) {
    const newElem = new ViewableImpression_84('ViewableImpression', this, {"attrs":["id"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {Verification_83} 
   */
  addViewableImpression(content, attributes) {
    return this.attachViewableImpression(content, attributes).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class AdVerifications_82 extends VastElement {
  /**
   * @param {string} n
   * @param {Wrapper_72} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {{vendor: string}} attributes
   * @returns {Verification_83} 
   */
  attachVerification(attributes) {
    const newElem = new Verification_83('Verification', this, {"attrs":["vendor"]} /*: Infos*/, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Extension_86 extends VastElement {
  /**
   * @param {string} n
   * @param {Extensions_85} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Extensions_85 extends VastElement {
  /**
   * @param {string} n
   * @param {Wrapper_72} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @param {{type: string}} attributes
   * @returns {Extension_86} 
   */
  attachExtension(content, attributes) {
    const newElem = new Extension_86('Extension', this, {"attrs":["type"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{type: string}} attributes
   * @returns {Extensions_85} 
   */
  addExtension(content, attributes) {
    return this.attachExtension(content, attributes).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Tracking_91 extends VastElement {
  /**
   * @param {string} n
   * @param {TrackingEvents_90} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class TrackingEvents_90 extends VastElement {
  /**
   * @param {string} n
   * @param {Linear_89} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @param {{offset: string, event:("mute"|"unmute"|"pause"|"resume"|"rewind"|"skip"|"playerExpand"|"playerCollapse"|"otherAdInteraction"|"start"|"firstQuartile"|"midpoint"|"thirdQuartile"|"complete"|"acceptInvitationLinear"|"timeSpentViewing"|"progress")}} attributes
   * @returns {Tracking_91} 
   */
  attachTracking(content, attributes) {
    const newElem = new Tracking_91('Tracking', this, {"attrs":["offset","event"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{offset: string, event:("mute"|"unmute"|"pause"|"resume"|"rewind"|"skip"|"playerExpand"|"playerCollapse"|"otherAdInteraction"|"start"|"firstQuartile"|"midpoint"|"thirdQuartile"|"complete"|"acceptInvitationLinear"|"timeSpentViewing"|"progress")}} attributes
   * @returns {TrackingEvents_90} 
   */
  addTracking(content, attributes) {
    return this.attachTracking(content, attributes).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class ClickTracking_93 extends VastElement {
  /**
   * @param {string} n
   * @param {VideoClicks_92} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class CustomClick_94 extends VastElement {
  /**
   * @param {string} n
   * @param {VideoClicks_92} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class VideoClicks_92 extends VastElement {
  /**
   * @param {string} n
   * @param {Linear_89} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {ClickTracking_93} 
   */
  attachClickTracking(content, attributes) {
    const newElem = new ClickTracking_93('ClickTracking', this, {"attrs":["id"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {VideoClicks_92} 
   */
  addClickTracking(content, attributes) {
    return this.attachClickTracking(content, attributes).and();
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {CustomClick_94} 
   */
  attachCustomClick(content, attributes) {
    const newElem = new CustomClick_94('CustomClick', this, {"attrs":["id"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {VideoClicks_92} 
   */
  addCustomClick(content, attributes) {
    return this.attachCustomClick(content, attributes).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class StaticResource_97 extends VastElement {
  /**
   * @param {string} n
   * @param {Icon_96} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class IFrameResource_98 extends VastElement {
  /**
   * @param {string} n
   * @param {Icon_96} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class HTMLResource_99 extends VastElement {
  /**
   * @param {string} n
   * @param {Icon_96} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class IconClickThrough_101 extends VastElement {
  /**
   * @param {string} n
   * @param {IconClicks_100} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class IconClickTracking_102 extends VastElement {
  /**
   * @param {string} n
   * @param {IconClicks_100} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class IconClicks_100 extends VastElement {
  /**
   * @param {string} n
   * @param {Icon_96} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @returns {IconClickThrough_101} 
   */
  attachIconClickThrough(content) {
    const newElem = new IconClickThrough_101('IconClickThrough', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {IconClicks_100} 
   */
  addIconClickThrough(content) {
    return this.attachIconClickThrough(content).and();
  }
  /** 
   * @param {string} content
   * @returns {IconClickTracking_102} 
   */
  attachIconClickTracking(content) {
    const newElem = new IconClickTracking_102('IconClickTracking', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {IconClicks_100} 
   */
  addIconClickTracking(content) {
    return this.attachIconClickTracking(content).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class IconViewTracking_103 extends VastElement {
  /**
   * @param {string} n
   * @param {Icon_96} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Icon_96 extends VastElement {
  /**
   * @param {string} n
   * @param {Icons_95} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @param {{creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash")}} attributes
   * @returns {StaticResource_97} 
   */
  attachStaticResource(content, attributes) {
    const newElem = new StaticResource_97('StaticResource', this, {"attrs":["creativeType"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash")}} attributes
   * @returns {Icon_96} 
   */
  addStaticResource(content, attributes) {
    return this.attachStaticResource(content, attributes).and();
  }
  /** 
   * @param {string} content
   * @returns {IFrameResource_98} 
   */
  attachIFrameResource(content) {
    const newElem = new IFrameResource_98('IFrameResource', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {Icon_96} 
   */
  addIFrameResource(content) {
    return this.attachIFrameResource(content).and();
  }
  /** 
   * @param {string} content
   * @returns {HTMLResource_99} 
   */
  attachHTMLResource(content) {
    const newElem = new HTMLResource_99('HTMLResource', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {Icon_96} 
   */
  addHTMLResource(content) {
    return this.attachHTMLResource(content).and();
  }
  /** 
   * @returns {IconClicks_100} 
   */
  attachIconClicks() {
    const newElem = new IconClicks_100('IconClicks', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {IconViewTracking_103} 
   */
  attachIconViewTracking(content) {
    const newElem = new IconViewTracking_103('IconViewTracking', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {Icon_96} 
   */
  addIconViewTracking(content) {
    return this.attachIconViewTracking(content).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Icons_95 extends VastElement {
  /**
   * @param {string} n
   * @param {Linear_89} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {{program: string, width: string, height: string, xPosition: string, yPosition: string, duration: string, offset: string, apiFramework: string, pxratio: string}} attributes
   * @returns {Icon_96} 
   */
  attachIcon(attributes) {
    const newElem = new Icon_96('Icon', this, {"attrs":["program","width","height","xPosition","yPosition","duration","offset","apiFramework","pxratio"]} /*: Infos*/, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class InteractiveCreativeFile_104 extends VastElement {
  /**
   * @param {string} n
   * @param {Linear_89} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Linear_89 extends VastElement {
  /**
   * @param {string} n
   * @param {Creative_88} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @returns {TrackingEvents_90} 
   */
  attachTrackingEvents() {
    const newElem = new TrackingEvents_90('TrackingEvents', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @returns {VideoClicks_92} 
   */
  attachVideoClicks() {
    const newElem = new VideoClicks_92('VideoClicks', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @returns {Icons_95} 
   */
  attachIcons() {
    const newElem = new Icons_95('Icons', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {InteractiveCreativeFile_104} 
   */
  attachInteractiveCreativeFile(content) {
    const newElem = new InteractiveCreativeFile_104('InteractiveCreativeFile', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {Linear_89} 
   */
  addInteractiveCreativeFile(content) {
    return this.attachInteractiveCreativeFile(content).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class NonLinearClickThrough_107 extends VastElement {
  /**
   * @param {string} n
   * @param {NonLinear_106} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class NonLinearClickTracking_108 extends VastElement {
  /**
   * @param {string} n
   * @param {NonLinear_106} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class NonLinear_106 extends VastElement {
  /**
   * @param {string} n
   * @param {NonLinearAds_105} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @returns {NonLinearClickThrough_107} 
   */
  attachNonLinearClickThrough(content) {
    const newElem = new NonLinearClickThrough_107('NonLinearClickThrough', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {NonLinear_106} 
   */
  addNonLinearClickThrough(content) {
    return this.attachNonLinearClickThrough(content).and();
  }
  /** 
   * @param {string} content
   * @returns {NonLinearClickTracking_108} 
   */
  attachNonLinearClickTracking(content) {
    const newElem = new NonLinearClickTracking_108('NonLinearClickTracking', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {NonLinear_106} 
   */
  addNonLinearClickTracking(content) {
    return this.attachNonLinearClickTracking(content).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Tracking_110 extends VastElement {
  /**
   * @param {string} n
   * @param {TrackingEvents_109} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class TrackingEvents_109 extends VastElement {
  /**
   * @param {string} n
   * @param {NonLinearAds_105} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @param {{event:("mute"|"unmute"|"pause"|"resume"|"rewind"|"skip"|"playerExpand"|"playerCollapse"|"otherAdInteraction"|"creativeView"|"acceptInvitation"|"adExpand"|"adCollapse"|"minimize"|"close"|"overlayViewDuration")}} attributes
   * @returns {Tracking_110} 
   */
  attachTracking(content, attributes) {
    const newElem = new Tracking_110('Tracking', this, {"attrs":["event"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{event:("mute"|"unmute"|"pause"|"resume"|"rewind"|"skip"|"playerExpand"|"playerCollapse"|"otherAdInteraction"|"creativeView"|"acceptInvitation"|"adExpand"|"adCollapse"|"minimize"|"close"|"overlayViewDuration")}} attributes
   * @returns {TrackingEvents_109} 
   */
  addTracking(content, attributes) {
    return this.attachTracking(content, attributes).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class NonLinearAds_105 extends VastElement {
  /**
   * @param {string} n
   * @param {Creative_88} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @returns {NonLinear_106} 
   */
  attachNonLinear() {
    const newElem = new NonLinear_106('NonLinear', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @returns {TrackingEvents_109} 
   */
  attachTrackingEvents() {
    const newElem = new TrackingEvents_109('TrackingEvents', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class StaticResource_113 extends VastElement {
  /**
   * @param {string} n
   * @param {Companion_112} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class IFrameResource_114 extends VastElement {
  /**
   * @param {string} n
   * @param {Companion_112} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class HTMLResource_115 extends VastElement {
  /**
   * @param {string} n
   * @param {Companion_112} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class AdParameters_116 extends VastElement {
  /**
   * @param {string} n
   * @param {Companion_112} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class AltText_117 extends VastElement {
  /**
   * @param {string} n
   * @param {Companion_112} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class CompanionClickThrough_118 extends VastElement {
  /**
   * @param {string} n
   * @param {Companion_112} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class CompanionClickTracking_119 extends VastElement {
  /**
   * @param {string} n
   * @param {Companion_112} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Tracking_121 extends VastElement {
  /**
   * @param {string} n
   * @param {TrackingEvents_120} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class TrackingEvents_120 extends VastElement {
  /**
   * @param {string} n
   * @param {Companion_112} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @param {{event:("creativeView")}} attributes
   * @returns {Tracking_121} 
   */
  attachTracking(content, attributes) {
    const newElem = new Tracking_121('Tracking', this, {"attrs":["event"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{event:("creativeView")}} attributes
   * @returns {TrackingEvents_120} 
   */
  addTracking(content, attributes) {
    return this.attachTracking(content, attributes).and();
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Companion_112 extends VastElement {
  /**
   * @param {string} n
   * @param {CompanionAds_111} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @param {{creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash")}} attributes
   * @returns {StaticResource_113} 
   */
  attachStaticResource(content, attributes) {
    const newElem = new StaticResource_113('StaticResource', this, {"attrs":["creativeType"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash")}} attributes
   * @returns {Companion_112} 
   */
  addStaticResource(content, attributes) {
    return this.attachStaticResource(content, attributes).and();
  }
  /** 
   * @param {string} content
   * @returns {IFrameResource_114} 
   */
  attachIFrameResource(content) {
    const newElem = new IFrameResource_114('IFrameResource', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {Companion_112} 
   */
  addIFrameResource(content) {
    return this.attachIFrameResource(content).and();
  }
  /** 
   * @param {string} content
   * @returns {HTMLResource_115} 
   */
  attachHTMLResource(content) {
    const newElem = new HTMLResource_115('HTMLResource', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {Companion_112} 
   */
  addHTMLResource(content) {
    return this.attachHTMLResource(content).and();
  }
  /** 
   * @param {string} content
   * @param {{xmlEncoded: string}} attributes
   * @returns {AdParameters_116} 
   */
  attachAdParameters(content, attributes) {
    const newElem = new AdParameters_116('AdParameters', this, {"attrs":["xmlEncoded"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{xmlEncoded: string}} attributes
   * @returns {Companion_112} 
   */
  addAdParameters(content, attributes) {
    return this.attachAdParameters(content, attributes).and();
  }
  /** 
   * @param {string} content
   * @returns {AltText_117} 
   */
  attachAltText(content) {
    const newElem = new AltText_117('AltText', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {Companion_112} 
   */
  addAltText(content) {
    return this.attachAltText(content).and();
  }
  /** 
   * @param {string} content
   * @returns {CompanionClickThrough_118} 
   */
  attachCompanionClickThrough(content) {
    const newElem = new CompanionClickThrough_118('CompanionClickThrough', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {Companion_112} 
   */
  addCompanionClickThrough(content) {
    return this.attachCompanionClickThrough(content).and();
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {CompanionClickTracking_119} 
   */
  attachCompanionClickTracking(content, attributes) {
    const newElem = new CompanionClickTracking_119('CompanionClickTracking', this, {"attrs":["id"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {Companion_112} 
   */
  addCompanionClickTracking(content, attributes) {
    return this.attachCompanionClickTracking(content, attributes).and();
  }
  /** 
   * @returns {TrackingEvents_120} 
   */
  attachTrackingEvents() {
    const newElem = new TrackingEvents_120('TrackingEvents', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class CompanionAds_111 extends VastElement {
  /**
   * @param {string} n
   * @param {Creative_88} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {{id: string, width: string, height: string, assetWidth: string, assetHeight: string, expandedWidth: string, expandedHeight: string, apiFramework: string, adSlotID: string, logoTile: string, logoTitle: string, logoArtist: string, logoURL: string, pxratio: string}} attributes
   * @returns {Companion_112} 
   */
  attachCompanion(attributes) {
    const newElem = new Companion_112('Companion', this, {"attrs":["id","width","height","assetWidth","assetHeight","expandedWidth","expandedHeight","apiFramework","adSlotID","logoTile","logoTitle","logoArtist","logoURL","pxratio"]} /*: Infos*/, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Creative_88 extends VastElement {
  /**
   * @param {string} n
   * @param {Creatives_87} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @returns {Linear_89} 
   */
  attachLinear() {
    const newElem = new Linear_89('Linear', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @returns {NonLinearAds_105} 
   */
  attachNonLinearAds() {
    const newElem = new NonLinearAds_105('NonLinearAds', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {{required:("all"|"any"|"none")}} attributes
   * @returns {CompanionAds_111} 
   */
  attachCompanionAds(attributes) {
    const newElem = new CompanionAds_111('CompanionAds', this, {"attrs":["required"]} /*: Infos*/, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Creatives_87 extends VastElement {
  /**
   * @param {string} n
   * @param {Wrapper_72} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {{id: string, sequence: string, adId: string}} attributes
   * @returns {Creative_88} 
   */
  attachCreative(attributes) {
    const newElem = new Creative_88('Creative', this, {"attrs":["id","sequence","adId"]} /*: Infos*/, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Wrapper_72 extends VastElement {
  /**
   * @param {string} n
   * @param {Ad_6} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {Impression_73} 
   */
  attachImpression(content, attributes) {
    const newElem = new Impression_73('Impression', this, {"attrs":["id"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {Wrapper_72} 
   */
  addImpression(content, attributes) {
    return this.attachImpression(content, attributes).and();
  }
  /** @description required in Vast 4
   * @param {string} content
   * @returns {VASTAdTagURI_74} 
   */
  attachVASTAdTagURI(content) {
    const newElem = new VASTAdTagURI_74('VASTAdTagURI', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** @description required in Vast 4
   * @param {string} content
   * @returns {Wrapper_72} 
   */
  addVASTAdTagURI(content) {
    return this.attachVASTAdTagURI(content).and();
  }
  /** @description required in Vast 4
   * @param {string} content
   * @param {{version: string}} attributes
   * @returns {AdSystem_75} 
   */
  attachAdSystem(content, attributes) {
    const newElem = new AdSystem_75('AdSystem', this, {"attrs":["version"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** @description required in Vast 4
   * @param {string} content
   * @param {{version: string}} attributes
   * @returns {Wrapper_72} 
   */
  addAdSystem(content, attributes) {
    return this.attachAdSystem(content, attributes).and();
  }
  /** 
   * @param {string} content
   * @param {{currency: string, model:("CPM"|"CPC"|"CPE"|"CPV")}} attributes
   * @returns {Pricing_76} 
   */
  attachPricing(content, attributes) {
    const newElem = new Pricing_76('Pricing', this, {"attrs":["currency","model"]} /*: Infos*/, content, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @param {{currency: string, model:("CPM"|"CPC"|"CPE"|"CPV")}} attributes
   * @returns {Wrapper_72} 
   */
  addPricing(content, attributes) {
    return this.attachPricing(content, attributes).and();
  }
  /** 
   * @param {string} content
   * @returns {Error_77} 
   */
  attachError(content) {
    const newElem = new Error_77('Error', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {Wrapper_72} 
   */
  addError(content) {
    return this.attachError(content).and();
  }
  /** 
   * @param {{id: string}} attributes
   * @returns {ViewableImpression_78} 
   */
  attachViewableImpression(attributes) {
    const newElem = new ViewableImpression_78('ViewableImpression', this, {"attrs":["id"]} /*: Infos*/, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @returns {AdVerifications_82} 
   */
  attachAdVerifications() {
    const newElem = new AdVerifications_82('AdVerifications', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @returns {Extensions_85} 
   */
  attachExtensions() {
    const newElem = new Extensions_85('Extensions', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @returns {Creatives_87} 
   */
  attachCreatives() {
    const newElem = new Creatives_87('Creatives', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class Ad_6 extends VastElement {
  /**
   * @param {string} n
   * @param {VAST_4} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @returns {InLine_7} 
   */
  attachInLine() {
    const newElem = new InLine_7('InLine', this, {} /*: Infos*/ );
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {{followAdditonalWrappers: string, allowMultipleAds: string, fallbackOnNoAd: string}} attributes
   * @returns {Wrapper_72} 
   */
  attachWrapper(attributes) {
    const newElem = new Wrapper_72('Wrapper', this, {"attrs":["followAdditonalWrappers","allowMultipleAds","fallbackOnNoAd"]} /*: Infos*/, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class VAST_4 extends VastElement {
  /**
   * @param {string} n
   * @param {apiv4} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {string} content
   * @returns {Error_5} 
   */
  attachError(content) {
    const newElem = new Error_5('Error', this, {} /*: Infos*/, content);
    this.childs.push(newElem);
    return newElem;
  }
  /** 
   * @param {string} content
   * @returns {VAST_4} 
   */
  addError(content) {
    return this.attachError(content).and();
  }
  /** 
   * @param {{id: string, sequence: string, conditionalAd: string}} attributes
   * @returns {Ad_6} 
   */
  attachAd(attributes) {
    const newElem = new Ad_6('Ad', this, {"attrs":["id","sequence","conditionalAd"]} /*: Infos*/, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  and() { return this.parent; }
  back() { return this.and().and(); }
}
class apiv4 extends VastElement {
  /**
   * @param {string} n
   * @param {apiv4} p
   */
  constructor(n, p, ...args) {
    super(n, p, ...args);
    this.parent = p;
  }
  /** 
   * @param {{version:("4.0")}} attributes
   * @returns {VAST_4} 
   */
  attachVAST(attributes) {
    const newElem = new VAST_4('VAST', this, {"attrs":["version"]} /*: Infos*/, attributes);
    this.childs.push(newElem);
    return newElem;
  }
  and() { return this.parent || this; }
  back() { return this.and().and(); }
}


const validator = {"only":{"VAST":{"alo":{"Ad":{"uniq":{"InLine":{"required":{"AdSystem":{},"AdTitle":{},"Creatives":{"alo":{"Creative":{"required":{"UniversalAdId":{"attrsRequired":{"idRegistry":null,"idValue":null}}},"uniq":{"Linear":{"required":{"Duration":{},"MediaFiles":{"alo":{"MediaFile":{"attrsRequired":{"delivery":["progressive","streaming"],"type":null,"width":null,"height":null}}},"follow":{"Mezzanine":{},"InteractiveCreativeFile":{}}}},"follow":{"AdParameters":{},"VideoClicks":{"follow":{"ClickThrough":{},"ClickTracking":{},"CustomClick":{}}},"TrackingEvents":{"follow":{"Tracking":{"attrsRequired":{"event":["mute","unmute","pause","resume","rewind","skip","playerExpand","playerCollapse","otherAdInteraction","start","firstQuartile","midpoint","thirdQuartile","complete","acceptInvitationLinear","timeSpentViewing","progress"]}}}},"Icons":{"alo":{"Icon":{"alo":{"StaticResource":{"attrsRequired":{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}},"IFrameResource":{},"HTMLResource":{}},"follow":{"IconClicks":{"follow":{"IconClickThrough":{},"IconClickTracking":{}}},"IconViewTracking":{}}}}}}},"NonLinearAds":{"follow":{"NonLinear":{"follow":{"NonLinearClickThrough":{},"NonLinearClickTracking":{}}},"TrackingEvents":{"follow":{"Tracking":{"attrsRequired":{"event":["mute","unmute","pause","resume","rewind","skip","playerExpand","playerCollapse","otherAdInteraction","creativeView","acceptInvitation","adExpand","adCollapse","minimize","close","overlayViewDuration"]}}}}}},"CompanionAds":{"follow":{"Companion":{"alo":{"StaticResource":{"attrsRequired":{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}},"IFrameResource":{},"HTMLResource":{}},"follow":{"AdParameters":{},"AltText":{},"CompanionClickThrough":{},"CompanionClickTracking":{},"TrackingEvents":{"follow":{"Tracking":{"attrsRequired":{"event":["creativeView"]}}}}},"attrsRequired":{"width":null,"height":null}}},"attrsRequired":{"required":["all","any","none"]}}},"follow":{"CreativeExtensions":{"follow":{"CreativeExtension":{}}}}}}}},"alo":{"Impression":{}},"follow":{"Category":{"attrsRequired":{"authority":null}},"Description":{},"Advertiser":{},"Pricing":{"attrsRequired":{"currency":null,"model":["CPM","CPC","CPE","CPV"]}},"Survey":{},"Error":{},"ViewableImpression":{"follow":{"Viewable":{},"NotViewable":{},"ViewUndetermined":{}}},"AdVerifications":{"follow":{"Verification":{"follow":{"JavaScriptResource":{},"FlashResource":{},"ViewableImpression":{}}}}},"Extensions":{"required":{"Extension":{}}}}},"Wrapper":{"required":{"VASTAdTagURI":{},"AdSystem":{}},"alo":{"Impression":{}},"follow":{"Pricing":{"attrsRequired":{"currency":null,"model":["CPM","CPC","CPE","CPV"]}},"Error":{},"ViewableImpression":{"follow":{"Viewable":{},"NotViewable":{},"ViewUndetermined":{}}},"AdVerifications":{"follow":{"Verification":{"follow":{"ViewableImpression":{}}}}},"Extensions":{"follow":{"Extension":{}}},"Creatives":{"follow":{"Creative":{"uniq":{"Linear":{"follow":{"TrackingEvents":{"follow":{"Tracking":{"attrsRequired":{"event":["mute","unmute","pause","resume","rewind","skip","playerExpand","playerCollapse","otherAdInteraction","start","firstQuartile","midpoint","thirdQuartile","complete","acceptInvitationLinear","timeSpentViewing","progress"]}}}},"VideoClicks":{"follow":{"ClickTracking":{},"CustomClick":{}}},"Icons":{"alo":{"Icon":{"follow":{"StaticResource":{"attrsRequired":{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}},"IFrameResource":{},"HTMLResource":{},"IconClicks":{"follow":{"IconClickThrough":{},"IconClickTracking":{}}},"IconViewTracking":{}}}}},"InteractiveCreativeFile":{}}},"NonLinearAds":{"follow":{"NonLinear":{"follow":{"NonLinearClickThrough":{},"NonLinearClickTracking":{}}},"TrackingEvents":{"follow":{"Tracking":{"attrsRequired":{"event":["mute","unmute","pause","resume","rewind","skip","playerExpand","playerCollapse","otherAdInteraction","creativeView","acceptInvitation","adExpand","adCollapse","minimize","close","overlayViewDuration"]}}}}}},"CompanionAds":{"follow":{"Companion":{"follow":{"StaticResource":{"attrsRequired":{"creativeType":["image/gif","image/jpeg","image/jpg","image/png","application/x-javascript","application/x-shockwave-flash"]}},"IFrameResource":{},"HTMLResource":{},"AdParameters":{},"AltText":{},"CompanionClickThrough":{},"CompanionClickTracking":{},"TrackingEvents":{"follow":{"Tracking":{"attrsRequired":{"event":["creativeView"]}}}}},"attrsRequired":{"width":null,"height":null}}},"attrsRequired":{"required":["all","any","none"]}}}}}}}}}}},"follow":{"Error":{}},"attrsRequired":{"version":["4.0"]}}}};

module.exports = {
  apiv4,
  validator
};
