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

var AdSystem_5 =
/*#__PURE__*/
function (_VastElement) {
  _inherits(AdSystem_5, _VastElement);

  /**
   * @param {string} n
   * @param {InLine_4} p
   */
  function AdSystem_5(n, p) {
    var _ref;

    var _this;

    _classCallCheck(this, AdSystem_5);

    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_ref = AdSystem_5.__proto__ || Object.getPrototypeOf(AdSystem_5)).call.apply(_ref, [this, n, p].concat(args)));
    _this.parent = p;
    return _this;
  }

  _createClass(AdSystem_5, [{
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

  return AdSystem_5;
}(VastElement);

var AdTitle_6 =
/*#__PURE__*/
function (_VastElement2) {
  _inherits(AdTitle_6, _VastElement2);

  /**
   * @param {string} n
   * @param {InLine_4} p
   */
  function AdTitle_6(n, p) {
    var _ref2;

    var _this2;

    _classCallCheck(this, AdTitle_6);

    for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
      args[_key2 - 2] = arguments[_key2];
    }

    _this2 = _possibleConstructorReturn(this, (_ref2 = AdTitle_6.__proto__ || Object.getPrototypeOf(AdTitle_6)).call.apply(_ref2, [this, n, p].concat(args)));
    _this2.parent = p;
    return _this2;
  }

  _createClass(AdTitle_6, [{
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

  return AdTitle_6;
}(VastElement);

var Description_7 =
/*#__PURE__*/
function (_VastElement3) {
  _inherits(Description_7, _VastElement3);

  /**
   * @param {string} n
   * @param {InLine_4} p
   */
  function Description_7(n, p) {
    var _ref3;

    var _this3;

    _classCallCheck(this, Description_7);

    for (var _len3 = arguments.length, args = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
      args[_key3 - 2] = arguments[_key3];
    }

    _this3 = _possibleConstructorReturn(this, (_ref3 = Description_7.__proto__ || Object.getPrototypeOf(Description_7)).call.apply(_ref3, [this, n, p].concat(args)));
    _this3.parent = p;
    return _this3;
  }

  _createClass(Description_7, [{
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

  return Description_7;
}(VastElement);

var Survey_8 =
/*#__PURE__*/
function (_VastElement4) {
  _inherits(Survey_8, _VastElement4);

  /**
   * @param {string} n
   * @param {InLine_4} p
   */
  function Survey_8(n, p) {
    var _ref4;

    var _this4;

    _classCallCheck(this, Survey_8);

    for (var _len4 = arguments.length, args = new Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
      args[_key4 - 2] = arguments[_key4];
    }

    _this4 = _possibleConstructorReturn(this, (_ref4 = Survey_8.__proto__ || Object.getPrototypeOf(Survey_8)).call.apply(_ref4, [this, n, p].concat(args)));
    _this4.parent = p;
    return _this4;
  }

  _createClass(Survey_8, [{
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

  return Survey_8;
}(VastElement);

var Error_9 =
/*#__PURE__*/
function (_VastElement5) {
  _inherits(Error_9, _VastElement5);

  /**
   * @param {string} n
   * @param {InLine_4} p
   */
  function Error_9(n, p) {
    var _ref5;

    var _this5;

    _classCallCheck(this, Error_9);

    for (var _len5 = arguments.length, args = new Array(_len5 > 2 ? _len5 - 2 : 0), _key5 = 2; _key5 < _len5; _key5++) {
      args[_key5 - 2] = arguments[_key5];
    }

    _this5 = _possibleConstructorReturn(this, (_ref5 = Error_9.__proto__ || Object.getPrototypeOf(Error_9)).call.apply(_ref5, [this, n, p].concat(args)));
    _this5.parent = p;
    return _this5;
  }

  _createClass(Error_9, [{
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

  return Error_9;
}(VastElement);

var Impression_10 =
/*#__PURE__*/
function (_VastElement6) {
  _inherits(Impression_10, _VastElement6);

  /**
   * @param {string} n
   * @param {InLine_4} p
   */
  function Impression_10(n, p) {
    var _ref6;

    var _this6;

    _classCallCheck(this, Impression_10);

    for (var _len6 = arguments.length, args = new Array(_len6 > 2 ? _len6 - 2 : 0), _key6 = 2; _key6 < _len6; _key6++) {
      args[_key6 - 2] = arguments[_key6];
    }

    _this6 = _possibleConstructorReturn(this, (_ref6 = Impression_10.__proto__ || Object.getPrototypeOf(Impression_10)).call.apply(_ref6, [this, n, p].concat(args)));
    _this6.parent = p;
    return _this6;
  }

  _createClass(Impression_10, [{
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

  return Impression_10;
}(VastElement);

var Duration_14 =
/*#__PURE__*/
function (_VastElement7) {
  _inherits(Duration_14, _VastElement7);

  /**
   * @param {string} n
   * @param {Linear_13} p
   */
  function Duration_14(n, p) {
    var _ref7;

    var _this7;

    _classCallCheck(this, Duration_14);

    for (var _len7 = arguments.length, args = new Array(_len7 > 2 ? _len7 - 2 : 0), _key7 = 2; _key7 < _len7; _key7++) {
      args[_key7 - 2] = arguments[_key7];
    }

    _this7 = _possibleConstructorReturn(this, (_ref7 = Duration_14.__proto__ || Object.getPrototypeOf(Duration_14)).call.apply(_ref7, [this, n, p].concat(args)));
    _this7.parent = p;
    return _this7;
  }

  _createClass(Duration_14, [{
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

  return Duration_14;
}(VastElement);

var Tracking_16 =
/*#__PURE__*/
function (_VastElement8) {
  _inherits(Tracking_16, _VastElement8);

  /**
   * @param {string} n
   * @param {TrackingEvents_15} p
   */
  function Tracking_16(n, p) {
    var _ref8;

    var _this8;

    _classCallCheck(this, Tracking_16);

    for (var _len8 = arguments.length, args = new Array(_len8 > 2 ? _len8 - 2 : 0), _key8 = 2; _key8 < _len8; _key8++) {
      args[_key8 - 2] = arguments[_key8];
    }

    _this8 = _possibleConstructorReturn(this, (_ref8 = Tracking_16.__proto__ || Object.getPrototypeOf(Tracking_16)).call.apply(_ref8, [this, n, p].concat(args)));
    _this8.parent = p;
    return _this8;
  }

  _createClass(Tracking_16, [{
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

  return Tracking_16;
}(VastElement);

var TrackingEvents_15 =
/*#__PURE__*/
function (_VastElement9) {
  _inherits(TrackingEvents_15, _VastElement9);

  /**
   * @param {string} n
   * @param {Linear_13} p
   */
  function TrackingEvents_15(n, p) {
    var _ref9;

    var _this9;

    _classCallCheck(this, TrackingEvents_15);

    for (var _len9 = arguments.length, args = new Array(_len9 > 2 ? _len9 - 2 : 0), _key9 = 2; _key9 < _len9; _key9++) {
      args[_key9 - 2] = arguments[_key9];
    }

    _this9 = _possibleConstructorReturn(this, (_ref9 = TrackingEvents_15.__proto__ || Object.getPrototypeOf(TrackingEvents_15)).call.apply(_ref9, [this, n, p].concat(args)));
    _this9.parent = p;
    return _this9;
  }
  /** 
   * @param {string} content
   * @param {{event:("creativeView"|"start"|"midpoint"|"firstQuartile"|"thirdQuartile"|"complete"|"mute"|"unmute"|"pause"|"rewind"|"resume"|"fullscreen"|"expand"|"collapse"|"acceptInvitation"|"close")}} attributes
   * @returns {Tracking_16} 
   */


  _createClass(TrackingEvents_15, [{
    key: "attachTracking",
    value: function attachTracking(content, attributes) {
      var newElem = new Tracking_16('Tracking', this, {
        "attrs": ["event"]
        /*: Infos*/

      }, content, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @param {{event:("creativeView"|"start"|"midpoint"|"firstQuartile"|"thirdQuartile"|"complete"|"mute"|"unmute"|"pause"|"rewind"|"resume"|"fullscreen"|"expand"|"collapse"|"acceptInvitation"|"close")}} attributes
     * @returns {TrackingEvents_15} 
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

  return TrackingEvents_15;
}(VastElement);

var AdParameters_17 =
/*#__PURE__*/
function (_VastElement10) {
  _inherits(AdParameters_17, _VastElement10);

  /**
   * @param {string} n
   * @param {Linear_13} p
   */
  function AdParameters_17(n, p) {
    var _ref10;

    var _this10;

    _classCallCheck(this, AdParameters_17);

    for (var _len10 = arguments.length, args = new Array(_len10 > 2 ? _len10 - 2 : 0), _key10 = 2; _key10 < _len10; _key10++) {
      args[_key10 - 2] = arguments[_key10];
    }

    _this10 = _possibleConstructorReturn(this, (_ref10 = AdParameters_17.__proto__ || Object.getPrototypeOf(AdParameters_17)).call.apply(_ref10, [this, n, p].concat(args)));
    _this10.parent = p;
    return _this10;
  }

  _createClass(AdParameters_17, [{
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

  return AdParameters_17;
}(VastElement);

var ClickThrough_19 =
/*#__PURE__*/
function (_VastElement11) {
  _inherits(ClickThrough_19, _VastElement11);

  /**
   * @param {string} n
   * @param {VideoClicks_18} p
   */
  function ClickThrough_19(n, p) {
    var _ref11;

    var _this11;

    _classCallCheck(this, ClickThrough_19);

    for (var _len11 = arguments.length, args = new Array(_len11 > 2 ? _len11 - 2 : 0), _key11 = 2; _key11 < _len11; _key11++) {
      args[_key11 - 2] = arguments[_key11];
    }

    _this11 = _possibleConstructorReturn(this, (_ref11 = ClickThrough_19.__proto__ || Object.getPrototypeOf(ClickThrough_19)).call.apply(_ref11, [this, n, p].concat(args)));
    _this11.parent = p;
    return _this11;
  }

  _createClass(ClickThrough_19, [{
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

  return ClickThrough_19;
}(VastElement);

var ClickTracking_20 =
/*#__PURE__*/
function (_VastElement12) {
  _inherits(ClickTracking_20, _VastElement12);

  /**
   * @param {string} n
   * @param {VideoClicks_18} p
   */
  function ClickTracking_20(n, p) {
    var _ref12;

    var _this12;

    _classCallCheck(this, ClickTracking_20);

    for (var _len12 = arguments.length, args = new Array(_len12 > 2 ? _len12 - 2 : 0), _key12 = 2; _key12 < _len12; _key12++) {
      args[_key12 - 2] = arguments[_key12];
    }

    _this12 = _possibleConstructorReturn(this, (_ref12 = ClickTracking_20.__proto__ || Object.getPrototypeOf(ClickTracking_20)).call.apply(_ref12, [this, n, p].concat(args)));
    _this12.parent = p;
    return _this12;
  }

  _createClass(ClickTracking_20, [{
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

  return ClickTracking_20;
}(VastElement);

var CustomClick_21 =
/*#__PURE__*/
function (_VastElement13) {
  _inherits(CustomClick_21, _VastElement13);

  /**
   * @param {string} n
   * @param {VideoClicks_18} p
   */
  function CustomClick_21(n, p) {
    var _ref13;

    var _this13;

    _classCallCheck(this, CustomClick_21);

    for (var _len13 = arguments.length, args = new Array(_len13 > 2 ? _len13 - 2 : 0), _key13 = 2; _key13 < _len13; _key13++) {
      args[_key13 - 2] = arguments[_key13];
    }

    _this13 = _possibleConstructorReturn(this, (_ref13 = CustomClick_21.__proto__ || Object.getPrototypeOf(CustomClick_21)).call.apply(_ref13, [this, n, p].concat(args)));
    _this13.parent = p;
    return _this13;
  }

  _createClass(CustomClick_21, [{
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

  return CustomClick_21;
}(VastElement);

var VideoClicks_18 =
/*#__PURE__*/
function (_VastElement14) {
  _inherits(VideoClicks_18, _VastElement14);

  /**
   * @param {string} n
   * @param {Linear_13} p
   */
  function VideoClicks_18(n, p) {
    var _ref14;

    var _this14;

    _classCallCheck(this, VideoClicks_18);

    for (var _len14 = arguments.length, args = new Array(_len14 > 2 ? _len14 - 2 : 0), _key14 = 2; _key14 < _len14; _key14++) {
      args[_key14 - 2] = arguments[_key14];
    }

    _this14 = _possibleConstructorReturn(this, (_ref14 = VideoClicks_18.__proto__ || Object.getPrototypeOf(VideoClicks_18)).call.apply(_ref14, [this, n, p].concat(args)));
    _this14.parent = p;
    return _this14;
  }
  /** 
   * @param {string} content
   * @returns {ClickThrough_19} 
   */


  _createClass(VideoClicks_18, [{
    key: "attachClickThrough",
    value: function attachClickThrough(content) {
      var newElem = new ClickThrough_19('ClickThrough', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {VideoClicks_18} 
     */

  }, {
    key: "addClickThrough",
    value: function addClickThrough(content) {
      return this.attachClickThrough(content).and();
    }
    /** 
     * @param {string} content
     * @returns {ClickTracking_20} 
     */

  }, {
    key: "attachClickTracking",
    value: function attachClickTracking(content) {
      var newElem = new ClickTracking_20('ClickTracking', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {VideoClicks_18} 
     */

  }, {
    key: "addClickTracking",
    value: function addClickTracking(content) {
      return this.attachClickTracking(content).and();
    }
    /** 
     * @param {string} content
     * @param {{id: string}} attributes
     * @returns {CustomClick_21} 
     */

  }, {
    key: "attachCustomClick",
    value: function attachCustomClick(content, attributes) {
      var newElem = new CustomClick_21('CustomClick', this, {
        "attrs": ["id"]
        /*: Infos*/

      }, content, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @param {{id: string}} attributes
     * @returns {VideoClicks_18} 
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

  return VideoClicks_18;
}(VastElement);

var MediaFile_23 =
/*#__PURE__*/
function (_VastElement15) {
  _inherits(MediaFile_23, _VastElement15);

  /**
   * @param {string} n
   * @param {MediaFiles_22} p
   */
  function MediaFile_23(n, p) {
    var _ref15;

    var _this15;

    _classCallCheck(this, MediaFile_23);

    for (var _len15 = arguments.length, args = new Array(_len15 > 2 ? _len15 - 2 : 0), _key15 = 2; _key15 < _len15; _key15++) {
      args[_key15 - 2] = arguments[_key15];
    }

    _this15 = _possibleConstructorReturn(this, (_ref15 = MediaFile_23.__proto__ || Object.getPrototypeOf(MediaFile_23)).call.apply(_ref15, [this, n, p].concat(args)));
    _this15.parent = p;
    return _this15;
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
function (_VastElement16) {
  _inherits(MediaFiles_22, _VastElement16);

  /**
   * @param {string} n
   * @param {Linear_13} p
   */
  function MediaFiles_22(n, p) {
    var _ref16;

    var _this16;

    _classCallCheck(this, MediaFiles_22);

    for (var _len16 = arguments.length, args = new Array(_len16 > 2 ? _len16 - 2 : 0), _key16 = 2; _key16 < _len16; _key16++) {
      args[_key16 - 2] = arguments[_key16];
    }

    _this16 = _possibleConstructorReturn(this, (_ref16 = MediaFiles_22.__proto__ || Object.getPrototypeOf(MediaFiles_22)).call.apply(_ref16, [this, n, p].concat(args)));
    _this16.parent = p;
    return _this16;
  }
  /** 
   * @param {string} content
   * @param {{id: string, delivery:("progressive"|"streaming"), type: string, bitrate: string, width: string, height: string, scalable: string, mantainAspectRatio: string, apiFramework: string}} attributes
   * @returns {MediaFile_23} 
   */


  _createClass(MediaFiles_22, [{
    key: "attachMediaFile",
    value: function attachMediaFile(content, attributes) {
      var newElem = new MediaFile_23('MediaFile', this, {
        "attrs": ["id", "delivery", "type", "bitrate", "width", "height", "scalable", "mantainAspectRatio", "apiFramework"]
        /*: Infos*/

      }, content, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @param {{id: string, delivery:("progressive"|"streaming"), type: string, bitrate: string, width: string, height: string, scalable: string, mantainAspectRatio: string, apiFramework: string}} attributes
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

var Linear_13 =
/*#__PURE__*/
function (_VastElement17) {
  _inherits(Linear_13, _VastElement17);

  /**
   * @param {string} n
   * @param {Creative_12} p
   */
  function Linear_13(n, p) {
    var _ref17;

    var _this17;

    _classCallCheck(this, Linear_13);

    for (var _len17 = arguments.length, args = new Array(_len17 > 2 ? _len17 - 2 : 0), _key17 = 2; _key17 < _len17; _key17++) {
      args[_key17 - 2] = arguments[_key17];
    }

    _this17 = _possibleConstructorReturn(this, (_ref17 = Linear_13.__proto__ || Object.getPrototypeOf(Linear_13)).call.apply(_ref17, [this, n, p].concat(args)));
    _this17.parent = p;
    return _this17;
  }
  /** @description required in Vast 2
   * @param {string} content
   * @returns {Duration_14} 
   */


  _createClass(Linear_13, [{
    key: "attachDuration",
    value: function attachDuration(content) {
      var newElem = new Duration_14('Duration', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** @description required in Vast 2
     * @param {string} content
     * @returns {Linear_13} 
     */

  }, {
    key: "addDuration",
    value: function addDuration(content) {
      return this.attachDuration(content).and();
    }
    /** 
     * @returns {TrackingEvents_15} 
     */

  }, {
    key: "attachTrackingEvents",
    value: function attachTrackingEvents() {
      var newElem = new TrackingEvents_15('TrackingEvents', this, {}
      /*: Infos*/
      );
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {AdParameters_17} 
     */

  }, {
    key: "attachAdParameters",
    value: function attachAdParameters(content) {
      var newElem = new AdParameters_17('AdParameters', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {Linear_13} 
     */

  }, {
    key: "addAdParameters",
    value: function addAdParameters(content) {
      return this.attachAdParameters(content).and();
    }
    /** 
     * @returns {VideoClicks_18} 
     */

  }, {
    key: "attachVideoClicks",
    value: function attachVideoClicks() {
      var newElem = new VideoClicks_18('VideoClicks', this, {}
      /*: Infos*/
      );
      this.childs.push(newElem);
      return newElem;
    }
    /** @description required in Vast 2
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

  return Linear_13;
}(VastElement);

var StaticResource_26 =
/*#__PURE__*/
function (_VastElement18) {
  _inherits(StaticResource_26, _VastElement18);

  /**
   * @param {string} n
   * @param {Companion_25} p
   */
  function StaticResource_26(n, p) {
    var _ref18;

    var _this18;

    _classCallCheck(this, StaticResource_26);

    for (var _len18 = arguments.length, args = new Array(_len18 > 2 ? _len18 - 2 : 0), _key18 = 2; _key18 < _len18; _key18++) {
      args[_key18 - 2] = arguments[_key18];
    }

    _this18 = _possibleConstructorReturn(this, (_ref18 = StaticResource_26.__proto__ || Object.getPrototypeOf(StaticResource_26)).call.apply(_ref18, [this, n, p].concat(args)));
    _this18.parent = p;
    return _this18;
  }

  _createClass(StaticResource_26, [{
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

  return StaticResource_26;
}(VastElement);

var IFrameResource_27 =
/*#__PURE__*/
function (_VastElement19) {
  _inherits(IFrameResource_27, _VastElement19);

  /**
   * @param {string} n
   * @param {Companion_25} p
   */
  function IFrameResource_27(n, p) {
    var _ref19;

    var _this19;

    _classCallCheck(this, IFrameResource_27);

    for (var _len19 = arguments.length, args = new Array(_len19 > 2 ? _len19 - 2 : 0), _key19 = 2; _key19 < _len19; _key19++) {
      args[_key19 - 2] = arguments[_key19];
    }

    _this19 = _possibleConstructorReturn(this, (_ref19 = IFrameResource_27.__proto__ || Object.getPrototypeOf(IFrameResource_27)).call.apply(_ref19, [this, n, p].concat(args)));
    _this19.parent = p;
    return _this19;
  }

  _createClass(IFrameResource_27, [{
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

  return IFrameResource_27;
}(VastElement);

var HTMLResource_28 =
/*#__PURE__*/
function (_VastElement20) {
  _inherits(HTMLResource_28, _VastElement20);

  /**
   * @param {string} n
   * @param {Companion_25} p
   */
  function HTMLResource_28(n, p) {
    var _ref20;

    var _this20;

    _classCallCheck(this, HTMLResource_28);

    for (var _len20 = arguments.length, args = new Array(_len20 > 2 ? _len20 - 2 : 0), _key20 = 2; _key20 < _len20; _key20++) {
      args[_key20 - 2] = arguments[_key20];
    }

    _this20 = _possibleConstructorReturn(this, (_ref20 = HTMLResource_28.__proto__ || Object.getPrototypeOf(HTMLResource_28)).call.apply(_ref20, [this, n, p].concat(args)));
    _this20.parent = p;
    return _this20;
  }

  _createClass(HTMLResource_28, [{
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

  return HTMLResource_28;
}(VastElement);

var Tracking_30 =
/*#__PURE__*/
function (_VastElement21) {
  _inherits(Tracking_30, _VastElement21);

  /**
   * @param {string} n
   * @param {TrackingEvents_29} p
   */
  function Tracking_30(n, p) {
    var _ref21;

    var _this21;

    _classCallCheck(this, Tracking_30);

    for (var _len21 = arguments.length, args = new Array(_len21 > 2 ? _len21 - 2 : 0), _key21 = 2; _key21 < _len21; _key21++) {
      args[_key21 - 2] = arguments[_key21];
    }

    _this21 = _possibleConstructorReturn(this, (_ref21 = Tracking_30.__proto__ || Object.getPrototypeOf(Tracking_30)).call.apply(_ref21, [this, n, p].concat(args)));
    _this21.parent = p;
    return _this21;
  }

  _createClass(Tracking_30, [{
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

  return Tracking_30;
}(VastElement);

var TrackingEvents_29 =
/*#__PURE__*/
function (_VastElement22) {
  _inherits(TrackingEvents_29, _VastElement22);

  /**
   * @param {string} n
   * @param {Companion_25} p
   */
  function TrackingEvents_29(n, p) {
    var _ref22;

    var _this22;

    _classCallCheck(this, TrackingEvents_29);

    for (var _len22 = arguments.length, args = new Array(_len22 > 2 ? _len22 - 2 : 0), _key22 = 2; _key22 < _len22; _key22++) {
      args[_key22 - 2] = arguments[_key22];
    }

    _this22 = _possibleConstructorReturn(this, (_ref22 = TrackingEvents_29.__proto__ || Object.getPrototypeOf(TrackingEvents_29)).call.apply(_ref22, [this, n, p].concat(args)));
    _this22.parent = p;
    return _this22;
  }
  /** 
   * @param {string} content
   * @param {{event:("creativeView")}} attributes
   * @returns {Tracking_30} 
   */


  _createClass(TrackingEvents_29, [{
    key: "attachTracking",
    value: function attachTracking(content, attributes) {
      var newElem = new Tracking_30('Tracking', this, {
        "attrs": ["event"]
        /*: Infos*/

      }, content, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @param {{event:("creativeView")}} attributes
     * @returns {TrackingEvents_29} 
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

  return TrackingEvents_29;
}(VastElement);

var CompanionClickThrough_31 =
/*#__PURE__*/
function (_VastElement23) {
  _inherits(CompanionClickThrough_31, _VastElement23);

  /**
   * @param {string} n
   * @param {Companion_25} p
   */
  function CompanionClickThrough_31(n, p) {
    var _ref23;

    var _this23;

    _classCallCheck(this, CompanionClickThrough_31);

    for (var _len23 = arguments.length, args = new Array(_len23 > 2 ? _len23 - 2 : 0), _key23 = 2; _key23 < _len23; _key23++) {
      args[_key23 - 2] = arguments[_key23];
    }

    _this23 = _possibleConstructorReturn(this, (_ref23 = CompanionClickThrough_31.__proto__ || Object.getPrototypeOf(CompanionClickThrough_31)).call.apply(_ref23, [this, n, p].concat(args)));
    _this23.parent = p;
    return _this23;
  }

  _createClass(CompanionClickThrough_31, [{
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

  return CompanionClickThrough_31;
}(VastElement);

var AltText_32 =
/*#__PURE__*/
function (_VastElement24) {
  _inherits(AltText_32, _VastElement24);

  /**
   * @param {string} n
   * @param {Companion_25} p
   */
  function AltText_32(n, p) {
    var _ref24;

    var _this24;

    _classCallCheck(this, AltText_32);

    for (var _len24 = arguments.length, args = new Array(_len24 > 2 ? _len24 - 2 : 0), _key24 = 2; _key24 < _len24; _key24++) {
      args[_key24 - 2] = arguments[_key24];
    }

    _this24 = _possibleConstructorReturn(this, (_ref24 = AltText_32.__proto__ || Object.getPrototypeOf(AltText_32)).call.apply(_ref24, [this, n, p].concat(args)));
    _this24.parent = p;
    return _this24;
  }

  _createClass(AltText_32, [{
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

  return AltText_32;
}(VastElement);

var AdParameters_33 =
/*#__PURE__*/
function (_VastElement25) {
  _inherits(AdParameters_33, _VastElement25);

  /**
   * @param {string} n
   * @param {Companion_25} p
   */
  function AdParameters_33(n, p) {
    var _ref25;

    var _this25;

    _classCallCheck(this, AdParameters_33);

    for (var _len25 = arguments.length, args = new Array(_len25 > 2 ? _len25 - 2 : 0), _key25 = 2; _key25 < _len25; _key25++) {
      args[_key25 - 2] = arguments[_key25];
    }

    _this25 = _possibleConstructorReturn(this, (_ref25 = AdParameters_33.__proto__ || Object.getPrototypeOf(AdParameters_33)).call.apply(_ref25, [this, n, p].concat(args)));
    _this25.parent = p;
    return _this25;
  }

  _createClass(AdParameters_33, [{
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

  return AdParameters_33;
}(VastElement);

var Companion_25 =
/*#__PURE__*/
function (_VastElement26) {
  _inherits(Companion_25, _VastElement26);

  /**
   * @param {string} n
   * @param {CompanionAds_24} p
   */
  function Companion_25(n, p) {
    var _ref26;

    var _this26;

    _classCallCheck(this, Companion_25);

    for (var _len26 = arguments.length, args = new Array(_len26 > 2 ? _len26 - 2 : 0), _key26 = 2; _key26 < _len26; _key26++) {
      args[_key26 - 2] = arguments[_key26];
    }

    _this26 = _possibleConstructorReturn(this, (_ref26 = Companion_25.__proto__ || Object.getPrototypeOf(Companion_25)).call.apply(_ref26, [this, n, p].concat(args)));
    _this26.parent = p;
    return _this26;
  }
  /** 
   * @param {string} content
   * @param {{creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash")}} attributes
   * @returns {StaticResource_26} 
   */


  _createClass(Companion_25, [{
    key: "attachStaticResource",
    value: function attachStaticResource(content, attributes) {
      var newElem = new StaticResource_26('StaticResource', this, {
        "attrs": ["creativeType"]
        /*: Infos*/

      }, content, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @param {{creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash")}} attributes
     * @returns {Companion_25} 
     */

  }, {
    key: "addStaticResource",
    value: function addStaticResource(content, attributes) {
      return this.attachStaticResource(content, attributes).and();
    }
    /** 
     * @param {string} content
     * @returns {IFrameResource_27} 
     */

  }, {
    key: "attachIFrameResource",
    value: function attachIFrameResource(content) {
      var newElem = new IFrameResource_27('IFrameResource', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {Companion_25} 
     */

  }, {
    key: "addIFrameResource",
    value: function addIFrameResource(content) {
      return this.attachIFrameResource(content).and();
    }
    /** 
     * @param {string} content
     * @returns {HTMLResource_28} 
     */

  }, {
    key: "attachHTMLResource",
    value: function attachHTMLResource(content) {
      var newElem = new HTMLResource_28('HTMLResource', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {Companion_25} 
     */

  }, {
    key: "addHTMLResource",
    value: function addHTMLResource(content) {
      return this.attachHTMLResource(content).and();
    }
    /** 
     * @returns {TrackingEvents_29} 
     */

  }, {
    key: "attachTrackingEvents",
    value: function attachTrackingEvents() {
      var newElem = new TrackingEvents_29('TrackingEvents', this, {}
      /*: Infos*/
      );
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {CompanionClickThrough_31} 
     */

  }, {
    key: "attachCompanionClickThrough",
    value: function attachCompanionClickThrough(content) {
      var newElem = new CompanionClickThrough_31('CompanionClickThrough', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {Companion_25} 
     */

  }, {
    key: "addCompanionClickThrough",
    value: function addCompanionClickThrough(content) {
      return this.attachCompanionClickThrough(content).and();
    }
    /** 
     * @param {string} content
     * @returns {AltText_32} 
     */

  }, {
    key: "attachAltText",
    value: function attachAltText(content) {
      var newElem = new AltText_32('AltText', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {Companion_25} 
     */

  }, {
    key: "addAltText",
    value: function addAltText(content) {
      return this.attachAltText(content).and();
    }
    /** 
     * @param {string} content
     * @returns {AdParameters_33} 
     */

  }, {
    key: "attachAdParameters",
    value: function attachAdParameters(content) {
      var newElem = new AdParameters_33('AdParameters', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {Companion_25} 
     */

  }, {
    key: "addAdParameters",
    value: function addAdParameters(content) {
      return this.attachAdParameters(content).and();
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

  return Companion_25;
}(VastElement);

var CompanionAds_24 =
/*#__PURE__*/
function (_VastElement27) {
  _inherits(CompanionAds_24, _VastElement27);

  /**
   * @param {string} n
   * @param {Creative_12} p
   */
  function CompanionAds_24(n, p) {
    var _ref27;

    var _this27;

    _classCallCheck(this, CompanionAds_24);

    for (var _len27 = arguments.length, args = new Array(_len27 > 2 ? _len27 - 2 : 0), _key27 = 2; _key27 < _len27; _key27++) {
      args[_key27 - 2] = arguments[_key27];
    }

    _this27 = _possibleConstructorReturn(this, (_ref27 = CompanionAds_24.__proto__ || Object.getPrototypeOf(CompanionAds_24)).call.apply(_ref27, [this, n, p].concat(args)));
    _this27.parent = p;
    return _this27;
  }
  /** 
   * @param {{id: string, width: string, height: string, expandedWidth: string, expandedHeight: string, apiFramework: string}} attributes
   * @returns {Companion_25} 
   */


  _createClass(CompanionAds_24, [{
    key: "attachCompanion",
    value: function attachCompanion(attributes) {
      var newElem = new Companion_25('Companion', this, {
        "attrs": ["id", "width", "height", "expandedWidth", "expandedHeight", "apiFramework"]
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

  return CompanionAds_24;
}(VastElement);

var StaticResource_36 =
/*#__PURE__*/
function (_VastElement28) {
  _inherits(StaticResource_36, _VastElement28);

  /**
   * @param {string} n
   * @param {NonLinear_35} p
   */
  function StaticResource_36(n, p) {
    var _ref28;

    var _this28;

    _classCallCheck(this, StaticResource_36);

    for (var _len28 = arguments.length, args = new Array(_len28 > 2 ? _len28 - 2 : 0), _key28 = 2; _key28 < _len28; _key28++) {
      args[_key28 - 2] = arguments[_key28];
    }

    _this28 = _possibleConstructorReturn(this, (_ref28 = StaticResource_36.__proto__ || Object.getPrototypeOf(StaticResource_36)).call.apply(_ref28, [this, n, p].concat(args)));
    _this28.parent = p;
    return _this28;
  }

  _createClass(StaticResource_36, [{
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

  return StaticResource_36;
}(VastElement);

var IFrameResource_37 =
/*#__PURE__*/
function (_VastElement29) {
  _inherits(IFrameResource_37, _VastElement29);

  /**
   * @param {string} n
   * @param {NonLinear_35} p
   */
  function IFrameResource_37(n, p) {
    var _ref29;

    var _this29;

    _classCallCheck(this, IFrameResource_37);

    for (var _len29 = arguments.length, args = new Array(_len29 > 2 ? _len29 - 2 : 0), _key29 = 2; _key29 < _len29; _key29++) {
      args[_key29 - 2] = arguments[_key29];
    }

    _this29 = _possibleConstructorReturn(this, (_ref29 = IFrameResource_37.__proto__ || Object.getPrototypeOf(IFrameResource_37)).call.apply(_ref29, [this, n, p].concat(args)));
    _this29.parent = p;
    return _this29;
  }

  _createClass(IFrameResource_37, [{
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

  return IFrameResource_37;
}(VastElement);

var HTMLResource_38 =
/*#__PURE__*/
function (_VastElement30) {
  _inherits(HTMLResource_38, _VastElement30);

  /**
   * @param {string} n
   * @param {NonLinear_35} p
   */
  function HTMLResource_38(n, p) {
    var _ref30;

    var _this30;

    _classCallCheck(this, HTMLResource_38);

    for (var _len30 = arguments.length, args = new Array(_len30 > 2 ? _len30 - 2 : 0), _key30 = 2; _key30 < _len30; _key30++) {
      args[_key30 - 2] = arguments[_key30];
    }

    _this30 = _possibleConstructorReturn(this, (_ref30 = HTMLResource_38.__proto__ || Object.getPrototypeOf(HTMLResource_38)).call.apply(_ref30, [this, n, p].concat(args)));
    _this30.parent = p;
    return _this30;
  }

  _createClass(HTMLResource_38, [{
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

  return HTMLResource_38;
}(VastElement);

var NonLinear_35 =
/*#__PURE__*/
function (_VastElement31) {
  _inherits(NonLinear_35, _VastElement31);

  /**
   * @param {string} n
   * @param {NonLinearAds_34} p
   */
  function NonLinear_35(n, p) {
    var _ref31;

    var _this31;

    _classCallCheck(this, NonLinear_35);

    for (var _len31 = arguments.length, args = new Array(_len31 > 2 ? _len31 - 2 : 0), _key31 = 2; _key31 < _len31; _key31++) {
      args[_key31 - 2] = arguments[_key31];
    }

    _this31 = _possibleConstructorReturn(this, (_ref31 = NonLinear_35.__proto__ || Object.getPrototypeOf(NonLinear_35)).call.apply(_ref31, [this, n, p].concat(args)));
    _this31.parent = p;
    return _this31;
  }
  /** 
   * @param {string} content
   * @param {{creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash")}} attributes
   * @returns {StaticResource_36} 
   */


  _createClass(NonLinear_35, [{
    key: "attachStaticResource",
    value: function attachStaticResource(content, attributes) {
      var newElem = new StaticResource_36('StaticResource', this, {
        "attrs": ["creativeType"]
        /*: Infos*/

      }, content, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @param {{creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash")}} attributes
     * @returns {NonLinear_35} 
     */

  }, {
    key: "addStaticResource",
    value: function addStaticResource(content, attributes) {
      return this.attachStaticResource(content, attributes).and();
    }
    /** 
     * @param {string} content
     * @returns {IFrameResource_37} 
     */

  }, {
    key: "attachIFrameResource",
    value: function attachIFrameResource(content) {
      var newElem = new IFrameResource_37('IFrameResource', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {NonLinear_35} 
     */

  }, {
    key: "addIFrameResource",
    value: function addIFrameResource(content) {
      return this.attachIFrameResource(content).and();
    }
    /** 
     * @param {string} content
     * @returns {HTMLResource_38} 
     */

  }, {
    key: "attachHTMLResource",
    value: function attachHTMLResource(content) {
      var newElem = new HTMLResource_38('HTMLResource', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {NonLinear_35} 
     */

  }, {
    key: "addHTMLResource",
    value: function addHTMLResource(content) {
      return this.attachHTMLResource(content).and();
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

  return NonLinear_35;
}(VastElement);

var Tracking_40 =
/*#__PURE__*/
function (_VastElement32) {
  _inherits(Tracking_40, _VastElement32);

  /**
   * @param {string} n
   * @param {TrackingEvents_39} p
   */
  function Tracking_40(n, p) {
    var _ref32;

    var _this32;

    _classCallCheck(this, Tracking_40);

    for (var _len32 = arguments.length, args = new Array(_len32 > 2 ? _len32 - 2 : 0), _key32 = 2; _key32 < _len32; _key32++) {
      args[_key32 - 2] = arguments[_key32];
    }

    _this32 = _possibleConstructorReturn(this, (_ref32 = Tracking_40.__proto__ || Object.getPrototypeOf(Tracking_40)).call.apply(_ref32, [this, n, p].concat(args)));
    _this32.parent = p;
    return _this32;
  }

  _createClass(Tracking_40, [{
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

  return Tracking_40;
}(VastElement);

var TrackingEvents_39 =
/*#__PURE__*/
function (_VastElement33) {
  _inherits(TrackingEvents_39, _VastElement33);

  /**
   * @param {string} n
   * @param {NonLinearAds_34} p
   */
  function TrackingEvents_39(n, p) {
    var _ref33;

    var _this33;

    _classCallCheck(this, TrackingEvents_39);

    for (var _len33 = arguments.length, args = new Array(_len33 > 2 ? _len33 - 2 : 0), _key33 = 2; _key33 < _len33; _key33++) {
      args[_key33 - 2] = arguments[_key33];
    }

    _this33 = _possibleConstructorReturn(this, (_ref33 = TrackingEvents_39.__proto__ || Object.getPrototypeOf(TrackingEvents_39)).call.apply(_ref33, [this, n, p].concat(args)));
    _this33.parent = p;
    return _this33;
  }
  /** 
   * @param {string} content
   * @param {{event:("creativeView"|"start"|"midpoint"|"firstQuartile"|"thirdQuartile"|"complete"|"mute"|"unmute"|"pause"|"rewind"|"resume"|"fullscreen"|"expand"|"collapse"|"acceptInvitation"|"close")}} attributes
   * @returns {Tracking_40} 
   */


  _createClass(TrackingEvents_39, [{
    key: "attachTracking",
    value: function attachTracking(content, attributes) {
      var newElem = new Tracking_40('Tracking', this, {
        "attrs": ["event"]
        /*: Infos*/

      }, content, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @param {{event:("creativeView"|"start"|"midpoint"|"firstQuartile"|"thirdQuartile"|"complete"|"mute"|"unmute"|"pause"|"rewind"|"resume"|"fullscreen"|"expand"|"collapse"|"acceptInvitation"|"close")}} attributes
     * @returns {TrackingEvents_39} 
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

  return TrackingEvents_39;
}(VastElement);

var NonLinearClickThrough_41 =
/*#__PURE__*/
function (_VastElement34) {
  _inherits(NonLinearClickThrough_41, _VastElement34);

  /**
   * @param {string} n
   * @param {NonLinearAds_34} p
   */
  function NonLinearClickThrough_41(n, p) {
    var _ref34;

    var _this34;

    _classCallCheck(this, NonLinearClickThrough_41);

    for (var _len34 = arguments.length, args = new Array(_len34 > 2 ? _len34 - 2 : 0), _key34 = 2; _key34 < _len34; _key34++) {
      args[_key34 - 2] = arguments[_key34];
    }

    _this34 = _possibleConstructorReturn(this, (_ref34 = NonLinearClickThrough_41.__proto__ || Object.getPrototypeOf(NonLinearClickThrough_41)).call.apply(_ref34, [this, n, p].concat(args)));
    _this34.parent = p;
    return _this34;
  }

  _createClass(NonLinearClickThrough_41, [{
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

  return NonLinearClickThrough_41;
}(VastElement);

var AdParameters_42 =
/*#__PURE__*/
function (_VastElement35) {
  _inherits(AdParameters_42, _VastElement35);

  /**
   * @param {string} n
   * @param {NonLinearAds_34} p
   */
  function AdParameters_42(n, p) {
    var _ref35;

    var _this35;

    _classCallCheck(this, AdParameters_42);

    for (var _len35 = arguments.length, args = new Array(_len35 > 2 ? _len35 - 2 : 0), _key35 = 2; _key35 < _len35; _key35++) {
      args[_key35 - 2] = arguments[_key35];
    }

    _this35 = _possibleConstructorReturn(this, (_ref35 = AdParameters_42.__proto__ || Object.getPrototypeOf(AdParameters_42)).call.apply(_ref35, [this, n, p].concat(args)));
    _this35.parent = p;
    return _this35;
  }

  _createClass(AdParameters_42, [{
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

  return AdParameters_42;
}(VastElement);

var NonLinearAds_34 =
/*#__PURE__*/
function (_VastElement36) {
  _inherits(NonLinearAds_34, _VastElement36);

  /**
   * @param {string} n
   * @param {Creative_12} p
   */
  function NonLinearAds_34(n, p) {
    var _ref36;

    var _this36;

    _classCallCheck(this, NonLinearAds_34);

    for (var _len36 = arguments.length, args = new Array(_len36 > 2 ? _len36 - 2 : 0), _key36 = 2; _key36 < _len36; _key36++) {
      args[_key36 - 2] = arguments[_key36];
    }

    _this36 = _possibleConstructorReturn(this, (_ref36 = NonLinearAds_34.__proto__ || Object.getPrototypeOf(NonLinearAds_34)).call.apply(_ref36, [this, n, p].concat(args)));
    _this36.parent = p;
    return _this36;
  }
  /** 
   * @param {{id: string, width: string, height: string, expandedWidth: string, expandedHeight: string, scalable: string, maintainAspectRatio: string, minSuggestedDuration: string, apiFramework: string}} attributes
   * @returns {NonLinear_35} 
   */


  _createClass(NonLinearAds_34, [{
    key: "attachNonLinear",
    value: function attachNonLinear(attributes) {
      var newElem = new NonLinear_35('NonLinear', this, {
        "attrs": ["id", "width", "height", "expandedWidth", "expandedHeight", "scalable", "maintainAspectRatio", "minSuggestedDuration", "apiFramework"]
        /*: Infos*/

      }, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @returns {TrackingEvents_39} 
     */

  }, {
    key: "attachTrackingEvents",
    value: function attachTrackingEvents() {
      var newElem = new TrackingEvents_39('TrackingEvents', this, {}
      /*: Infos*/
      );
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {NonLinearClickThrough_41} 
     */

  }, {
    key: "attachNonLinearClickThrough",
    value: function attachNonLinearClickThrough(content) {
      var newElem = new NonLinearClickThrough_41('NonLinearClickThrough', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {NonLinearAds_34} 
     */

  }, {
    key: "addNonLinearClickThrough",
    value: function addNonLinearClickThrough(content) {
      return this.attachNonLinearClickThrough(content).and();
    }
    /** 
     * @param {string} content
     * @returns {AdParameters_42} 
     */

  }, {
    key: "attachAdParameters",
    value: function attachAdParameters(content) {
      var newElem = new AdParameters_42('AdParameters', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {NonLinearAds_34} 
     */

  }, {
    key: "addAdParameters",
    value: function addAdParameters(content) {
      return this.attachAdParameters(content).and();
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

  return NonLinearAds_34;
}(VastElement);

var Creative_12 =
/*#__PURE__*/
function (_VastElement37) {
  _inherits(Creative_12, _VastElement37);

  /**
   * @param {string} n
   * @param {Creatives_11} p
   */
  function Creative_12(n, p) {
    var _ref37;

    var _this37;

    _classCallCheck(this, Creative_12);

    for (var _len37 = arguments.length, args = new Array(_len37 > 2 ? _len37 - 2 : 0), _key37 = 2; _key37 < _len37; _key37++) {
      args[_key37 - 2] = arguments[_key37];
    }

    _this37 = _possibleConstructorReturn(this, (_ref37 = Creative_12.__proto__ || Object.getPrototypeOf(Creative_12)).call.apply(_ref37, [this, n, p].concat(args)));
    _this37.parent = p;
    return _this37;
  }
  /** 
   * @returns {Linear_13} 
   */


  _createClass(Creative_12, [{
    key: "attachLinear",
    value: function attachLinear() {
      var newElem = new Linear_13('Linear', this, {}
      /*: Infos*/
      );
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @returns {CompanionAds_24} 
     */

  }, {
    key: "attachCompanionAds",
    value: function attachCompanionAds() {
      var newElem = new CompanionAds_24('CompanionAds', this, {}
      /*: Infos*/
      );
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @returns {NonLinearAds_34} 
     */

  }, {
    key: "attachNonLinearAds",
    value: function attachNonLinearAds() {
      var newElem = new NonLinearAds_34('NonLinearAds', this, {}
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

  return Creative_12;
}(VastElement);

var Creatives_11 =
/*#__PURE__*/
function (_VastElement38) {
  _inherits(Creatives_11, _VastElement38);

  /**
   * @param {string} n
   * @param {InLine_4} p
   */
  function Creatives_11(n, p) {
    var _ref38;

    var _this38;

    _classCallCheck(this, Creatives_11);

    for (var _len38 = arguments.length, args = new Array(_len38 > 2 ? _len38 - 2 : 0), _key38 = 2; _key38 < _len38; _key38++) {
      args[_key38 - 2] = arguments[_key38];
    }

    _this38 = _possibleConstructorReturn(this, (_ref38 = Creatives_11.__proto__ || Object.getPrototypeOf(Creatives_11)).call.apply(_ref38, [this, n, p].concat(args)));
    _this38.parent = p;
    return _this38;
  }
  /** 
   * @param {{id: string, sequence: string, adID: string}} attributes
   * @returns {Creative_12} 
   */


  _createClass(Creatives_11, [{
    key: "attachCreative",
    value: function attachCreative(attributes) {
      var newElem = new Creative_12('Creative', this, {
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

  return Creatives_11;
}(VastElement);

var Extension_44 =
/*#__PURE__*/
function (_VastElement39) {
  _inherits(Extension_44, _VastElement39);

  /**
   * @param {string} n
   * @param {Extensions_43} p
   */
  function Extension_44(n, p) {
    var _ref39;

    var _this39;

    _classCallCheck(this, Extension_44);

    for (var _len39 = arguments.length, args = new Array(_len39 > 2 ? _len39 - 2 : 0), _key39 = 2; _key39 < _len39; _key39++) {
      args[_key39 - 2] = arguments[_key39];
    }

    _this39 = _possibleConstructorReturn(this, (_ref39 = Extension_44.__proto__ || Object.getPrototypeOf(Extension_44)).call.apply(_ref39, [this, n, p].concat(args)));
    _this39.parent = p;
    return _this39;
  }

  _createClass(Extension_44, [{
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

  return Extension_44;
}(VastElement);

var Extensions_43 =
/*#__PURE__*/
function (_VastElement40) {
  _inherits(Extensions_43, _VastElement40);

  /**
   * @param {string} n
   * @param {InLine_4} p
   */
  function Extensions_43(n, p) {
    var _ref40;

    var _this40;

    _classCallCheck(this, Extensions_43);

    for (var _len40 = arguments.length, args = new Array(_len40 > 2 ? _len40 - 2 : 0), _key40 = 2; _key40 < _len40; _key40++) {
      args[_key40 - 2] = arguments[_key40];
    }

    _this40 = _possibleConstructorReturn(this, (_ref40 = Extensions_43.__proto__ || Object.getPrototypeOf(Extensions_43)).call.apply(_ref40, [this, n, p].concat(args)));
    _this40.parent = p;
    return _this40;
  }
  /** @description required in Vast 2
   * @param {string} content
   * @param {{type: string}} attributes
   * @returns {Extension_44} 
   */


  _createClass(Extensions_43, [{
    key: "attachExtension",
    value: function attachExtension(content, attributes) {
      var newElem = new Extension_44('Extension', this, {
        "attrs": ["type"]
        /*: Infos*/

      }, content, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** @description required in Vast 2
     * @param {string} content
     * @param {{type: string}} attributes
     * @returns {Extensions_43} 
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

  return Extensions_43;
}(VastElement);

var InLine_4 =
/*#__PURE__*/
function (_VastElement41) {
  _inherits(InLine_4, _VastElement41);

  /**
   * @param {string} n
   * @param {Ad_3} p
   */
  function InLine_4(n, p) {
    var _ref41;

    var _this41;

    _classCallCheck(this, InLine_4);

    for (var _len41 = arguments.length, args = new Array(_len41 > 2 ? _len41 - 2 : 0), _key41 = 2; _key41 < _len41; _key41++) {
      args[_key41 - 2] = arguments[_key41];
    }

    _this41 = _possibleConstructorReturn(this, (_ref41 = InLine_4.__proto__ || Object.getPrototypeOf(InLine_4)).call.apply(_ref41, [this, n, p].concat(args)));
    _this41.parent = p;
    return _this41;
  }
  /** @description required in Vast 2
   * @param {string} content
   * @param {{version: string}} attributes
   * @returns {AdSystem_5} 
   */


  _createClass(InLine_4, [{
    key: "attachAdSystem",
    value: function attachAdSystem(content, attributes) {
      var newElem = new AdSystem_5('AdSystem', this, {
        "attrs": ["version"]
        /*: Infos*/

      }, content, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** @description required in Vast 2
     * @param {string} content
     * @param {{version: string}} attributes
     * @returns {InLine_4} 
     */

  }, {
    key: "addAdSystem",
    value: function addAdSystem(content, attributes) {
      return this.attachAdSystem(content, attributes).and();
    }
    /** @description required in Vast 2
     * @param {string} content
     * @returns {AdTitle_6} 
     */

  }, {
    key: "attachAdTitle",
    value: function attachAdTitle(content) {
      var newElem = new AdTitle_6('AdTitle', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** @description required in Vast 2
     * @param {string} content
     * @returns {InLine_4} 
     */

  }, {
    key: "addAdTitle",
    value: function addAdTitle(content) {
      return this.attachAdTitle(content).and();
    }
    /** 
     * @param {string} content
     * @returns {Description_7} 
     */

  }, {
    key: "attachDescription",
    value: function attachDescription(content) {
      var newElem = new Description_7('Description', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {InLine_4} 
     */

  }, {
    key: "addDescription",
    value: function addDescription(content) {
      return this.attachDescription(content).and();
    }
    /** 
     * @param {string} content
     * @returns {Survey_8} 
     */

  }, {
    key: "attachSurvey",
    value: function attachSurvey(content) {
      var newElem = new Survey_8('Survey', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {InLine_4} 
     */

  }, {
    key: "addSurvey",
    value: function addSurvey(content) {
      return this.attachSurvey(content).and();
    }
    /** 
     * @param {string} content
     * @returns {Error_9} 
     */

  }, {
    key: "attachError",
    value: function attachError(content) {
      var newElem = new Error_9('Error', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {InLine_4} 
     */

  }, {
    key: "addError",
    value: function addError(content) {
      return this.attachError(content).and();
    }
    /** 
     * @param {string} content
     * @param {{id: string}} attributes
     * @returns {Impression_10} 
     */

  }, {
    key: "attachImpression",
    value: function attachImpression(content, attributes) {
      var newElem = new Impression_10('Impression', this, {
        "attrs": ["id"]
        /*: Infos*/

      }, content, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @param {{id: string}} attributes
     * @returns {InLine_4} 
     */

  }, {
    key: "addImpression",
    value: function addImpression(content, attributes) {
      return this.attachImpression(content, attributes).and();
    }
    /** @description required in Vast 2
     * @returns {Creatives_11} 
     */

  }, {
    key: "attachCreatives",
    value: function attachCreatives() {
      var newElem = new Creatives_11('Creatives', this, {}
      /*: Infos*/
      );
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @returns {Extensions_43} 
     */

  }, {
    key: "attachExtensions",
    value: function attachExtensions() {
      var newElem = new Extensions_43('Extensions', this, {}
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

  return InLine_4;
}(VastElement);

var AdSystem_46 =
/*#__PURE__*/
function (_VastElement42) {
  _inherits(AdSystem_46, _VastElement42);

  /**
   * @param {string} n
   * @param {Wrapper_45} p
   */
  function AdSystem_46(n, p) {
    var _ref42;

    var _this42;

    _classCallCheck(this, AdSystem_46);

    for (var _len42 = arguments.length, args = new Array(_len42 > 2 ? _len42 - 2 : 0), _key42 = 2; _key42 < _len42; _key42++) {
      args[_key42 - 2] = arguments[_key42];
    }

    _this42 = _possibleConstructorReturn(this, (_ref42 = AdSystem_46.__proto__ || Object.getPrototypeOf(AdSystem_46)).call.apply(_ref42, [this, n, p].concat(args)));
    _this42.parent = p;
    return _this42;
  }

  _createClass(AdSystem_46, [{
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

  return AdSystem_46;
}(VastElement);

var VASTAdTagURI_47 =
/*#__PURE__*/
function (_VastElement43) {
  _inherits(VASTAdTagURI_47, _VastElement43);

  /**
   * @param {string} n
   * @param {Wrapper_45} p
   */
  function VASTAdTagURI_47(n, p) {
    var _ref43;

    var _this43;

    _classCallCheck(this, VASTAdTagURI_47);

    for (var _len43 = arguments.length, args = new Array(_len43 > 2 ? _len43 - 2 : 0), _key43 = 2; _key43 < _len43; _key43++) {
      args[_key43 - 2] = arguments[_key43];
    }

    _this43 = _possibleConstructorReturn(this, (_ref43 = VASTAdTagURI_47.__proto__ || Object.getPrototypeOf(VASTAdTagURI_47)).call.apply(_ref43, [this, n, p].concat(args)));
    _this43.parent = p;
    return _this43;
  }

  _createClass(VASTAdTagURI_47, [{
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

  return VASTAdTagURI_47;
}(VastElement);

var Error_48 =
/*#__PURE__*/
function (_VastElement44) {
  _inherits(Error_48, _VastElement44);

  /**
   * @param {string} n
   * @param {Wrapper_45} p
   */
  function Error_48(n, p) {
    var _ref44;

    var _this44;

    _classCallCheck(this, Error_48);

    for (var _len44 = arguments.length, args = new Array(_len44 > 2 ? _len44 - 2 : 0), _key44 = 2; _key44 < _len44; _key44++) {
      args[_key44 - 2] = arguments[_key44];
    }

    _this44 = _possibleConstructorReturn(this, (_ref44 = Error_48.__proto__ || Object.getPrototypeOf(Error_48)).call.apply(_ref44, [this, n, p].concat(args)));
    _this44.parent = p;
    return _this44;
  }

  _createClass(Error_48, [{
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

  return Error_48;
}(VastElement);

var Impression_49 =
/*#__PURE__*/
function (_VastElement45) {
  _inherits(Impression_49, _VastElement45);

  /**
   * @param {string} n
   * @param {Wrapper_45} p
   */
  function Impression_49(n, p) {
    var _ref45;

    var _this45;

    _classCallCheck(this, Impression_49);

    for (var _len45 = arguments.length, args = new Array(_len45 > 2 ? _len45 - 2 : 0), _key45 = 2; _key45 < _len45; _key45++) {
      args[_key45 - 2] = arguments[_key45];
    }

    _this45 = _possibleConstructorReturn(this, (_ref45 = Impression_49.__proto__ || Object.getPrototypeOf(Impression_49)).call.apply(_ref45, [this, n, p].concat(args)));
    _this45.parent = p;
    return _this45;
  }

  _createClass(Impression_49, [{
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

  return Impression_49;
}(VastElement);

var Tracking_54 =
/*#__PURE__*/
function (_VastElement46) {
  _inherits(Tracking_54, _VastElement46);

  /**
   * @param {string} n
   * @param {TrackingEvents_53} p
   */
  function Tracking_54(n, p) {
    var _ref46;

    var _this46;

    _classCallCheck(this, Tracking_54);

    for (var _len46 = arguments.length, args = new Array(_len46 > 2 ? _len46 - 2 : 0), _key46 = 2; _key46 < _len46; _key46++) {
      args[_key46 - 2] = arguments[_key46];
    }

    _this46 = _possibleConstructorReturn(this, (_ref46 = Tracking_54.__proto__ || Object.getPrototypeOf(Tracking_54)).call.apply(_ref46, [this, n, p].concat(args)));
    _this46.parent = p;
    return _this46;
  }

  _createClass(Tracking_54, [{
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

  return Tracking_54;
}(VastElement);

var TrackingEvents_53 =
/*#__PURE__*/
function (_VastElement47) {
  _inherits(TrackingEvents_53, _VastElement47);

  /**
   * @param {string} n
   * @param {Linear_52} p
   */
  function TrackingEvents_53(n, p) {
    var _ref47;

    var _this47;

    _classCallCheck(this, TrackingEvents_53);

    for (var _len47 = arguments.length, args = new Array(_len47 > 2 ? _len47 - 2 : 0), _key47 = 2; _key47 < _len47; _key47++) {
      args[_key47 - 2] = arguments[_key47];
    }

    _this47 = _possibleConstructorReturn(this, (_ref47 = TrackingEvents_53.__proto__ || Object.getPrototypeOf(TrackingEvents_53)).call.apply(_ref47, [this, n, p].concat(args)));
    _this47.parent = p;
    return _this47;
  }
  /** 
   * @param {string} content
   * @param {{event:("creativeView"|"start"|"midpoint"|"firstQuartile"|"thirdQuartile"|"complete"|"mute"|"unmute"|"pause"|"rewind"|"resume"|"fullscreen"|"expand"|"collapse"|"acceptInvitation"|"close")}} attributes
   * @returns {Tracking_54} 
   */


  _createClass(TrackingEvents_53, [{
    key: "attachTracking",
    value: function attachTracking(content, attributes) {
      var newElem = new Tracking_54('Tracking', this, {
        "attrs": ["event"]
        /*: Infos*/

      }, content, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @param {{event:("creativeView"|"start"|"midpoint"|"firstQuartile"|"thirdQuartile"|"complete"|"mute"|"unmute"|"pause"|"rewind"|"resume"|"fullscreen"|"expand"|"collapse"|"acceptInvitation"|"close")}} attributes
     * @returns {TrackingEvents_53} 
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

  return TrackingEvents_53;
}(VastElement);

var ClickThrough_56 =
/*#__PURE__*/
function (_VastElement48) {
  _inherits(ClickThrough_56, _VastElement48);

  /**
   * @param {string} n
   * @param {VideoClicks_55} p
   */
  function ClickThrough_56(n, p) {
    var _ref48;

    var _this48;

    _classCallCheck(this, ClickThrough_56);

    for (var _len48 = arguments.length, args = new Array(_len48 > 2 ? _len48 - 2 : 0), _key48 = 2; _key48 < _len48; _key48++) {
      args[_key48 - 2] = arguments[_key48];
    }

    _this48 = _possibleConstructorReturn(this, (_ref48 = ClickThrough_56.__proto__ || Object.getPrototypeOf(ClickThrough_56)).call.apply(_ref48, [this, n, p].concat(args)));
    _this48.parent = p;
    return _this48;
  }

  _createClass(ClickThrough_56, [{
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

  return ClickThrough_56;
}(VastElement);

var ClickTracking_57 =
/*#__PURE__*/
function (_VastElement49) {
  _inherits(ClickTracking_57, _VastElement49);

  /**
   * @param {string} n
   * @param {VideoClicks_55} p
   */
  function ClickTracking_57(n, p) {
    var _ref49;

    var _this49;

    _classCallCheck(this, ClickTracking_57);

    for (var _len49 = arguments.length, args = new Array(_len49 > 2 ? _len49 - 2 : 0), _key49 = 2; _key49 < _len49; _key49++) {
      args[_key49 - 2] = arguments[_key49];
    }

    _this49 = _possibleConstructorReturn(this, (_ref49 = ClickTracking_57.__proto__ || Object.getPrototypeOf(ClickTracking_57)).call.apply(_ref49, [this, n, p].concat(args)));
    _this49.parent = p;
    return _this49;
  }

  _createClass(ClickTracking_57, [{
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

  return ClickTracking_57;
}(VastElement);

var CustomClick_58 =
/*#__PURE__*/
function (_VastElement50) {
  _inherits(CustomClick_58, _VastElement50);

  /**
   * @param {string} n
   * @param {VideoClicks_55} p
   */
  function CustomClick_58(n, p) {
    var _ref50;

    var _this50;

    _classCallCheck(this, CustomClick_58);

    for (var _len50 = arguments.length, args = new Array(_len50 > 2 ? _len50 - 2 : 0), _key50 = 2; _key50 < _len50; _key50++) {
      args[_key50 - 2] = arguments[_key50];
    }

    _this50 = _possibleConstructorReturn(this, (_ref50 = CustomClick_58.__proto__ || Object.getPrototypeOf(CustomClick_58)).call.apply(_ref50, [this, n, p].concat(args)));
    _this50.parent = p;
    return _this50;
  }

  _createClass(CustomClick_58, [{
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

  return CustomClick_58;
}(VastElement);

var VideoClicks_55 =
/*#__PURE__*/
function (_VastElement51) {
  _inherits(VideoClicks_55, _VastElement51);

  /**
   * @param {string} n
   * @param {Linear_52} p
   */
  function VideoClicks_55(n, p) {
    var _ref51;

    var _this51;

    _classCallCheck(this, VideoClicks_55);

    for (var _len51 = arguments.length, args = new Array(_len51 > 2 ? _len51 - 2 : 0), _key51 = 2; _key51 < _len51; _key51++) {
      args[_key51 - 2] = arguments[_key51];
    }

    _this51 = _possibleConstructorReturn(this, (_ref51 = VideoClicks_55.__proto__ || Object.getPrototypeOf(VideoClicks_55)).call.apply(_ref51, [this, n, p].concat(args)));
    _this51.parent = p;
    return _this51;
  }
  /** 
   * @param {string} content
   * @returns {ClickThrough_56} 
   */


  _createClass(VideoClicks_55, [{
    key: "attachClickThrough",
    value: function attachClickThrough(content) {
      var newElem = new ClickThrough_56('ClickThrough', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {VideoClicks_55} 
     */

  }, {
    key: "addClickThrough",
    value: function addClickThrough(content) {
      return this.attachClickThrough(content).and();
    }
    /** 
     * @param {string} content
     * @returns {ClickTracking_57} 
     */

  }, {
    key: "attachClickTracking",
    value: function attachClickTracking(content) {
      var newElem = new ClickTracking_57('ClickTracking', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {VideoClicks_55} 
     */

  }, {
    key: "addClickTracking",
    value: function addClickTracking(content) {
      return this.attachClickTracking(content).and();
    }
    /** 
     * @param {string} content
     * @param {{id: string}} attributes
     * @returns {CustomClick_58} 
     */

  }, {
    key: "attachCustomClick",
    value: function attachCustomClick(content, attributes) {
      var newElem = new CustomClick_58('CustomClick', this, {
        "attrs": ["id"]
        /*: Infos*/

      }, content, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @param {{id: string}} attributes
     * @returns {VideoClicks_55} 
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

  return VideoClicks_55;
}(VastElement);

var Linear_52 =
/*#__PURE__*/
function (_VastElement52) {
  _inherits(Linear_52, _VastElement52);

  /**
   * @param {string} n
   * @param {Creative_51} p
   */
  function Linear_52(n, p) {
    var _ref52;

    var _this52;

    _classCallCheck(this, Linear_52);

    for (var _len52 = arguments.length, args = new Array(_len52 > 2 ? _len52 - 2 : 0), _key52 = 2; _key52 < _len52; _key52++) {
      args[_key52 - 2] = arguments[_key52];
    }

    _this52 = _possibleConstructorReturn(this, (_ref52 = Linear_52.__proto__ || Object.getPrototypeOf(Linear_52)).call.apply(_ref52, [this, n, p].concat(args)));
    _this52.parent = p;
    return _this52;
  }
  /** 
   * @returns {TrackingEvents_53} 
   */


  _createClass(Linear_52, [{
    key: "attachTrackingEvents",
    value: function attachTrackingEvents() {
      var newElem = new TrackingEvents_53('TrackingEvents', this, {}
      /*: Infos*/
      );
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @returns {VideoClicks_55} 
     */

  }, {
    key: "attachVideoClicks",
    value: function attachVideoClicks() {
      var newElem = new VideoClicks_55('VideoClicks', this, {}
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

  return Linear_52;
}(VastElement);

var StaticResource_61 =
/*#__PURE__*/
function (_VastElement53) {
  _inherits(StaticResource_61, _VastElement53);

  /**
   * @param {string} n
   * @param {Companion_60} p
   */
  function StaticResource_61(n, p) {
    var _ref53;

    var _this53;

    _classCallCheck(this, StaticResource_61);

    for (var _len53 = arguments.length, args = new Array(_len53 > 2 ? _len53 - 2 : 0), _key53 = 2; _key53 < _len53; _key53++) {
      args[_key53 - 2] = arguments[_key53];
    }

    _this53 = _possibleConstructorReturn(this, (_ref53 = StaticResource_61.__proto__ || Object.getPrototypeOf(StaticResource_61)).call.apply(_ref53, [this, n, p].concat(args)));
    _this53.parent = p;
    return _this53;
  }

  _createClass(StaticResource_61, [{
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

  return StaticResource_61;
}(VastElement);

var IFrameResource_62 =
/*#__PURE__*/
function (_VastElement54) {
  _inherits(IFrameResource_62, _VastElement54);

  /**
   * @param {string} n
   * @param {Companion_60} p
   */
  function IFrameResource_62(n, p) {
    var _ref54;

    var _this54;

    _classCallCheck(this, IFrameResource_62);

    for (var _len54 = arguments.length, args = new Array(_len54 > 2 ? _len54 - 2 : 0), _key54 = 2; _key54 < _len54; _key54++) {
      args[_key54 - 2] = arguments[_key54];
    }

    _this54 = _possibleConstructorReturn(this, (_ref54 = IFrameResource_62.__proto__ || Object.getPrototypeOf(IFrameResource_62)).call.apply(_ref54, [this, n, p].concat(args)));
    _this54.parent = p;
    return _this54;
  }

  _createClass(IFrameResource_62, [{
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

  return IFrameResource_62;
}(VastElement);

var HTMLResource_63 =
/*#__PURE__*/
function (_VastElement55) {
  _inherits(HTMLResource_63, _VastElement55);

  /**
   * @param {string} n
   * @param {Companion_60} p
   */
  function HTMLResource_63(n, p) {
    var _ref55;

    var _this55;

    _classCallCheck(this, HTMLResource_63);

    for (var _len55 = arguments.length, args = new Array(_len55 > 2 ? _len55 - 2 : 0), _key55 = 2; _key55 < _len55; _key55++) {
      args[_key55 - 2] = arguments[_key55];
    }

    _this55 = _possibleConstructorReturn(this, (_ref55 = HTMLResource_63.__proto__ || Object.getPrototypeOf(HTMLResource_63)).call.apply(_ref55, [this, n, p].concat(args)));
    _this55.parent = p;
    return _this55;
  }

  _createClass(HTMLResource_63, [{
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

  return HTMLResource_63;
}(VastElement);

var Tracking_65 =
/*#__PURE__*/
function (_VastElement56) {
  _inherits(Tracking_65, _VastElement56);

  /**
   * @param {string} n
   * @param {TrackingEvents_64} p
   */
  function Tracking_65(n, p) {
    var _ref56;

    var _this56;

    _classCallCheck(this, Tracking_65);

    for (var _len56 = arguments.length, args = new Array(_len56 > 2 ? _len56 - 2 : 0), _key56 = 2; _key56 < _len56; _key56++) {
      args[_key56 - 2] = arguments[_key56];
    }

    _this56 = _possibleConstructorReturn(this, (_ref56 = Tracking_65.__proto__ || Object.getPrototypeOf(Tracking_65)).call.apply(_ref56, [this, n, p].concat(args)));
    _this56.parent = p;
    return _this56;
  }

  _createClass(Tracking_65, [{
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

  return Tracking_65;
}(VastElement);

var TrackingEvents_64 =
/*#__PURE__*/
function (_VastElement57) {
  _inherits(TrackingEvents_64, _VastElement57);

  /**
   * @param {string} n
   * @param {Companion_60} p
   */
  function TrackingEvents_64(n, p) {
    var _ref57;

    var _this57;

    _classCallCheck(this, TrackingEvents_64);

    for (var _len57 = arguments.length, args = new Array(_len57 > 2 ? _len57 - 2 : 0), _key57 = 2; _key57 < _len57; _key57++) {
      args[_key57 - 2] = arguments[_key57];
    }

    _this57 = _possibleConstructorReturn(this, (_ref57 = TrackingEvents_64.__proto__ || Object.getPrototypeOf(TrackingEvents_64)).call.apply(_ref57, [this, n, p].concat(args)));
    _this57.parent = p;
    return _this57;
  }
  /** 
   * @param {string} content
   * @param {{event:("creativeView")}} attributes
   * @returns {Tracking_65} 
   */


  _createClass(TrackingEvents_64, [{
    key: "attachTracking",
    value: function attachTracking(content, attributes) {
      var newElem = new Tracking_65('Tracking', this, {
        "attrs": ["event"]
        /*: Infos*/

      }, content, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @param {{event:("creativeView")}} attributes
     * @returns {TrackingEvents_64} 
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

  return TrackingEvents_64;
}(VastElement);

var CompanionClickThrough_66 =
/*#__PURE__*/
function (_VastElement58) {
  _inherits(CompanionClickThrough_66, _VastElement58);

  /**
   * @param {string} n
   * @param {Companion_60} p
   */
  function CompanionClickThrough_66(n, p) {
    var _ref58;

    var _this58;

    _classCallCheck(this, CompanionClickThrough_66);

    for (var _len58 = arguments.length, args = new Array(_len58 > 2 ? _len58 - 2 : 0), _key58 = 2; _key58 < _len58; _key58++) {
      args[_key58 - 2] = arguments[_key58];
    }

    _this58 = _possibleConstructorReturn(this, (_ref58 = CompanionClickThrough_66.__proto__ || Object.getPrototypeOf(CompanionClickThrough_66)).call.apply(_ref58, [this, n, p].concat(args)));
    _this58.parent = p;
    return _this58;
  }

  _createClass(CompanionClickThrough_66, [{
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

  return CompanionClickThrough_66;
}(VastElement);

var AltText_67 =
/*#__PURE__*/
function (_VastElement59) {
  _inherits(AltText_67, _VastElement59);

  /**
   * @param {string} n
   * @param {Companion_60} p
   */
  function AltText_67(n, p) {
    var _ref59;

    var _this59;

    _classCallCheck(this, AltText_67);

    for (var _len59 = arguments.length, args = new Array(_len59 > 2 ? _len59 - 2 : 0), _key59 = 2; _key59 < _len59; _key59++) {
      args[_key59 - 2] = arguments[_key59];
    }

    _this59 = _possibleConstructorReturn(this, (_ref59 = AltText_67.__proto__ || Object.getPrototypeOf(AltText_67)).call.apply(_ref59, [this, n, p].concat(args)));
    _this59.parent = p;
    return _this59;
  }

  _createClass(AltText_67, [{
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

  return AltText_67;
}(VastElement);

var AdParameters_68 =
/*#__PURE__*/
function (_VastElement60) {
  _inherits(AdParameters_68, _VastElement60);

  /**
   * @param {string} n
   * @param {Companion_60} p
   */
  function AdParameters_68(n, p) {
    var _ref60;

    var _this60;

    _classCallCheck(this, AdParameters_68);

    for (var _len60 = arguments.length, args = new Array(_len60 > 2 ? _len60 - 2 : 0), _key60 = 2; _key60 < _len60; _key60++) {
      args[_key60 - 2] = arguments[_key60];
    }

    _this60 = _possibleConstructorReturn(this, (_ref60 = AdParameters_68.__proto__ || Object.getPrototypeOf(AdParameters_68)).call.apply(_ref60, [this, n, p].concat(args)));
    _this60.parent = p;
    return _this60;
  }

  _createClass(AdParameters_68, [{
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

  return AdParameters_68;
}(VastElement);

var Companion_60 =
/*#__PURE__*/
function (_VastElement61) {
  _inherits(Companion_60, _VastElement61);

  /**
   * @param {string} n
   * @param {CompanionAds_59} p
   */
  function Companion_60(n, p) {
    var _ref61;

    var _this61;

    _classCallCheck(this, Companion_60);

    for (var _len61 = arguments.length, args = new Array(_len61 > 2 ? _len61 - 2 : 0), _key61 = 2; _key61 < _len61; _key61++) {
      args[_key61 - 2] = arguments[_key61];
    }

    _this61 = _possibleConstructorReturn(this, (_ref61 = Companion_60.__proto__ || Object.getPrototypeOf(Companion_60)).call.apply(_ref61, [this, n, p].concat(args)));
    _this61.parent = p;
    return _this61;
  }
  /** 
   * @param {string} content
   * @param {{creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash")}} attributes
   * @returns {StaticResource_61} 
   */


  _createClass(Companion_60, [{
    key: "attachStaticResource",
    value: function attachStaticResource(content, attributes) {
      var newElem = new StaticResource_61('StaticResource', this, {
        "attrs": ["creativeType"]
        /*: Infos*/

      }, content, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @param {{creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash")}} attributes
     * @returns {Companion_60} 
     */

  }, {
    key: "addStaticResource",
    value: function addStaticResource(content, attributes) {
      return this.attachStaticResource(content, attributes).and();
    }
    /** 
     * @param {string} content
     * @returns {IFrameResource_62} 
     */

  }, {
    key: "attachIFrameResource",
    value: function attachIFrameResource(content) {
      var newElem = new IFrameResource_62('IFrameResource', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {Companion_60} 
     */

  }, {
    key: "addIFrameResource",
    value: function addIFrameResource(content) {
      return this.attachIFrameResource(content).and();
    }
    /** 
     * @param {string} content
     * @returns {HTMLResource_63} 
     */

  }, {
    key: "attachHTMLResource",
    value: function attachHTMLResource(content) {
      var newElem = new HTMLResource_63('HTMLResource', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {Companion_60} 
     */

  }, {
    key: "addHTMLResource",
    value: function addHTMLResource(content) {
      return this.attachHTMLResource(content).and();
    }
    /** 
     * @returns {TrackingEvents_64} 
     */

  }, {
    key: "attachTrackingEvents",
    value: function attachTrackingEvents() {
      var newElem = new TrackingEvents_64('TrackingEvents', this, {}
      /*: Infos*/
      );
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {CompanionClickThrough_66} 
     */

  }, {
    key: "attachCompanionClickThrough",
    value: function attachCompanionClickThrough(content) {
      var newElem = new CompanionClickThrough_66('CompanionClickThrough', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {Companion_60} 
     */

  }, {
    key: "addCompanionClickThrough",
    value: function addCompanionClickThrough(content) {
      return this.attachCompanionClickThrough(content).and();
    }
    /** 
     * @param {string} content
     * @returns {AltText_67} 
     */

  }, {
    key: "attachAltText",
    value: function attachAltText(content) {
      var newElem = new AltText_67('AltText', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {Companion_60} 
     */

  }, {
    key: "addAltText",
    value: function addAltText(content) {
      return this.attachAltText(content).and();
    }
    /** 
     * @param {string} content
     * @returns {AdParameters_68} 
     */

  }, {
    key: "attachAdParameters",
    value: function attachAdParameters(content) {
      var newElem = new AdParameters_68('AdParameters', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {Companion_60} 
     */

  }, {
    key: "addAdParameters",
    value: function addAdParameters(content) {
      return this.attachAdParameters(content).and();
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

  return Companion_60;
}(VastElement);

var CompanionAds_59 =
/*#__PURE__*/
function (_VastElement62) {
  _inherits(CompanionAds_59, _VastElement62);

  /**
   * @param {string} n
   * @param {Creative_51} p
   */
  function CompanionAds_59(n, p) {
    var _ref62;

    var _this62;

    _classCallCheck(this, CompanionAds_59);

    for (var _len62 = arguments.length, args = new Array(_len62 > 2 ? _len62 - 2 : 0), _key62 = 2; _key62 < _len62; _key62++) {
      args[_key62 - 2] = arguments[_key62];
    }

    _this62 = _possibleConstructorReturn(this, (_ref62 = CompanionAds_59.__proto__ || Object.getPrototypeOf(CompanionAds_59)).call.apply(_ref62, [this, n, p].concat(args)));
    _this62.parent = p;
    return _this62;
  }
  /** 
   * @param {{id: string, width: string, height: string, expandedWidth: string, expandedHeight: string, apiFramework: string}} attributes
   * @returns {Companion_60} 
   */


  _createClass(CompanionAds_59, [{
    key: "attachCompanion",
    value: function attachCompanion(attributes) {
      var newElem = new Companion_60('Companion', this, {
        "attrs": ["id", "width", "height", "expandedWidth", "expandedHeight", "apiFramework"]
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

  return CompanionAds_59;
}(VastElement);

var StaticResource_71 =
/*#__PURE__*/
function (_VastElement63) {
  _inherits(StaticResource_71, _VastElement63);

  /**
   * @param {string} n
   * @param {NonLinear_70} p
   */
  function StaticResource_71(n, p) {
    var _ref63;

    var _this63;

    _classCallCheck(this, StaticResource_71);

    for (var _len63 = arguments.length, args = new Array(_len63 > 2 ? _len63 - 2 : 0), _key63 = 2; _key63 < _len63; _key63++) {
      args[_key63 - 2] = arguments[_key63];
    }

    _this63 = _possibleConstructorReturn(this, (_ref63 = StaticResource_71.__proto__ || Object.getPrototypeOf(StaticResource_71)).call.apply(_ref63, [this, n, p].concat(args)));
    _this63.parent = p;
    return _this63;
  }

  _createClass(StaticResource_71, [{
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

  return StaticResource_71;
}(VastElement);

var IFrameResource_72 =
/*#__PURE__*/
function (_VastElement64) {
  _inherits(IFrameResource_72, _VastElement64);

  /**
   * @param {string} n
   * @param {NonLinear_70} p
   */
  function IFrameResource_72(n, p) {
    var _ref64;

    var _this64;

    _classCallCheck(this, IFrameResource_72);

    for (var _len64 = arguments.length, args = new Array(_len64 > 2 ? _len64 - 2 : 0), _key64 = 2; _key64 < _len64; _key64++) {
      args[_key64 - 2] = arguments[_key64];
    }

    _this64 = _possibleConstructorReturn(this, (_ref64 = IFrameResource_72.__proto__ || Object.getPrototypeOf(IFrameResource_72)).call.apply(_ref64, [this, n, p].concat(args)));
    _this64.parent = p;
    return _this64;
  }

  _createClass(IFrameResource_72, [{
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

  return IFrameResource_72;
}(VastElement);

var HTMLResource_73 =
/*#__PURE__*/
function (_VastElement65) {
  _inherits(HTMLResource_73, _VastElement65);

  /**
   * @param {string} n
   * @param {NonLinear_70} p
   */
  function HTMLResource_73(n, p) {
    var _ref65;

    var _this65;

    _classCallCheck(this, HTMLResource_73);

    for (var _len65 = arguments.length, args = new Array(_len65 > 2 ? _len65 - 2 : 0), _key65 = 2; _key65 < _len65; _key65++) {
      args[_key65 - 2] = arguments[_key65];
    }

    _this65 = _possibleConstructorReturn(this, (_ref65 = HTMLResource_73.__proto__ || Object.getPrototypeOf(HTMLResource_73)).call.apply(_ref65, [this, n, p].concat(args)));
    _this65.parent = p;
    return _this65;
  }

  _createClass(HTMLResource_73, [{
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

  return HTMLResource_73;
}(VastElement);

var NonLinear_70 =
/*#__PURE__*/
function (_VastElement66) {
  _inherits(NonLinear_70, _VastElement66);

  /**
   * @param {string} n
   * @param {NonLinearAds_69} p
   */
  function NonLinear_70(n, p) {
    var _ref66;

    var _this66;

    _classCallCheck(this, NonLinear_70);

    for (var _len66 = arguments.length, args = new Array(_len66 > 2 ? _len66 - 2 : 0), _key66 = 2; _key66 < _len66; _key66++) {
      args[_key66 - 2] = arguments[_key66];
    }

    _this66 = _possibleConstructorReturn(this, (_ref66 = NonLinear_70.__proto__ || Object.getPrototypeOf(NonLinear_70)).call.apply(_ref66, [this, n, p].concat(args)));
    _this66.parent = p;
    return _this66;
  }
  /** 
   * @param {string} content
   * @param {{creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash")}} attributes
   * @returns {StaticResource_71} 
   */


  _createClass(NonLinear_70, [{
    key: "attachStaticResource",
    value: function attachStaticResource(content, attributes) {
      var newElem = new StaticResource_71('StaticResource', this, {
        "attrs": ["creativeType"]
        /*: Infos*/

      }, content, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @param {{creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash")}} attributes
     * @returns {NonLinear_70} 
     */

  }, {
    key: "addStaticResource",
    value: function addStaticResource(content, attributes) {
      return this.attachStaticResource(content, attributes).and();
    }
    /** 
     * @param {string} content
     * @returns {IFrameResource_72} 
     */

  }, {
    key: "attachIFrameResource",
    value: function attachIFrameResource(content) {
      var newElem = new IFrameResource_72('IFrameResource', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {NonLinear_70} 
     */

  }, {
    key: "addIFrameResource",
    value: function addIFrameResource(content) {
      return this.attachIFrameResource(content).and();
    }
    /** 
     * @param {string} content
     * @returns {HTMLResource_73} 
     */

  }, {
    key: "attachHTMLResource",
    value: function attachHTMLResource(content) {
      var newElem = new HTMLResource_73('HTMLResource', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {NonLinear_70} 
     */

  }, {
    key: "addHTMLResource",
    value: function addHTMLResource(content) {
      return this.attachHTMLResource(content).and();
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

  return NonLinear_70;
}(VastElement);

var Tracking_75 =
/*#__PURE__*/
function (_VastElement67) {
  _inherits(Tracking_75, _VastElement67);

  /**
   * @param {string} n
   * @param {TrackingEvents_74} p
   */
  function Tracking_75(n, p) {
    var _ref67;

    var _this67;

    _classCallCheck(this, Tracking_75);

    for (var _len67 = arguments.length, args = new Array(_len67 > 2 ? _len67 - 2 : 0), _key67 = 2; _key67 < _len67; _key67++) {
      args[_key67 - 2] = arguments[_key67];
    }

    _this67 = _possibleConstructorReturn(this, (_ref67 = Tracking_75.__proto__ || Object.getPrototypeOf(Tracking_75)).call.apply(_ref67, [this, n, p].concat(args)));
    _this67.parent = p;
    return _this67;
  }

  _createClass(Tracking_75, [{
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

  return Tracking_75;
}(VastElement);

var TrackingEvents_74 =
/*#__PURE__*/
function (_VastElement68) {
  _inherits(TrackingEvents_74, _VastElement68);

  /**
   * @param {string} n
   * @param {NonLinearAds_69} p
   */
  function TrackingEvents_74(n, p) {
    var _ref68;

    var _this68;

    _classCallCheck(this, TrackingEvents_74);

    for (var _len68 = arguments.length, args = new Array(_len68 > 2 ? _len68 - 2 : 0), _key68 = 2; _key68 < _len68; _key68++) {
      args[_key68 - 2] = arguments[_key68];
    }

    _this68 = _possibleConstructorReturn(this, (_ref68 = TrackingEvents_74.__proto__ || Object.getPrototypeOf(TrackingEvents_74)).call.apply(_ref68, [this, n, p].concat(args)));
    _this68.parent = p;
    return _this68;
  }
  /** 
   * @param {string} content
   * @param {{event:("creativeView"|"start"|"midpoint"|"firstQuartile"|"thirdQuartile"|"complete"|"mute"|"unmute"|"pause"|"rewind"|"resume"|"fullscreen"|"expand"|"collapse"|"acceptInvitation"|"close")}} attributes
   * @returns {Tracking_75} 
   */


  _createClass(TrackingEvents_74, [{
    key: "attachTracking",
    value: function attachTracking(content, attributes) {
      var newElem = new Tracking_75('Tracking', this, {
        "attrs": ["event"]
        /*: Infos*/

      }, content, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @param {{event:("creativeView"|"start"|"midpoint"|"firstQuartile"|"thirdQuartile"|"complete"|"mute"|"unmute"|"pause"|"rewind"|"resume"|"fullscreen"|"expand"|"collapse"|"acceptInvitation"|"close")}} attributes
     * @returns {TrackingEvents_74} 
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

  return TrackingEvents_74;
}(VastElement);

var NonLinearAds_69 =
/*#__PURE__*/
function (_VastElement69) {
  _inherits(NonLinearAds_69, _VastElement69);

  /**
   * @param {string} n
   * @param {Creative_51} p
   */
  function NonLinearAds_69(n, p) {
    var _ref69;

    var _this69;

    _classCallCheck(this, NonLinearAds_69);

    for (var _len69 = arguments.length, args = new Array(_len69 > 2 ? _len69 - 2 : 0), _key69 = 2; _key69 < _len69; _key69++) {
      args[_key69 - 2] = arguments[_key69];
    }

    _this69 = _possibleConstructorReturn(this, (_ref69 = NonLinearAds_69.__proto__ || Object.getPrototypeOf(NonLinearAds_69)).call.apply(_ref69, [this, n, p].concat(args)));
    _this69.parent = p;
    return _this69;
  }
  /** 
   * @param {{id: string, width: string, height: string, expandedWidth: string, expandedHeight: string, scalable: string, maintainAspectRatio: string, minSuggestedDuration: string, apiFramework: string}} attributes
   * @returns {NonLinear_70} 
   */


  _createClass(NonLinearAds_69, [{
    key: "attachNonLinear",
    value: function attachNonLinear(attributes) {
      var newElem = new NonLinear_70('NonLinear', this, {
        "attrs": ["id", "width", "height", "expandedWidth", "expandedHeight", "scalable", "maintainAspectRatio", "minSuggestedDuration", "apiFramework"]
        /*: Infos*/

      }, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @returns {TrackingEvents_74} 
     */

  }, {
    key: "attachTrackingEvents",
    value: function attachTrackingEvents() {
      var newElem = new TrackingEvents_74('TrackingEvents', this, {}
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

  return NonLinearAds_69;
}(VastElement);

var Creative_51 =
/*#__PURE__*/
function (_VastElement70) {
  _inherits(Creative_51, _VastElement70);

  /**
   * @param {string} n
   * @param {Creatives_50} p
   */
  function Creative_51(n, p) {
    var _ref70;

    var _this70;

    _classCallCheck(this, Creative_51);

    for (var _len70 = arguments.length, args = new Array(_len70 > 2 ? _len70 - 2 : 0), _key70 = 2; _key70 < _len70; _key70++) {
      args[_key70 - 2] = arguments[_key70];
    }

    _this70 = _possibleConstructorReturn(this, (_ref70 = Creative_51.__proto__ || Object.getPrototypeOf(Creative_51)).call.apply(_ref70, [this, n, p].concat(args)));
    _this70.parent = p;
    return _this70;
  }
  /** 
   * @returns {Linear_52} 
   */


  _createClass(Creative_51, [{
    key: "attachLinear",
    value: function attachLinear() {
      var newElem = new Linear_52('Linear', this, {}
      /*: Infos*/
      );
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @returns {CompanionAds_59} 
     */

  }, {
    key: "attachCompanionAds",
    value: function attachCompanionAds() {
      var newElem = new CompanionAds_59('CompanionAds', this, {}
      /*: Infos*/
      );
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @returns {NonLinearAds_69} 
     */

  }, {
    key: "attachNonLinearAds",
    value: function attachNonLinearAds() {
      var newElem = new NonLinearAds_69('NonLinearAds', this, {}
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

  return Creative_51;
}(VastElement);

var Creatives_50 =
/*#__PURE__*/
function (_VastElement71) {
  _inherits(Creatives_50, _VastElement71);

  /**
   * @param {string} n
   * @param {Wrapper_45} p
   */
  function Creatives_50(n, p) {
    var _ref71;

    var _this71;

    _classCallCheck(this, Creatives_50);

    for (var _len71 = arguments.length, args = new Array(_len71 > 2 ? _len71 - 2 : 0), _key71 = 2; _key71 < _len71; _key71++) {
      args[_key71 - 2] = arguments[_key71];
    }

    _this71 = _possibleConstructorReturn(this, (_ref71 = Creatives_50.__proto__ || Object.getPrototypeOf(Creatives_50)).call.apply(_ref71, [this, n, p].concat(args)));
    _this71.parent = p;
    return _this71;
  }
  /** 
   * @param {{id: string, sequence: string, adID: string}} attributes
   * @returns {Creative_51} 
   */


  _createClass(Creatives_50, [{
    key: "attachCreative",
    value: function attachCreative(attributes) {
      var newElem = new Creative_51('Creative', this, {
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

  return Creatives_50;
}(VastElement);

var Extension_77 =
/*#__PURE__*/
function (_VastElement72) {
  _inherits(Extension_77, _VastElement72);

  /**
   * @param {string} n
   * @param {Extensions_76} p
   */
  function Extension_77(n, p) {
    var _ref72;

    var _this72;

    _classCallCheck(this, Extension_77);

    for (var _len72 = arguments.length, args = new Array(_len72 > 2 ? _len72 - 2 : 0), _key72 = 2; _key72 < _len72; _key72++) {
      args[_key72 - 2] = arguments[_key72];
    }

    _this72 = _possibleConstructorReturn(this, (_ref72 = Extension_77.__proto__ || Object.getPrototypeOf(Extension_77)).call.apply(_ref72, [this, n, p].concat(args)));
    _this72.parent = p;
    return _this72;
  }

  _createClass(Extension_77, [{
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

  return Extension_77;
}(VastElement);

var Extensions_76 =
/*#__PURE__*/
function (_VastElement73) {
  _inherits(Extensions_76, _VastElement73);

  /**
   * @param {string} n
   * @param {Wrapper_45} p
   */
  function Extensions_76(n, p) {
    var _ref73;

    var _this73;

    _classCallCheck(this, Extensions_76);

    for (var _len73 = arguments.length, args = new Array(_len73 > 2 ? _len73 - 2 : 0), _key73 = 2; _key73 < _len73; _key73++) {
      args[_key73 - 2] = arguments[_key73];
    }

    _this73 = _possibleConstructorReturn(this, (_ref73 = Extensions_76.__proto__ || Object.getPrototypeOf(Extensions_76)).call.apply(_ref73, [this, n, p].concat(args)));
    _this73.parent = p;
    return _this73;
  }
  /** @description required in Vast 2
   * @param {string} content
   * @param {{type: string}} attributes
   * @returns {Extension_77} 
   */


  _createClass(Extensions_76, [{
    key: "attachExtension",
    value: function attachExtension(content, attributes) {
      var newElem = new Extension_77('Extension', this, {
        "attrs": ["type"]
        /*: Infos*/

      }, content, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** @description required in Vast 2
     * @param {string} content
     * @param {{type: string}} attributes
     * @returns {Extensions_76} 
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

  return Extensions_76;
}(VastElement);

var Wrapper_45 =
/*#__PURE__*/
function (_VastElement74) {
  _inherits(Wrapper_45, _VastElement74);

  /**
   * @param {string} n
   * @param {Ad_3} p
   */
  function Wrapper_45(n, p) {
    var _ref74;

    var _this74;

    _classCallCheck(this, Wrapper_45);

    for (var _len74 = arguments.length, args = new Array(_len74 > 2 ? _len74 - 2 : 0), _key74 = 2; _key74 < _len74; _key74++) {
      args[_key74 - 2] = arguments[_key74];
    }

    _this74 = _possibleConstructorReturn(this, (_ref74 = Wrapper_45.__proto__ || Object.getPrototypeOf(Wrapper_45)).call.apply(_ref74, [this, n, p].concat(args)));
    _this74.parent = p;
    return _this74;
  }
  /** @description required in Vast 2
   * @param {string} content
   * @param {{version: string}} attributes
   * @returns {AdSystem_46} 
   */


  _createClass(Wrapper_45, [{
    key: "attachAdSystem",
    value: function attachAdSystem(content, attributes) {
      var newElem = new AdSystem_46('AdSystem', this, {
        "attrs": ["version"]
        /*: Infos*/

      }, content, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** @description required in Vast 2
     * @param {string} content
     * @param {{version: string}} attributes
     * @returns {Wrapper_45} 
     */

  }, {
    key: "addAdSystem",
    value: function addAdSystem(content, attributes) {
      return this.attachAdSystem(content, attributes).and();
    }
    /** @description required in Vast 2
     * @param {string} content
     * @returns {VASTAdTagURI_47} 
     */

  }, {
    key: "attachVASTAdTagURI",
    value: function attachVASTAdTagURI(content) {
      var newElem = new VASTAdTagURI_47('VASTAdTagURI', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** @description required in Vast 2
     * @param {string} content
     * @returns {Wrapper_45} 
     */

  }, {
    key: "addVASTAdTagURI",
    value: function addVASTAdTagURI(content) {
      return this.attachVASTAdTagURI(content).and();
    }
    /** 
     * @param {string} content
     * @returns {Error_48} 
     */

  }, {
    key: "attachError",
    value: function attachError(content) {
      var newElem = new Error_48('Error', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {Wrapper_45} 
     */

  }, {
    key: "addError",
    value: function addError(content) {
      return this.attachError(content).and();
    }
    /** 
     * @param {string} content
     * @param {{id: string}} attributes
     * @returns {Impression_49} 
     */

  }, {
    key: "attachImpression",
    value: function attachImpression(content, attributes) {
      var newElem = new Impression_49('Impression', this, {
        "attrs": ["id"]
        /*: Infos*/

      }, content, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @param {{id: string}} attributes
     * @returns {Wrapper_45} 
     */

  }, {
    key: "addImpression",
    value: function addImpression(content, attributes) {
      return this.attachImpression(content, attributes).and();
    }
    /** @description required in Vast 2
     * @returns {Creatives_50} 
     */

  }, {
    key: "attachCreatives",
    value: function attachCreatives() {
      var newElem = new Creatives_50('Creatives', this, {}
      /*: Infos*/
      );
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @returns {Extensions_76} 
     */

  }, {
    key: "attachExtensions",
    value: function attachExtensions() {
      var newElem = new Extensions_76('Extensions', this, {}
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

  return Wrapper_45;
}(VastElement);

var Ad_3 =
/*#__PURE__*/
function (_VastElement75) {
  _inherits(Ad_3, _VastElement75);

  /**
   * @param {string} n
   * @param {VAST_2} p
   */
  function Ad_3(n, p) {
    var _ref75;

    var _this75;

    _classCallCheck(this, Ad_3);

    for (var _len75 = arguments.length, args = new Array(_len75 > 2 ? _len75 - 2 : 0), _key75 = 2; _key75 < _len75; _key75++) {
      args[_key75 - 2] = arguments[_key75];
    }

    _this75 = _possibleConstructorReturn(this, (_ref75 = Ad_3.__proto__ || Object.getPrototypeOf(Ad_3)).call.apply(_ref75, [this, n, p].concat(args)));
    _this75.parent = p;
    return _this75;
  }
  /** 
   * @returns {InLine_4} 
   */


  _createClass(Ad_3, [{
    key: "attachInLine",
    value: function attachInLine() {
      var newElem = new InLine_4('InLine', this, {}
      /*: Infos*/
      );
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @returns {Wrapper_45} 
     */

  }, {
    key: "attachWrapper",
    value: function attachWrapper() {
      var newElem = new Wrapper_45('Wrapper', this, {}
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

  return Ad_3;
}(VastElement);

var VAST_2 =
/*#__PURE__*/
function (_VastElement76) {
  _inherits(VAST_2, _VastElement76);

  /**
   * @param {string} n
   * @param {apiv2} p
   */
  function VAST_2(n, p) {
    var _ref76;

    var _this76;

    _classCallCheck(this, VAST_2);

    for (var _len76 = arguments.length, args = new Array(_len76 > 2 ? _len76 - 2 : 0), _key76 = 2; _key76 < _len76; _key76++) {
      args[_key76 - 2] = arguments[_key76];
    }

    _this76 = _possibleConstructorReturn(this, (_ref76 = VAST_2.__proto__ || Object.getPrototypeOf(VAST_2)).call.apply(_ref76, [this, n, p].concat(args)));
    _this76.parent = p;
    return _this76;
  }
  /** 
   * @param {{id: string}} attributes
   * @returns {Ad_3} 
   */


  _createClass(VAST_2, [{
    key: "attachAd",
    value: function attachAd(attributes) {
      var newElem = new Ad_3('Ad', this, {
        "attrs": ["id"]
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

  return VAST_2;
}(VastElement);

var apiv2 =
/*#__PURE__*/
function (_VastElement77) {
  _inherits(apiv2, _VastElement77);

  /**
   * @param {string} n
   * @param {apiv2} p
   */
  function apiv2(n, p) {
    var _ref77;

    var _this77;

    _classCallCheck(this, apiv2);

    for (var _len77 = arguments.length, args = new Array(_len77 > 2 ? _len77 - 2 : 0), _key77 = 2; _key77 < _len77; _key77++) {
      args[_key77 - 2] = arguments[_key77];
    }

    _this77 = _possibleConstructorReturn(this, (_ref77 = apiv2.__proto__ || Object.getPrototypeOf(apiv2)).call.apply(_ref77, [this, n, p].concat(args)));
    _this77.parent = p;
    return _this77;
  }
  /** 
   * @param {{version:("2.0")}} attributes
   * @returns {VAST_2} 
   */


  _createClass(apiv2, [{
    key: "attachVAST",
    value: function attachVAST(attributes) {
      var newElem = new VAST_2('VAST', this, {
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

  return apiv2;
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
                            "TrackingEvents": {
                              "follow": {
                                "Tracking": {
                                  "attrsRequired": {
                                    "event": ["creativeView", "start", "midpoint", "firstQuartile", "thirdQuartile", "complete", "mute", "unmute", "pause", "rewind", "resume", "fullscreen", "expand", "collapse", "acceptInvitation", "close"]
                                  }
                                }
                              }
                            },
                            "AdParameters": {},
                            "VideoClicks": {
                              "follow": {
                                "ClickThrough": {},
                                "ClickTracking": {},
                                "CustomClick": {}
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
                                "TrackingEvents": {
                                  "follow": {
                                    "Tracking": {
                                      "attrsRequired": {
                                        "event": ["creativeView"]
                                      }
                                    }
                                  }
                                },
                                "CompanionClickThrough": {},
                                "AltText": {},
                                "AdParameters": {}
                              },
                              "attrsRequired": {
                                "width": null,
                                "height": null
                              }
                            }
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
                              "attrsRequired": {
                                "width": null,
                                "height": null
                              }
                            },
                            "TrackingEvents": {
                              "follow": {
                                "Tracking": {
                                  "attrsRequired": {
                                    "event": ["creativeView", "start", "midpoint", "firstQuartile", "thirdQuartile", "complete", "mute", "unmute", "pause", "rewind", "resume", "fullscreen", "expand", "collapse", "acceptInvitation", "close"]
                                  }
                                }
                              }
                            },
                            "NonLinearClickThrough": {},
                            "AdParameters": {}
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
                "VASTAdTagURI": {},
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
                                    "event": ["creativeView", "start", "midpoint", "firstQuartile", "thirdQuartile", "complete", "mute", "unmute", "pause", "rewind", "resume", "fullscreen", "expand", "collapse", "acceptInvitation", "close"]
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
                                "TrackingEvents": {
                                  "follow": {
                                    "Tracking": {
                                      "attrsRequired": {
                                        "event": ["creativeView"]
                                      }
                                    }
                                  }
                                },
                                "CompanionClickThrough": {},
                                "AltText": {},
                                "AdParameters": {}
                              },
                              "attrsRequired": {
                                "width": null,
                                "height": null
                              }
                            }
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
                              "attrsRequired": {
                                "width": null,
                                "height": null
                              }
                            },
                            "TrackingEvents": {
                              "follow": {
                                "Tracking": {
                                  "attrsRequired": {
                                    "event": ["creativeView", "start", "midpoint", "firstQuartile", "thirdQuartile", "complete", "mute", "unmute", "pause", "rewind", "resume", "fullscreen", "expand", "collapse", "acceptInvitation", "close"]
                                  }
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
              "alo": {
                "Impression": {}
              },
              "follow": {
                "Error": {},
                "Extensions": {
                  "required": {
                    "Extension": {}
                  }
                }
              }
            }
          },
          "attrsRequired": {
            "id": null
          }
        }
      },
      "attrsRequired": {
        "version": ["2.0"]
      }
    }
  }
};
module.exports = {
  apiv2: apiv2,
  validator: validator
};