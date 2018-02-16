function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
var VastElement = require('../../lib/vast-element');

var Error_4 =
/*#__PURE__*/
function (_VastElement) {
  _inherits(Error_4, _VastElement);

  /**
   * @param {string} n
   * @param {VAST_3} p
   */
  function Error_4(n, p) {
    var _ref;

    var _this;

    _classCallCheck(this, Error_4);

    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_ref = Error_4.__proto__ || Object.getPrototypeOf(Error_4)).call.apply(_ref, [this, n, p].concat(args)));
    _this.parent = p;
    return _this;
  }

  _createClass(Error_4, [{
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return Error_4;
}(VastElement);

var AdSystem_7 =
/*#__PURE__*/
function (_VastElement2) {
  _inherits(AdSystem_7, _VastElement2);

  /**
   * @param {string} n
   * @param {InLine_6} p
   */
  function AdSystem_7(n, p) {
    var _ref2;

    var _this2;

    _classCallCheck(this, AdSystem_7);

    for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
      args[_key2 - 2] = arguments[_key2];
    }

    _this2 = _possibleConstructorReturn(this, (_ref2 = AdSystem_7.__proto__ || Object.getPrototypeOf(AdSystem_7)).call.apply(_ref2, [this, n, p].concat(args)));
    _this2.parent = p;
    return _this2;
  }

  _createClass(AdSystem_7, [{
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return AdSystem_7;
}(VastElement);

var AdTitle_8 =
/*#__PURE__*/
function (_VastElement3) {
  _inherits(AdTitle_8, _VastElement3);

  /**
   * @param {string} n
   * @param {InLine_6} p
   */
  function AdTitle_8(n, p) {
    var _ref3;

    var _this3;

    _classCallCheck(this, AdTitle_8);

    for (var _len3 = arguments.length, args = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
      args[_key3 - 2] = arguments[_key3];
    }

    _this3 = _possibleConstructorReturn(this, (_ref3 = AdTitle_8.__proto__ || Object.getPrototypeOf(AdTitle_8)).call.apply(_ref3, [this, n, p].concat(args)));
    _this3.parent = p;
    return _this3;
  }

  _createClass(AdTitle_8, [{
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return AdTitle_8;
}(VastElement);

var Description_9 =
/*#__PURE__*/
function (_VastElement4) {
  _inherits(Description_9, _VastElement4);

  /**
   * @param {string} n
   * @param {InLine_6} p
   */
  function Description_9(n, p) {
    var _ref4;

    var _this4;

    _classCallCheck(this, Description_9);

    for (var _len4 = arguments.length, args = new Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
      args[_key4 - 2] = arguments[_key4];
    }

    _this4 = _possibleConstructorReturn(this, (_ref4 = Description_9.__proto__ || Object.getPrototypeOf(Description_9)).call.apply(_ref4, [this, n, p].concat(args)));
    _this4.parent = p;
    return _this4;
  }

  _createClass(Description_9, [{
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return Description_9;
}(VastElement);

var Advertiser_10 =
/*#__PURE__*/
function (_VastElement5) {
  _inherits(Advertiser_10, _VastElement5);

  /**
   * @param {string} n
   * @param {InLine_6} p
   */
  function Advertiser_10(n, p) {
    var _ref5;

    var _this5;

    _classCallCheck(this, Advertiser_10);

    for (var _len5 = arguments.length, args = new Array(_len5 > 2 ? _len5 - 2 : 0), _key5 = 2; _key5 < _len5; _key5++) {
      args[_key5 - 2] = arguments[_key5];
    }

    _this5 = _possibleConstructorReturn(this, (_ref5 = Advertiser_10.__proto__ || Object.getPrototypeOf(Advertiser_10)).call.apply(_ref5, [this, n, p].concat(args)));
    _this5.parent = p;
    return _this5;
  }

  _createClass(Advertiser_10, [{
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return Advertiser_10;
}(VastElement);

var Pricing_11 =
/*#__PURE__*/
function (_VastElement6) {
  _inherits(Pricing_11, _VastElement6);

  /**
   * @param {string} n
   * @param {InLine_6} p
   */
  function Pricing_11(n, p) {
    var _ref6;

    var _this6;

    _classCallCheck(this, Pricing_11);

    for (var _len6 = arguments.length, args = new Array(_len6 > 2 ? _len6 - 2 : 0), _key6 = 2; _key6 < _len6; _key6++) {
      args[_key6 - 2] = arguments[_key6];
    }

    _this6 = _possibleConstructorReturn(this, (_ref6 = Pricing_11.__proto__ || Object.getPrototypeOf(Pricing_11)).call.apply(_ref6, [this, n, p].concat(args)));
    _this6.parent = p;
    return _this6;
  }

  _createClass(Pricing_11, [{
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return Pricing_11;
}(VastElement);

var Survey_12 =
/*#__PURE__*/
function (_VastElement7) {
  _inherits(Survey_12, _VastElement7);

  /**
   * @param {string} n
   * @param {InLine_6} p
   */
  function Survey_12(n, p) {
    var _ref7;

    var _this7;

    _classCallCheck(this, Survey_12);

    for (var _len7 = arguments.length, args = new Array(_len7 > 2 ? _len7 - 2 : 0), _key7 = 2; _key7 < _len7; _key7++) {
      args[_key7 - 2] = arguments[_key7];
    }

    _this7 = _possibleConstructorReturn(this, (_ref7 = Survey_12.__proto__ || Object.getPrototypeOf(Survey_12)).call.apply(_ref7, [this, n, p].concat(args)));
    _this7.parent = p;
    return _this7;
  }

  _createClass(Survey_12, [{
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return Survey_12;
}(VastElement);

var Error_13 =
/*#__PURE__*/
function (_VastElement8) {
  _inherits(Error_13, _VastElement8);

  /**
   * @param {string} n
   * @param {InLine_6} p
   */
  function Error_13(n, p) {
    var _ref8;

    var _this8;

    _classCallCheck(this, Error_13);

    for (var _len8 = arguments.length, args = new Array(_len8 > 2 ? _len8 - 2 : 0), _key8 = 2; _key8 < _len8; _key8++) {
      args[_key8 - 2] = arguments[_key8];
    }

    _this8 = _possibleConstructorReturn(this, (_ref8 = Error_13.__proto__ || Object.getPrototypeOf(Error_13)).call.apply(_ref8, [this, n, p].concat(args)));
    _this8.parent = p;
    return _this8;
  }

  _createClass(Error_13, [{
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return Error_13;
}(VastElement);

var Impression_14 =
/*#__PURE__*/
function (_VastElement9) {
  _inherits(Impression_14, _VastElement9);

  /**
   * @param {string} n
   * @param {InLine_6} p
   */
  function Impression_14(n, p) {
    var _ref9;

    var _this9;

    _classCallCheck(this, Impression_14);

    for (var _len9 = arguments.length, args = new Array(_len9 > 2 ? _len9 - 2 : 0), _key9 = 2; _key9 < _len9; _key9++) {
      args[_key9 - 2] = arguments[_key9];
    }

    _this9 = _possibleConstructorReturn(this, (_ref9 = Impression_14.__proto__ || Object.getPrototypeOf(Impression_14)).call.apply(_ref9, [this, n, p].concat(args)));
    _this9.parent = p;
    return _this9;
  }

  _createClass(Impression_14, [{
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return Impression_14;
}(VastElement);

var CreativeExtension_18 =
/*#__PURE__*/
function (_VastElement10) {
  _inherits(CreativeExtension_18, _VastElement10);

  /**
   * @param {string} n
   * @param {CreativeExtensions_17} p
   */
  function CreativeExtension_18(n, p) {
    var _ref10;

    var _this10;

    _classCallCheck(this, CreativeExtension_18);

    for (var _len10 = arguments.length, args = new Array(_len10 > 2 ? _len10 - 2 : 0), _key10 = 2; _key10 < _len10; _key10++) {
      args[_key10 - 2] = arguments[_key10];
    }

    _this10 = _possibleConstructorReturn(this, (_ref10 = CreativeExtension_18.__proto__ || Object.getPrototypeOf(CreativeExtension_18)).call.apply(_ref10, [this, n, p].concat(args)));
    _this10.parent = p;
    return _this10;
  }

  _createClass(CreativeExtension_18, [{
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return CreativeExtension_18;
}(VastElement);

var CreativeExtensions_17 =
/*#__PURE__*/
function (_VastElement11) {
  _inherits(CreativeExtensions_17, _VastElement11);

  /**
   * @param {string} n
   * @param {Creative_16} p
   */
  function CreativeExtensions_17(n, p) {
    var _ref11;

    var _this11;

    _classCallCheck(this, CreativeExtensions_17);

    for (var _len11 = arguments.length, args = new Array(_len11 > 2 ? _len11 - 2 : 0), _key11 = 2; _key11 < _len11; _key11++) {
      args[_key11 - 2] = arguments[_key11];
    }

    _this11 = _possibleConstructorReturn(this, (_ref11 = CreativeExtensions_17.__proto__ || Object.getPrototypeOf(CreativeExtensions_17)).call.apply(_ref11, [this, n, p].concat(args)));
    _this11.parent = p;
    return _this11;
  }
  /** 
   * @param {string} content
   * @returns {CreativeExtension_18} 
   */


  _createClass(CreativeExtensions_17, [{
    key: "attachCreativeExtension",
    value: function attachCreativeExtension(content) {
      var newElem = new CreativeExtension_18('CreativeExtension', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {CreativeExtensions_17} 
     */

  }, {
    key: "addCreativeExtension",
    value: function addCreativeExtension(content) {
      return this.attachCreativeExtension(content).and();
    }
  }, {
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return CreativeExtensions_17;
}(VastElement);

var AdParameters_20 =
/*#__PURE__*/
function (_VastElement12) {
  _inherits(AdParameters_20, _VastElement12);

  /**
   * @param {string} n
   * @param {Linear_19} p
   */
  function AdParameters_20(n, p) {
    var _ref12;

    var _this12;

    _classCallCheck(this, AdParameters_20);

    for (var _len12 = arguments.length, args = new Array(_len12 > 2 ? _len12 - 2 : 0), _key12 = 2; _key12 < _len12; _key12++) {
      args[_key12 - 2] = arguments[_key12];
    }

    _this12 = _possibleConstructorReturn(this, (_ref12 = AdParameters_20.__proto__ || Object.getPrototypeOf(AdParameters_20)).call.apply(_ref12, [this, n, p].concat(args)));
    _this12.parent = p;
    return _this12;
  }

  _createClass(AdParameters_20, [{
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return AdParameters_20;
}(VastElement);

var Duration_21 =
/*#__PURE__*/
function (_VastElement13) {
  _inherits(Duration_21, _VastElement13);

  /**
   * @param {string} n
   * @param {Linear_19} p
   */
  function Duration_21(n, p) {
    var _ref13;

    var _this13;

    _classCallCheck(this, Duration_21);

    for (var _len13 = arguments.length, args = new Array(_len13 > 2 ? _len13 - 2 : 0), _key13 = 2; _key13 < _len13; _key13++) {
      args[_key13 - 2] = arguments[_key13];
    }

    _this13 = _possibleConstructorReturn(this, (_ref13 = Duration_21.__proto__ || Object.getPrototypeOf(Duration_21)).call.apply(_ref13, [this, n, p].concat(args)));
    _this13.parent = p;
    return _this13;
  }

  _createClass(Duration_21, [{
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return Duration_21;
}(VastElement);

var MediaFile_23 =
/*#__PURE__*/
function (_VastElement14) {
  _inherits(MediaFile_23, _VastElement14);

  /**
   * @param {string} n
   * @param {MediaFiles_22} p
   */
  function MediaFile_23(n, p) {
    var _ref14;

    var _this14;

    _classCallCheck(this, MediaFile_23);

    for (var _len14 = arguments.length, args = new Array(_len14 > 2 ? _len14 - 2 : 0), _key14 = 2; _key14 < _len14; _key14++) {
      args[_key14 - 2] = arguments[_key14];
    }

    _this14 = _possibleConstructorReturn(this, (_ref14 = MediaFile_23.__proto__ || Object.getPrototypeOf(MediaFile_23)).call.apply(_ref14, [this, n, p].concat(args)));
    _this14.parent = p;
    return _this14;
  }

  _createClass(MediaFile_23, [{
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return MediaFile_23;
}(VastElement);

var MediaFiles_22 =
/*#__PURE__*/
function (_VastElement15) {
  _inherits(MediaFiles_22, _VastElement15);

  /**
   * @param {string} n
   * @param {Linear_19} p
   */
  function MediaFiles_22(n, p) {
    var _ref15;

    var _this15;

    _classCallCheck(this, MediaFiles_22);

    for (var _len15 = arguments.length, args = new Array(_len15 > 2 ? _len15 - 2 : 0), _key15 = 2; _key15 < _len15; _key15++) {
      args[_key15 - 2] = arguments[_key15];
    }

    _this15 = _possibleConstructorReturn(this, (_ref15 = MediaFiles_22.__proto__ || Object.getPrototypeOf(MediaFiles_22)).call.apply(_ref15, [this, n, p].concat(args)));
    _this15.parent = p;
    return _this15;
  }
  /** 
   * @param {string} content
   * @param {{id: string, delivery:("progressive"|"streaming"), type: string, bitrate: string, minBitrate: string, maxBitrate: string, width: string, height: string, scalable: string, mantainAspectRatio: string, codec: string, apiFramework: string}} attributes
   * @returns {MediaFile_23} 
   */


  _createClass(MediaFiles_22, [{
    key: "attachMediaFile",
    value: function attachMediaFile(content, attributes) {
      var newElem = new MediaFile_23('MediaFile', this, {
        "attrs": ["id", "delivery", "type", "bitrate", "minBitrate", "maxBitrate", "width", "height", "scalable", "mantainAspectRatio", "codec", "apiFramework"]
        /*: Infos*/

      }, content, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @param {{id: string, delivery:("progressive"|"streaming"), type: string, bitrate: string, minBitrate: string, maxBitrate: string, width: string, height: string, scalable: string, mantainAspectRatio: string, codec: string, apiFramework: string}} attributes
     * @returns {MediaFiles_22} 
     */

  }, {
    key: "addMediaFile",
    value: function addMediaFile(content, attributes) {
      return this.attachMediaFile(content, attributes).and();
    }
  }, {
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return MediaFiles_22;
}(VastElement);

var Tracking_25 =
/*#__PURE__*/
function (_VastElement16) {
  _inherits(Tracking_25, _VastElement16);

  /**
   * @param {string} n
   * @param {TrackingEvents_24} p
   */
  function Tracking_25(n, p) {
    var _ref16;

    var _this16;

    _classCallCheck(this, Tracking_25);

    for (var _len16 = arguments.length, args = new Array(_len16 > 2 ? _len16 - 2 : 0), _key16 = 2; _key16 < _len16; _key16++) {
      args[_key16 - 2] = arguments[_key16];
    }

    _this16 = _possibleConstructorReturn(this, (_ref16 = Tracking_25.__proto__ || Object.getPrototypeOf(Tracking_25)).call.apply(_ref16, [this, n, p].concat(args)));
    _this16.parent = p;
    return _this16;
  }

  _createClass(Tracking_25, [{
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return Tracking_25;
}(VastElement);

var TrackingEvents_24 =
/*#__PURE__*/
function (_VastElement17) {
  _inherits(TrackingEvents_24, _VastElement17);

  /**
   * @param {string} n
   * @param {Linear_19} p
   */
  function TrackingEvents_24(n, p) {
    var _ref17;

    var _this17;

    _classCallCheck(this, TrackingEvents_24);

    for (var _len17 = arguments.length, args = new Array(_len17 > 2 ? _len17 - 2 : 0), _key17 = 2; _key17 < _len17; _key17++) {
      args[_key17 - 2] = arguments[_key17];
    }

    _this17 = _possibleConstructorReturn(this, (_ref17 = TrackingEvents_24.__proto__ || Object.getPrototypeOf(TrackingEvents_24)).call.apply(_ref17, [this, n, p].concat(args)));
    _this17.parent = p;
    return _this17;
  }
  /** 
   * @param {string} content
   * @param {{event:("creativeView"|"start"|"firstQuartile"|"midpoint"|"thirdQuartile"|"complete"|"mute"|"unmute"|"pause"|"rewind"|"resume"|"fullscreen"|"exitFullscreen"|"expand"|"collapse"|"acceptInvitationLinear"|"closeLinear"|"skip"|"progress")}} attributes
   * @returns {Tracking_25} 
   */


  _createClass(TrackingEvents_24, [{
    key: "attachTracking",
    value: function attachTracking(content, attributes) {
      var newElem = new Tracking_25('Tracking', this, {
        "attrs": ["event"]
        /*: Infos*/

      }, content, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @param {{event:("creativeView"|"start"|"firstQuartile"|"midpoint"|"thirdQuartile"|"complete"|"mute"|"unmute"|"pause"|"rewind"|"resume"|"fullscreen"|"exitFullscreen"|"expand"|"collapse"|"acceptInvitationLinear"|"closeLinear"|"skip"|"progress")}} attributes
     * @returns {TrackingEvents_24} 
     */

  }, {
    key: "addTracking",
    value: function addTracking(content, attributes) {
      return this.attachTracking(content, attributes).and();
    }
  }, {
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return TrackingEvents_24;
}(VastElement);

var ClickThrough_27 =
/*#__PURE__*/
function (_VastElement18) {
  _inherits(ClickThrough_27, _VastElement18);

  /**
   * @param {string} n
   * @param {VideoClicks_26} p
   */
  function ClickThrough_27(n, p) {
    var _ref18;

    var _this18;

    _classCallCheck(this, ClickThrough_27);

    for (var _len18 = arguments.length, args = new Array(_len18 > 2 ? _len18 - 2 : 0), _key18 = 2; _key18 < _len18; _key18++) {
      args[_key18 - 2] = arguments[_key18];
    }

    _this18 = _possibleConstructorReturn(this, (_ref18 = ClickThrough_27.__proto__ || Object.getPrototypeOf(ClickThrough_27)).call.apply(_ref18, [this, n, p].concat(args)));
    _this18.parent = p;
    return _this18;
  }

  _createClass(ClickThrough_27, [{
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return ClickThrough_27;
}(VastElement);

var ClickTracking_28 =
/*#__PURE__*/
function (_VastElement19) {
  _inherits(ClickTracking_28, _VastElement19);

  /**
   * @param {string} n
   * @param {VideoClicks_26} p
   */
  function ClickTracking_28(n, p) {
    var _ref19;

    var _this19;

    _classCallCheck(this, ClickTracking_28);

    for (var _len19 = arguments.length, args = new Array(_len19 > 2 ? _len19 - 2 : 0), _key19 = 2; _key19 < _len19; _key19++) {
      args[_key19 - 2] = arguments[_key19];
    }

    _this19 = _possibleConstructorReturn(this, (_ref19 = ClickTracking_28.__proto__ || Object.getPrototypeOf(ClickTracking_28)).call.apply(_ref19, [this, n, p].concat(args)));
    _this19.parent = p;
    return _this19;
  }

  _createClass(ClickTracking_28, [{
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return ClickTracking_28;
}(VastElement);

var CustomClick_29 =
/*#__PURE__*/
function (_VastElement20) {
  _inherits(CustomClick_29, _VastElement20);

  /**
   * @param {string} n
   * @param {VideoClicks_26} p
   */
  function CustomClick_29(n, p) {
    var _ref20;

    var _this20;

    _classCallCheck(this, CustomClick_29);

    for (var _len20 = arguments.length, args = new Array(_len20 > 2 ? _len20 - 2 : 0), _key20 = 2; _key20 < _len20; _key20++) {
      args[_key20 - 2] = arguments[_key20];
    }

    _this20 = _possibleConstructorReturn(this, (_ref20 = CustomClick_29.__proto__ || Object.getPrototypeOf(CustomClick_29)).call.apply(_ref20, [this, n, p].concat(args)));
    _this20.parent = p;
    return _this20;
  }

  _createClass(CustomClick_29, [{
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return CustomClick_29;
}(VastElement);

var VideoClicks_26 =
/*#__PURE__*/
function (_VastElement21) {
  _inherits(VideoClicks_26, _VastElement21);

  /**
   * @param {string} n
   * @param {Linear_19} p
   */
  function VideoClicks_26(n, p) {
    var _ref21;

    var _this21;

    _classCallCheck(this, VideoClicks_26);

    for (var _len21 = arguments.length, args = new Array(_len21 > 2 ? _len21 - 2 : 0), _key21 = 2; _key21 < _len21; _key21++) {
      args[_key21 - 2] = arguments[_key21];
    }

    _this21 = _possibleConstructorReturn(this, (_ref21 = VideoClicks_26.__proto__ || Object.getPrototypeOf(VideoClicks_26)).call.apply(_ref21, [this, n, p].concat(args)));
    _this21.parent = p;
    return _this21;
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {ClickThrough_27} 
   */


  _createClass(VideoClicks_26, [{
    key: "attachClickThrough",
    value: function attachClickThrough(content, attributes) {
      var newElem = new ClickThrough_27('ClickThrough', this, {
        "attrs": ["id"]
        /*: Infos*/

      }, content, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @param {{id: string}} attributes
     * @returns {VideoClicks_26} 
     */

  }, {
    key: "addClickThrough",
    value: function addClickThrough(content, attributes) {
      return this.attachClickThrough(content, attributes).and();
    }
    /** 
     * @param {string} content
     * @param {{id: string}} attributes
     * @returns {ClickTracking_28} 
     */

  }, {
    key: "attachClickTracking",
    value: function attachClickTracking(content, attributes) {
      var newElem = new ClickTracking_28('ClickTracking', this, {
        "attrs": ["id"]
        /*: Infos*/

      }, content, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @param {{id: string}} attributes
     * @returns {VideoClicks_26} 
     */

  }, {
    key: "addClickTracking",
    value: function addClickTracking(content, attributes) {
      return this.attachClickTracking(content, attributes).and();
    }
    /** 
     * @param {string} content
     * @param {{id: string}} attributes
     * @returns {CustomClick_29} 
     */

  }, {
    key: "attachCustomClick",
    value: function attachCustomClick(content, attributes) {
      var newElem = new CustomClick_29('CustomClick', this, {
        "attrs": ["id"]
        /*: Infos*/

      }, content, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @param {{id: string}} attributes
     * @returns {VideoClicks_26} 
     */

  }, {
    key: "addCustomClick",
    value: function addCustomClick(content, attributes) {
      return this.attachCustomClick(content, attributes).and();
    }
  }, {
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return VideoClicks_26;
}(VastElement);

var StaticResource_32 =
/*#__PURE__*/
function (_VastElement22) {
  _inherits(StaticResource_32, _VastElement22);

  /**
   * @param {string} n
   * @param {Icon_31} p
   */
  function StaticResource_32(n, p) {
    var _ref22;

    var _this22;

    _classCallCheck(this, StaticResource_32);

    for (var _len22 = arguments.length, args = new Array(_len22 > 2 ? _len22 - 2 : 0), _key22 = 2; _key22 < _len22; _key22++) {
      args[_key22 - 2] = arguments[_key22];
    }

    _this22 = _possibleConstructorReturn(this, (_ref22 = StaticResource_32.__proto__ || Object.getPrototypeOf(StaticResource_32)).call.apply(_ref22, [this, n, p].concat(args)));
    _this22.parent = p;
    return _this22;
  }

  _createClass(StaticResource_32, [{
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return StaticResource_32;
}(VastElement);

var IFrameResource_33 =
/*#__PURE__*/
function (_VastElement23) {
  _inherits(IFrameResource_33, _VastElement23);

  /**
   * @param {string} n
   * @param {Icon_31} p
   */
  function IFrameResource_33(n, p) {
    var _ref23;

    var _this23;

    _classCallCheck(this, IFrameResource_33);

    for (var _len23 = arguments.length, args = new Array(_len23 > 2 ? _len23 - 2 : 0), _key23 = 2; _key23 < _len23; _key23++) {
      args[_key23 - 2] = arguments[_key23];
    }

    _this23 = _possibleConstructorReturn(this, (_ref23 = IFrameResource_33.__proto__ || Object.getPrototypeOf(IFrameResource_33)).call.apply(_ref23, [this, n, p].concat(args)));
    _this23.parent = p;
    return _this23;
  }

  _createClass(IFrameResource_33, [{
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return IFrameResource_33;
}(VastElement);

var HTMLResource_34 =
/*#__PURE__*/
function (_VastElement24) {
  _inherits(HTMLResource_34, _VastElement24);

  /**
   * @param {string} n
   * @param {Icon_31} p
   */
  function HTMLResource_34(n, p) {
    var _ref24;

    var _this24;

    _classCallCheck(this, HTMLResource_34);

    for (var _len24 = arguments.length, args = new Array(_len24 > 2 ? _len24 - 2 : 0), _key24 = 2; _key24 < _len24; _key24++) {
      args[_key24 - 2] = arguments[_key24];
    }

    _this24 = _possibleConstructorReturn(this, (_ref24 = HTMLResource_34.__proto__ || Object.getPrototypeOf(HTMLResource_34)).call.apply(_ref24, [this, n, p].concat(args)));
    _this24.parent = p;
    return _this24;
  }

  _createClass(HTMLResource_34, [{
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return HTMLResource_34;
}(VastElement);

var IconClickThrough_36 =
/*#__PURE__*/
function (_VastElement25) {
  _inherits(IconClickThrough_36, _VastElement25);

  /**
   * @param {string} n
   * @param {IconClicks_35} p
   */
  function IconClickThrough_36(n, p) {
    var _ref25;

    var _this25;

    _classCallCheck(this, IconClickThrough_36);

    for (var _len25 = arguments.length, args = new Array(_len25 > 2 ? _len25 - 2 : 0), _key25 = 2; _key25 < _len25; _key25++) {
      args[_key25 - 2] = arguments[_key25];
    }

    _this25 = _possibleConstructorReturn(this, (_ref25 = IconClickThrough_36.__proto__ || Object.getPrototypeOf(IconClickThrough_36)).call.apply(_ref25, [this, n, p].concat(args)));
    _this25.parent = p;
    return _this25;
  }

  _createClass(IconClickThrough_36, [{
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return IconClickThrough_36;
}(VastElement);

var IconClickTracking_37 =
/*#__PURE__*/
function (_VastElement26) {
  _inherits(IconClickTracking_37, _VastElement26);

  /**
   * @param {string} n
   * @param {IconClicks_35} p
   */
  function IconClickTracking_37(n, p) {
    var _ref26;

    var _this26;

    _classCallCheck(this, IconClickTracking_37);

    for (var _len26 = arguments.length, args = new Array(_len26 > 2 ? _len26 - 2 : 0), _key26 = 2; _key26 < _len26; _key26++) {
      args[_key26 - 2] = arguments[_key26];
    }

    _this26 = _possibleConstructorReturn(this, (_ref26 = IconClickTracking_37.__proto__ || Object.getPrototypeOf(IconClickTracking_37)).call.apply(_ref26, [this, n, p].concat(args)));
    _this26.parent = p;
    return _this26;
  }

  _createClass(IconClickTracking_37, [{
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return IconClickTracking_37;
}(VastElement);

var IconClicks_35 =
/*#__PURE__*/
function (_VastElement27) {
  _inherits(IconClicks_35, _VastElement27);

  /**
   * @param {string} n
   * @param {Icon_31} p
   */
  function IconClicks_35(n, p) {
    var _ref27;

    var _this27;

    _classCallCheck(this, IconClicks_35);

    for (var _len27 = arguments.length, args = new Array(_len27 > 2 ? _len27 - 2 : 0), _key27 = 2; _key27 < _len27; _key27++) {
      args[_key27 - 2] = arguments[_key27];
    }

    _this27 = _possibleConstructorReturn(this, (_ref27 = IconClicks_35.__proto__ || Object.getPrototypeOf(IconClicks_35)).call.apply(_ref27, [this, n, p].concat(args)));
    _this27.parent = p;
    return _this27;
  }
  /** 
   * @param {string} content
   * @returns {IconClickThrough_36} 
   */


  _createClass(IconClicks_35, [{
    key: "attachIconClickThrough",
    value: function attachIconClickThrough(content) {
      var newElem = new IconClickThrough_36('IconClickThrough', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {IconClicks_35} 
     */

  }, {
    key: "addIconClickThrough",
    value: function addIconClickThrough(content) {
      return this.attachIconClickThrough(content).and();
    }
    /** 
     * @param {string} content
     * @param {{id: string}} attributes
     * @returns {IconClickTracking_37} 
     */

  }, {
    key: "attachIconClickTracking",
    value: function attachIconClickTracking(content, attributes) {
      var newElem = new IconClickTracking_37('IconClickTracking', this, {
        "attrs": ["id"]
        /*: Infos*/

      }, content, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @param {{id: string}} attributes
     * @returns {IconClicks_35} 
     */

  }, {
    key: "addIconClickTracking",
    value: function addIconClickTracking(content, attributes) {
      return this.attachIconClickTracking(content, attributes).and();
    }
  }, {
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return IconClicks_35;
}(VastElement);

var IconViewTracking_38 =
/*#__PURE__*/
function (_VastElement28) {
  _inherits(IconViewTracking_38, _VastElement28);

  /**
   * @param {string} n
   * @param {Icon_31} p
   */
  function IconViewTracking_38(n, p) {
    var _ref28;

    var _this28;

    _classCallCheck(this, IconViewTracking_38);

    for (var _len28 = arguments.length, args = new Array(_len28 > 2 ? _len28 - 2 : 0), _key28 = 2; _key28 < _len28; _key28++) {
      args[_key28 - 2] = arguments[_key28];
    }

    _this28 = _possibleConstructorReturn(this, (_ref28 = IconViewTracking_38.__proto__ || Object.getPrototypeOf(IconViewTracking_38)).call.apply(_ref28, [this, n, p].concat(args)));
    _this28.parent = p;
    return _this28;
  }

  _createClass(IconViewTracking_38, [{
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return IconViewTracking_38;
}(VastElement);

var Icon_31 =
/*#__PURE__*/
function (_VastElement29) {
  _inherits(Icon_31, _VastElement29);

  /**
   * @param {string} n
   * @param {Icons_30} p
   */
  function Icon_31(n, p) {
    var _ref29;

    var _this29;

    _classCallCheck(this, Icon_31);

    for (var _len29 = arguments.length, args = new Array(_len29 > 2 ? _len29 - 2 : 0), _key29 = 2; _key29 < _len29; _key29++) {
      args[_key29 - 2] = arguments[_key29];
    }

    _this29 = _possibleConstructorReturn(this, (_ref29 = Icon_31.__proto__ || Object.getPrototypeOf(Icon_31)).call.apply(_ref29, [this, n, p].concat(args)));
    _this29.parent = p;
    return _this29;
  }
  /** 
   * @param {string} content
   * @param {{creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash")}} attributes
   * @returns {StaticResource_32} 
   */


  _createClass(Icon_31, [{
    key: "attachStaticResource",
    value: function attachStaticResource(content, attributes) {
      var newElem = new StaticResource_32('StaticResource', this, {
        "attrs": ["creativeType"]
        /*: Infos*/

      }, content, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @param {{creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash")}} attributes
     * @returns {Icon_31} 
     */

  }, {
    key: "addStaticResource",
    value: function addStaticResource(content, attributes) {
      return this.attachStaticResource(content, attributes).and();
    }
    /** 
     * @param {string} content
     * @returns {IFrameResource_33} 
     */

  }, {
    key: "attachIFrameResource",
    value: function attachIFrameResource(content) {
      var newElem = new IFrameResource_33('IFrameResource', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {Icon_31} 
     */

  }, {
    key: "addIFrameResource",
    value: function addIFrameResource(content) {
      return this.attachIFrameResource(content).and();
    }
    /** 
     * @param {string} content
     * @returns {HTMLResource_34} 
     */

  }, {
    key: "attachHTMLResource",
    value: function attachHTMLResource(content) {
      var newElem = new HTMLResource_34('HTMLResource', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {Icon_31} 
     */

  }, {
    key: "addHTMLResource",
    value: function addHTMLResource(content) {
      return this.attachHTMLResource(content).and();
    }
    /** 
     * @returns {IconClicks_35} 
     */

  }, {
    key: "attachIconClicks",
    value: function attachIconClicks() {
      var newElem = new IconClicks_35('IconClicks', this, {}
      /*: Infos*/
      );
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {IconViewTracking_38} 
     */

  }, {
    key: "attachIconViewTracking",
    value: function attachIconViewTracking(content) {
      var newElem = new IconViewTracking_38('IconViewTracking', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {Icon_31} 
     */

  }, {
    key: "addIconViewTracking",
    value: function addIconViewTracking(content) {
      return this.attachIconViewTracking(content).and();
    }
  }, {
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return Icon_31;
}(VastElement);

var Icons_30 =
/*#__PURE__*/
function (_VastElement30) {
  _inherits(Icons_30, _VastElement30);

  /**
   * @param {string} n
   * @param {Linear_19} p
   */
  function Icons_30(n, p) {
    var _ref30;

    var _this30;

    _classCallCheck(this, Icons_30);

    for (var _len30 = arguments.length, args = new Array(_len30 > 2 ? _len30 - 2 : 0), _key30 = 2; _key30 < _len30; _key30++) {
      args[_key30 - 2] = arguments[_key30];
    }

    _this30 = _possibleConstructorReturn(this, (_ref30 = Icons_30.__proto__ || Object.getPrototypeOf(Icons_30)).call.apply(_ref30, [this, n, p].concat(args)));
    _this30.parent = p;
    return _this30;
  }
  /** 
   * @param {{program: string, width: string, height: string, xPosition: string, yPosition: string, duration: string, offset: string, apiFramework: string}} attributes
   * @returns {Icon_31} 
   */


  _createClass(Icons_30, [{
    key: "attachIcon",
    value: function attachIcon(attributes) {
      var newElem = new Icon_31('Icon', this, {
        "attrs": ["program", "width", "height", "xPosition", "yPosition", "duration", "offset", "apiFramework"]
        /*: Infos*/

      }, attributes);
      this.childs.push(newElem);
      return newElem;
    }
  }, {
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return Icons_30;
}(VastElement);

var Linear_19 =
/*#__PURE__*/
function (_VastElement31) {
  _inherits(Linear_19, _VastElement31);

  /**
   * @param {string} n
   * @param {Creative_16} p
   */
  function Linear_19(n, p) {
    var _ref31;

    var _this31;

    _classCallCheck(this, Linear_19);

    for (var _len31 = arguments.length, args = new Array(_len31 > 2 ? _len31 - 2 : 0), _key31 = 2; _key31 < _len31; _key31++) {
      args[_key31 - 2] = arguments[_key31];
    }

    _this31 = _possibleConstructorReturn(this, (_ref31 = Linear_19.__proto__ || Object.getPrototypeOf(Linear_19)).call.apply(_ref31, [this, n, p].concat(args)));
    _this31.parent = p;
    return _this31;
  }
  /** 
   * @param {string} content
   * @param {{xmlEncoded: string}} attributes
   * @returns {AdParameters_20} 
   */


  _createClass(Linear_19, [{
    key: "attachAdParameters",
    value: function attachAdParameters(content, attributes) {
      var newElem = new AdParameters_20('AdParameters', this, {
        "attrs": ["xmlEncoded"]
        /*: Infos*/

      }, content, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @param {{xmlEncoded: string}} attributes
     * @returns {Linear_19} 
     */

  }, {
    key: "addAdParameters",
    value: function addAdParameters(content, attributes) {
      return this.attachAdParameters(content, attributes).and();
    }
    /** @description required in Vast 3
     * @param {string} content
     * @returns {Duration_21} 
     */

  }, {
    key: "attachDuration",
    value: function attachDuration(content) {
      var newElem = new Duration_21('Duration', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** @description required in Vast 3
     * @param {string} content
     * @returns {Linear_19} 
     */

  }, {
    key: "addDuration",
    value: function addDuration(content) {
      return this.attachDuration(content).and();
    }
    /** @description required in Vast 3
     * @returns {MediaFiles_22} 
     */

  }, {
    key: "attachMediaFiles",
    value: function attachMediaFiles() {
      var newElem = new MediaFiles_22('MediaFiles', this, {}
      /*: Infos*/
      );
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @returns {TrackingEvents_24} 
     */

  }, {
    key: "attachTrackingEvents",
    value: function attachTrackingEvents() {
      var newElem = new TrackingEvents_24('TrackingEvents', this, {}
      /*: Infos*/
      );
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @returns {VideoClicks_26} 
     */

  }, {
    key: "attachVideoClicks",
    value: function attachVideoClicks() {
      var newElem = new VideoClicks_26('VideoClicks', this, {}
      /*: Infos*/
      );
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @returns {Icons_30} 
     */

  }, {
    key: "attachIcons",
    value: function attachIcons() {
      var newElem = new Icons_30('Icons', this, {}
      /*: Infos*/
      );
      this.childs.push(newElem);
      return newElem;
    }
  }, {
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return Linear_19;
}(VastElement);

var StaticResource_41 =
/*#__PURE__*/
function (_VastElement32) {
  _inherits(StaticResource_41, _VastElement32);

  /**
   * @param {string} n
   * @param {Companion_40} p
   */
  function StaticResource_41(n, p) {
    var _ref32;

    var _this32;

    _classCallCheck(this, StaticResource_41);

    for (var _len32 = arguments.length, args = new Array(_len32 > 2 ? _len32 - 2 : 0), _key32 = 2; _key32 < _len32; _key32++) {
      args[_key32 - 2] = arguments[_key32];
    }

    _this32 = _possibleConstructorReturn(this, (_ref32 = StaticResource_41.__proto__ || Object.getPrototypeOf(StaticResource_41)).call.apply(_ref32, [this, n, p].concat(args)));
    _this32.parent = p;
    return _this32;
  }

  _createClass(StaticResource_41, [{
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return StaticResource_41;
}(VastElement);

var IFrameResource_42 =
/*#__PURE__*/
function (_VastElement33) {
  _inherits(IFrameResource_42, _VastElement33);

  /**
   * @param {string} n
   * @param {Companion_40} p
   */
  function IFrameResource_42(n, p) {
    var _ref33;

    var _this33;

    _classCallCheck(this, IFrameResource_42);

    for (var _len33 = arguments.length, args = new Array(_len33 > 2 ? _len33 - 2 : 0), _key33 = 2; _key33 < _len33; _key33++) {
      args[_key33 - 2] = arguments[_key33];
    }

    _this33 = _possibleConstructorReturn(this, (_ref33 = IFrameResource_42.__proto__ || Object.getPrototypeOf(IFrameResource_42)).call.apply(_ref33, [this, n, p].concat(args)));
    _this33.parent = p;
    return _this33;
  }

  _createClass(IFrameResource_42, [{
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return IFrameResource_42;
}(VastElement);

var HTMLResource_43 =
/*#__PURE__*/
function (_VastElement34) {
  _inherits(HTMLResource_43, _VastElement34);

  /**
   * @param {string} n
   * @param {Companion_40} p
   */
  function HTMLResource_43(n, p) {
    var _ref34;

    var _this34;

    _classCallCheck(this, HTMLResource_43);

    for (var _len34 = arguments.length, args = new Array(_len34 > 2 ? _len34 - 2 : 0), _key34 = 2; _key34 < _len34; _key34++) {
      args[_key34 - 2] = arguments[_key34];
    }

    _this34 = _possibleConstructorReturn(this, (_ref34 = HTMLResource_43.__proto__ || Object.getPrototypeOf(HTMLResource_43)).call.apply(_ref34, [this, n, p].concat(args)));
    _this34.parent = p;
    return _this34;
  }

  _createClass(HTMLResource_43, [{
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return HTMLResource_43;
}(VastElement);

var AdParameters_44 =
/*#__PURE__*/
function (_VastElement35) {
  _inherits(AdParameters_44, _VastElement35);

  /**
   * @param {string} n
   * @param {Companion_40} p
   */
  function AdParameters_44(n, p) {
    var _ref35;

    var _this35;

    _classCallCheck(this, AdParameters_44);

    for (var _len35 = arguments.length, args = new Array(_len35 > 2 ? _len35 - 2 : 0), _key35 = 2; _key35 < _len35; _key35++) {
      args[_key35 - 2] = arguments[_key35];
    }

    _this35 = _possibleConstructorReturn(this, (_ref35 = AdParameters_44.__proto__ || Object.getPrototypeOf(AdParameters_44)).call.apply(_ref35, [this, n, p].concat(args)));
    _this35.parent = p;
    return _this35;
  }

  _createClass(AdParameters_44, [{
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return AdParameters_44;
}(VastElement);

var AltText_45 =
/*#__PURE__*/
function (_VastElement36) {
  _inherits(AltText_45, _VastElement36);

  /**
   * @param {string} n
   * @param {Companion_40} p
   */
  function AltText_45(n, p) {
    var _ref36;

    var _this36;

    _classCallCheck(this, AltText_45);

    for (var _len36 = arguments.length, args = new Array(_len36 > 2 ? _len36 - 2 : 0), _key36 = 2; _key36 < _len36; _key36++) {
      args[_key36 - 2] = arguments[_key36];
    }

    _this36 = _possibleConstructorReturn(this, (_ref36 = AltText_45.__proto__ || Object.getPrototypeOf(AltText_45)).call.apply(_ref36, [this, n, p].concat(args)));
    _this36.parent = p;
    return _this36;
  }

  _createClass(AltText_45, [{
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return AltText_45;
}(VastElement);

var CompanionClickThrough_46 =
/*#__PURE__*/
function (_VastElement37) {
  _inherits(CompanionClickThrough_46, _VastElement37);

  /**
   * @param {string} n
   * @param {Companion_40} p
   */
  function CompanionClickThrough_46(n, p) {
    var _ref37;

    var _this37;

    _classCallCheck(this, CompanionClickThrough_46);

    for (var _len37 = arguments.length, args = new Array(_len37 > 2 ? _len37 - 2 : 0), _key37 = 2; _key37 < _len37; _key37++) {
      args[_key37 - 2] = arguments[_key37];
    }

    _this37 = _possibleConstructorReturn(this, (_ref37 = CompanionClickThrough_46.__proto__ || Object.getPrototypeOf(CompanionClickThrough_46)).call.apply(_ref37, [this, n, p].concat(args)));
    _this37.parent = p;
    return _this37;
  }

  _createClass(CompanionClickThrough_46, [{
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return CompanionClickThrough_46;
}(VastElement);

var CompanionClickTracking_47 =
/*#__PURE__*/
function (_VastElement38) {
  _inherits(CompanionClickTracking_47, _VastElement38);

  /**
   * @param {string} n
   * @param {Companion_40} p
   */
  function CompanionClickTracking_47(n, p) {
    var _ref38;

    var _this38;

    _classCallCheck(this, CompanionClickTracking_47);

    for (var _len38 = arguments.length, args = new Array(_len38 > 2 ? _len38 - 2 : 0), _key38 = 2; _key38 < _len38; _key38++) {
      args[_key38 - 2] = arguments[_key38];
    }

    _this38 = _possibleConstructorReturn(this, (_ref38 = CompanionClickTracking_47.__proto__ || Object.getPrototypeOf(CompanionClickTracking_47)).call.apply(_ref38, [this, n, p].concat(args)));
    _this38.parent = p;
    return _this38;
  }

  _createClass(CompanionClickTracking_47, [{
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return CompanionClickTracking_47;
}(VastElement);

var Tracking_49 =
/*#__PURE__*/
function (_VastElement39) {
  _inherits(Tracking_49, _VastElement39);

  /**
   * @param {string} n
   * @param {TrackingEvents_48} p
   */
  function Tracking_49(n, p) {
    var _ref39;

    var _this39;

    _classCallCheck(this, Tracking_49);

    for (var _len39 = arguments.length, args = new Array(_len39 > 2 ? _len39 - 2 : 0), _key39 = 2; _key39 < _len39; _key39++) {
      args[_key39 - 2] = arguments[_key39];
    }

    _this39 = _possibleConstructorReturn(this, (_ref39 = Tracking_49.__proto__ || Object.getPrototypeOf(Tracking_49)).call.apply(_ref39, [this, n, p].concat(args)));
    _this39.parent = p;
    return _this39;
  }

  _createClass(Tracking_49, [{
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return Tracking_49;
}(VastElement);

var TrackingEvents_48 =
/*#__PURE__*/
function (_VastElement40) {
  _inherits(TrackingEvents_48, _VastElement40);

  /**
   * @param {string} n
   * @param {Companion_40} p
   */
  function TrackingEvents_48(n, p) {
    var _ref40;

    var _this40;

    _classCallCheck(this, TrackingEvents_48);

    for (var _len40 = arguments.length, args = new Array(_len40 > 2 ? _len40 - 2 : 0), _key40 = 2; _key40 < _len40; _key40++) {
      args[_key40 - 2] = arguments[_key40];
    }

    _this40 = _possibleConstructorReturn(this, (_ref40 = TrackingEvents_48.__proto__ || Object.getPrototypeOf(TrackingEvents_48)).call.apply(_ref40, [this, n, p].concat(args)));
    _this40.parent = p;
    return _this40;
  }
  /** 
   * @param {string} content
   * @param {{event:("creativeView")}} attributes
   * @returns {Tracking_49} 
   */


  _createClass(TrackingEvents_48, [{
    key: "attachTracking",
    value: function attachTracking(content, attributes) {
      var newElem = new Tracking_49('Tracking', this, {
        "attrs": ["event"]
        /*: Infos*/

      }, content, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @param {{event:("creativeView")}} attributes
     * @returns {TrackingEvents_48} 
     */

  }, {
    key: "addTracking",
    value: function addTracking(content, attributes) {
      return this.attachTracking(content, attributes).and();
    }
  }, {
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return TrackingEvents_48;
}(VastElement);

var Companion_40 =
/*#__PURE__*/
function (_VastElement41) {
  _inherits(Companion_40, _VastElement41);

  /**
   * @param {string} n
   * @param {CompanionAds_39} p
   */
  function Companion_40(n, p) {
    var _ref41;

    var _this41;

    _classCallCheck(this, Companion_40);

    for (var _len41 = arguments.length, args = new Array(_len41 > 2 ? _len41 - 2 : 0), _key41 = 2; _key41 < _len41; _key41++) {
      args[_key41 - 2] = arguments[_key41];
    }

    _this41 = _possibleConstructorReturn(this, (_ref41 = Companion_40.__proto__ || Object.getPrototypeOf(Companion_40)).call.apply(_ref41, [this, n, p].concat(args)));
    _this41.parent = p;
    return _this41;
  }
  /** 
   * @param {string} content
   * @param {{creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash")}} attributes
   * @returns {StaticResource_41} 
   */


  _createClass(Companion_40, [{
    key: "attachStaticResource",
    value: function attachStaticResource(content, attributes) {
      var newElem = new StaticResource_41('StaticResource', this, {
        "attrs": ["creativeType"]
        /*: Infos*/

      }, content, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @param {{creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash")}} attributes
     * @returns {Companion_40} 
     */

  }, {
    key: "addStaticResource",
    value: function addStaticResource(content, attributes) {
      return this.attachStaticResource(content, attributes).and();
    }
    /** 
     * @param {string} content
     * @returns {IFrameResource_42} 
     */

  }, {
    key: "attachIFrameResource",
    value: function attachIFrameResource(content) {
      var newElem = new IFrameResource_42('IFrameResource', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {Companion_40} 
     */

  }, {
    key: "addIFrameResource",
    value: function addIFrameResource(content) {
      return this.attachIFrameResource(content).and();
    }
    /** 
     * @param {string} content
     * @returns {HTMLResource_43} 
     */

  }, {
    key: "attachHTMLResource",
    value: function attachHTMLResource(content) {
      var newElem = new HTMLResource_43('HTMLResource', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {Companion_40} 
     */

  }, {
    key: "addHTMLResource",
    value: function addHTMLResource(content) {
      return this.attachHTMLResource(content).and();
    }
    /** 
     * @param {string} content
     * @param {{xmlEncoded: string}} attributes
     * @returns {AdParameters_44} 
     */

  }, {
    key: "attachAdParameters",
    value: function attachAdParameters(content, attributes) {
      var newElem = new AdParameters_44('AdParameters', this, {
        "attrs": ["xmlEncoded"]
        /*: Infos*/

      }, content, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @param {{xmlEncoded: string}} attributes
     * @returns {Companion_40} 
     */

  }, {
    key: "addAdParameters",
    value: function addAdParameters(content, attributes) {
      return this.attachAdParameters(content, attributes).and();
    }
    /** 
     * @param {string} content
     * @returns {AltText_45} 
     */

  }, {
    key: "attachAltText",
    value: function attachAltText(content) {
      var newElem = new AltText_45('AltText', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {Companion_40} 
     */

  }, {
    key: "addAltText",
    value: function addAltText(content) {
      return this.attachAltText(content).and();
    }
    /** 
     * @param {string} content
     * @returns {CompanionClickThrough_46} 
     */

  }, {
    key: "attachCompanionClickThrough",
    value: function attachCompanionClickThrough(content) {
      var newElem = new CompanionClickThrough_46('CompanionClickThrough', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {Companion_40} 
     */

  }, {
    key: "addCompanionClickThrough",
    value: function addCompanionClickThrough(content) {
      return this.attachCompanionClickThrough(content).and();
    }
    /** 
     * @param {string} content
     * @param {{id: string}} attributes
     * @returns {CompanionClickTracking_47} 
     */

  }, {
    key: "attachCompanionClickTracking",
    value: function attachCompanionClickTracking(content, attributes) {
      var newElem = new CompanionClickTracking_47('CompanionClickTracking', this, {
        "attrs": ["id"]
        /*: Infos*/

      }, content, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @param {{id: string}} attributes
     * @returns {Companion_40} 
     */

  }, {
    key: "addCompanionClickTracking",
    value: function addCompanionClickTracking(content, attributes) {
      return this.attachCompanionClickTracking(content, attributes).and();
    }
    /** 
     * @returns {TrackingEvents_48} 
     */

  }, {
    key: "attachTrackingEvents",
    value: function attachTrackingEvents() {
      var newElem = new TrackingEvents_48('TrackingEvents', this, {}
      /*: Infos*/
      );
      this.childs.push(newElem);
      return newElem;
    }
  }, {
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return Companion_40;
}(VastElement);

var CompanionAds_39 =
/*#__PURE__*/
function (_VastElement42) {
  _inherits(CompanionAds_39, _VastElement42);

  /**
   * @param {string} n
   * @param {Creative_16} p
   */
  function CompanionAds_39(n, p) {
    var _ref42;

    var _this42;

    _classCallCheck(this, CompanionAds_39);

    for (var _len42 = arguments.length, args = new Array(_len42 > 2 ? _len42 - 2 : 0), _key42 = 2; _key42 < _len42; _key42++) {
      args[_key42 - 2] = arguments[_key42];
    }

    _this42 = _possibleConstructorReturn(this, (_ref42 = CompanionAds_39.__proto__ || Object.getPrototypeOf(CompanionAds_39)).call.apply(_ref42, [this, n, p].concat(args)));
    _this42.parent = p;
    return _this42;
  }
  /** 
   * @param {{id: string, width: string, height: string, assetWidth: string, assetHeight: string, expandedWidth: string, expandedHeight: string, apiFramework: string, adSlotID: string}} attributes
   * @returns {Companion_40} 
   */


  _createClass(CompanionAds_39, [{
    key: "attachCompanion",
    value: function attachCompanion(attributes) {
      var newElem = new Companion_40('Companion', this, {
        "attrs": ["id", "width", "height", "assetWidth", "assetHeight", "expandedWidth", "expandedHeight", "apiFramework", "adSlotID"]
        /*: Infos*/

      }, attributes);
      this.childs.push(newElem);
      return newElem;
    }
  }, {
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return CompanionAds_39;
}(VastElement);

var StaticResource_52 =
/*#__PURE__*/
function (_VastElement43) {
  _inherits(StaticResource_52, _VastElement43);

  /**
   * @param {string} n
   * @param {NonLinear_51} p
   */
  function StaticResource_52(n, p) {
    var _ref43;

    var _this43;

    _classCallCheck(this, StaticResource_52);

    for (var _len43 = arguments.length, args = new Array(_len43 > 2 ? _len43 - 2 : 0), _key43 = 2; _key43 < _len43; _key43++) {
      args[_key43 - 2] = arguments[_key43];
    }

    _this43 = _possibleConstructorReturn(this, (_ref43 = StaticResource_52.__proto__ || Object.getPrototypeOf(StaticResource_52)).call.apply(_ref43, [this, n, p].concat(args)));
    _this43.parent = p;
    return _this43;
  }

  _createClass(StaticResource_52, [{
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return StaticResource_52;
}(VastElement);

var IFrameResource_53 =
/*#__PURE__*/
function (_VastElement44) {
  _inherits(IFrameResource_53, _VastElement44);

  /**
   * @param {string} n
   * @param {NonLinear_51} p
   */
  function IFrameResource_53(n, p) {
    var _ref44;

    var _this44;

    _classCallCheck(this, IFrameResource_53);

    for (var _len44 = arguments.length, args = new Array(_len44 > 2 ? _len44 - 2 : 0), _key44 = 2; _key44 < _len44; _key44++) {
      args[_key44 - 2] = arguments[_key44];
    }

    _this44 = _possibleConstructorReturn(this, (_ref44 = IFrameResource_53.__proto__ || Object.getPrototypeOf(IFrameResource_53)).call.apply(_ref44, [this, n, p].concat(args)));
    _this44.parent = p;
    return _this44;
  }

  _createClass(IFrameResource_53, [{
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return IFrameResource_53;
}(VastElement);

var HTMLResource_54 =
/*#__PURE__*/
function (_VastElement45) {
  _inherits(HTMLResource_54, _VastElement45);

  /**
   * @param {string} n
   * @param {NonLinear_51} p
   */
  function HTMLResource_54(n, p) {
    var _ref45;

    var _this45;

    _classCallCheck(this, HTMLResource_54);

    for (var _len45 = arguments.length, args = new Array(_len45 > 2 ? _len45 - 2 : 0), _key45 = 2; _key45 < _len45; _key45++) {
      args[_key45 - 2] = arguments[_key45];
    }

    _this45 = _possibleConstructorReturn(this, (_ref45 = HTMLResource_54.__proto__ || Object.getPrototypeOf(HTMLResource_54)).call.apply(_ref45, [this, n, p].concat(args)));
    _this45.parent = p;
    return _this45;
  }

  _createClass(HTMLResource_54, [{
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return HTMLResource_54;
}(VastElement);

var NonLinearClickThrough_55 =
/*#__PURE__*/
function (_VastElement46) {
  _inherits(NonLinearClickThrough_55, _VastElement46);

  /**
   * @param {string} n
   * @param {NonLinear_51} p
   */
  function NonLinearClickThrough_55(n, p) {
    var _ref46;

    var _this46;

    _classCallCheck(this, NonLinearClickThrough_55);

    for (var _len46 = arguments.length, args = new Array(_len46 > 2 ? _len46 - 2 : 0), _key46 = 2; _key46 < _len46; _key46++) {
      args[_key46 - 2] = arguments[_key46];
    }

    _this46 = _possibleConstructorReturn(this, (_ref46 = NonLinearClickThrough_55.__proto__ || Object.getPrototypeOf(NonLinearClickThrough_55)).call.apply(_ref46, [this, n, p].concat(args)));
    _this46.parent = p;
    return _this46;
  }

  _createClass(NonLinearClickThrough_55, [{
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return NonLinearClickThrough_55;
}(VastElement);

var NonLinearClickTracking_56 =
/*#__PURE__*/
function (_VastElement47) {
  _inherits(NonLinearClickTracking_56, _VastElement47);

  /**
   * @param {string} n
   * @param {NonLinear_51} p
   */
  function NonLinearClickTracking_56(n, p) {
    var _ref47;

    var _this47;

    _classCallCheck(this, NonLinearClickTracking_56);

    for (var _len47 = arguments.length, args = new Array(_len47 > 2 ? _len47 - 2 : 0), _key47 = 2; _key47 < _len47; _key47++) {
      args[_key47 - 2] = arguments[_key47];
    }

    _this47 = _possibleConstructorReturn(this, (_ref47 = NonLinearClickTracking_56.__proto__ || Object.getPrototypeOf(NonLinearClickTracking_56)).call.apply(_ref47, [this, n, p].concat(args)));
    _this47.parent = p;
    return _this47;
  }

  _createClass(NonLinearClickTracking_56, [{
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return NonLinearClickTracking_56;
}(VastElement);

var AdParameters_57 =
/*#__PURE__*/
function (_VastElement48) {
  _inherits(AdParameters_57, _VastElement48);

  /**
   * @param {string} n
   * @param {NonLinear_51} p
   */
  function AdParameters_57(n, p) {
    var _ref48;

    var _this48;

    _classCallCheck(this, AdParameters_57);

    for (var _len48 = arguments.length, args = new Array(_len48 > 2 ? _len48 - 2 : 0), _key48 = 2; _key48 < _len48; _key48++) {
      args[_key48 - 2] = arguments[_key48];
    }

    _this48 = _possibleConstructorReturn(this, (_ref48 = AdParameters_57.__proto__ || Object.getPrototypeOf(AdParameters_57)).call.apply(_ref48, [this, n, p].concat(args)));
    _this48.parent = p;
    return _this48;
  }

  _createClass(AdParameters_57, [{
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return AdParameters_57;
}(VastElement);

var NonLinear_51 =
/*#__PURE__*/
function (_VastElement49) {
  _inherits(NonLinear_51, _VastElement49);

  /**
   * @param {string} n
   * @param {NonLinearAds_50} p
   */
  function NonLinear_51(n, p) {
    var _ref49;

    var _this49;

    _classCallCheck(this, NonLinear_51);

    for (var _len49 = arguments.length, args = new Array(_len49 > 2 ? _len49 - 2 : 0), _key49 = 2; _key49 < _len49; _key49++) {
      args[_key49 - 2] = arguments[_key49];
    }

    _this49 = _possibleConstructorReturn(this, (_ref49 = NonLinear_51.__proto__ || Object.getPrototypeOf(NonLinear_51)).call.apply(_ref49, [this, n, p].concat(args)));
    _this49.parent = p;
    return _this49;
  }
  /** 
   * @param {string} content
   * @param {{creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash")}} attributes
   * @returns {StaticResource_52} 
   */


  _createClass(NonLinear_51, [{
    key: "attachStaticResource",
    value: function attachStaticResource(content, attributes) {
      var newElem = new StaticResource_52('StaticResource', this, {
        "attrs": ["creativeType"]
        /*: Infos*/

      }, content, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @param {{creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash")}} attributes
     * @returns {NonLinear_51} 
     */

  }, {
    key: "addStaticResource",
    value: function addStaticResource(content, attributes) {
      return this.attachStaticResource(content, attributes).and();
    }
    /** 
     * @param {string} content
     * @returns {IFrameResource_53} 
     */

  }, {
    key: "attachIFrameResource",
    value: function attachIFrameResource(content) {
      var newElem = new IFrameResource_53('IFrameResource', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {NonLinear_51} 
     */

  }, {
    key: "addIFrameResource",
    value: function addIFrameResource(content) {
      return this.attachIFrameResource(content).and();
    }
    /** 
     * @param {string} content
     * @returns {HTMLResource_54} 
     */

  }, {
    key: "attachHTMLResource",
    value: function attachHTMLResource(content) {
      var newElem = new HTMLResource_54('HTMLResource', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {NonLinear_51} 
     */

  }, {
    key: "addHTMLResource",
    value: function addHTMLResource(content) {
      return this.attachHTMLResource(content).and();
    }
    /** 
     * @param {string} content
     * @returns {NonLinearClickThrough_55} 
     */

  }, {
    key: "attachNonLinearClickThrough",
    value: function attachNonLinearClickThrough(content) {
      var newElem = new NonLinearClickThrough_55('NonLinearClickThrough', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {NonLinear_51} 
     */

  }, {
    key: "addNonLinearClickThrough",
    value: function addNonLinearClickThrough(content) {
      return this.attachNonLinearClickThrough(content).and();
    }
    /** 
     * @param {string} content
     * @param {{id: string}} attributes
     * @returns {NonLinearClickTracking_56} 
     */

  }, {
    key: "attachNonLinearClickTracking",
    value: function attachNonLinearClickTracking(content, attributes) {
      var newElem = new NonLinearClickTracking_56('NonLinearClickTracking', this, {
        "attrs": ["id"]
        /*: Infos*/

      }, content, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @param {{id: string}} attributes
     * @returns {NonLinear_51} 
     */

  }, {
    key: "addNonLinearClickTracking",
    value: function addNonLinearClickTracking(content, attributes) {
      return this.attachNonLinearClickTracking(content, attributes).and();
    }
    /** 
     * @param {string} content
     * @param {{xmlEncoded: string}} attributes
     * @returns {AdParameters_57} 
     */

  }, {
    key: "attachAdParameters",
    value: function attachAdParameters(content, attributes) {
      var newElem = new AdParameters_57('AdParameters', this, {
        "attrs": ["xmlEncoded"]
        /*: Infos*/

      }, content, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @param {{xmlEncoded: string}} attributes
     * @returns {NonLinear_51} 
     */

  }, {
    key: "addAdParameters",
    value: function addAdParameters(content, attributes) {
      return this.attachAdParameters(content, attributes).and();
    }
  }, {
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return NonLinear_51;
}(VastElement);

var Tracking_59 =
/*#__PURE__*/
function (_VastElement50) {
  _inherits(Tracking_59, _VastElement50);

  /**
   * @param {string} n
   * @param {TrackingEvents_58} p
   */
  function Tracking_59(n, p) {
    var _ref50;

    var _this50;

    _classCallCheck(this, Tracking_59);

    for (var _len50 = arguments.length, args = new Array(_len50 > 2 ? _len50 - 2 : 0), _key50 = 2; _key50 < _len50; _key50++) {
      args[_key50 - 2] = arguments[_key50];
    }

    _this50 = _possibleConstructorReturn(this, (_ref50 = Tracking_59.__proto__ || Object.getPrototypeOf(Tracking_59)).call.apply(_ref50, [this, n, p].concat(args)));
    _this50.parent = p;
    return _this50;
  }

  _createClass(Tracking_59, [{
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return Tracking_59;
}(VastElement);

var TrackingEvents_58 =
/*#__PURE__*/
function (_VastElement51) {
  _inherits(TrackingEvents_58, _VastElement51);

  /**
   * @param {string} n
   * @param {NonLinearAds_50} p
   */
  function TrackingEvents_58(n, p) {
    var _ref51;

    var _this51;

    _classCallCheck(this, TrackingEvents_58);

    for (var _len51 = arguments.length, args = new Array(_len51 > 2 ? _len51 - 2 : 0), _key51 = 2; _key51 < _len51; _key51++) {
      args[_key51 - 2] = arguments[_key51];
    }

    _this51 = _possibleConstructorReturn(this, (_ref51 = TrackingEvents_58.__proto__ || Object.getPrototypeOf(TrackingEvents_58)).call.apply(_ref51, [this, n, p].concat(args)));
    _this51.parent = p;
    return _this51;
  }
  /** 
   * @param {string} content
   * @param {{event:("creativeView"|"start"|"firstQuartile"|"midpoint"|"thirdQuartile"|"complete"|"mute"|"unmute"|"pause"|"rewind"|"resume"|"fullscreen"|"exitFullscreen"|"expand"|"collapse"|"acceptInvitation"|"close"|"progress")}} attributes
   * @returns {Tracking_59} 
   */


  _createClass(TrackingEvents_58, [{
    key: "attachTracking",
    value: function attachTracking(content, attributes) {
      var newElem = new Tracking_59('Tracking', this, {
        "attrs": ["event"]
        /*: Infos*/

      }, content, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @param {{event:("creativeView"|"start"|"firstQuartile"|"midpoint"|"thirdQuartile"|"complete"|"mute"|"unmute"|"pause"|"rewind"|"resume"|"fullscreen"|"exitFullscreen"|"expand"|"collapse"|"acceptInvitation"|"close"|"progress")}} attributes
     * @returns {TrackingEvents_58} 
     */

  }, {
    key: "addTracking",
    value: function addTracking(content, attributes) {
      return this.attachTracking(content, attributes).and();
    }
  }, {
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return TrackingEvents_58;
}(VastElement);

var NonLinearAds_50 =
/*#__PURE__*/
function (_VastElement52) {
  _inherits(NonLinearAds_50, _VastElement52);

  /**
   * @param {string} n
   * @param {Creative_16} p
   */
  function NonLinearAds_50(n, p) {
    var _ref52;

    var _this52;

    _classCallCheck(this, NonLinearAds_50);

    for (var _len52 = arguments.length, args = new Array(_len52 > 2 ? _len52 - 2 : 0), _key52 = 2; _key52 < _len52; _key52++) {
      args[_key52 - 2] = arguments[_key52];
    }

    _this52 = _possibleConstructorReturn(this, (_ref52 = NonLinearAds_50.__proto__ || Object.getPrototypeOf(NonLinearAds_50)).call.apply(_ref52, [this, n, p].concat(args)));
    _this52.parent = p;
    return _this52;
  }
  /** 
   * @param {{id: string, width: string, height: string, expandedWidth: string, expandedHeight: string, scalable: string, maintainAspectRatio: string, minSuggestedDuration: string, apiFramework: string}} attributes
   * @returns {NonLinear_51} 
   */


  _createClass(NonLinearAds_50, [{
    key: "attachNonLinear",
    value: function attachNonLinear(attributes) {
      var newElem = new NonLinear_51('NonLinear', this, {
        "attrs": ["id", "width", "height", "expandedWidth", "expandedHeight", "scalable", "maintainAspectRatio", "minSuggestedDuration", "apiFramework"]
        /*: Infos*/

      }, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @returns {TrackingEvents_58} 
     */

  }, {
    key: "attachTrackingEvents",
    value: function attachTrackingEvents() {
      var newElem = new TrackingEvents_58('TrackingEvents', this, {}
      /*: Infos*/
      );
      this.childs.push(newElem);
      return newElem;
    }
  }, {
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return NonLinearAds_50;
}(VastElement);

var Creative_16 =
/*#__PURE__*/
function (_VastElement53) {
  _inherits(Creative_16, _VastElement53);

  /**
   * @param {string} n
   * @param {Creatives_15} p
   */
  function Creative_16(n, p) {
    var _ref53;

    var _this53;

    _classCallCheck(this, Creative_16);

    for (var _len53 = arguments.length, args = new Array(_len53 > 2 ? _len53 - 2 : 0), _key53 = 2; _key53 < _len53; _key53++) {
      args[_key53 - 2] = arguments[_key53];
    }

    _this53 = _possibleConstructorReturn(this, (_ref53 = Creative_16.__proto__ || Object.getPrototypeOf(Creative_16)).call.apply(_ref53, [this, n, p].concat(args)));
    _this53.parent = p;
    return _this53;
  }
  /** 
   * @returns {CreativeExtensions_17} 
   */


  _createClass(Creative_16, [{
    key: "attachCreativeExtensions",
    value: function attachCreativeExtensions() {
      var newElem = new CreativeExtensions_17('CreativeExtensions', this, {}
      /*: Infos*/
      );
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {{skipoffset: string}} attributes
     * @returns {Linear_19} 
     */

  }, {
    key: "attachLinear",
    value: function attachLinear(attributes) {
      var newElem = new Linear_19('Linear', this, {
        "attrs": ["skipoffset"]
        /*: Infos*/

      }, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {{required:("all"|"any"|"none")}} attributes
     * @returns {CompanionAds_39} 
     */

  }, {
    key: "attachCompanionAds",
    value: function attachCompanionAds(attributes) {
      var newElem = new CompanionAds_39('CompanionAds', this, {
        "attrs": ["required"]
        /*: Infos*/

      }, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @returns {NonLinearAds_50} 
     */

  }, {
    key: "attachNonLinearAds",
    value: function attachNonLinearAds() {
      var newElem = new NonLinearAds_50('NonLinearAds', this, {}
      /*: Infos*/
      );
      this.childs.push(newElem);
      return newElem;
    }
  }, {
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return Creative_16;
}(VastElement);

var Creatives_15 =
/*#__PURE__*/
function (_VastElement54) {
  _inherits(Creatives_15, _VastElement54);

  /**
   * @param {string} n
   * @param {InLine_6} p
   */
  function Creatives_15(n, p) {
    var _ref54;

    var _this54;

    _classCallCheck(this, Creatives_15);

    for (var _len54 = arguments.length, args = new Array(_len54 > 2 ? _len54 - 2 : 0), _key54 = 2; _key54 < _len54; _key54++) {
      args[_key54 - 2] = arguments[_key54];
    }

    _this54 = _possibleConstructorReturn(this, (_ref54 = Creatives_15.__proto__ || Object.getPrototypeOf(Creatives_15)).call.apply(_ref54, [this, n, p].concat(args)));
    _this54.parent = p;
    return _this54;
  }
  /** 
   * @param {{id: string, sequence: string, adID: string, apiFramework: string}} attributes
   * @returns {Creative_16} 
   */


  _createClass(Creatives_15, [{
    key: "attachCreative",
    value: function attachCreative(attributes) {
      var newElem = new Creative_16('Creative', this, {
        "attrs": ["id", "sequence", "adID", "apiFramework"]
        /*: Infos*/

      }, attributes);
      this.childs.push(newElem);
      return newElem;
    }
  }, {
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return Creatives_15;
}(VastElement);

var Extension_61 =
/*#__PURE__*/
function (_VastElement55) {
  _inherits(Extension_61, _VastElement55);

  /**
   * @param {string} n
   * @param {Extensions_60} p
   */
  function Extension_61(n, p) {
    var _ref55;

    var _this55;

    _classCallCheck(this, Extension_61);

    for (var _len55 = arguments.length, args = new Array(_len55 > 2 ? _len55 - 2 : 0), _key55 = 2; _key55 < _len55; _key55++) {
      args[_key55 - 2] = arguments[_key55];
    }

    _this55 = _possibleConstructorReturn(this, (_ref55 = Extension_61.__proto__ || Object.getPrototypeOf(Extension_61)).call.apply(_ref55, [this, n, p].concat(args)));
    _this55.parent = p;
    return _this55;
  }

  _createClass(Extension_61, [{
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return Extension_61;
}(VastElement);

var Extensions_60 =
/*#__PURE__*/
function (_VastElement56) {
  _inherits(Extensions_60, _VastElement56);

  /**
   * @param {string} n
   * @param {InLine_6} p
   */
  function Extensions_60(n, p) {
    var _ref56;

    var _this56;

    _classCallCheck(this, Extensions_60);

    for (var _len56 = arguments.length, args = new Array(_len56 > 2 ? _len56 - 2 : 0), _key56 = 2; _key56 < _len56; _key56++) {
      args[_key56 - 2] = arguments[_key56];
    }

    _this56 = _possibleConstructorReturn(this, (_ref56 = Extensions_60.__proto__ || Object.getPrototypeOf(Extensions_60)).call.apply(_ref56, [this, n, p].concat(args)));
    _this56.parent = p;
    return _this56;
  }
  /** @description required in Vast 3
   * @param {string} content
   * @param {{type: string}} attributes
   * @returns {Extension_61} 
   */


  _createClass(Extensions_60, [{
    key: "attachExtension",
    value: function attachExtension(content, attributes) {
      var newElem = new Extension_61('Extension', this, {
        "attrs": ["type"]
        /*: Infos*/

      }, content, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** @description required in Vast 3
     * @param {string} content
     * @param {{type: string}} attributes
     * @returns {Extensions_60} 
     */

  }, {
    key: "addExtension",
    value: function addExtension(content, attributes) {
      return this.attachExtension(content, attributes).and();
    }
  }, {
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return Extensions_60;
}(VastElement);

var InLine_6 =
/*#__PURE__*/
function (_VastElement57) {
  _inherits(InLine_6, _VastElement57);

  /**
   * @param {string} n
   * @param {Ad_5} p
   */
  function InLine_6(n, p) {
    var _ref57;

    var _this57;

    _classCallCheck(this, InLine_6);

    for (var _len57 = arguments.length, args = new Array(_len57 > 2 ? _len57 - 2 : 0), _key57 = 2; _key57 < _len57; _key57++) {
      args[_key57 - 2] = arguments[_key57];
    }

    _this57 = _possibleConstructorReturn(this, (_ref57 = InLine_6.__proto__ || Object.getPrototypeOf(InLine_6)).call.apply(_ref57, [this, n, p].concat(args)));
    _this57.parent = p;
    return _this57;
  }
  /** @description required in Vast 3
   * @param {string} content
   * @param {{version: string}} attributes
   * @returns {AdSystem_7} 
   */


  _createClass(InLine_6, [{
    key: "attachAdSystem",
    value: function attachAdSystem(content, attributes) {
      var newElem = new AdSystem_7('AdSystem', this, {
        "attrs": ["version"]
        /*: Infos*/

      }, content, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** @description required in Vast 3
     * @param {string} content
     * @param {{version: string}} attributes
     * @returns {InLine_6} 
     */

  }, {
    key: "addAdSystem",
    value: function addAdSystem(content, attributes) {
      return this.attachAdSystem(content, attributes).and();
    }
    /** @description required in Vast 3
     * @param {string} content
     * @returns {AdTitle_8} 
     */

  }, {
    key: "attachAdTitle",
    value: function attachAdTitle(content) {
      var newElem = new AdTitle_8('AdTitle', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** @description required in Vast 3
     * @param {string} content
     * @returns {InLine_6} 
     */

  }, {
    key: "addAdTitle",
    value: function addAdTitle(content) {
      return this.attachAdTitle(content).and();
    }
    /** 
     * @param {string} content
     * @returns {Description_9} 
     */

  }, {
    key: "attachDescription",
    value: function attachDescription(content) {
      var newElem = new Description_9('Description', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {InLine_6} 
     */

  }, {
    key: "addDescription",
    value: function addDescription(content) {
      return this.attachDescription(content).and();
    }
    /** 
     * @param {string} content
     * @returns {Advertiser_10} 
     */

  }, {
    key: "attachAdvertiser",
    value: function attachAdvertiser(content) {
      var newElem = new Advertiser_10('Advertiser', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {InLine_6} 
     */

  }, {
    key: "addAdvertiser",
    value: function addAdvertiser(content) {
      return this.attachAdvertiser(content).and();
    }
    /** 
     * @param {string} content
     * @param {{currency: string, model:("CPM"|"CPC"|"CPE"|"CPV")}} attributes
     * @returns {Pricing_11} 
     */

  }, {
    key: "attachPricing",
    value: function attachPricing(content, attributes) {
      var newElem = new Pricing_11('Pricing', this, {
        "attrs": ["currency", "model"]
        /*: Infos*/

      }, content, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @param {{currency: string, model:("CPM"|"CPC"|"CPE"|"CPV")}} attributes
     * @returns {InLine_6} 
     */

  }, {
    key: "addPricing",
    value: function addPricing(content, attributes) {
      return this.attachPricing(content, attributes).and();
    }
    /** 
     * @param {string} content
     * @returns {Survey_12} 
     */

  }, {
    key: "attachSurvey",
    value: function attachSurvey(content) {
      var newElem = new Survey_12('Survey', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {InLine_6} 
     */

  }, {
    key: "addSurvey",
    value: function addSurvey(content) {
      return this.attachSurvey(content).and();
    }
    /** 
     * @param {string} content
     * @returns {Error_13} 
     */

  }, {
    key: "attachError",
    value: function attachError(content) {
      var newElem = new Error_13('Error', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {InLine_6} 
     */

  }, {
    key: "addError",
    value: function addError(content) {
      return this.attachError(content).and();
    }
    /** 
     * @param {string} content
     * @param {{id: string}} attributes
     * @returns {Impression_14} 
     */

  }, {
    key: "attachImpression",
    value: function attachImpression(content, attributes) {
      var newElem = new Impression_14('Impression', this, {
        "attrs": ["id"]
        /*: Infos*/

      }, content, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @param {{id: string}} attributes
     * @returns {InLine_6} 
     */

  }, {
    key: "addImpression",
    value: function addImpression(content, attributes) {
      return this.attachImpression(content, attributes).and();
    }
    /** @description required in Vast 3
     * @returns {Creatives_15} 
     */

  }, {
    key: "attachCreatives",
    value: function attachCreatives() {
      var newElem = new Creatives_15('Creatives', this, {}
      /*: Infos*/
      );
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @returns {Extensions_60} 
     */

  }, {
    key: "attachExtensions",
    value: function attachExtensions() {
      var newElem = new Extensions_60('Extensions', this, {}
      /*: Infos*/
      );
      this.childs.push(newElem);
      return newElem;
    }
  }, {
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return InLine_6;
}(VastElement);

var AdSystem_63 =
/*#__PURE__*/
function (_VastElement58) {
  _inherits(AdSystem_63, _VastElement58);

  /**
   * @param {string} n
   * @param {Wrapper_62} p
   */
  function AdSystem_63(n, p) {
    var _ref58;

    var _this58;

    _classCallCheck(this, AdSystem_63);

    for (var _len58 = arguments.length, args = new Array(_len58 > 2 ? _len58 - 2 : 0), _key58 = 2; _key58 < _len58; _key58++) {
      args[_key58 - 2] = arguments[_key58];
    }

    _this58 = _possibleConstructorReturn(this, (_ref58 = AdSystem_63.__proto__ || Object.getPrototypeOf(AdSystem_63)).call.apply(_ref58, [this, n, p].concat(args)));
    _this58.parent = p;
    return _this58;
  }

  _createClass(AdSystem_63, [{
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return AdSystem_63;
}(VastElement);

var VASTAdTagURI_64 =
/*#__PURE__*/
function (_VastElement59) {
  _inherits(VASTAdTagURI_64, _VastElement59);

  /**
   * @param {string} n
   * @param {Wrapper_62} p
   */
  function VASTAdTagURI_64(n, p) {
    var _ref59;

    var _this59;

    _classCallCheck(this, VASTAdTagURI_64);

    for (var _len59 = arguments.length, args = new Array(_len59 > 2 ? _len59 - 2 : 0), _key59 = 2; _key59 < _len59; _key59++) {
      args[_key59 - 2] = arguments[_key59];
    }

    _this59 = _possibleConstructorReturn(this, (_ref59 = VASTAdTagURI_64.__proto__ || Object.getPrototypeOf(VASTAdTagURI_64)).call.apply(_ref59, [this, n, p].concat(args)));
    _this59.parent = p;
    return _this59;
  }

  _createClass(VASTAdTagURI_64, [{
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return VASTAdTagURI_64;
}(VastElement);

var Error_65 =
/*#__PURE__*/
function (_VastElement60) {
  _inherits(Error_65, _VastElement60);

  /**
   * @param {string} n
   * @param {Wrapper_62} p
   */
  function Error_65(n, p) {
    var _ref60;

    var _this60;

    _classCallCheck(this, Error_65);

    for (var _len60 = arguments.length, args = new Array(_len60 > 2 ? _len60 - 2 : 0), _key60 = 2; _key60 < _len60; _key60++) {
      args[_key60 - 2] = arguments[_key60];
    }

    _this60 = _possibleConstructorReturn(this, (_ref60 = Error_65.__proto__ || Object.getPrototypeOf(Error_65)).call.apply(_ref60, [this, n, p].concat(args)));
    _this60.parent = p;
    return _this60;
  }

  _createClass(Error_65, [{
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return Error_65;
}(VastElement);

var Impression_66 =
/*#__PURE__*/
function (_VastElement61) {
  _inherits(Impression_66, _VastElement61);

  /**
   * @param {string} n
   * @param {Wrapper_62} p
   */
  function Impression_66(n, p) {
    var _ref61;

    var _this61;

    _classCallCheck(this, Impression_66);

    for (var _len61 = arguments.length, args = new Array(_len61 > 2 ? _len61 - 2 : 0), _key61 = 2; _key61 < _len61; _key61++) {
      args[_key61 - 2] = arguments[_key61];
    }

    _this61 = _possibleConstructorReturn(this, (_ref61 = Impression_66.__proto__ || Object.getPrototypeOf(Impression_66)).call.apply(_ref61, [this, n, p].concat(args)));
    _this61.parent = p;
    return _this61;
  }

  _createClass(Impression_66, [{
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return Impression_66;
}(VastElement);

var Tracking_71 =
/*#__PURE__*/
function (_VastElement62) {
  _inherits(Tracking_71, _VastElement62);

  /**
   * @param {string} n
   * @param {TrackingEvents_70} p
   */
  function Tracking_71(n, p) {
    var _ref62;

    var _this62;

    _classCallCheck(this, Tracking_71);

    for (var _len62 = arguments.length, args = new Array(_len62 > 2 ? _len62 - 2 : 0), _key62 = 2; _key62 < _len62; _key62++) {
      args[_key62 - 2] = arguments[_key62];
    }

    _this62 = _possibleConstructorReturn(this, (_ref62 = Tracking_71.__proto__ || Object.getPrototypeOf(Tracking_71)).call.apply(_ref62, [this, n, p].concat(args)));
    _this62.parent = p;
    return _this62;
  }

  _createClass(Tracking_71, [{
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return Tracking_71;
}(VastElement);

var TrackingEvents_70 =
/*#__PURE__*/
function (_VastElement63) {
  _inherits(TrackingEvents_70, _VastElement63);

  /**
   * @param {string} n
   * @param {Linear_69} p
   */
  function TrackingEvents_70(n, p) {
    var _ref63;

    var _this63;

    _classCallCheck(this, TrackingEvents_70);

    for (var _len63 = arguments.length, args = new Array(_len63 > 2 ? _len63 - 2 : 0), _key63 = 2; _key63 < _len63; _key63++) {
      args[_key63 - 2] = arguments[_key63];
    }

    _this63 = _possibleConstructorReturn(this, (_ref63 = TrackingEvents_70.__proto__ || Object.getPrototypeOf(TrackingEvents_70)).call.apply(_ref63, [this, n, p].concat(args)));
    _this63.parent = p;
    return _this63;
  }
  /** 
   * @param {string} content
   * @param {{event:("creativeView"|"start"|"firstQuartile"|"midpoint"|"thirdQuartile"|"complete"|"mute"|"unmute"|"pause"|"rewind"|"resume"|"fullscreen"|"exitFullscreen"|"expand"|"collapse"|"acceptInvitationLinear"|"closeLinear"|"skip"|"progress")}} attributes
   * @returns {Tracking_71} 
   */


  _createClass(TrackingEvents_70, [{
    key: "attachTracking",
    value: function attachTracking(content, attributes) {
      var newElem = new Tracking_71('Tracking', this, {
        "attrs": ["event"]
        /*: Infos*/

      }, content, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @param {{event:("creativeView"|"start"|"firstQuartile"|"midpoint"|"thirdQuartile"|"complete"|"mute"|"unmute"|"pause"|"rewind"|"resume"|"fullscreen"|"exitFullscreen"|"expand"|"collapse"|"acceptInvitationLinear"|"closeLinear"|"skip"|"progress")}} attributes
     * @returns {TrackingEvents_70} 
     */

  }, {
    key: "addTracking",
    value: function addTracking(content, attributes) {
      return this.attachTracking(content, attributes).and();
    }
  }, {
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return TrackingEvents_70;
}(VastElement);

var ClickTracking_73 =
/*#__PURE__*/
function (_VastElement64) {
  _inherits(ClickTracking_73, _VastElement64);

  /**
   * @param {string} n
   * @param {VideoClicks_72} p
   */
  function ClickTracking_73(n, p) {
    var _ref64;

    var _this64;

    _classCallCheck(this, ClickTracking_73);

    for (var _len64 = arguments.length, args = new Array(_len64 > 2 ? _len64 - 2 : 0), _key64 = 2; _key64 < _len64; _key64++) {
      args[_key64 - 2] = arguments[_key64];
    }

    _this64 = _possibleConstructorReturn(this, (_ref64 = ClickTracking_73.__proto__ || Object.getPrototypeOf(ClickTracking_73)).call.apply(_ref64, [this, n, p].concat(args)));
    _this64.parent = p;
    return _this64;
  }

  _createClass(ClickTracking_73, [{
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return ClickTracking_73;
}(VastElement);

var CustomClick_74 =
/*#__PURE__*/
function (_VastElement65) {
  _inherits(CustomClick_74, _VastElement65);

  /**
   * @param {string} n
   * @param {VideoClicks_72} p
   */
  function CustomClick_74(n, p) {
    var _ref65;

    var _this65;

    _classCallCheck(this, CustomClick_74);

    for (var _len65 = arguments.length, args = new Array(_len65 > 2 ? _len65 - 2 : 0), _key65 = 2; _key65 < _len65; _key65++) {
      args[_key65 - 2] = arguments[_key65];
    }

    _this65 = _possibleConstructorReturn(this, (_ref65 = CustomClick_74.__proto__ || Object.getPrototypeOf(CustomClick_74)).call.apply(_ref65, [this, n, p].concat(args)));
    _this65.parent = p;
    return _this65;
  }

  _createClass(CustomClick_74, [{
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return CustomClick_74;
}(VastElement);

var VideoClicks_72 =
/*#__PURE__*/
function (_VastElement66) {
  _inherits(VideoClicks_72, _VastElement66);

  /**
   * @param {string} n
   * @param {Linear_69} p
   */
  function VideoClicks_72(n, p) {
    var _ref66;

    var _this66;

    _classCallCheck(this, VideoClicks_72);

    for (var _len66 = arguments.length, args = new Array(_len66 > 2 ? _len66 - 2 : 0), _key66 = 2; _key66 < _len66; _key66++) {
      args[_key66 - 2] = arguments[_key66];
    }

    _this66 = _possibleConstructorReturn(this, (_ref66 = VideoClicks_72.__proto__ || Object.getPrototypeOf(VideoClicks_72)).call.apply(_ref66, [this, n, p].concat(args)));
    _this66.parent = p;
    return _this66;
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {ClickTracking_73} 
   */


  _createClass(VideoClicks_72, [{
    key: "attachClickTracking",
    value: function attachClickTracking(content, attributes) {
      var newElem = new ClickTracking_73('ClickTracking', this, {
        "attrs": ["id"]
        /*: Infos*/

      }, content, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @param {{id: string}} attributes
     * @returns {VideoClicks_72} 
     */

  }, {
    key: "addClickTracking",
    value: function addClickTracking(content, attributes) {
      return this.attachClickTracking(content, attributes).and();
    }
    /** 
     * @param {string} content
     * @param {{id: string}} attributes
     * @returns {CustomClick_74} 
     */

  }, {
    key: "attachCustomClick",
    value: function attachCustomClick(content, attributes) {
      var newElem = new CustomClick_74('CustomClick', this, {
        "attrs": ["id"]
        /*: Infos*/

      }, content, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @param {{id: string}} attributes
     * @returns {VideoClicks_72} 
     */

  }, {
    key: "addCustomClick",
    value: function addCustomClick(content, attributes) {
      return this.attachCustomClick(content, attributes).and();
    }
  }, {
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return VideoClicks_72;
}(VastElement);

var StaticResource_77 =
/*#__PURE__*/
function (_VastElement67) {
  _inherits(StaticResource_77, _VastElement67);

  /**
   * @param {string} n
   * @param {Icon_76} p
   */
  function StaticResource_77(n, p) {
    var _ref67;

    var _this67;

    _classCallCheck(this, StaticResource_77);

    for (var _len67 = arguments.length, args = new Array(_len67 > 2 ? _len67 - 2 : 0), _key67 = 2; _key67 < _len67; _key67++) {
      args[_key67 - 2] = arguments[_key67];
    }

    _this67 = _possibleConstructorReturn(this, (_ref67 = StaticResource_77.__proto__ || Object.getPrototypeOf(StaticResource_77)).call.apply(_ref67, [this, n, p].concat(args)));
    _this67.parent = p;
    return _this67;
  }

  _createClass(StaticResource_77, [{
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return StaticResource_77;
}(VastElement);

var IFrameResource_78 =
/*#__PURE__*/
function (_VastElement68) {
  _inherits(IFrameResource_78, _VastElement68);

  /**
   * @param {string} n
   * @param {Icon_76} p
   */
  function IFrameResource_78(n, p) {
    var _ref68;

    var _this68;

    _classCallCheck(this, IFrameResource_78);

    for (var _len68 = arguments.length, args = new Array(_len68 > 2 ? _len68 - 2 : 0), _key68 = 2; _key68 < _len68; _key68++) {
      args[_key68 - 2] = arguments[_key68];
    }

    _this68 = _possibleConstructorReturn(this, (_ref68 = IFrameResource_78.__proto__ || Object.getPrototypeOf(IFrameResource_78)).call.apply(_ref68, [this, n, p].concat(args)));
    _this68.parent = p;
    return _this68;
  }

  _createClass(IFrameResource_78, [{
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return IFrameResource_78;
}(VastElement);

var HTMLResource_79 =
/*#__PURE__*/
function (_VastElement69) {
  _inherits(HTMLResource_79, _VastElement69);

  /**
   * @param {string} n
   * @param {Icon_76} p
   */
  function HTMLResource_79(n, p) {
    var _ref69;

    var _this69;

    _classCallCheck(this, HTMLResource_79);

    for (var _len69 = arguments.length, args = new Array(_len69 > 2 ? _len69 - 2 : 0), _key69 = 2; _key69 < _len69; _key69++) {
      args[_key69 - 2] = arguments[_key69];
    }

    _this69 = _possibleConstructorReturn(this, (_ref69 = HTMLResource_79.__proto__ || Object.getPrototypeOf(HTMLResource_79)).call.apply(_ref69, [this, n, p].concat(args)));
    _this69.parent = p;
    return _this69;
  }

  _createClass(HTMLResource_79, [{
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return HTMLResource_79;
}(VastElement);

var IconClickThrough_81 =
/*#__PURE__*/
function (_VastElement70) {
  _inherits(IconClickThrough_81, _VastElement70);

  /**
   * @param {string} n
   * @param {IconClicks_80} p
   */
  function IconClickThrough_81(n, p) {
    var _ref70;

    var _this70;

    _classCallCheck(this, IconClickThrough_81);

    for (var _len70 = arguments.length, args = new Array(_len70 > 2 ? _len70 - 2 : 0), _key70 = 2; _key70 < _len70; _key70++) {
      args[_key70 - 2] = arguments[_key70];
    }

    _this70 = _possibleConstructorReturn(this, (_ref70 = IconClickThrough_81.__proto__ || Object.getPrototypeOf(IconClickThrough_81)).call.apply(_ref70, [this, n, p].concat(args)));
    _this70.parent = p;
    return _this70;
  }

  _createClass(IconClickThrough_81, [{
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return IconClickThrough_81;
}(VastElement);

var IconClickTracking_82 =
/*#__PURE__*/
function (_VastElement71) {
  _inherits(IconClickTracking_82, _VastElement71);

  /**
   * @param {string} n
   * @param {IconClicks_80} p
   */
  function IconClickTracking_82(n, p) {
    var _ref71;

    var _this71;

    _classCallCheck(this, IconClickTracking_82);

    for (var _len71 = arguments.length, args = new Array(_len71 > 2 ? _len71 - 2 : 0), _key71 = 2; _key71 < _len71; _key71++) {
      args[_key71 - 2] = arguments[_key71];
    }

    _this71 = _possibleConstructorReturn(this, (_ref71 = IconClickTracking_82.__proto__ || Object.getPrototypeOf(IconClickTracking_82)).call.apply(_ref71, [this, n, p].concat(args)));
    _this71.parent = p;
    return _this71;
  }

  _createClass(IconClickTracking_82, [{
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return IconClickTracking_82;
}(VastElement);

var IconClicks_80 =
/*#__PURE__*/
function (_VastElement72) {
  _inherits(IconClicks_80, _VastElement72);

  /**
   * @param {string} n
   * @param {Icon_76} p
   */
  function IconClicks_80(n, p) {
    var _ref72;

    var _this72;

    _classCallCheck(this, IconClicks_80);

    for (var _len72 = arguments.length, args = new Array(_len72 > 2 ? _len72 - 2 : 0), _key72 = 2; _key72 < _len72; _key72++) {
      args[_key72 - 2] = arguments[_key72];
    }

    _this72 = _possibleConstructorReturn(this, (_ref72 = IconClicks_80.__proto__ || Object.getPrototypeOf(IconClicks_80)).call.apply(_ref72, [this, n, p].concat(args)));
    _this72.parent = p;
    return _this72;
  }
  /** 
   * @param {string} content
   * @returns {IconClickThrough_81} 
   */


  _createClass(IconClicks_80, [{
    key: "attachIconClickThrough",
    value: function attachIconClickThrough(content) {
      var newElem = new IconClickThrough_81('IconClickThrough', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {IconClicks_80} 
     */

  }, {
    key: "addIconClickThrough",
    value: function addIconClickThrough(content) {
      return this.attachIconClickThrough(content).and();
    }
    /** 
     * @param {string} content
     * @returns {IconClickTracking_82} 
     */

  }, {
    key: "attachIconClickTracking",
    value: function attachIconClickTracking(content) {
      var newElem = new IconClickTracking_82('IconClickTracking', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {IconClicks_80} 
     */

  }, {
    key: "addIconClickTracking",
    value: function addIconClickTracking(content) {
      return this.attachIconClickTracking(content).and();
    }
  }, {
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return IconClicks_80;
}(VastElement);

var IconViewTracking_83 =
/*#__PURE__*/
function (_VastElement73) {
  _inherits(IconViewTracking_83, _VastElement73);

  /**
   * @param {string} n
   * @param {Icon_76} p
   */
  function IconViewTracking_83(n, p) {
    var _ref73;

    var _this73;

    _classCallCheck(this, IconViewTracking_83);

    for (var _len73 = arguments.length, args = new Array(_len73 > 2 ? _len73 - 2 : 0), _key73 = 2; _key73 < _len73; _key73++) {
      args[_key73 - 2] = arguments[_key73];
    }

    _this73 = _possibleConstructorReturn(this, (_ref73 = IconViewTracking_83.__proto__ || Object.getPrototypeOf(IconViewTracking_83)).call.apply(_ref73, [this, n, p].concat(args)));
    _this73.parent = p;
    return _this73;
  }

  _createClass(IconViewTracking_83, [{
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return IconViewTracking_83;
}(VastElement);

var Icon_76 =
/*#__PURE__*/
function (_VastElement74) {
  _inherits(Icon_76, _VastElement74);

  /**
   * @param {string} n
   * @param {Icons_75} p
   */
  function Icon_76(n, p) {
    var _ref74;

    var _this74;

    _classCallCheck(this, Icon_76);

    for (var _len74 = arguments.length, args = new Array(_len74 > 2 ? _len74 - 2 : 0), _key74 = 2; _key74 < _len74; _key74++) {
      args[_key74 - 2] = arguments[_key74];
    }

    _this74 = _possibleConstructorReturn(this, (_ref74 = Icon_76.__proto__ || Object.getPrototypeOf(Icon_76)).call.apply(_ref74, [this, n, p].concat(args)));
    _this74.parent = p;
    return _this74;
  }
  /** 
   * @param {string} content
   * @param {{creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash")}} attributes
   * @returns {StaticResource_77} 
   */


  _createClass(Icon_76, [{
    key: "attachStaticResource",
    value: function attachStaticResource(content, attributes) {
      var newElem = new StaticResource_77('StaticResource', this, {
        "attrs": ["creativeType"]
        /*: Infos*/

      }, content, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @param {{creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash")}} attributes
     * @returns {Icon_76} 
     */

  }, {
    key: "addStaticResource",
    value: function addStaticResource(content, attributes) {
      return this.attachStaticResource(content, attributes).and();
    }
    /** 
     * @param {string} content
     * @returns {IFrameResource_78} 
     */

  }, {
    key: "attachIFrameResource",
    value: function attachIFrameResource(content) {
      var newElem = new IFrameResource_78('IFrameResource', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {Icon_76} 
     */

  }, {
    key: "addIFrameResource",
    value: function addIFrameResource(content) {
      return this.attachIFrameResource(content).and();
    }
    /** 
     * @param {string} content
     * @returns {HTMLResource_79} 
     */

  }, {
    key: "attachHTMLResource",
    value: function attachHTMLResource(content) {
      var newElem = new HTMLResource_79('HTMLResource', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {Icon_76} 
     */

  }, {
    key: "addHTMLResource",
    value: function addHTMLResource(content) {
      return this.attachHTMLResource(content).and();
    }
    /** 
     * @returns {IconClicks_80} 
     */

  }, {
    key: "attachIconClicks",
    value: function attachIconClicks() {
      var newElem = new IconClicks_80('IconClicks', this, {}
      /*: Infos*/
      );
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {IconViewTracking_83} 
     */

  }, {
    key: "attachIconViewTracking",
    value: function attachIconViewTracking(content) {
      var newElem = new IconViewTracking_83('IconViewTracking', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {Icon_76} 
     */

  }, {
    key: "addIconViewTracking",
    value: function addIconViewTracking(content) {
      return this.attachIconViewTracking(content).and();
    }
  }, {
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return Icon_76;
}(VastElement);

var Icons_75 =
/*#__PURE__*/
function (_VastElement75) {
  _inherits(Icons_75, _VastElement75);

  /**
   * @param {string} n
   * @param {Linear_69} p
   */
  function Icons_75(n, p) {
    var _ref75;

    var _this75;

    _classCallCheck(this, Icons_75);

    for (var _len75 = arguments.length, args = new Array(_len75 > 2 ? _len75 - 2 : 0), _key75 = 2; _key75 < _len75; _key75++) {
      args[_key75 - 2] = arguments[_key75];
    }

    _this75 = _possibleConstructorReturn(this, (_ref75 = Icons_75.__proto__ || Object.getPrototypeOf(Icons_75)).call.apply(_ref75, [this, n, p].concat(args)));
    _this75.parent = p;
    return _this75;
  }
  /** 
   * @param {{program: string, width: string, height: string, xPosition: string, yPosition: string, duration: string, offset: string, apiFramework: string}} attributes
   * @returns {Icon_76} 
   */


  _createClass(Icons_75, [{
    key: "attachIcon",
    value: function attachIcon(attributes) {
      var newElem = new Icon_76('Icon', this, {
        "attrs": ["program", "width", "height", "xPosition", "yPosition", "duration", "offset", "apiFramework"]
        /*: Infos*/

      }, attributes);
      this.childs.push(newElem);
      return newElem;
    }
  }, {
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return Icons_75;
}(VastElement);

var Linear_69 =
/*#__PURE__*/
function (_VastElement76) {
  _inherits(Linear_69, _VastElement76);

  /**
   * @param {string} n
   * @param {Creative_68} p
   */
  function Linear_69(n, p) {
    var _ref76;

    var _this76;

    _classCallCheck(this, Linear_69);

    for (var _len76 = arguments.length, args = new Array(_len76 > 2 ? _len76 - 2 : 0), _key76 = 2; _key76 < _len76; _key76++) {
      args[_key76 - 2] = arguments[_key76];
    }

    _this76 = _possibleConstructorReturn(this, (_ref76 = Linear_69.__proto__ || Object.getPrototypeOf(Linear_69)).call.apply(_ref76, [this, n, p].concat(args)));
    _this76.parent = p;
    return _this76;
  }
  /** 
   * @returns {TrackingEvents_70} 
   */


  _createClass(Linear_69, [{
    key: "attachTrackingEvents",
    value: function attachTrackingEvents() {
      var newElem = new TrackingEvents_70('TrackingEvents', this, {}
      /*: Infos*/
      );
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @returns {VideoClicks_72} 
     */

  }, {
    key: "attachVideoClicks",
    value: function attachVideoClicks() {
      var newElem = new VideoClicks_72('VideoClicks', this, {}
      /*: Infos*/
      );
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @returns {Icons_75} 
     */

  }, {
    key: "attachIcons",
    value: function attachIcons() {
      var newElem = new Icons_75('Icons', this, {}
      /*: Infos*/
      );
      this.childs.push(newElem);
      return newElem;
    }
  }, {
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return Linear_69;
}(VastElement);

var StaticResource_86 =
/*#__PURE__*/
function (_VastElement77) {
  _inherits(StaticResource_86, _VastElement77);

  /**
   * @param {string} n
   * @param {Companion_85} p
   */
  function StaticResource_86(n, p) {
    var _ref77;

    var _this77;

    _classCallCheck(this, StaticResource_86);

    for (var _len77 = arguments.length, args = new Array(_len77 > 2 ? _len77 - 2 : 0), _key77 = 2; _key77 < _len77; _key77++) {
      args[_key77 - 2] = arguments[_key77];
    }

    _this77 = _possibleConstructorReturn(this, (_ref77 = StaticResource_86.__proto__ || Object.getPrototypeOf(StaticResource_86)).call.apply(_ref77, [this, n, p].concat(args)));
    _this77.parent = p;
    return _this77;
  }

  _createClass(StaticResource_86, [{
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return StaticResource_86;
}(VastElement);

var IFrameResource_87 =
/*#__PURE__*/
function (_VastElement78) {
  _inherits(IFrameResource_87, _VastElement78);

  /**
   * @param {string} n
   * @param {Companion_85} p
   */
  function IFrameResource_87(n, p) {
    var _ref78;

    var _this78;

    _classCallCheck(this, IFrameResource_87);

    for (var _len78 = arguments.length, args = new Array(_len78 > 2 ? _len78 - 2 : 0), _key78 = 2; _key78 < _len78; _key78++) {
      args[_key78 - 2] = arguments[_key78];
    }

    _this78 = _possibleConstructorReturn(this, (_ref78 = IFrameResource_87.__proto__ || Object.getPrototypeOf(IFrameResource_87)).call.apply(_ref78, [this, n, p].concat(args)));
    _this78.parent = p;
    return _this78;
  }

  _createClass(IFrameResource_87, [{
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return IFrameResource_87;
}(VastElement);

var HTMLResource_88 =
/*#__PURE__*/
function (_VastElement79) {
  _inherits(HTMLResource_88, _VastElement79);

  /**
   * @param {string} n
   * @param {Companion_85} p
   */
  function HTMLResource_88(n, p) {
    var _ref79;

    var _this79;

    _classCallCheck(this, HTMLResource_88);

    for (var _len79 = arguments.length, args = new Array(_len79 > 2 ? _len79 - 2 : 0), _key79 = 2; _key79 < _len79; _key79++) {
      args[_key79 - 2] = arguments[_key79];
    }

    _this79 = _possibleConstructorReturn(this, (_ref79 = HTMLResource_88.__proto__ || Object.getPrototypeOf(HTMLResource_88)).call.apply(_ref79, [this, n, p].concat(args)));
    _this79.parent = p;
    return _this79;
  }

  _createClass(HTMLResource_88, [{
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return HTMLResource_88;
}(VastElement);

var AdParameters_89 =
/*#__PURE__*/
function (_VastElement80) {
  _inherits(AdParameters_89, _VastElement80);

  /**
   * @param {string} n
   * @param {Companion_85} p
   */
  function AdParameters_89(n, p) {
    var _ref80;

    var _this80;

    _classCallCheck(this, AdParameters_89);

    for (var _len80 = arguments.length, args = new Array(_len80 > 2 ? _len80 - 2 : 0), _key80 = 2; _key80 < _len80; _key80++) {
      args[_key80 - 2] = arguments[_key80];
    }

    _this80 = _possibleConstructorReturn(this, (_ref80 = AdParameters_89.__proto__ || Object.getPrototypeOf(AdParameters_89)).call.apply(_ref80, [this, n, p].concat(args)));
    _this80.parent = p;
    return _this80;
  }

  _createClass(AdParameters_89, [{
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return AdParameters_89;
}(VastElement);

var AltText_90 =
/*#__PURE__*/
function (_VastElement81) {
  _inherits(AltText_90, _VastElement81);

  /**
   * @param {string} n
   * @param {Companion_85} p
   */
  function AltText_90(n, p) {
    var _ref81;

    var _this81;

    _classCallCheck(this, AltText_90);

    for (var _len81 = arguments.length, args = new Array(_len81 > 2 ? _len81 - 2 : 0), _key81 = 2; _key81 < _len81; _key81++) {
      args[_key81 - 2] = arguments[_key81];
    }

    _this81 = _possibleConstructorReturn(this, (_ref81 = AltText_90.__proto__ || Object.getPrototypeOf(AltText_90)).call.apply(_ref81, [this, n, p].concat(args)));
    _this81.parent = p;
    return _this81;
  }

  _createClass(AltText_90, [{
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return AltText_90;
}(VastElement);

var CompanionClickThrough_91 =
/*#__PURE__*/
function (_VastElement82) {
  _inherits(CompanionClickThrough_91, _VastElement82);

  /**
   * @param {string} n
   * @param {Companion_85} p
   */
  function CompanionClickThrough_91(n, p) {
    var _ref82;

    var _this82;

    _classCallCheck(this, CompanionClickThrough_91);

    for (var _len82 = arguments.length, args = new Array(_len82 > 2 ? _len82 - 2 : 0), _key82 = 2; _key82 < _len82; _key82++) {
      args[_key82 - 2] = arguments[_key82];
    }

    _this82 = _possibleConstructorReturn(this, (_ref82 = CompanionClickThrough_91.__proto__ || Object.getPrototypeOf(CompanionClickThrough_91)).call.apply(_ref82, [this, n, p].concat(args)));
    _this82.parent = p;
    return _this82;
  }

  _createClass(CompanionClickThrough_91, [{
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return CompanionClickThrough_91;
}(VastElement);

var CompanionClickTracking_92 =
/*#__PURE__*/
function (_VastElement83) {
  _inherits(CompanionClickTracking_92, _VastElement83);

  /**
   * @param {string} n
   * @param {Companion_85} p
   */
  function CompanionClickTracking_92(n, p) {
    var _ref83;

    var _this83;

    _classCallCheck(this, CompanionClickTracking_92);

    for (var _len83 = arguments.length, args = new Array(_len83 > 2 ? _len83 - 2 : 0), _key83 = 2; _key83 < _len83; _key83++) {
      args[_key83 - 2] = arguments[_key83];
    }

    _this83 = _possibleConstructorReturn(this, (_ref83 = CompanionClickTracking_92.__proto__ || Object.getPrototypeOf(CompanionClickTracking_92)).call.apply(_ref83, [this, n, p].concat(args)));
    _this83.parent = p;
    return _this83;
  }

  _createClass(CompanionClickTracking_92, [{
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return CompanionClickTracking_92;
}(VastElement);

var Tracking_94 =
/*#__PURE__*/
function (_VastElement84) {
  _inherits(Tracking_94, _VastElement84);

  /**
   * @param {string} n
   * @param {TrackingEvents_93} p
   */
  function Tracking_94(n, p) {
    var _ref84;

    var _this84;

    _classCallCheck(this, Tracking_94);

    for (var _len84 = arguments.length, args = new Array(_len84 > 2 ? _len84 - 2 : 0), _key84 = 2; _key84 < _len84; _key84++) {
      args[_key84 - 2] = arguments[_key84];
    }

    _this84 = _possibleConstructorReturn(this, (_ref84 = Tracking_94.__proto__ || Object.getPrototypeOf(Tracking_94)).call.apply(_ref84, [this, n, p].concat(args)));
    _this84.parent = p;
    return _this84;
  }

  _createClass(Tracking_94, [{
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return Tracking_94;
}(VastElement);

var TrackingEvents_93 =
/*#__PURE__*/
function (_VastElement85) {
  _inherits(TrackingEvents_93, _VastElement85);

  /**
   * @param {string} n
   * @param {Companion_85} p
   */
  function TrackingEvents_93(n, p) {
    var _ref85;

    var _this85;

    _classCallCheck(this, TrackingEvents_93);

    for (var _len85 = arguments.length, args = new Array(_len85 > 2 ? _len85 - 2 : 0), _key85 = 2; _key85 < _len85; _key85++) {
      args[_key85 - 2] = arguments[_key85];
    }

    _this85 = _possibleConstructorReturn(this, (_ref85 = TrackingEvents_93.__proto__ || Object.getPrototypeOf(TrackingEvents_93)).call.apply(_ref85, [this, n, p].concat(args)));
    _this85.parent = p;
    return _this85;
  }
  /** 
   * @param {string} content
   * @param {{event:("creativeView")}} attributes
   * @returns {Tracking_94} 
   */


  _createClass(TrackingEvents_93, [{
    key: "attachTracking",
    value: function attachTracking(content, attributes) {
      var newElem = new Tracking_94('Tracking', this, {
        "attrs": ["event"]
        /*: Infos*/

      }, content, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @param {{event:("creativeView")}} attributes
     * @returns {TrackingEvents_93} 
     */

  }, {
    key: "addTracking",
    value: function addTracking(content, attributes) {
      return this.attachTracking(content, attributes).and();
    }
  }, {
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return TrackingEvents_93;
}(VastElement);

var Companion_85 =
/*#__PURE__*/
function (_VastElement86) {
  _inherits(Companion_85, _VastElement86);

  /**
   * @param {string} n
   * @param {CompanionAds_84} p
   */
  function Companion_85(n, p) {
    var _ref86;

    var _this86;

    _classCallCheck(this, Companion_85);

    for (var _len86 = arguments.length, args = new Array(_len86 > 2 ? _len86 - 2 : 0), _key86 = 2; _key86 < _len86; _key86++) {
      args[_key86 - 2] = arguments[_key86];
    }

    _this86 = _possibleConstructorReturn(this, (_ref86 = Companion_85.__proto__ || Object.getPrototypeOf(Companion_85)).call.apply(_ref86, [this, n, p].concat(args)));
    _this86.parent = p;
    return _this86;
  }
  /** 
   * @param {string} content
   * @param {{creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash")}} attributes
   * @returns {StaticResource_86} 
   */


  _createClass(Companion_85, [{
    key: "attachStaticResource",
    value: function attachStaticResource(content, attributes) {
      var newElem = new StaticResource_86('StaticResource', this, {
        "attrs": ["creativeType"]
        /*: Infos*/

      }, content, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @param {{creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash")}} attributes
     * @returns {Companion_85} 
     */

  }, {
    key: "addStaticResource",
    value: function addStaticResource(content, attributes) {
      return this.attachStaticResource(content, attributes).and();
    }
    /** 
     * @param {string} content
     * @returns {IFrameResource_87} 
     */

  }, {
    key: "attachIFrameResource",
    value: function attachIFrameResource(content) {
      var newElem = new IFrameResource_87('IFrameResource', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {Companion_85} 
     */

  }, {
    key: "addIFrameResource",
    value: function addIFrameResource(content) {
      return this.attachIFrameResource(content).and();
    }
    /** 
     * @param {string} content
     * @returns {HTMLResource_88} 
     */

  }, {
    key: "attachHTMLResource",
    value: function attachHTMLResource(content) {
      var newElem = new HTMLResource_88('HTMLResource', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {Companion_85} 
     */

  }, {
    key: "addHTMLResource",
    value: function addHTMLResource(content) {
      return this.attachHTMLResource(content).and();
    }
    /** 
     * @param {string} content
     * @param {{xmlEncoded: string}} attributes
     * @returns {AdParameters_89} 
     */

  }, {
    key: "attachAdParameters",
    value: function attachAdParameters(content, attributes) {
      var newElem = new AdParameters_89('AdParameters', this, {
        "attrs": ["xmlEncoded"]
        /*: Infos*/

      }, content, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @param {{xmlEncoded: string}} attributes
     * @returns {Companion_85} 
     */

  }, {
    key: "addAdParameters",
    value: function addAdParameters(content, attributes) {
      return this.attachAdParameters(content, attributes).and();
    }
    /** 
     * @param {string} content
     * @returns {AltText_90} 
     */

  }, {
    key: "attachAltText",
    value: function attachAltText(content) {
      var newElem = new AltText_90('AltText', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {Companion_85} 
     */

  }, {
    key: "addAltText",
    value: function addAltText(content) {
      return this.attachAltText(content).and();
    }
    /** 
     * @param {string} content
     * @returns {CompanionClickThrough_91} 
     */

  }, {
    key: "attachCompanionClickThrough",
    value: function attachCompanionClickThrough(content) {
      var newElem = new CompanionClickThrough_91('CompanionClickThrough', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {Companion_85} 
     */

  }, {
    key: "addCompanionClickThrough",
    value: function addCompanionClickThrough(content) {
      return this.attachCompanionClickThrough(content).and();
    }
    /** 
     * @param {string} content
     * @returns {CompanionClickTracking_92} 
     */

  }, {
    key: "attachCompanionClickTracking",
    value: function attachCompanionClickTracking(content) {
      var newElem = new CompanionClickTracking_92('CompanionClickTracking', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {Companion_85} 
     */

  }, {
    key: "addCompanionClickTracking",
    value: function addCompanionClickTracking(content) {
      return this.attachCompanionClickTracking(content).and();
    }
    /** 
     * @returns {TrackingEvents_93} 
     */

  }, {
    key: "attachTrackingEvents",
    value: function attachTrackingEvents() {
      var newElem = new TrackingEvents_93('TrackingEvents', this, {}
      /*: Infos*/
      );
      this.childs.push(newElem);
      return newElem;
    }
  }, {
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return Companion_85;
}(VastElement);

var CompanionAds_84 =
/*#__PURE__*/
function (_VastElement87) {
  _inherits(CompanionAds_84, _VastElement87);

  /**
   * @param {string} n
   * @param {Creative_68} p
   */
  function CompanionAds_84(n, p) {
    var _ref87;

    var _this87;

    _classCallCheck(this, CompanionAds_84);

    for (var _len87 = arguments.length, args = new Array(_len87 > 2 ? _len87 - 2 : 0), _key87 = 2; _key87 < _len87; _key87++) {
      args[_key87 - 2] = arguments[_key87];
    }

    _this87 = _possibleConstructorReturn(this, (_ref87 = CompanionAds_84.__proto__ || Object.getPrototypeOf(CompanionAds_84)).call.apply(_ref87, [this, n, p].concat(args)));
    _this87.parent = p;
    return _this87;
  }
  /** 
   * @param {{id: string, width: string, height: string, assetWidth: string, assetHeight: string, expandedWidth: string, expandedHeight: string, apiFramework: string, adSlotID: string}} attributes
   * @returns {Companion_85} 
   */


  _createClass(CompanionAds_84, [{
    key: "attachCompanion",
    value: function attachCompanion(attributes) {
      var newElem = new Companion_85('Companion', this, {
        "attrs": ["id", "width", "height", "assetWidth", "assetHeight", "expandedWidth", "expandedHeight", "apiFramework", "adSlotID"]
        /*: Infos*/

      }, attributes);
      this.childs.push(newElem);
      return newElem;
    }
  }, {
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return CompanionAds_84;
}(VastElement);

var NonLinearClickTracking_97 =
/*#__PURE__*/
function (_VastElement88) {
  _inherits(NonLinearClickTracking_97, _VastElement88);

  /**
   * @param {string} n
   * @param {NonLinear_96} p
   */
  function NonLinearClickTracking_97(n, p) {
    var _ref88;

    var _this88;

    _classCallCheck(this, NonLinearClickTracking_97);

    for (var _len88 = arguments.length, args = new Array(_len88 > 2 ? _len88 - 2 : 0), _key88 = 2; _key88 < _len88; _key88++) {
      args[_key88 - 2] = arguments[_key88];
    }

    _this88 = _possibleConstructorReturn(this, (_ref88 = NonLinearClickTracking_97.__proto__ || Object.getPrototypeOf(NonLinearClickTracking_97)).call.apply(_ref88, [this, n, p].concat(args)));
    _this88.parent = p;
    return _this88;
  }

  _createClass(NonLinearClickTracking_97, [{
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return NonLinearClickTracking_97;
}(VastElement);

var NonLinear_96 =
/*#__PURE__*/
function (_VastElement89) {
  _inherits(NonLinear_96, _VastElement89);

  /**
   * @param {string} n
   * @param {NonLinearAds_95} p
   */
  function NonLinear_96(n, p) {
    var _ref89;

    var _this89;

    _classCallCheck(this, NonLinear_96);

    for (var _len89 = arguments.length, args = new Array(_len89 > 2 ? _len89 - 2 : 0), _key89 = 2; _key89 < _len89; _key89++) {
      args[_key89 - 2] = arguments[_key89];
    }

    _this89 = _possibleConstructorReturn(this, (_ref89 = NonLinear_96.__proto__ || Object.getPrototypeOf(NonLinear_96)).call.apply(_ref89, [this, n, p].concat(args)));
    _this89.parent = p;
    return _this89;
  }
  /** 
   * @param {string} content
   * @returns {NonLinearClickTracking_97} 
   */


  _createClass(NonLinear_96, [{
    key: "attachNonLinearClickTracking",
    value: function attachNonLinearClickTracking(content) {
      var newElem = new NonLinearClickTracking_97('NonLinearClickTracking', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {NonLinear_96} 
     */

  }, {
    key: "addNonLinearClickTracking",
    value: function addNonLinearClickTracking(content) {
      return this.attachNonLinearClickTracking(content).and();
    }
  }, {
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return NonLinear_96;
}(VastElement);

var Tracking_99 =
/*#__PURE__*/
function (_VastElement90) {
  _inherits(Tracking_99, _VastElement90);

  /**
   * @param {string} n
   * @param {TrackingEvents_98} p
   */
  function Tracking_99(n, p) {
    var _ref90;

    var _this90;

    _classCallCheck(this, Tracking_99);

    for (var _len90 = arguments.length, args = new Array(_len90 > 2 ? _len90 - 2 : 0), _key90 = 2; _key90 < _len90; _key90++) {
      args[_key90 - 2] = arguments[_key90];
    }

    _this90 = _possibleConstructorReturn(this, (_ref90 = Tracking_99.__proto__ || Object.getPrototypeOf(Tracking_99)).call.apply(_ref90, [this, n, p].concat(args)));
    _this90.parent = p;
    return _this90;
  }

  _createClass(Tracking_99, [{
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return Tracking_99;
}(VastElement);

var TrackingEvents_98 =
/*#__PURE__*/
function (_VastElement91) {
  _inherits(TrackingEvents_98, _VastElement91);

  /**
   * @param {string} n
   * @param {NonLinearAds_95} p
   */
  function TrackingEvents_98(n, p) {
    var _ref91;

    var _this91;

    _classCallCheck(this, TrackingEvents_98);

    for (var _len91 = arguments.length, args = new Array(_len91 > 2 ? _len91 - 2 : 0), _key91 = 2; _key91 < _len91; _key91++) {
      args[_key91 - 2] = arguments[_key91];
    }

    _this91 = _possibleConstructorReturn(this, (_ref91 = TrackingEvents_98.__proto__ || Object.getPrototypeOf(TrackingEvents_98)).call.apply(_ref91, [this, n, p].concat(args)));
    _this91.parent = p;
    return _this91;
  }
  /** 
   * @param {string} content
   * @param {{event:("creativeView"|"start"|"firstQuartile"|"midpoint"|"thirdQuartile"|"complete"|"mute"|"unmute"|"pause"|"rewind"|"resume"|"fullscreen"|"exitFullscreen"|"expand"|"collapse"|"acceptInvitation"|"close"|"progress")}} attributes
   * @returns {Tracking_99} 
   */


  _createClass(TrackingEvents_98, [{
    key: "attachTracking",
    value: function attachTracking(content, attributes) {
      var newElem = new Tracking_99('Tracking', this, {
        "attrs": ["event"]
        /*: Infos*/

      }, content, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @param {{event:("creativeView"|"start"|"firstQuartile"|"midpoint"|"thirdQuartile"|"complete"|"mute"|"unmute"|"pause"|"rewind"|"resume"|"fullscreen"|"exitFullscreen"|"expand"|"collapse"|"acceptInvitation"|"close"|"progress")}} attributes
     * @returns {TrackingEvents_98} 
     */

  }, {
    key: "addTracking",
    value: function addTracking(content, attributes) {
      return this.attachTracking(content, attributes).and();
    }
  }, {
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return TrackingEvents_98;
}(VastElement);

var NonLinearAds_95 =
/*#__PURE__*/
function (_VastElement92) {
  _inherits(NonLinearAds_95, _VastElement92);

  /**
   * @param {string} n
   * @param {Creative_68} p
   */
  function NonLinearAds_95(n, p) {
    var _ref92;

    var _this92;

    _classCallCheck(this, NonLinearAds_95);

    for (var _len92 = arguments.length, args = new Array(_len92 > 2 ? _len92 - 2 : 0), _key92 = 2; _key92 < _len92; _key92++) {
      args[_key92 - 2] = arguments[_key92];
    }

    _this92 = _possibleConstructorReturn(this, (_ref92 = NonLinearAds_95.__proto__ || Object.getPrototypeOf(NonLinearAds_95)).call.apply(_ref92, [this, n, p].concat(args)));
    _this92.parent = p;
    return _this92;
  }
  /** 
   * @param {{id: string, width: string, height: string, expandedWidth: string, expandedHeight: string, scalable: string, maintainAspectRatio: string, minSuggestedDuration: string, apiFramework: string}} attributes
   * @returns {NonLinear_96} 
   */


  _createClass(NonLinearAds_95, [{
    key: "attachNonLinear",
    value: function attachNonLinear(attributes) {
      var newElem = new NonLinear_96('NonLinear', this, {
        "attrs": ["id", "width", "height", "expandedWidth", "expandedHeight", "scalable", "maintainAspectRatio", "minSuggestedDuration", "apiFramework"]
        /*: Infos*/

      }, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @returns {TrackingEvents_98} 
     */

  }, {
    key: "attachTrackingEvents",
    value: function attachTrackingEvents() {
      var newElem = new TrackingEvents_98('TrackingEvents', this, {}
      /*: Infos*/
      );
      this.childs.push(newElem);
      return newElem;
    }
  }, {
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return NonLinearAds_95;
}(VastElement);

var Creative_68 =
/*#__PURE__*/
function (_VastElement93) {
  _inherits(Creative_68, _VastElement93);

  /**
   * @param {string} n
   * @param {Creatives_67} p
   */
  function Creative_68(n, p) {
    var _ref93;

    var _this93;

    _classCallCheck(this, Creative_68);

    for (var _len93 = arguments.length, args = new Array(_len93 > 2 ? _len93 - 2 : 0), _key93 = 2; _key93 < _len93; _key93++) {
      args[_key93 - 2] = arguments[_key93];
    }

    _this93 = _possibleConstructorReturn(this, (_ref93 = Creative_68.__proto__ || Object.getPrototypeOf(Creative_68)).call.apply(_ref93, [this, n, p].concat(args)));
    _this93.parent = p;
    return _this93;
  }
  /** 
   * @returns {Linear_69} 
   */


  _createClass(Creative_68, [{
    key: "attachLinear",
    value: function attachLinear() {
      var newElem = new Linear_69('Linear', this, {}
      /*: Infos*/
      );
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {{required:("all"|"any"|"none")}} attributes
     * @returns {CompanionAds_84} 
     */

  }, {
    key: "attachCompanionAds",
    value: function attachCompanionAds(attributes) {
      var newElem = new CompanionAds_84('CompanionAds', this, {
        "attrs": ["required"]
        /*: Infos*/

      }, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @returns {NonLinearAds_95} 
     */

  }, {
    key: "attachNonLinearAds",
    value: function attachNonLinearAds() {
      var newElem = new NonLinearAds_95('NonLinearAds', this, {}
      /*: Infos*/
      );
      this.childs.push(newElem);
      return newElem;
    }
  }, {
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return Creative_68;
}(VastElement);

var Creatives_67 =
/*#__PURE__*/
function (_VastElement94) {
  _inherits(Creatives_67, _VastElement94);

  /**
   * @param {string} n
   * @param {Wrapper_62} p
   */
  function Creatives_67(n, p) {
    var _ref94;

    var _this94;

    _classCallCheck(this, Creatives_67);

    for (var _len94 = arguments.length, args = new Array(_len94 > 2 ? _len94 - 2 : 0), _key94 = 2; _key94 < _len94; _key94++) {
      args[_key94 - 2] = arguments[_key94];
    }

    _this94 = _possibleConstructorReturn(this, (_ref94 = Creatives_67.__proto__ || Object.getPrototypeOf(Creatives_67)).call.apply(_ref94, [this, n, p].concat(args)));
    _this94.parent = p;
    return _this94;
  }
  /** 
   * @param {{id: string, sequence: string, adID: string}} attributes
   * @returns {Creative_68} 
   */


  _createClass(Creatives_67, [{
    key: "attachCreative",
    value: function attachCreative(attributes) {
      var newElem = new Creative_68('Creative', this, {
        "attrs": ["id", "sequence", "adID"]
        /*: Infos*/

      }, attributes);
      this.childs.push(newElem);
      return newElem;
    }
  }, {
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return Creatives_67;
}(VastElement);

var Extension_101 =
/*#__PURE__*/
function (_VastElement95) {
  _inherits(Extension_101, _VastElement95);

  /**
   * @param {string} n
   * @param {Extensions_100} p
   */
  function Extension_101(n, p) {
    var _ref95;

    var _this95;

    _classCallCheck(this, Extension_101);

    for (var _len95 = arguments.length, args = new Array(_len95 > 2 ? _len95 - 2 : 0), _key95 = 2; _key95 < _len95; _key95++) {
      args[_key95 - 2] = arguments[_key95];
    }

    _this95 = _possibleConstructorReturn(this, (_ref95 = Extension_101.__proto__ || Object.getPrototypeOf(Extension_101)).call.apply(_ref95, [this, n, p].concat(args)));
    _this95.parent = p;
    return _this95;
  }

  _createClass(Extension_101, [{
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return Extension_101;
}(VastElement);

var Extensions_100 =
/*#__PURE__*/
function (_VastElement96) {
  _inherits(Extensions_100, _VastElement96);

  /**
   * @param {string} n
   * @param {Wrapper_62} p
   */
  function Extensions_100(n, p) {
    var _ref96;

    var _this96;

    _classCallCheck(this, Extensions_100);

    for (var _len96 = arguments.length, args = new Array(_len96 > 2 ? _len96 - 2 : 0), _key96 = 2; _key96 < _len96; _key96++) {
      args[_key96 - 2] = arguments[_key96];
    }

    _this96 = _possibleConstructorReturn(this, (_ref96 = Extensions_100.__proto__ || Object.getPrototypeOf(Extensions_100)).call.apply(_ref96, [this, n, p].concat(args)));
    _this96.parent = p;
    return _this96;
  }
  /** @description required in Vast 3
   * @param {string} content
   * @param {{type: string}} attributes
   * @returns {Extension_101} 
   */


  _createClass(Extensions_100, [{
    key: "attachExtension",
    value: function attachExtension(content, attributes) {
      var newElem = new Extension_101('Extension', this, {
        "attrs": ["type"]
        /*: Infos*/

      }, content, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** @description required in Vast 3
     * @param {string} content
     * @param {{type: string}} attributes
     * @returns {Extensions_100} 
     */

  }, {
    key: "addExtension",
    value: function addExtension(content, attributes) {
      return this.attachExtension(content, attributes).and();
    }
  }, {
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return Extensions_100;
}(VastElement);

var Wrapper_62 =
/*#__PURE__*/
function (_VastElement97) {
  _inherits(Wrapper_62, _VastElement97);

  /**
   * @param {string} n
   * @param {Ad_5} p
   */
  function Wrapper_62(n, p) {
    var _ref97;

    var _this97;

    _classCallCheck(this, Wrapper_62);

    for (var _len97 = arguments.length, args = new Array(_len97 > 2 ? _len97 - 2 : 0), _key97 = 2; _key97 < _len97; _key97++) {
      args[_key97 - 2] = arguments[_key97];
    }

    _this97 = _possibleConstructorReturn(this, (_ref97 = Wrapper_62.__proto__ || Object.getPrototypeOf(Wrapper_62)).call.apply(_ref97, [this, n, p].concat(args)));
    _this97.parent = p;
    return _this97;
  }
  /** @description required in Vast 3
   * @param {string} content
   * @param {{version: string}} attributes
   * @returns {AdSystem_63} 
   */


  _createClass(Wrapper_62, [{
    key: "attachAdSystem",
    value: function attachAdSystem(content, attributes) {
      var newElem = new AdSystem_63('AdSystem', this, {
        "attrs": ["version"]
        /*: Infos*/

      }, content, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** @description required in Vast 3
     * @param {string} content
     * @param {{version: string}} attributes
     * @returns {Wrapper_62} 
     */

  }, {
    key: "addAdSystem",
    value: function addAdSystem(content, attributes) {
      return this.attachAdSystem(content, attributes).and();
    }
    /** @description required in Vast 3
     * @param {string} content
     * @returns {VASTAdTagURI_64} 
     */

  }, {
    key: "attachVASTAdTagURI",
    value: function attachVASTAdTagURI(content) {
      var newElem = new VASTAdTagURI_64('VASTAdTagURI', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** @description required in Vast 3
     * @param {string} content
     * @returns {Wrapper_62} 
     */

  }, {
    key: "addVASTAdTagURI",
    value: function addVASTAdTagURI(content) {
      return this.attachVASTAdTagURI(content).and();
    }
    /** 
     * @param {string} content
     * @returns {Error_65} 
     */

  }, {
    key: "attachError",
    value: function attachError(content) {
      var newElem = new Error_65('Error', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {Wrapper_62} 
     */

  }, {
    key: "addError",
    value: function addError(content) {
      return this.attachError(content).and();
    }
    /** 
     * @param {string} content
     * @param {{id: string}} attributes
     * @returns {Impression_66} 
     */

  }, {
    key: "attachImpression",
    value: function attachImpression(content, attributes) {
      var newElem = new Impression_66('Impression', this, {
        "attrs": ["id"]
        /*: Infos*/

      }, content, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @param {{id: string}} attributes
     * @returns {Wrapper_62} 
     */

  }, {
    key: "addImpression",
    value: function addImpression(content, attributes) {
      return this.attachImpression(content, attributes).and();
    }
    /** 
     * @returns {Creatives_67} 
     */

  }, {
    key: "attachCreatives",
    value: function attachCreatives() {
      var newElem = new Creatives_67('Creatives', this, {}
      /*: Infos*/
      );
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @returns {Extensions_100} 
     */

  }, {
    key: "attachExtensions",
    value: function attachExtensions() {
      var newElem = new Extensions_100('Extensions', this, {}
      /*: Infos*/
      );
      this.childs.push(newElem);
      return newElem;
    }
  }, {
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return Wrapper_62;
}(VastElement);

var Ad_5 =
/*#__PURE__*/
function (_VastElement98) {
  _inherits(Ad_5, _VastElement98);

  /**
   * @param {string} n
   * @param {VAST_3} p
   */
  function Ad_5(n, p) {
    var _ref98;

    var _this98;

    _classCallCheck(this, Ad_5);

    for (var _len98 = arguments.length, args = new Array(_len98 > 2 ? _len98 - 2 : 0), _key98 = 2; _key98 < _len98; _key98++) {
      args[_key98 - 2] = arguments[_key98];
    }

    _this98 = _possibleConstructorReturn(this, (_ref98 = Ad_5.__proto__ || Object.getPrototypeOf(Ad_5)).call.apply(_ref98, [this, n, p].concat(args)));
    _this98.parent = p;
    return _this98;
  }
  /** 
   * @returns {InLine_6} 
   */


  _createClass(Ad_5, [{
    key: "attachInLine",
    value: function attachInLine() {
      var newElem = new InLine_6('InLine', this, {}
      /*: Infos*/
      );
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {{followAdditonalWrappers: string, allowMultipleAds: string, fallbackOnNoAd: string}} attributes
     * @returns {Wrapper_62} 
     */

  }, {
    key: "attachWrapper",
    value: function attachWrapper(attributes) {
      var newElem = new Wrapper_62('Wrapper', this, {
        "attrs": ["followAdditonalWrappers", "allowMultipleAds", "fallbackOnNoAd"]
        /*: Infos*/

      }, attributes);
      this.childs.push(newElem);
      return newElem;
    }
  }, {
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return Ad_5;
}(VastElement);

var VAST_3 =
/*#__PURE__*/
function (_VastElement99) {
  _inherits(VAST_3, _VastElement99);

  /**
   * @param {string} n
   * @param {apiv3} p
   */
  function VAST_3(n, p) {
    var _ref99;

    var _this99;

    _classCallCheck(this, VAST_3);

    for (var _len99 = arguments.length, args = new Array(_len99 > 2 ? _len99 - 2 : 0), _key99 = 2; _key99 < _len99; _key99++) {
      args[_key99 - 2] = arguments[_key99];
    }

    _this99 = _possibleConstructorReturn(this, (_ref99 = VAST_3.__proto__ || Object.getPrototypeOf(VAST_3)).call.apply(_ref99, [this, n, p].concat(args)));
    _this99.parent = p;
    return _this99;
  }
  /** 
   * @param {string} content
   * @returns {Error_4} 
   */


  _createClass(VAST_3, [{
    key: "attachError",
    value: function attachError(content) {
      var newElem = new Error_4('Error', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {VAST_3} 
     */

  }, {
    key: "addError",
    value: function addError(content) {
      return this.attachError(content).and();
    }
    /** 
     * @param {{id: string, sequence: string}} attributes
     * @returns {Ad_5} 
     */

  }, {
    key: "attachAd",
    value: function attachAd(attributes) {
      var newElem = new Ad_5('Ad', this, {
        "attrs": ["id", "sequence"]
        /*: Infos*/

      }, attributes);
      this.childs.push(newElem);
      return newElem;
    }
  }, {
    key: "and",
    value: function and() {
      return this.parent;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return VAST_3;
}(VastElement);

var apiv3 =
/*#__PURE__*/
function (_VastElement100) {
  _inherits(apiv3, _VastElement100);

  /**
   * @param {string} n
   * @param {apiv3} p
   */
  function apiv3(n, p) {
    var _ref100;

    var _this100;

    _classCallCheck(this, apiv3);

    for (var _len100 = arguments.length, args = new Array(_len100 > 2 ? _len100 - 2 : 0), _key100 = 2; _key100 < _len100; _key100++) {
      args[_key100 - 2] = arguments[_key100];
    }

    _this100 = _possibleConstructorReturn(this, (_ref100 = apiv3.__proto__ || Object.getPrototypeOf(apiv3)).call.apply(_ref100, [this, n, p].concat(args)));
    _this100.parent = p;
    return _this100;
  }
  /** 
   * @param {{version:("3.0")}} attributes
   * @returns {VAST_3} 
   */


  _createClass(apiv3, [{
    key: "attachVAST",
    value: function attachVAST(attributes) {
      var newElem = new VAST_3('VAST', this, {
        "attrs": ["version"]
        /*: Infos*/

      }, attributes);
      this.childs.push(newElem);
      return newElem;
    }
  }, {
    key: "and",
    value: function and() {
      return this.parent || this;
    }
  }, {
    key: "back",
    value: function back() {
      return this.and().and();
    }
  }]);

  return apiv3;
}(VastElement);

var validator = {
  "only": {
    "VAST": {
      "alo": {
        "Ad": {
          "uniq": {
            "InLine": {
              "required": {
                "AdSystem": {},
                "AdTitle": {},
                "Creatives": {
                  "alo": {
                    "Creative": {
                      "uniq": {
                        "Linear": {
                          "required": {
                            "Duration": {},
                            "MediaFiles": {
                              "alo": {
                                "MediaFile": {
                                  "attrsRequired": {
                                    "delivery": ["progressive", "streaming"],
                                    "type": null,
                                    "width": null,
                                    "height": null
                                  }
                                }
                              }
                            }
                          },
                          "follow": {
                            "AdParameters": {},
                            "TrackingEvents": {
                              "follow": {
                                "Tracking": {
                                  "attrsRequired": {
                                    "event": ["creativeView", "start", "firstQuartile", "midpoint", "thirdQuartile", "complete", "mute", "unmute", "pause", "rewind", "resume", "fullscreen", "exitFullscreen", "expand", "collapse", "acceptInvitationLinear", "closeLinear", "skip", "progress"]
                                  }
                                }
                              }
                            },
                            "VideoClicks": {
                              "follow": {
                                "ClickThrough": {},
                                "ClickTracking": {},
                                "CustomClick": {}
                              }
                            },
                            "Icons": {
                              "alo": {
                                "Icon": {
                                  "alo": {
                                    "StaticResource": {
                                      "attrsRequired": {
                                        "creativeType": ["image/gif", "image/jpeg", "image/jpg", "image/png", "application/x-javascript", "application/x-shockwave-flash"]
                                      }
                                    },
                                    "IFrameResource": {},
                                    "HTMLResource": {}
                                  },
                                  "follow": {
                                    "IconClicks": {
                                      "follow": {
                                        "IconClickThrough": {},
                                        "IconClickTracking": {}
                                      }
                                    },
                                    "IconViewTracking": {}
                                  },
                                  "attrsRequired": {
                                    "program": null,
                                    "width": null,
                                    "height": null,
                                    "xPosition": null,
                                    "yPosition": null
                                  }
                                }
                              }
                            }
                          }
                        },
                        "CompanionAds": {
                          "follow": {
                            "Companion": {
                              "alo": {
                                "StaticResource": {
                                  "attrsRequired": {
                                    "creativeType": ["image/gif", "image/jpeg", "image/jpg", "image/png", "application/x-javascript", "application/x-shockwave-flash"]
                                  }
                                },
                                "IFrameResource": {},
                                "HTMLResource": {}
                              },
                              "follow": {
                                "AdParameters": {},
                                "AltText": {},
                                "CompanionClickThrough": {},
                                "CompanionClickTracking": {},
                                "TrackingEvents": {
                                  "follow": {
                                    "Tracking": {
                                      "attrsRequired": {
                                        "event": ["creativeView"]
                                      }
                                    }
                                  }
                                }
                              },
                              "attrsRequired": {
                                "width": null,
                                "height": null
                              }
                            }
                          },
                          "attrsRequired": {
                            "required": ["all", "any", "none"]
                          }
                        },
                        "NonLinearAds": {
                          "follow": {
                            "NonLinear": {
                              "alo": {
                                "StaticResource": {
                                  "attrsRequired": {
                                    "creativeType": ["image/gif", "image/jpeg", "image/jpg", "image/png", "application/x-javascript", "application/x-shockwave-flash"]
                                  }
                                },
                                "IFrameResource": {},
                                "HTMLResource": {}
                              },
                              "follow": {
                                "NonLinearClickThrough": {},
                                "NonLinearClickTracking": {},
                                "AdParameters": {}
                              },
                              "attrsRequired": {
                                "width": null,
                                "height": null
                              }
                            },
                            "TrackingEvents": {
                              "follow": {
                                "Tracking": {
                                  "attrsRequired": {
                                    "event": ["creativeView", "start", "firstQuartile", "midpoint", "thirdQuartile", "complete", "mute", "unmute", "pause", "rewind", "resume", "fullscreen", "exitFullscreen", "expand", "collapse", "acceptInvitation", "close", "progress"]
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      "follow": {
                        "CreativeExtensions": {
                          "follow": {
                            "CreativeExtension": {}
                          }
                        }
                      }
                    }
                  }
                }
              },
              "alo": {
                "Impression": {}
              },
              "follow": {
                "Description": {},
                "Advertiser": {},
                "Pricing": {
                  "attrsRequired": {
                    "currency": null,
                    "model": ["CPM", "CPC", "CPE", "CPV"]
                  }
                },
                "Survey": {},
                "Error": {},
                "Extensions": {
                  "required": {
                    "Extension": {}
                  }
                }
              }
            },
            "Wrapper": {
              "required": {
                "AdSystem": {},
                "VASTAdTagURI": {}
              },
              "alo": {
                "Impression": {}
              },
              "follow": {
                "Error": {},
                "Creatives": {
                  "follow": {
                    "Creative": {
                      "uniq": {
                        "Linear": {
                          "follow": {
                            "TrackingEvents": {
                              "follow": {
                                "Tracking": {
                                  "attrsRequired": {
                                    "event": ["creativeView", "start", "firstQuartile", "midpoint", "thirdQuartile", "complete", "mute", "unmute", "pause", "rewind", "resume", "fullscreen", "exitFullscreen", "expand", "collapse", "acceptInvitationLinear", "closeLinear", "skip", "progress"]
                                  }
                                }
                              }
                            },
                            "VideoClicks": {
                              "follow": {
                                "ClickTracking": {},
                                "CustomClick": {}
                              }
                            },
                            "Icons": {
                              "alo": {
                                "Icon": {
                                  "alo": {
                                    "StaticResource": {
                                      "attrsRequired": {
                                        "creativeType": ["image/gif", "image/jpeg", "image/jpg", "image/png", "application/x-javascript", "application/x-shockwave-flash"]
                                      }
                                    },
                                    "IFrameResource": {},
                                    "HTMLResource": {}
                                  },
                                  "follow": {
                                    "IconClicks": {
                                      "follow": {
                                        "IconClickThrough": {},
                                        "IconClickTracking": {}
                                      }
                                    },
                                    "IconViewTracking": {}
                                  },
                                  "attrsRequired": {
                                    "program": null,
                                    "width": null,
                                    "height": null,
                                    "xPosition": null,
                                    "yPosition": null
                                  }
                                }
                              }
                            }
                          }
                        },
                        "CompanionAds": {
                          "follow": {
                            "Companion": {
                              "alo": {
                                "StaticResource": {
                                  "attrsRequired": {
                                    "creativeType": ["image/gif", "image/jpeg", "image/jpg", "image/png", "application/x-javascript", "application/x-shockwave-flash"]
                                  }
                                },
                                "IFrameResource": {},
                                "HTMLResource": {}
                              },
                              "follow": {
                                "AdParameters": {},
                                "AltText": {},
                                "CompanionClickThrough": {},
                                "CompanionClickTracking": {},
                                "TrackingEvents": {
                                  "follow": {
                                    "Tracking": {
                                      "attrsRequired": {
                                        "event": ["creativeView"]
                                      }
                                    }
                                  }
                                }
                              },
                              "attrsRequired": {
                                "width": null,
                                "height": null
                              }
                            }
                          },
                          "attrsRequired": {
                            "required": ["all", "any", "none"]
                          }
                        },
                        "NonLinearAds": {
                          "follow": {
                            "NonLinear": {
                              "follow": {
                                "NonLinearClickTracking": {}
                              },
                              "attrsRequired": {
                                "width": null,
                                "height": null
                              }
                            },
                            "TrackingEvents": {
                              "follow": {
                                "Tracking": {
                                  "attrsRequired": {
                                    "event": ["creativeView", "start", "firstQuartile", "midpoint", "thirdQuartile", "complete", "mute", "unmute", "pause", "rewind", "resume", "fullscreen", "exitFullscreen", "expand", "collapse", "acceptInvitation", "close", "progress"]
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "Extensions": {
                  "required": {
                    "Extension": {}
                  }
                }
              }
            }
          }
        }
      },
      "follow": {
        "Error": {}
      },
      "attrsRequired": {
        "version": ["3.0"]
      }
    }
  }
};
module.exports = {
  apiv3,
  validator
};