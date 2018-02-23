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

var Error_5 =
/*#__PURE__*/
function (_VastElement) {
  _inherits(Error_5, _VastElement);

  /**
   * @param {string} n
   * @param {VAST_4} p
   */
  function Error_5(n, p) {
    var _ref;

    var _this;

    _classCallCheck(this, Error_5);

    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_ref = Error_5.__proto__ || Object.getPrototypeOf(Error_5)).call.apply(_ref, [this, n, p].concat(args)));
    _this.parent = p;
    return _this;
  }

  _createClass(Error_5, [{
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

  return Error_5;
}(VastElement);

var AdSystem_8 =
/*#__PURE__*/
function (_VastElement2) {
  _inherits(AdSystem_8, _VastElement2);

  /**
   * @param {string} n
   * @param {InLine_7} p
   */
  function AdSystem_8(n, p) {
    var _ref2;

    var _this2;

    _classCallCheck(this, AdSystem_8);

    for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
      args[_key2 - 2] = arguments[_key2];
    }

    _this2 = _possibleConstructorReturn(this, (_ref2 = AdSystem_8.__proto__ || Object.getPrototypeOf(AdSystem_8)).call.apply(_ref2, [this, n, p].concat(args)));
    _this2.parent = p;
    return _this2;
  }

  _createClass(AdSystem_8, [{
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

  return AdSystem_8;
}(VastElement);

var AdTitle_9 =
/*#__PURE__*/
function (_VastElement3) {
  _inherits(AdTitle_9, _VastElement3);

  /**
   * @param {string} n
   * @param {InLine_7} p
   */
  function AdTitle_9(n, p) {
    var _ref3;

    var _this3;

    _classCallCheck(this, AdTitle_9);

    for (var _len3 = arguments.length, args = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
      args[_key3 - 2] = arguments[_key3];
    }

    _this3 = _possibleConstructorReturn(this, (_ref3 = AdTitle_9.__proto__ || Object.getPrototypeOf(AdTitle_9)).call.apply(_ref3, [this, n, p].concat(args)));
    _this3.parent = p;
    return _this3;
  }

  _createClass(AdTitle_9, [{
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

  return AdTitle_9;
}(VastElement);

var Impression_10 =
/*#__PURE__*/
function (_VastElement4) {
  _inherits(Impression_10, _VastElement4);

  /**
   * @param {string} n
   * @param {InLine_7} p
   */
  function Impression_10(n, p) {
    var _ref4;

    var _this4;

    _classCallCheck(this, Impression_10);

    for (var _len4 = arguments.length, args = new Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
      args[_key4 - 2] = arguments[_key4];
    }

    _this4 = _possibleConstructorReturn(this, (_ref4 = Impression_10.__proto__ || Object.getPrototypeOf(Impression_10)).call.apply(_ref4, [this, n, p].concat(args)));
    _this4.parent = p;
    return _this4;
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

var Category_11 =
/*#__PURE__*/
function (_VastElement5) {
  _inherits(Category_11, _VastElement5);

  /**
   * @param {string} n
   * @param {InLine_7} p
   */
  function Category_11(n, p) {
    var _ref5;

    var _this5;

    _classCallCheck(this, Category_11);

    for (var _len5 = arguments.length, args = new Array(_len5 > 2 ? _len5 - 2 : 0), _key5 = 2; _key5 < _len5; _key5++) {
      args[_key5 - 2] = arguments[_key5];
    }

    _this5 = _possibleConstructorReturn(this, (_ref5 = Category_11.__proto__ || Object.getPrototypeOf(Category_11)).call.apply(_ref5, [this, n, p].concat(args)));
    _this5.parent = p;
    return _this5;
  }

  _createClass(Category_11, [{
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

  return Category_11;
}(VastElement);

var Description_12 =
/*#__PURE__*/
function (_VastElement6) {
  _inherits(Description_12, _VastElement6);

  /**
   * @param {string} n
   * @param {InLine_7} p
   */
  function Description_12(n, p) {
    var _ref6;

    var _this6;

    _classCallCheck(this, Description_12);

    for (var _len6 = arguments.length, args = new Array(_len6 > 2 ? _len6 - 2 : 0), _key6 = 2; _key6 < _len6; _key6++) {
      args[_key6 - 2] = arguments[_key6];
    }

    _this6 = _possibleConstructorReturn(this, (_ref6 = Description_12.__proto__ || Object.getPrototypeOf(Description_12)).call.apply(_ref6, [this, n, p].concat(args)));
    _this6.parent = p;
    return _this6;
  }

  _createClass(Description_12, [{
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

  return Description_12;
}(VastElement);

var Advertiser_13 =
/*#__PURE__*/
function (_VastElement7) {
  _inherits(Advertiser_13, _VastElement7);

  /**
   * @param {string} n
   * @param {InLine_7} p
   */
  function Advertiser_13(n, p) {
    var _ref7;

    var _this7;

    _classCallCheck(this, Advertiser_13);

    for (var _len7 = arguments.length, args = new Array(_len7 > 2 ? _len7 - 2 : 0), _key7 = 2; _key7 < _len7; _key7++) {
      args[_key7 - 2] = arguments[_key7];
    }

    _this7 = _possibleConstructorReturn(this, (_ref7 = Advertiser_13.__proto__ || Object.getPrototypeOf(Advertiser_13)).call.apply(_ref7, [this, n, p].concat(args)));
    _this7.parent = p;
    return _this7;
  }

  _createClass(Advertiser_13, [{
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

  return Advertiser_13;
}(VastElement);

var Pricing_14 =
/*#__PURE__*/
function (_VastElement8) {
  _inherits(Pricing_14, _VastElement8);

  /**
   * @param {string} n
   * @param {InLine_7} p
   */
  function Pricing_14(n, p) {
    var _ref8;

    var _this8;

    _classCallCheck(this, Pricing_14);

    for (var _len8 = arguments.length, args = new Array(_len8 > 2 ? _len8 - 2 : 0), _key8 = 2; _key8 < _len8; _key8++) {
      args[_key8 - 2] = arguments[_key8];
    }

    _this8 = _possibleConstructorReturn(this, (_ref8 = Pricing_14.__proto__ || Object.getPrototypeOf(Pricing_14)).call.apply(_ref8, [this, n, p].concat(args)));
    _this8.parent = p;
    return _this8;
  }

  _createClass(Pricing_14, [{
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

  return Pricing_14;
}(VastElement);

var Survey_15 =
/*#__PURE__*/
function (_VastElement9) {
  _inherits(Survey_15, _VastElement9);

  /**
   * @param {string} n
   * @param {InLine_7} p
   */
  function Survey_15(n, p) {
    var _ref9;

    var _this9;

    _classCallCheck(this, Survey_15);

    for (var _len9 = arguments.length, args = new Array(_len9 > 2 ? _len9 - 2 : 0), _key9 = 2; _key9 < _len9; _key9++) {
      args[_key9 - 2] = arguments[_key9];
    }

    _this9 = _possibleConstructorReturn(this, (_ref9 = Survey_15.__proto__ || Object.getPrototypeOf(Survey_15)).call.apply(_ref9, [this, n, p].concat(args)));
    _this9.parent = p;
    return _this9;
  }

  _createClass(Survey_15, [{
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

  return Survey_15;
}(VastElement);

var Error_16 =
/*#__PURE__*/
function (_VastElement10) {
  _inherits(Error_16, _VastElement10);

  /**
   * @param {string} n
   * @param {InLine_7} p
   */
  function Error_16(n, p) {
    var _ref10;

    var _this10;

    _classCallCheck(this, Error_16);

    for (var _len10 = arguments.length, args = new Array(_len10 > 2 ? _len10 - 2 : 0), _key10 = 2; _key10 < _len10; _key10++) {
      args[_key10 - 2] = arguments[_key10];
    }

    _this10 = _possibleConstructorReturn(this, (_ref10 = Error_16.__proto__ || Object.getPrototypeOf(Error_16)).call.apply(_ref10, [this, n, p].concat(args)));
    _this10.parent = p;
    return _this10;
  }

  _createClass(Error_16, [{
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

  return Error_16;
}(VastElement);

var Viewable_18 =
/*#__PURE__*/
function (_VastElement11) {
  _inherits(Viewable_18, _VastElement11);

  /**
   * @param {string} n
   * @param {ViewableImpression_17} p
   */
  function Viewable_18(n, p) {
    var _ref11;

    var _this11;

    _classCallCheck(this, Viewable_18);

    for (var _len11 = arguments.length, args = new Array(_len11 > 2 ? _len11 - 2 : 0), _key11 = 2; _key11 < _len11; _key11++) {
      args[_key11 - 2] = arguments[_key11];
    }

    _this11 = _possibleConstructorReturn(this, (_ref11 = Viewable_18.__proto__ || Object.getPrototypeOf(Viewable_18)).call.apply(_ref11, [this, n, p].concat(args)));
    _this11.parent = p;
    return _this11;
  }

  _createClass(Viewable_18, [{
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

  return Viewable_18;
}(VastElement);

var NotViewable_19 =
/*#__PURE__*/
function (_VastElement12) {
  _inherits(NotViewable_19, _VastElement12);

  /**
   * @param {string} n
   * @param {ViewableImpression_17} p
   */
  function NotViewable_19(n, p) {
    var _ref12;

    var _this12;

    _classCallCheck(this, NotViewable_19);

    for (var _len12 = arguments.length, args = new Array(_len12 > 2 ? _len12 - 2 : 0), _key12 = 2; _key12 < _len12; _key12++) {
      args[_key12 - 2] = arguments[_key12];
    }

    _this12 = _possibleConstructorReturn(this, (_ref12 = NotViewable_19.__proto__ || Object.getPrototypeOf(NotViewable_19)).call.apply(_ref12, [this, n, p].concat(args)));
    _this12.parent = p;
    return _this12;
  }

  _createClass(NotViewable_19, [{
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

  return NotViewable_19;
}(VastElement);

var ViewUndetermined_20 =
/*#__PURE__*/
function (_VastElement13) {
  _inherits(ViewUndetermined_20, _VastElement13);

  /**
   * @param {string} n
   * @param {ViewableImpression_17} p
   */
  function ViewUndetermined_20(n, p) {
    var _ref13;

    var _this13;

    _classCallCheck(this, ViewUndetermined_20);

    for (var _len13 = arguments.length, args = new Array(_len13 > 2 ? _len13 - 2 : 0), _key13 = 2; _key13 < _len13; _key13++) {
      args[_key13 - 2] = arguments[_key13];
    }

    _this13 = _possibleConstructorReturn(this, (_ref13 = ViewUndetermined_20.__proto__ || Object.getPrototypeOf(ViewUndetermined_20)).call.apply(_ref13, [this, n, p].concat(args)));
    _this13.parent = p;
    return _this13;
  }

  _createClass(ViewUndetermined_20, [{
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

  return ViewUndetermined_20;
}(VastElement);

var ViewableImpression_17 =
/*#__PURE__*/
function (_VastElement14) {
  _inherits(ViewableImpression_17, _VastElement14);

  /**
   * @param {string} n
   * @param {InLine_7} p
   */
  function ViewableImpression_17(n, p) {
    var _ref14;

    var _this14;

    _classCallCheck(this, ViewableImpression_17);

    for (var _len14 = arguments.length, args = new Array(_len14 > 2 ? _len14 - 2 : 0), _key14 = 2; _key14 < _len14; _key14++) {
      args[_key14 - 2] = arguments[_key14];
    }

    _this14 = _possibleConstructorReturn(this, (_ref14 = ViewableImpression_17.__proto__ || Object.getPrototypeOf(ViewableImpression_17)).call.apply(_ref14, [this, n, p].concat(args)));
    _this14.parent = p;
    return _this14;
  }
  /** 
   * @param {string} content
   * @returns {Viewable_18} 
   */


  _createClass(ViewableImpression_17, [{
    key: "attachViewable",
    value: function attachViewable(content) {
      var newElem = new Viewable_18('Viewable', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {ViewableImpression_17} 
     */

  }, {
    key: "addViewable",
    value: function addViewable(content) {
      return this.attachViewable(content).and();
    }
    /** 
     * @param {string} content
     * @returns {NotViewable_19} 
     */

  }, {
    key: "attachNotViewable",
    value: function attachNotViewable(content) {
      var newElem = new NotViewable_19('NotViewable', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {ViewableImpression_17} 
     */

  }, {
    key: "addNotViewable",
    value: function addNotViewable(content) {
      return this.attachNotViewable(content).and();
    }
    /** 
     * @param {string} content
     * @returns {ViewUndetermined_20} 
     */

  }, {
    key: "attachViewUndetermined",
    value: function attachViewUndetermined(content) {
      var newElem = new ViewUndetermined_20('ViewUndetermined', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {ViewableImpression_17} 
     */

  }, {
    key: "addViewUndetermined",
    value: function addViewUndetermined(content) {
      return this.attachViewUndetermined(content).and();
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

  return ViewableImpression_17;
}(VastElement);

var JavaScriptResource_23 =
/*#__PURE__*/
function (_VastElement15) {
  _inherits(JavaScriptResource_23, _VastElement15);

  /**
   * @param {string} n
   * @param {Verification_22} p
   */
  function JavaScriptResource_23(n, p) {
    var _ref15;

    var _this15;

    _classCallCheck(this, JavaScriptResource_23);

    for (var _len15 = arguments.length, args = new Array(_len15 > 2 ? _len15 - 2 : 0), _key15 = 2; _key15 < _len15; _key15++) {
      args[_key15 - 2] = arguments[_key15];
    }

    _this15 = _possibleConstructorReturn(this, (_ref15 = JavaScriptResource_23.__proto__ || Object.getPrototypeOf(JavaScriptResource_23)).call.apply(_ref15, [this, n, p].concat(args)));
    _this15.parent = p;
    return _this15;
  }

  _createClass(JavaScriptResource_23, [{
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

  return JavaScriptResource_23;
}(VastElement);

var FlashResource_24 =
/*#__PURE__*/
function (_VastElement16) {
  _inherits(FlashResource_24, _VastElement16);

  /**
   * @param {string} n
   * @param {Verification_22} p
   */
  function FlashResource_24(n, p) {
    var _ref16;

    var _this16;

    _classCallCheck(this, FlashResource_24);

    for (var _len16 = arguments.length, args = new Array(_len16 > 2 ? _len16 - 2 : 0), _key16 = 2; _key16 < _len16; _key16++) {
      args[_key16 - 2] = arguments[_key16];
    }

    _this16 = _possibleConstructorReturn(this, (_ref16 = FlashResource_24.__proto__ || Object.getPrototypeOf(FlashResource_24)).call.apply(_ref16, [this, n, p].concat(args)));
    _this16.parent = p;
    return _this16;
  }

  _createClass(FlashResource_24, [{
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

  return FlashResource_24;
}(VastElement);

var ViewableImpression_25 =
/*#__PURE__*/
function (_VastElement17) {
  _inherits(ViewableImpression_25, _VastElement17);

  /**
   * @param {string} n
   * @param {Verification_22} p
   */
  function ViewableImpression_25(n, p) {
    var _ref17;

    var _this17;

    _classCallCheck(this, ViewableImpression_25);

    for (var _len17 = arguments.length, args = new Array(_len17 > 2 ? _len17 - 2 : 0), _key17 = 2; _key17 < _len17; _key17++) {
      args[_key17 - 2] = arguments[_key17];
    }

    _this17 = _possibleConstructorReturn(this, (_ref17 = ViewableImpression_25.__proto__ || Object.getPrototypeOf(ViewableImpression_25)).call.apply(_ref17, [this, n, p].concat(args)));
    _this17.parent = p;
    return _this17;
  }

  _createClass(ViewableImpression_25, [{
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

  return ViewableImpression_25;
}(VastElement);

var Verification_22 =
/*#__PURE__*/
function (_VastElement18) {
  _inherits(Verification_22, _VastElement18);

  /**
   * @param {string} n
   * @param {AdVerifications_21} p
   */
  function Verification_22(n, p) {
    var _ref18;

    var _this18;

    _classCallCheck(this, Verification_22);

    for (var _len18 = arguments.length, args = new Array(_len18 > 2 ? _len18 - 2 : 0), _key18 = 2; _key18 < _len18; _key18++) {
      args[_key18 - 2] = arguments[_key18];
    }

    _this18 = _possibleConstructorReturn(this, (_ref18 = Verification_22.__proto__ || Object.getPrototypeOf(Verification_22)).call.apply(_ref18, [this, n, p].concat(args)));
    _this18.parent = p;
    return _this18;
  }
  /** 
   * @param {string} content
   * @param {{apiFramework: string}} attributes
   * @returns {JavaScriptResource_23} 
   */


  _createClass(Verification_22, [{
    key: "attachJavaScriptResource",
    value: function attachJavaScriptResource(content, attributes) {
      var newElem = new JavaScriptResource_23('JavaScriptResource', this, {
        "attrs": ["apiFramework"]
        /*: Infos*/

      }, content, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @param {{apiFramework: string}} attributes
     * @returns {Verification_22} 
     */

  }, {
    key: "addJavaScriptResource",
    value: function addJavaScriptResource(content, attributes) {
      return this.attachJavaScriptResource(content, attributes).and();
    }
    /** 
     * @param {string} content
     * @param {{apiFramework: string}} attributes
     * @returns {FlashResource_24} 
     */

  }, {
    key: "attachFlashResource",
    value: function attachFlashResource(content, attributes) {
      var newElem = new FlashResource_24('FlashResource', this, {
        "attrs": ["apiFramework"]
        /*: Infos*/

      }, content, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @param {{apiFramework: string}} attributes
     * @returns {Verification_22} 
     */

  }, {
    key: "addFlashResource",
    value: function addFlashResource(content, attributes) {
      return this.attachFlashResource(content, attributes).and();
    }
    /** 
     * @param {string} content
     * @param {{id: string}} attributes
     * @returns {ViewableImpression_25} 
     */

  }, {
    key: "attachViewableImpression",
    value: function attachViewableImpression(content, attributes) {
      var newElem = new ViewableImpression_25('ViewableImpression', this, {
        "attrs": ["id"]
        /*: Infos*/

      }, content, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @param {{id: string}} attributes
     * @returns {Verification_22} 
     */

  }, {
    key: "addViewableImpression",
    value: function addViewableImpression(content, attributes) {
      return this.attachViewableImpression(content, attributes).and();
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

  return Verification_22;
}(VastElement);

var AdVerifications_21 =
/*#__PURE__*/
function (_VastElement19) {
  _inherits(AdVerifications_21, _VastElement19);

  /**
   * @param {string} n
   * @param {InLine_7} p
   */
  function AdVerifications_21(n, p) {
    var _ref19;

    var _this19;

    _classCallCheck(this, AdVerifications_21);

    for (var _len19 = arguments.length, args = new Array(_len19 > 2 ? _len19 - 2 : 0), _key19 = 2; _key19 < _len19; _key19++) {
      args[_key19 - 2] = arguments[_key19];
    }

    _this19 = _possibleConstructorReturn(this, (_ref19 = AdVerifications_21.__proto__ || Object.getPrototypeOf(AdVerifications_21)).call.apply(_ref19, [this, n, p].concat(args)));
    _this19.parent = p;
    return _this19;
  }
  /** 
   * @param {{vendor: string}} attributes
   * @returns {Verification_22} 
   */


  _createClass(AdVerifications_21, [{
    key: "attachVerification",
    value: function attachVerification(attributes) {
      var newElem = new Verification_22('Verification', this, {
        "attrs": ["vendor"]
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

  return AdVerifications_21;
}(VastElement);

var Extension_27 =
/*#__PURE__*/
function (_VastElement20) {
  _inherits(Extension_27, _VastElement20);

  /**
   * @param {string} n
   * @param {Extensions_26} p
   */
  function Extension_27(n, p) {
    var _ref20;

    var _this20;

    _classCallCheck(this, Extension_27);

    for (var _len20 = arguments.length, args = new Array(_len20 > 2 ? _len20 - 2 : 0), _key20 = 2; _key20 < _len20; _key20++) {
      args[_key20 - 2] = arguments[_key20];
    }

    _this20 = _possibleConstructorReturn(this, (_ref20 = Extension_27.__proto__ || Object.getPrototypeOf(Extension_27)).call.apply(_ref20, [this, n, p].concat(args)));
    _this20.parent = p;
    return _this20;
  }

  _createClass(Extension_27, [{
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

  return Extension_27;
}(VastElement);

var Extensions_26 =
/*#__PURE__*/
function (_VastElement21) {
  _inherits(Extensions_26, _VastElement21);

  /**
   * @param {string} n
   * @param {InLine_7} p
   */
  function Extensions_26(n, p) {
    var _ref21;

    var _this21;

    _classCallCheck(this, Extensions_26);

    for (var _len21 = arguments.length, args = new Array(_len21 > 2 ? _len21 - 2 : 0), _key21 = 2; _key21 < _len21; _key21++) {
      args[_key21 - 2] = arguments[_key21];
    }

    _this21 = _possibleConstructorReturn(this, (_ref21 = Extensions_26.__proto__ || Object.getPrototypeOf(Extensions_26)).call.apply(_ref21, [this, n, p].concat(args)));
    _this21.parent = p;
    return _this21;
  }
  /** @description required in Vast 4
   * @param {string} content
   * @param {{type: string}} attributes
   * @returns {Extension_27} 
   */


  _createClass(Extensions_26, [{
    key: "attachExtension",
    value: function attachExtension(content, attributes) {
      var newElem = new Extension_27('Extension', this, {
        "attrs": ["type"]
        /*: Infos*/

      }, content, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** @description required in Vast 4
     * @param {string} content
     * @param {{type: string}} attributes
     * @returns {Extensions_26} 
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

  return Extensions_26;
}(VastElement);

var UniversalAdId_30 =
/*#__PURE__*/
function (_VastElement22) {
  _inherits(UniversalAdId_30, _VastElement22);

  /**
   * @param {string} n
   * @param {Creative_29} p
   */
  function UniversalAdId_30(n, p) {
    var _ref22;

    var _this22;

    _classCallCheck(this, UniversalAdId_30);

    for (var _len22 = arguments.length, args = new Array(_len22 > 2 ? _len22 - 2 : 0), _key22 = 2; _key22 < _len22; _key22++) {
      args[_key22 - 2] = arguments[_key22];
    }

    _this22 = _possibleConstructorReturn(this, (_ref22 = UniversalAdId_30.__proto__ || Object.getPrototypeOf(UniversalAdId_30)).call.apply(_ref22, [this, n, p].concat(args)));
    _this22.parent = p;
    return _this22;
  }

  _createClass(UniversalAdId_30, [{
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

  return UniversalAdId_30;
}(VastElement);

var CreativeExtension_32 =
/*#__PURE__*/
function (_VastElement23) {
  _inherits(CreativeExtension_32, _VastElement23);

  /**
   * @param {string} n
   * @param {CreativeExtensions_31} p
   */
  function CreativeExtension_32(n, p) {
    var _ref23;

    var _this23;

    _classCallCheck(this, CreativeExtension_32);

    for (var _len23 = arguments.length, args = new Array(_len23 > 2 ? _len23 - 2 : 0), _key23 = 2; _key23 < _len23; _key23++) {
      args[_key23 - 2] = arguments[_key23];
    }

    _this23 = _possibleConstructorReturn(this, (_ref23 = CreativeExtension_32.__proto__ || Object.getPrototypeOf(CreativeExtension_32)).call.apply(_ref23, [this, n, p].concat(args)));
    _this23.parent = p;
    return _this23;
  }

  _createClass(CreativeExtension_32, [{
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

  return CreativeExtension_32;
}(VastElement);

var CreativeExtensions_31 =
/*#__PURE__*/
function (_VastElement24) {
  _inherits(CreativeExtensions_31, _VastElement24);

  /**
   * @param {string} n
   * @param {Creative_29} p
   */
  function CreativeExtensions_31(n, p) {
    var _ref24;

    var _this24;

    _classCallCheck(this, CreativeExtensions_31);

    for (var _len24 = arguments.length, args = new Array(_len24 > 2 ? _len24 - 2 : 0), _key24 = 2; _key24 < _len24; _key24++) {
      args[_key24 - 2] = arguments[_key24];
    }

    _this24 = _possibleConstructorReturn(this, (_ref24 = CreativeExtensions_31.__proto__ || Object.getPrototypeOf(CreativeExtensions_31)).call.apply(_ref24, [this, n, p].concat(args)));
    _this24.parent = p;
    return _this24;
  }
  /** 
   * @param {string} content
   * @param {{type: string}} attributes
   * @returns {CreativeExtension_32} 
   */


  _createClass(CreativeExtensions_31, [{
    key: "attachCreativeExtension",
    value: function attachCreativeExtension(content, attributes) {
      var newElem = new CreativeExtension_32('CreativeExtension', this, {
        "attrs": ["type"]
        /*: Infos*/

      }, content, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @param {{type: string}} attributes
     * @returns {CreativeExtensions_31} 
     */

  }, {
    key: "addCreativeExtension",
    value: function addCreativeExtension(content, attributes) {
      return this.attachCreativeExtension(content, attributes).and();
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

  return CreativeExtensions_31;
}(VastElement);

var Duration_34 =
/*#__PURE__*/
function (_VastElement25) {
  _inherits(Duration_34, _VastElement25);

  /**
   * @param {string} n
   * @param {Linear_33} p
   */
  function Duration_34(n, p) {
    var _ref25;

    var _this25;

    _classCallCheck(this, Duration_34);

    for (var _len25 = arguments.length, args = new Array(_len25 > 2 ? _len25 - 2 : 0), _key25 = 2; _key25 < _len25; _key25++) {
      args[_key25 - 2] = arguments[_key25];
    }

    _this25 = _possibleConstructorReturn(this, (_ref25 = Duration_34.__proto__ || Object.getPrototypeOf(Duration_34)).call.apply(_ref25, [this, n, p].concat(args)));
    _this25.parent = p;
    return _this25;
  }

  _createClass(Duration_34, [{
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

  return Duration_34;
}(VastElement);

var AdParameters_35 =
/*#__PURE__*/
function (_VastElement26) {
  _inherits(AdParameters_35, _VastElement26);

  /**
   * @param {string} n
   * @param {Linear_33} p
   */
  function AdParameters_35(n, p) {
    var _ref26;

    var _this26;

    _classCallCheck(this, AdParameters_35);

    for (var _len26 = arguments.length, args = new Array(_len26 > 2 ? _len26 - 2 : 0), _key26 = 2; _key26 < _len26; _key26++) {
      args[_key26 - 2] = arguments[_key26];
    }

    _this26 = _possibleConstructorReturn(this, (_ref26 = AdParameters_35.__proto__ || Object.getPrototypeOf(AdParameters_35)).call.apply(_ref26, [this, n, p].concat(args)));
    _this26.parent = p;
    return _this26;
  }

  _createClass(AdParameters_35, [{
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

  return AdParameters_35;
}(VastElement);

var Mezzanine_37 =
/*#__PURE__*/
function (_VastElement27) {
  _inherits(Mezzanine_37, _VastElement27);

  /**
   * @param {string} n
   * @param {MediaFiles_36} p
   */
  function Mezzanine_37(n, p) {
    var _ref27;

    var _this27;

    _classCallCheck(this, Mezzanine_37);

    for (var _len27 = arguments.length, args = new Array(_len27 > 2 ? _len27 - 2 : 0), _key27 = 2; _key27 < _len27; _key27++) {
      args[_key27 - 2] = arguments[_key27];
    }

    _this27 = _possibleConstructorReturn(this, (_ref27 = Mezzanine_37.__proto__ || Object.getPrototypeOf(Mezzanine_37)).call.apply(_ref27, [this, n, p].concat(args)));
    _this27.parent = p;
    return _this27;
  }

  _createClass(Mezzanine_37, [{
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

  return Mezzanine_37;
}(VastElement);

var MediaFile_38 =
/*#__PURE__*/
function (_VastElement28) {
  _inherits(MediaFile_38, _VastElement28);

  /**
   * @param {string} n
   * @param {MediaFiles_36} p
   */
  function MediaFile_38(n, p) {
    var _ref28;

    var _this28;

    _classCallCheck(this, MediaFile_38);

    for (var _len28 = arguments.length, args = new Array(_len28 > 2 ? _len28 - 2 : 0), _key28 = 2; _key28 < _len28; _key28++) {
      args[_key28 - 2] = arguments[_key28];
    }

    _this28 = _possibleConstructorReturn(this, (_ref28 = MediaFile_38.__proto__ || Object.getPrototypeOf(MediaFile_38)).call.apply(_ref28, [this, n, p].concat(args)));
    _this28.parent = p;
    return _this28;
  }

  _createClass(MediaFile_38, [{
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

  return MediaFile_38;
}(VastElement);

var InteractiveCreativeFile_39 =
/*#__PURE__*/
function (_VastElement29) {
  _inherits(InteractiveCreativeFile_39, _VastElement29);

  /**
   * @param {string} n
   * @param {MediaFiles_36} p
   */
  function InteractiveCreativeFile_39(n, p) {
    var _ref29;

    var _this29;

    _classCallCheck(this, InteractiveCreativeFile_39);

    for (var _len29 = arguments.length, args = new Array(_len29 > 2 ? _len29 - 2 : 0), _key29 = 2; _key29 < _len29; _key29++) {
      args[_key29 - 2] = arguments[_key29];
    }

    _this29 = _possibleConstructorReturn(this, (_ref29 = InteractiveCreativeFile_39.__proto__ || Object.getPrototypeOf(InteractiveCreativeFile_39)).call.apply(_ref29, [this, n, p].concat(args)));
    _this29.parent = p;
    return _this29;
  }

  _createClass(InteractiveCreativeFile_39, [{
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

  return InteractiveCreativeFile_39;
}(VastElement);

var MediaFiles_36 =
/*#__PURE__*/
function (_VastElement30) {
  _inherits(MediaFiles_36, _VastElement30);

  /**
   * @param {string} n
   * @param {Linear_33} p
   */
  function MediaFiles_36(n, p) {
    var _ref30;

    var _this30;

    _classCallCheck(this, MediaFiles_36);

    for (var _len30 = arguments.length, args = new Array(_len30 > 2 ? _len30 - 2 : 0), _key30 = 2; _key30 < _len30; _key30++) {
      args[_key30 - 2] = arguments[_key30];
    }

    _this30 = _possibleConstructorReturn(this, (_ref30 = MediaFiles_36.__proto__ || Object.getPrototypeOf(MediaFiles_36)).call.apply(_ref30, [this, n, p].concat(args)));
    _this30.parent = p;
    return _this30;
  }
  /** 
   * @param {string} content
   * @returns {Mezzanine_37} 
   */


  _createClass(MediaFiles_36, [{
    key: "attachMezzanine",
    value: function attachMezzanine(content) {
      var newElem = new Mezzanine_37('Mezzanine', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {MediaFiles_36} 
     */

  }, {
    key: "addMezzanine",
    value: function addMezzanine(content) {
      return this.attachMezzanine(content).and();
    }
    /** 
     * @param {string} content
     * @param {{id: string, delivery:("progressive"|"streaming"), type: string, bitrate: string, minBitrate: string, maxBitrate: string, width: string, height: string, scalable: string, mantainAspectRatio: string, codec: string, apiFramework: string}} attributes
     * @returns {MediaFile_38} 
     */

  }, {
    key: "attachMediaFile",
    value: function attachMediaFile(content, attributes) {
      var newElem = new MediaFile_38('MediaFile', this, {
        "attrs": ["id", "delivery", "type", "bitrate", "minBitrate", "maxBitrate", "width", "height", "scalable", "mantainAspectRatio", "codec", "apiFramework"]
        /*: Infos*/

      }, content, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @param {{id: string, delivery:("progressive"|"streaming"), type: string, bitrate: string, minBitrate: string, maxBitrate: string, width: string, height: string, scalable: string, mantainAspectRatio: string, codec: string, apiFramework: string}} attributes
     * @returns {MediaFiles_36} 
     */

  }, {
    key: "addMediaFile",
    value: function addMediaFile(content, attributes) {
      return this.attachMediaFile(content, attributes).and();
    }
    /** 
     * @param {string} content
     * @returns {InteractiveCreativeFile_39} 
     */

  }, {
    key: "attachInteractiveCreativeFile",
    value: function attachInteractiveCreativeFile(content) {
      var newElem = new InteractiveCreativeFile_39('InteractiveCreativeFile', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {MediaFiles_36} 
     */

  }, {
    key: "addInteractiveCreativeFile",
    value: function addInteractiveCreativeFile(content) {
      return this.attachInteractiveCreativeFile(content).and();
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

  return MediaFiles_36;
}(VastElement);

var ClickThrough_41 =
/*#__PURE__*/
function (_VastElement31) {
  _inherits(ClickThrough_41, _VastElement31);

  /**
   * @param {string} n
   * @param {VideoClicks_40} p
   */
  function ClickThrough_41(n, p) {
    var _ref31;

    var _this31;

    _classCallCheck(this, ClickThrough_41);

    for (var _len31 = arguments.length, args = new Array(_len31 > 2 ? _len31 - 2 : 0), _key31 = 2; _key31 < _len31; _key31++) {
      args[_key31 - 2] = arguments[_key31];
    }

    _this31 = _possibleConstructorReturn(this, (_ref31 = ClickThrough_41.__proto__ || Object.getPrototypeOf(ClickThrough_41)).call.apply(_ref31, [this, n, p].concat(args)));
    _this31.parent = p;
    return _this31;
  }

  _createClass(ClickThrough_41, [{
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

  return ClickThrough_41;
}(VastElement);

var ClickTracking_42 =
/*#__PURE__*/
function (_VastElement32) {
  _inherits(ClickTracking_42, _VastElement32);

  /**
   * @param {string} n
   * @param {VideoClicks_40} p
   */
  function ClickTracking_42(n, p) {
    var _ref32;

    var _this32;

    _classCallCheck(this, ClickTracking_42);

    for (var _len32 = arguments.length, args = new Array(_len32 > 2 ? _len32 - 2 : 0), _key32 = 2; _key32 < _len32; _key32++) {
      args[_key32 - 2] = arguments[_key32];
    }

    _this32 = _possibleConstructorReturn(this, (_ref32 = ClickTracking_42.__proto__ || Object.getPrototypeOf(ClickTracking_42)).call.apply(_ref32, [this, n, p].concat(args)));
    _this32.parent = p;
    return _this32;
  }

  _createClass(ClickTracking_42, [{
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

  return ClickTracking_42;
}(VastElement);

var CustomClick_43 =
/*#__PURE__*/
function (_VastElement33) {
  _inherits(CustomClick_43, _VastElement33);

  /**
   * @param {string} n
   * @param {VideoClicks_40} p
   */
  function CustomClick_43(n, p) {
    var _ref33;

    var _this33;

    _classCallCheck(this, CustomClick_43);

    for (var _len33 = arguments.length, args = new Array(_len33 > 2 ? _len33 - 2 : 0), _key33 = 2; _key33 < _len33; _key33++) {
      args[_key33 - 2] = arguments[_key33];
    }

    _this33 = _possibleConstructorReturn(this, (_ref33 = CustomClick_43.__proto__ || Object.getPrototypeOf(CustomClick_43)).call.apply(_ref33, [this, n, p].concat(args)));
    _this33.parent = p;
    return _this33;
  }

  _createClass(CustomClick_43, [{
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

  return CustomClick_43;
}(VastElement);

var VideoClicks_40 =
/*#__PURE__*/
function (_VastElement34) {
  _inherits(VideoClicks_40, _VastElement34);

  /**
   * @param {string} n
   * @param {Linear_33} p
   */
  function VideoClicks_40(n, p) {
    var _ref34;

    var _this34;

    _classCallCheck(this, VideoClicks_40);

    for (var _len34 = arguments.length, args = new Array(_len34 > 2 ? _len34 - 2 : 0), _key34 = 2; _key34 < _len34; _key34++) {
      args[_key34 - 2] = arguments[_key34];
    }

    _this34 = _possibleConstructorReturn(this, (_ref34 = VideoClicks_40.__proto__ || Object.getPrototypeOf(VideoClicks_40)).call.apply(_ref34, [this, n, p].concat(args)));
    _this34.parent = p;
    return _this34;
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {ClickThrough_41} 
   */


  _createClass(VideoClicks_40, [{
    key: "attachClickThrough",
    value: function attachClickThrough(content, attributes) {
      var newElem = new ClickThrough_41('ClickThrough', this, {
        "attrs": ["id"]
        /*: Infos*/

      }, content, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @param {{id: string}} attributes
     * @returns {VideoClicks_40} 
     */

  }, {
    key: "addClickThrough",
    value: function addClickThrough(content, attributes) {
      return this.attachClickThrough(content, attributes).and();
    }
    /** 
     * @param {string} content
     * @param {{id: string}} attributes
     * @returns {ClickTracking_42} 
     */

  }, {
    key: "attachClickTracking",
    value: function attachClickTracking(content, attributes) {
      var newElem = new ClickTracking_42('ClickTracking', this, {
        "attrs": ["id"]
        /*: Infos*/

      }, content, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @param {{id: string}} attributes
     * @returns {VideoClicks_40} 
     */

  }, {
    key: "addClickTracking",
    value: function addClickTracking(content, attributes) {
      return this.attachClickTracking(content, attributes).and();
    }
    /** 
     * @param {string} content
     * @param {{id: string}} attributes
     * @returns {CustomClick_43} 
     */

  }, {
    key: "attachCustomClick",
    value: function attachCustomClick(content, attributes) {
      var newElem = new CustomClick_43('CustomClick', this, {
        "attrs": ["id"]
        /*: Infos*/

      }, content, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @param {{id: string}} attributes
     * @returns {VideoClicks_40} 
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

  return VideoClicks_40;
}(VastElement);

var Tracking_45 =
/*#__PURE__*/
function (_VastElement35) {
  _inherits(Tracking_45, _VastElement35);

  /**
   * @param {string} n
   * @param {TrackingEvents_44} p
   */
  function Tracking_45(n, p) {
    var _ref35;

    var _this35;

    _classCallCheck(this, Tracking_45);

    for (var _len35 = arguments.length, args = new Array(_len35 > 2 ? _len35 - 2 : 0), _key35 = 2; _key35 < _len35; _key35++) {
      args[_key35 - 2] = arguments[_key35];
    }

    _this35 = _possibleConstructorReturn(this, (_ref35 = Tracking_45.__proto__ || Object.getPrototypeOf(Tracking_45)).call.apply(_ref35, [this, n, p].concat(args)));
    _this35.parent = p;
    return _this35;
  }

  _createClass(Tracking_45, [{
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

  return Tracking_45;
}(VastElement);

var TrackingEvents_44 =
/*#__PURE__*/
function (_VastElement36) {
  _inherits(TrackingEvents_44, _VastElement36);

  /**
   * @param {string} n
   * @param {Linear_33} p
   */
  function TrackingEvents_44(n, p) {
    var _ref36;

    var _this36;

    _classCallCheck(this, TrackingEvents_44);

    for (var _len36 = arguments.length, args = new Array(_len36 > 2 ? _len36 - 2 : 0), _key36 = 2; _key36 < _len36; _key36++) {
      args[_key36 - 2] = arguments[_key36];
    }

    _this36 = _possibleConstructorReturn(this, (_ref36 = TrackingEvents_44.__proto__ || Object.getPrototypeOf(TrackingEvents_44)).call.apply(_ref36, [this, n, p].concat(args)));
    _this36.parent = p;
    return _this36;
  }
  /** 
   * @param {string} content
   * @param {{offset: string, event:("mute"|"unmute"|"pause"|"resume"|"rewind"|"skip"|"playerExpand"|"playerCollapse"|"otherAdInteraction"|"start"|"firstQuartile"|"midpoint"|"thirdQuartile"|"complete"|"acceptInvitationLinear"|"timeSpentViewing"|"progress")}} attributes
   * @returns {Tracking_45} 
   */


  _createClass(TrackingEvents_44, [{
    key: "attachTracking",
    value: function attachTracking(content, attributes) {
      var newElem = new Tracking_45('Tracking', this, {
        "attrs": ["offset", "event"]
        /*: Infos*/

      }, content, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @param {{offset: string, event:("mute"|"unmute"|"pause"|"resume"|"rewind"|"skip"|"playerExpand"|"playerCollapse"|"otherAdInteraction"|"start"|"firstQuartile"|"midpoint"|"thirdQuartile"|"complete"|"acceptInvitationLinear"|"timeSpentViewing"|"progress")}} attributes
     * @returns {TrackingEvents_44} 
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

  return TrackingEvents_44;
}(VastElement);

var StaticResource_48 =
/*#__PURE__*/
function (_VastElement37) {
  _inherits(StaticResource_48, _VastElement37);

  /**
   * @param {string} n
   * @param {Icon_47} p
   */
  function StaticResource_48(n, p) {
    var _ref37;

    var _this37;

    _classCallCheck(this, StaticResource_48);

    for (var _len37 = arguments.length, args = new Array(_len37 > 2 ? _len37 - 2 : 0), _key37 = 2; _key37 < _len37; _key37++) {
      args[_key37 - 2] = arguments[_key37];
    }

    _this37 = _possibleConstructorReturn(this, (_ref37 = StaticResource_48.__proto__ || Object.getPrototypeOf(StaticResource_48)).call.apply(_ref37, [this, n, p].concat(args)));
    _this37.parent = p;
    return _this37;
  }

  _createClass(StaticResource_48, [{
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

  return StaticResource_48;
}(VastElement);

var IFrameResource_49 =
/*#__PURE__*/
function (_VastElement38) {
  _inherits(IFrameResource_49, _VastElement38);

  /**
   * @param {string} n
   * @param {Icon_47} p
   */
  function IFrameResource_49(n, p) {
    var _ref38;

    var _this38;

    _classCallCheck(this, IFrameResource_49);

    for (var _len38 = arguments.length, args = new Array(_len38 > 2 ? _len38 - 2 : 0), _key38 = 2; _key38 < _len38; _key38++) {
      args[_key38 - 2] = arguments[_key38];
    }

    _this38 = _possibleConstructorReturn(this, (_ref38 = IFrameResource_49.__proto__ || Object.getPrototypeOf(IFrameResource_49)).call.apply(_ref38, [this, n, p].concat(args)));
    _this38.parent = p;
    return _this38;
  }

  _createClass(IFrameResource_49, [{
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

  return IFrameResource_49;
}(VastElement);

var HTMLResource_50 =
/*#__PURE__*/
function (_VastElement39) {
  _inherits(HTMLResource_50, _VastElement39);

  /**
   * @param {string} n
   * @param {Icon_47} p
   */
  function HTMLResource_50(n, p) {
    var _ref39;

    var _this39;

    _classCallCheck(this, HTMLResource_50);

    for (var _len39 = arguments.length, args = new Array(_len39 > 2 ? _len39 - 2 : 0), _key39 = 2; _key39 < _len39; _key39++) {
      args[_key39 - 2] = arguments[_key39];
    }

    _this39 = _possibleConstructorReturn(this, (_ref39 = HTMLResource_50.__proto__ || Object.getPrototypeOf(HTMLResource_50)).call.apply(_ref39, [this, n, p].concat(args)));
    _this39.parent = p;
    return _this39;
  }

  _createClass(HTMLResource_50, [{
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

  return HTMLResource_50;
}(VastElement);

var IconClickThrough_52 =
/*#__PURE__*/
function (_VastElement40) {
  _inherits(IconClickThrough_52, _VastElement40);

  /**
   * @param {string} n
   * @param {IconClicks_51} p
   */
  function IconClickThrough_52(n, p) {
    var _ref40;

    var _this40;

    _classCallCheck(this, IconClickThrough_52);

    for (var _len40 = arguments.length, args = new Array(_len40 > 2 ? _len40 - 2 : 0), _key40 = 2; _key40 < _len40; _key40++) {
      args[_key40 - 2] = arguments[_key40];
    }

    _this40 = _possibleConstructorReturn(this, (_ref40 = IconClickThrough_52.__proto__ || Object.getPrototypeOf(IconClickThrough_52)).call.apply(_ref40, [this, n, p].concat(args)));
    _this40.parent = p;
    return _this40;
  }

  _createClass(IconClickThrough_52, [{
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

  return IconClickThrough_52;
}(VastElement);

var IconClickTracking_53 =
/*#__PURE__*/
function (_VastElement41) {
  _inherits(IconClickTracking_53, _VastElement41);

  /**
   * @param {string} n
   * @param {IconClicks_51} p
   */
  function IconClickTracking_53(n, p) {
    var _ref41;

    var _this41;

    _classCallCheck(this, IconClickTracking_53);

    for (var _len41 = arguments.length, args = new Array(_len41 > 2 ? _len41 - 2 : 0), _key41 = 2; _key41 < _len41; _key41++) {
      args[_key41 - 2] = arguments[_key41];
    }

    _this41 = _possibleConstructorReturn(this, (_ref41 = IconClickTracking_53.__proto__ || Object.getPrototypeOf(IconClickTracking_53)).call.apply(_ref41, [this, n, p].concat(args)));
    _this41.parent = p;
    return _this41;
  }

  _createClass(IconClickTracking_53, [{
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

  return IconClickTracking_53;
}(VastElement);

var IconClicks_51 =
/*#__PURE__*/
function (_VastElement42) {
  _inherits(IconClicks_51, _VastElement42);

  /**
   * @param {string} n
   * @param {Icon_47} p
   */
  function IconClicks_51(n, p) {
    var _ref42;

    var _this42;

    _classCallCheck(this, IconClicks_51);

    for (var _len42 = arguments.length, args = new Array(_len42 > 2 ? _len42 - 2 : 0), _key42 = 2; _key42 < _len42; _key42++) {
      args[_key42 - 2] = arguments[_key42];
    }

    _this42 = _possibleConstructorReturn(this, (_ref42 = IconClicks_51.__proto__ || Object.getPrototypeOf(IconClicks_51)).call.apply(_ref42, [this, n, p].concat(args)));
    _this42.parent = p;
    return _this42;
  }
  /** 
   * @param {string} content
   * @returns {IconClickThrough_52} 
   */


  _createClass(IconClicks_51, [{
    key: "attachIconClickThrough",
    value: function attachIconClickThrough(content) {
      var newElem = new IconClickThrough_52('IconClickThrough', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {IconClicks_51} 
     */

  }, {
    key: "addIconClickThrough",
    value: function addIconClickThrough(content) {
      return this.attachIconClickThrough(content).and();
    }
    /** 
     * @param {string} content
     * @param {{id: string}} attributes
     * @returns {IconClickTracking_53} 
     */

  }, {
    key: "attachIconClickTracking",
    value: function attachIconClickTracking(content, attributes) {
      var newElem = new IconClickTracking_53('IconClickTracking', this, {
        "attrs": ["id"]
        /*: Infos*/

      }, content, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @param {{id: string}} attributes
     * @returns {IconClicks_51} 
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

  return IconClicks_51;
}(VastElement);

var IconViewTracking_54 =
/*#__PURE__*/
function (_VastElement43) {
  _inherits(IconViewTracking_54, _VastElement43);

  /**
   * @param {string} n
   * @param {Icon_47} p
   */
  function IconViewTracking_54(n, p) {
    var _ref43;

    var _this43;

    _classCallCheck(this, IconViewTracking_54);

    for (var _len43 = arguments.length, args = new Array(_len43 > 2 ? _len43 - 2 : 0), _key43 = 2; _key43 < _len43; _key43++) {
      args[_key43 - 2] = arguments[_key43];
    }

    _this43 = _possibleConstructorReturn(this, (_ref43 = IconViewTracking_54.__proto__ || Object.getPrototypeOf(IconViewTracking_54)).call.apply(_ref43, [this, n, p].concat(args)));
    _this43.parent = p;
    return _this43;
  }

  _createClass(IconViewTracking_54, [{
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

  return IconViewTracking_54;
}(VastElement);

var Icon_47 =
/*#__PURE__*/
function (_VastElement44) {
  _inherits(Icon_47, _VastElement44);

  /**
   * @param {string} n
   * @param {Icons_46} p
   */
  function Icon_47(n, p) {
    var _ref44;

    var _this44;

    _classCallCheck(this, Icon_47);

    for (var _len44 = arguments.length, args = new Array(_len44 > 2 ? _len44 - 2 : 0), _key44 = 2; _key44 < _len44; _key44++) {
      args[_key44 - 2] = arguments[_key44];
    }

    _this44 = _possibleConstructorReturn(this, (_ref44 = Icon_47.__proto__ || Object.getPrototypeOf(Icon_47)).call.apply(_ref44, [this, n, p].concat(args)));
    _this44.parent = p;
    return _this44;
  }
  /** 
   * @param {string} content
   * @param {{creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash")}} attributes
   * @returns {StaticResource_48} 
   */


  _createClass(Icon_47, [{
    key: "attachStaticResource",
    value: function attachStaticResource(content, attributes) {
      var newElem = new StaticResource_48('StaticResource', this, {
        "attrs": ["creativeType"]
        /*: Infos*/

      }, content, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @param {{creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash")}} attributes
     * @returns {Icon_47} 
     */

  }, {
    key: "addStaticResource",
    value: function addStaticResource(content, attributes) {
      return this.attachStaticResource(content, attributes).and();
    }
    /** 
     * @param {string} content
     * @returns {IFrameResource_49} 
     */

  }, {
    key: "attachIFrameResource",
    value: function attachIFrameResource(content) {
      var newElem = new IFrameResource_49('IFrameResource', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {Icon_47} 
     */

  }, {
    key: "addIFrameResource",
    value: function addIFrameResource(content) {
      return this.attachIFrameResource(content).and();
    }
    /** 
     * @param {string} content
     * @returns {HTMLResource_50} 
     */

  }, {
    key: "attachHTMLResource",
    value: function attachHTMLResource(content) {
      var newElem = new HTMLResource_50('HTMLResource', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {Icon_47} 
     */

  }, {
    key: "addHTMLResource",
    value: function addHTMLResource(content) {
      return this.attachHTMLResource(content).and();
    }
    /** 
     * @returns {IconClicks_51} 
     */

  }, {
    key: "attachIconClicks",
    value: function attachIconClicks() {
      var newElem = new IconClicks_51('IconClicks', this, {}
      /*: Infos*/
      );
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {IconViewTracking_54} 
     */

  }, {
    key: "attachIconViewTracking",
    value: function attachIconViewTracking(content) {
      var newElem = new IconViewTracking_54('IconViewTracking', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {Icon_47} 
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

  return Icon_47;
}(VastElement);

var Icons_46 =
/*#__PURE__*/
function (_VastElement45) {
  _inherits(Icons_46, _VastElement45);

  /**
   * @param {string} n
   * @param {Linear_33} p
   */
  function Icons_46(n, p) {
    var _ref45;

    var _this45;

    _classCallCheck(this, Icons_46);

    for (var _len45 = arguments.length, args = new Array(_len45 > 2 ? _len45 - 2 : 0), _key45 = 2; _key45 < _len45; _key45++) {
      args[_key45 - 2] = arguments[_key45];
    }

    _this45 = _possibleConstructorReturn(this, (_ref45 = Icons_46.__proto__ || Object.getPrototypeOf(Icons_46)).call.apply(_ref45, [this, n, p].concat(args)));
    _this45.parent = p;
    return _this45;
  }
  /** 
   * @param {{program: string, width: string, height: string, xPosition: string, yPosition: string, duration: string, offset: string, apiFramework: string, pxratio: string}} attributes
   * @returns {Icon_47} 
   */


  _createClass(Icons_46, [{
    key: "attachIcon",
    value: function attachIcon(attributes) {
      var newElem = new Icon_47('Icon', this, {
        "attrs": ["program", "width", "height", "xPosition", "yPosition", "duration", "offset", "apiFramework", "pxratio"]
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

  return Icons_46;
}(VastElement);

var Linear_33 =
/*#__PURE__*/
function (_VastElement46) {
  _inherits(Linear_33, _VastElement46);

  /**
   * @param {string} n
   * @param {Creative_29} p
   */
  function Linear_33(n, p) {
    var _ref46;

    var _this46;

    _classCallCheck(this, Linear_33);

    for (var _len46 = arguments.length, args = new Array(_len46 > 2 ? _len46 - 2 : 0), _key46 = 2; _key46 < _len46; _key46++) {
      args[_key46 - 2] = arguments[_key46];
    }

    _this46 = _possibleConstructorReturn(this, (_ref46 = Linear_33.__proto__ || Object.getPrototypeOf(Linear_33)).call.apply(_ref46, [this, n, p].concat(args)));
    _this46.parent = p;
    return _this46;
  }
  /** @description required in Vast 4
   * @param {string} content
   * @returns {Duration_34} 
   */


  _createClass(Linear_33, [{
    key: "attachDuration",
    value: function attachDuration(content) {
      var newElem = new Duration_34('Duration', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** @description required in Vast 4
     * @param {string} content
     * @returns {Linear_33} 
     */

  }, {
    key: "addDuration",
    value: function addDuration(content) {
      return this.attachDuration(content).and();
    }
    /** 
     * @param {string} content
     * @param {{xmlEncoded: string}} attributes
     * @returns {AdParameters_35} 
     */

  }, {
    key: "attachAdParameters",
    value: function attachAdParameters(content, attributes) {
      var newElem = new AdParameters_35('AdParameters', this, {
        "attrs": ["xmlEncoded"]
        /*: Infos*/

      }, content, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @param {{xmlEncoded: string}} attributes
     * @returns {Linear_33} 
     */

  }, {
    key: "addAdParameters",
    value: function addAdParameters(content, attributes) {
      return this.attachAdParameters(content, attributes).and();
    }
    /** @description required in Vast 4
     * @returns {MediaFiles_36} 
     */

  }, {
    key: "attachMediaFiles",
    value: function attachMediaFiles() {
      var newElem = new MediaFiles_36('MediaFiles', this, {}
      /*: Infos*/
      );
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @returns {VideoClicks_40} 
     */

  }, {
    key: "attachVideoClicks",
    value: function attachVideoClicks() {
      var newElem = new VideoClicks_40('VideoClicks', this, {}
      /*: Infos*/
      );
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @returns {TrackingEvents_44} 
     */

  }, {
    key: "attachTrackingEvents",
    value: function attachTrackingEvents() {
      var newElem = new TrackingEvents_44('TrackingEvents', this, {}
      /*: Infos*/
      );
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @returns {Icons_46} 
     */

  }, {
    key: "attachIcons",
    value: function attachIcons() {
      var newElem = new Icons_46('Icons', this, {}
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

  return Linear_33;
}(VastElement);

var NonLinearClickThrough_57 =
/*#__PURE__*/
function (_VastElement47) {
  _inherits(NonLinearClickThrough_57, _VastElement47);

  /**
   * @param {string} n
   * @param {NonLinear_56} p
   */
  function NonLinearClickThrough_57(n, p) {
    var _ref47;

    var _this47;

    _classCallCheck(this, NonLinearClickThrough_57);

    for (var _len47 = arguments.length, args = new Array(_len47 > 2 ? _len47 - 2 : 0), _key47 = 2; _key47 < _len47; _key47++) {
      args[_key47 - 2] = arguments[_key47];
    }

    _this47 = _possibleConstructorReturn(this, (_ref47 = NonLinearClickThrough_57.__proto__ || Object.getPrototypeOf(NonLinearClickThrough_57)).call.apply(_ref47, [this, n, p].concat(args)));
    _this47.parent = p;
    return _this47;
  }

  _createClass(NonLinearClickThrough_57, [{
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

  return NonLinearClickThrough_57;
}(VastElement);

var NonLinearClickTracking_58 =
/*#__PURE__*/
function (_VastElement48) {
  _inherits(NonLinearClickTracking_58, _VastElement48);

  /**
   * @param {string} n
   * @param {NonLinear_56} p
   */
  function NonLinearClickTracking_58(n, p) {
    var _ref48;

    var _this48;

    _classCallCheck(this, NonLinearClickTracking_58);

    for (var _len48 = arguments.length, args = new Array(_len48 > 2 ? _len48 - 2 : 0), _key48 = 2; _key48 < _len48; _key48++) {
      args[_key48 - 2] = arguments[_key48];
    }

    _this48 = _possibleConstructorReturn(this, (_ref48 = NonLinearClickTracking_58.__proto__ || Object.getPrototypeOf(NonLinearClickTracking_58)).call.apply(_ref48, [this, n, p].concat(args)));
    _this48.parent = p;
    return _this48;
  }

  _createClass(NonLinearClickTracking_58, [{
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

  return NonLinearClickTracking_58;
}(VastElement);

var NonLinear_56 =
/*#__PURE__*/
function (_VastElement49) {
  _inherits(NonLinear_56, _VastElement49);

  /**
   * @param {string} n
   * @param {NonLinearAds_55} p
   */
  function NonLinear_56(n, p) {
    var _ref49;

    var _this49;

    _classCallCheck(this, NonLinear_56);

    for (var _len49 = arguments.length, args = new Array(_len49 > 2 ? _len49 - 2 : 0), _key49 = 2; _key49 < _len49; _key49++) {
      args[_key49 - 2] = arguments[_key49];
    }

    _this49 = _possibleConstructorReturn(this, (_ref49 = NonLinear_56.__proto__ || Object.getPrototypeOf(NonLinear_56)).call.apply(_ref49, [this, n, p].concat(args)));
    _this49.parent = p;
    return _this49;
  }
  /** 
   * @param {string} content
   * @returns {NonLinearClickThrough_57} 
   */


  _createClass(NonLinear_56, [{
    key: "attachNonLinearClickThrough",
    value: function attachNonLinearClickThrough(content) {
      var newElem = new NonLinearClickThrough_57('NonLinearClickThrough', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {NonLinear_56} 
     */

  }, {
    key: "addNonLinearClickThrough",
    value: function addNonLinearClickThrough(content) {
      return this.attachNonLinearClickThrough(content).and();
    }
    /** 
     * @param {string} content
     * @returns {NonLinearClickTracking_58} 
     */

  }, {
    key: "attachNonLinearClickTracking",
    value: function attachNonLinearClickTracking(content) {
      var newElem = new NonLinearClickTracking_58('NonLinearClickTracking', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {NonLinear_56} 
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

  return NonLinear_56;
}(VastElement);

var Tracking_60 =
/*#__PURE__*/
function (_VastElement50) {
  _inherits(Tracking_60, _VastElement50);

  /**
   * @param {string} n
   * @param {TrackingEvents_59} p
   */
  function Tracking_60(n, p) {
    var _ref50;

    var _this50;

    _classCallCheck(this, Tracking_60);

    for (var _len50 = arguments.length, args = new Array(_len50 > 2 ? _len50 - 2 : 0), _key50 = 2; _key50 < _len50; _key50++) {
      args[_key50 - 2] = arguments[_key50];
    }

    _this50 = _possibleConstructorReturn(this, (_ref50 = Tracking_60.__proto__ || Object.getPrototypeOf(Tracking_60)).call.apply(_ref50, [this, n, p].concat(args)));
    _this50.parent = p;
    return _this50;
  }

  _createClass(Tracking_60, [{
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

  return Tracking_60;
}(VastElement);

var TrackingEvents_59 =
/*#__PURE__*/
function (_VastElement51) {
  _inherits(TrackingEvents_59, _VastElement51);

  /**
   * @param {string} n
   * @param {NonLinearAds_55} p
   */
  function TrackingEvents_59(n, p) {
    var _ref51;

    var _this51;

    _classCallCheck(this, TrackingEvents_59);

    for (var _len51 = arguments.length, args = new Array(_len51 > 2 ? _len51 - 2 : 0), _key51 = 2; _key51 < _len51; _key51++) {
      args[_key51 - 2] = arguments[_key51];
    }

    _this51 = _possibleConstructorReturn(this, (_ref51 = TrackingEvents_59.__proto__ || Object.getPrototypeOf(TrackingEvents_59)).call.apply(_ref51, [this, n, p].concat(args)));
    _this51.parent = p;
    return _this51;
  }
  /** 
   * @param {string} content
   * @param {{event:("mute"|"unmute"|"pause"|"resume"|"rewind"|"skip"|"playerExpand"|"playerCollapse"|"otherAdInteraction"|"creativeView"|"acceptInvitation"|"adExpand"|"adCollapse"|"minimize"|"close"|"overlayViewDuration")}} attributes
   * @returns {Tracking_60} 
   */


  _createClass(TrackingEvents_59, [{
    key: "attachTracking",
    value: function attachTracking(content, attributes) {
      var newElem = new Tracking_60('Tracking', this, {
        "attrs": ["event"]
        /*: Infos*/

      }, content, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @param {{event:("mute"|"unmute"|"pause"|"resume"|"rewind"|"skip"|"playerExpand"|"playerCollapse"|"otherAdInteraction"|"creativeView"|"acceptInvitation"|"adExpand"|"adCollapse"|"minimize"|"close"|"overlayViewDuration")}} attributes
     * @returns {TrackingEvents_59} 
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

  return TrackingEvents_59;
}(VastElement);

var NonLinearAds_55 =
/*#__PURE__*/
function (_VastElement52) {
  _inherits(NonLinearAds_55, _VastElement52);

  /**
   * @param {string} n
   * @param {Creative_29} p
   */
  function NonLinearAds_55(n, p) {
    var _ref52;

    var _this52;

    _classCallCheck(this, NonLinearAds_55);

    for (var _len52 = arguments.length, args = new Array(_len52 > 2 ? _len52 - 2 : 0), _key52 = 2; _key52 < _len52; _key52++) {
      args[_key52 - 2] = arguments[_key52];
    }

    _this52 = _possibleConstructorReturn(this, (_ref52 = NonLinearAds_55.__proto__ || Object.getPrototypeOf(NonLinearAds_55)).call.apply(_ref52, [this, n, p].concat(args)));
    _this52.parent = p;
    return _this52;
  }
  /** 
   * @returns {NonLinear_56} 
   */


  _createClass(NonLinearAds_55, [{
    key: "attachNonLinear",
    value: function attachNonLinear() {
      var newElem = new NonLinear_56('NonLinear', this, {}
      /*: Infos*/
      );
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @returns {TrackingEvents_59} 
     */

  }, {
    key: "attachTrackingEvents",
    value: function attachTrackingEvents() {
      var newElem = new TrackingEvents_59('TrackingEvents', this, {}
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

  return NonLinearAds_55;
}(VastElement);

var StaticResource_63 =
/*#__PURE__*/
function (_VastElement53) {
  _inherits(StaticResource_63, _VastElement53);

  /**
   * @param {string} n
   * @param {Companion_62} p
   */
  function StaticResource_63(n, p) {
    var _ref53;

    var _this53;

    _classCallCheck(this, StaticResource_63);

    for (var _len53 = arguments.length, args = new Array(_len53 > 2 ? _len53 - 2 : 0), _key53 = 2; _key53 < _len53; _key53++) {
      args[_key53 - 2] = arguments[_key53];
    }

    _this53 = _possibleConstructorReturn(this, (_ref53 = StaticResource_63.__proto__ || Object.getPrototypeOf(StaticResource_63)).call.apply(_ref53, [this, n, p].concat(args)));
    _this53.parent = p;
    return _this53;
  }

  _createClass(StaticResource_63, [{
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

  return StaticResource_63;
}(VastElement);

var IFrameResource_64 =
/*#__PURE__*/
function (_VastElement54) {
  _inherits(IFrameResource_64, _VastElement54);

  /**
   * @param {string} n
   * @param {Companion_62} p
   */
  function IFrameResource_64(n, p) {
    var _ref54;

    var _this54;

    _classCallCheck(this, IFrameResource_64);

    for (var _len54 = arguments.length, args = new Array(_len54 > 2 ? _len54 - 2 : 0), _key54 = 2; _key54 < _len54; _key54++) {
      args[_key54 - 2] = arguments[_key54];
    }

    _this54 = _possibleConstructorReturn(this, (_ref54 = IFrameResource_64.__proto__ || Object.getPrototypeOf(IFrameResource_64)).call.apply(_ref54, [this, n, p].concat(args)));
    _this54.parent = p;
    return _this54;
  }

  _createClass(IFrameResource_64, [{
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

  return IFrameResource_64;
}(VastElement);

var HTMLResource_65 =
/*#__PURE__*/
function (_VastElement55) {
  _inherits(HTMLResource_65, _VastElement55);

  /**
   * @param {string} n
   * @param {Companion_62} p
   */
  function HTMLResource_65(n, p) {
    var _ref55;

    var _this55;

    _classCallCheck(this, HTMLResource_65);

    for (var _len55 = arguments.length, args = new Array(_len55 > 2 ? _len55 - 2 : 0), _key55 = 2; _key55 < _len55; _key55++) {
      args[_key55 - 2] = arguments[_key55];
    }

    _this55 = _possibleConstructorReturn(this, (_ref55 = HTMLResource_65.__proto__ || Object.getPrototypeOf(HTMLResource_65)).call.apply(_ref55, [this, n, p].concat(args)));
    _this55.parent = p;
    return _this55;
  }

  _createClass(HTMLResource_65, [{
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

  return HTMLResource_65;
}(VastElement);

var AdParameters_66 =
/*#__PURE__*/
function (_VastElement56) {
  _inherits(AdParameters_66, _VastElement56);

  /**
   * @param {string} n
   * @param {Companion_62} p
   */
  function AdParameters_66(n, p) {
    var _ref56;

    var _this56;

    _classCallCheck(this, AdParameters_66);

    for (var _len56 = arguments.length, args = new Array(_len56 > 2 ? _len56 - 2 : 0), _key56 = 2; _key56 < _len56; _key56++) {
      args[_key56 - 2] = arguments[_key56];
    }

    _this56 = _possibleConstructorReturn(this, (_ref56 = AdParameters_66.__proto__ || Object.getPrototypeOf(AdParameters_66)).call.apply(_ref56, [this, n, p].concat(args)));
    _this56.parent = p;
    return _this56;
  }

  _createClass(AdParameters_66, [{
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

  return AdParameters_66;
}(VastElement);

var AltText_67 =
/*#__PURE__*/
function (_VastElement57) {
  _inherits(AltText_67, _VastElement57);

  /**
   * @param {string} n
   * @param {Companion_62} p
   */
  function AltText_67(n, p) {
    var _ref57;

    var _this57;

    _classCallCheck(this, AltText_67);

    for (var _len57 = arguments.length, args = new Array(_len57 > 2 ? _len57 - 2 : 0), _key57 = 2; _key57 < _len57; _key57++) {
      args[_key57 - 2] = arguments[_key57];
    }

    _this57 = _possibleConstructorReturn(this, (_ref57 = AltText_67.__proto__ || Object.getPrototypeOf(AltText_67)).call.apply(_ref57, [this, n, p].concat(args)));
    _this57.parent = p;
    return _this57;
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

var CompanionClickThrough_68 =
/*#__PURE__*/
function (_VastElement58) {
  _inherits(CompanionClickThrough_68, _VastElement58);

  /**
   * @param {string} n
   * @param {Companion_62} p
   */
  function CompanionClickThrough_68(n, p) {
    var _ref58;

    var _this58;

    _classCallCheck(this, CompanionClickThrough_68);

    for (var _len58 = arguments.length, args = new Array(_len58 > 2 ? _len58 - 2 : 0), _key58 = 2; _key58 < _len58; _key58++) {
      args[_key58 - 2] = arguments[_key58];
    }

    _this58 = _possibleConstructorReturn(this, (_ref58 = CompanionClickThrough_68.__proto__ || Object.getPrototypeOf(CompanionClickThrough_68)).call.apply(_ref58, [this, n, p].concat(args)));
    _this58.parent = p;
    return _this58;
  }

  _createClass(CompanionClickThrough_68, [{
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

  return CompanionClickThrough_68;
}(VastElement);

var CompanionClickTracking_69 =
/*#__PURE__*/
function (_VastElement59) {
  _inherits(CompanionClickTracking_69, _VastElement59);

  /**
   * @param {string} n
   * @param {Companion_62} p
   */
  function CompanionClickTracking_69(n, p) {
    var _ref59;

    var _this59;

    _classCallCheck(this, CompanionClickTracking_69);

    for (var _len59 = arguments.length, args = new Array(_len59 > 2 ? _len59 - 2 : 0), _key59 = 2; _key59 < _len59; _key59++) {
      args[_key59 - 2] = arguments[_key59];
    }

    _this59 = _possibleConstructorReturn(this, (_ref59 = CompanionClickTracking_69.__proto__ || Object.getPrototypeOf(CompanionClickTracking_69)).call.apply(_ref59, [this, n, p].concat(args)));
    _this59.parent = p;
    return _this59;
  }

  _createClass(CompanionClickTracking_69, [{
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

  return CompanionClickTracking_69;
}(VastElement);

var Tracking_71 =
/*#__PURE__*/
function (_VastElement60) {
  _inherits(Tracking_71, _VastElement60);

  /**
   * @param {string} n
   * @param {TrackingEvents_70} p
   */
  function Tracking_71(n, p) {
    var _ref60;

    var _this60;

    _classCallCheck(this, Tracking_71);

    for (var _len60 = arguments.length, args = new Array(_len60 > 2 ? _len60 - 2 : 0), _key60 = 2; _key60 < _len60; _key60++) {
      args[_key60 - 2] = arguments[_key60];
    }

    _this60 = _possibleConstructorReturn(this, (_ref60 = Tracking_71.__proto__ || Object.getPrototypeOf(Tracking_71)).call.apply(_ref60, [this, n, p].concat(args)));
    _this60.parent = p;
    return _this60;
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
function (_VastElement61) {
  _inherits(TrackingEvents_70, _VastElement61);

  /**
   * @param {string} n
   * @param {Companion_62} p
   */
  function TrackingEvents_70(n, p) {
    var _ref61;

    var _this61;

    _classCallCheck(this, TrackingEvents_70);

    for (var _len61 = arguments.length, args = new Array(_len61 > 2 ? _len61 - 2 : 0), _key61 = 2; _key61 < _len61; _key61++) {
      args[_key61 - 2] = arguments[_key61];
    }

    _this61 = _possibleConstructorReturn(this, (_ref61 = TrackingEvents_70.__proto__ || Object.getPrototypeOf(TrackingEvents_70)).call.apply(_ref61, [this, n, p].concat(args)));
    _this61.parent = p;
    return _this61;
  }
  /** 
   * @param {string} content
   * @param {{event:("creativeView")}} attributes
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
     * @param {{event:("creativeView")}} attributes
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

var Companion_62 =
/*#__PURE__*/
function (_VastElement62) {
  _inherits(Companion_62, _VastElement62);

  /**
   * @param {string} n
   * @param {CompanionAds_61} p
   */
  function Companion_62(n, p) {
    var _ref62;

    var _this62;

    _classCallCheck(this, Companion_62);

    for (var _len62 = arguments.length, args = new Array(_len62 > 2 ? _len62 - 2 : 0), _key62 = 2; _key62 < _len62; _key62++) {
      args[_key62 - 2] = arguments[_key62];
    }

    _this62 = _possibleConstructorReturn(this, (_ref62 = Companion_62.__proto__ || Object.getPrototypeOf(Companion_62)).call.apply(_ref62, [this, n, p].concat(args)));
    _this62.parent = p;
    return _this62;
  }
  /** 
   * @param {string} content
   * @param {{creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash")}} attributes
   * @returns {StaticResource_63} 
   */


  _createClass(Companion_62, [{
    key: "attachStaticResource",
    value: function attachStaticResource(content, attributes) {
      var newElem = new StaticResource_63('StaticResource', this, {
        "attrs": ["creativeType"]
        /*: Infos*/

      }, content, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @param {{creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash")}} attributes
     * @returns {Companion_62} 
     */

  }, {
    key: "addStaticResource",
    value: function addStaticResource(content, attributes) {
      return this.attachStaticResource(content, attributes).and();
    }
    /** 
     * @param {string} content
     * @returns {IFrameResource_64} 
     */

  }, {
    key: "attachIFrameResource",
    value: function attachIFrameResource(content) {
      var newElem = new IFrameResource_64('IFrameResource', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {Companion_62} 
     */

  }, {
    key: "addIFrameResource",
    value: function addIFrameResource(content) {
      return this.attachIFrameResource(content).and();
    }
    /** 
     * @param {string} content
     * @returns {HTMLResource_65} 
     */

  }, {
    key: "attachHTMLResource",
    value: function attachHTMLResource(content) {
      var newElem = new HTMLResource_65('HTMLResource', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {Companion_62} 
     */

  }, {
    key: "addHTMLResource",
    value: function addHTMLResource(content) {
      return this.attachHTMLResource(content).and();
    }
    /** 
     * @param {string} content
     * @param {{xmlEncoded: string}} attributes
     * @returns {AdParameters_66} 
     */

  }, {
    key: "attachAdParameters",
    value: function attachAdParameters(content, attributes) {
      var newElem = new AdParameters_66('AdParameters', this, {
        "attrs": ["xmlEncoded"]
        /*: Infos*/

      }, content, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @param {{xmlEncoded: string}} attributes
     * @returns {Companion_62} 
     */

  }, {
    key: "addAdParameters",
    value: function addAdParameters(content, attributes) {
      return this.attachAdParameters(content, attributes).and();
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
     * @returns {Companion_62} 
     */

  }, {
    key: "addAltText",
    value: function addAltText(content) {
      return this.attachAltText(content).and();
    }
    /** 
     * @param {string} content
     * @returns {CompanionClickThrough_68} 
     */

  }, {
    key: "attachCompanionClickThrough",
    value: function attachCompanionClickThrough(content) {
      var newElem = new CompanionClickThrough_68('CompanionClickThrough', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {Companion_62} 
     */

  }, {
    key: "addCompanionClickThrough",
    value: function addCompanionClickThrough(content) {
      return this.attachCompanionClickThrough(content).and();
    }
    /** 
     * @param {string} content
     * @param {{id: string}} attributes
     * @returns {CompanionClickTracking_69} 
     */

  }, {
    key: "attachCompanionClickTracking",
    value: function attachCompanionClickTracking(content, attributes) {
      var newElem = new CompanionClickTracking_69('CompanionClickTracking', this, {
        "attrs": ["id"]
        /*: Infos*/

      }, content, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @param {{id: string}} attributes
     * @returns {Companion_62} 
     */

  }, {
    key: "addCompanionClickTracking",
    value: function addCompanionClickTracking(content, attributes) {
      return this.attachCompanionClickTracking(content, attributes).and();
    }
    /** 
     * @returns {TrackingEvents_70} 
     */

  }, {
    key: "attachTrackingEvents",
    value: function attachTrackingEvents() {
      var newElem = new TrackingEvents_70('TrackingEvents', this, {}
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

  return Companion_62;
}(VastElement);

var CompanionAds_61 =
/*#__PURE__*/
function (_VastElement63) {
  _inherits(CompanionAds_61, _VastElement63);

  /**
   * @param {string} n
   * @param {Creative_29} p
   */
  function CompanionAds_61(n, p) {
    var _ref63;

    var _this63;

    _classCallCheck(this, CompanionAds_61);

    for (var _len63 = arguments.length, args = new Array(_len63 > 2 ? _len63 - 2 : 0), _key63 = 2; _key63 < _len63; _key63++) {
      args[_key63 - 2] = arguments[_key63];
    }

    _this63 = _possibleConstructorReturn(this, (_ref63 = CompanionAds_61.__proto__ || Object.getPrototypeOf(CompanionAds_61)).call.apply(_ref63, [this, n, p].concat(args)));
    _this63.parent = p;
    return _this63;
  }
  /** 
   * @param {{id: string, width: string, height: string, assetWidth: string, assetHeight: string, expandedWidth: string, expandedHeight: string, apiFramework: string, adSlotID: string, pxratio: string}} attributes
   * @returns {Companion_62} 
   */


  _createClass(CompanionAds_61, [{
    key: "attachCompanion",
    value: function attachCompanion(attributes) {
      var newElem = new Companion_62('Companion', this, {
        "attrs": ["id", "width", "height", "assetWidth", "assetHeight", "expandedWidth", "expandedHeight", "apiFramework", "adSlotID", "pxratio"]
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

  return CompanionAds_61;
}(VastElement);

var Creative_29 =
/*#__PURE__*/
function (_VastElement64) {
  _inherits(Creative_29, _VastElement64);

  /**
   * @param {string} n
   * @param {Creatives_28} p
   */
  function Creative_29(n, p) {
    var _ref64;

    var _this64;

    _classCallCheck(this, Creative_29);

    for (var _len64 = arguments.length, args = new Array(_len64 > 2 ? _len64 - 2 : 0), _key64 = 2; _key64 < _len64; _key64++) {
      args[_key64 - 2] = arguments[_key64];
    }

    _this64 = _possibleConstructorReturn(this, (_ref64 = Creative_29.__proto__ || Object.getPrototypeOf(Creative_29)).call.apply(_ref64, [this, n, p].concat(args)));
    _this64.parent = p;
    return _this64;
  }
  /** @description required in Vast 4
   * @param {string} content
   * @param {{idRegistry: string, idValue: string}} attributes
   * @returns {UniversalAdId_30} 
   */


  _createClass(Creative_29, [{
    key: "attachUniversalAdId",
    value: function attachUniversalAdId(content, attributes) {
      var newElem = new UniversalAdId_30('UniversalAdId', this, {
        "attrs": ["idRegistry", "idValue"]
        /*: Infos*/

      }, content, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** @description required in Vast 4
     * @param {string} content
     * @param {{idRegistry: string, idValue: string}} attributes
     * @returns {Creative_29} 
     */

  }, {
    key: "addUniversalAdId",
    value: function addUniversalAdId(content, attributes) {
      return this.attachUniversalAdId(content, attributes).and();
    }
    /** 
     * @returns {CreativeExtensions_31} 
     */

  }, {
    key: "attachCreativeExtensions",
    value: function attachCreativeExtensions() {
      var newElem = new CreativeExtensions_31('CreativeExtensions', this, {}
      /*: Infos*/
      );
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {{skipoffset: string}} attributes
     * @returns {Linear_33} 
     */

  }, {
    key: "attachLinear",
    value: function attachLinear(attributes) {
      var newElem = new Linear_33('Linear', this, {
        "attrs": ["skipoffset"]
        /*: Infos*/

      }, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @returns {NonLinearAds_55} 
     */

  }, {
    key: "attachNonLinearAds",
    value: function attachNonLinearAds() {
      var newElem = new NonLinearAds_55('NonLinearAds', this, {}
      /*: Infos*/
      );
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {{required:("all"|"any"|"none")}} attributes
     * @returns {CompanionAds_61} 
     */

  }, {
    key: "attachCompanionAds",
    value: function attachCompanionAds(attributes) {
      var newElem = new CompanionAds_61('CompanionAds', this, {
        "attrs": ["required"]
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

  return Creative_29;
}(VastElement);

var Creatives_28 =
/*#__PURE__*/
function (_VastElement65) {
  _inherits(Creatives_28, _VastElement65);

  /**
   * @param {string} n
   * @param {InLine_7} p
   */
  function Creatives_28(n, p) {
    var _ref65;

    var _this65;

    _classCallCheck(this, Creatives_28);

    for (var _len65 = arguments.length, args = new Array(_len65 > 2 ? _len65 - 2 : 0), _key65 = 2; _key65 < _len65; _key65++) {
      args[_key65 - 2] = arguments[_key65];
    }

    _this65 = _possibleConstructorReturn(this, (_ref65 = Creatives_28.__proto__ || Object.getPrototypeOf(Creatives_28)).call.apply(_ref65, [this, n, p].concat(args)));
    _this65.parent = p;
    return _this65;
  }
  /** 
   * @param {{id: string, sequence: string, adId: string, apiFramework: string}} attributes
   * @returns {Creative_29} 
   */


  _createClass(Creatives_28, [{
    key: "attachCreative",
    value: function attachCreative(attributes) {
      var newElem = new Creative_29('Creative', this, {
        "attrs": ["id", "sequence", "adId", "apiFramework"]
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

  return Creatives_28;
}(VastElement);

var InLine_7 =
/*#__PURE__*/
function (_VastElement66) {
  _inherits(InLine_7, _VastElement66);

  /**
   * @param {string} n
   * @param {Ad_6} p
   */
  function InLine_7(n, p) {
    var _ref66;

    var _this66;

    _classCallCheck(this, InLine_7);

    for (var _len66 = arguments.length, args = new Array(_len66 > 2 ? _len66 - 2 : 0), _key66 = 2; _key66 < _len66; _key66++) {
      args[_key66 - 2] = arguments[_key66];
    }

    _this66 = _possibleConstructorReturn(this, (_ref66 = InLine_7.__proto__ || Object.getPrototypeOf(InLine_7)).call.apply(_ref66, [this, n, p].concat(args)));
    _this66.parent = p;
    return _this66;
  }
  /** @description required in Vast 4
   * @param {string} content
   * @param {{version: string}} attributes
   * @returns {AdSystem_8} 
   */


  _createClass(InLine_7, [{
    key: "attachAdSystem",
    value: function attachAdSystem(content, attributes) {
      var newElem = new AdSystem_8('AdSystem', this, {
        "attrs": ["version"]
        /*: Infos*/

      }, content, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** @description required in Vast 4
     * @param {string} content
     * @param {{version: string}} attributes
     * @returns {InLine_7} 
     */

  }, {
    key: "addAdSystem",
    value: function addAdSystem(content, attributes) {
      return this.attachAdSystem(content, attributes).and();
    }
    /** @description required in Vast 4
     * @param {string} content
     * @returns {AdTitle_9} 
     */

  }, {
    key: "attachAdTitle",
    value: function attachAdTitle(content) {
      var newElem = new AdTitle_9('AdTitle', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** @description required in Vast 4
     * @param {string} content
     * @returns {InLine_7} 
     */

  }, {
    key: "addAdTitle",
    value: function addAdTitle(content) {
      return this.attachAdTitle(content).and();
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
     * @returns {InLine_7} 
     */

  }, {
    key: "addImpression",
    value: function addImpression(content, attributes) {
      return this.attachImpression(content, attributes).and();
    }
    /** 
     * @param {string} content
     * @param {{authority: string}} attributes
     * @returns {Category_11} 
     */

  }, {
    key: "attachCategory",
    value: function attachCategory(content, attributes) {
      var newElem = new Category_11('Category', this, {
        "attrs": ["authority"]
        /*: Infos*/

      }, content, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @param {{authority: string}} attributes
     * @returns {InLine_7} 
     */

  }, {
    key: "addCategory",
    value: function addCategory(content, attributes) {
      return this.attachCategory(content, attributes).and();
    }
    /** 
     * @param {string} content
     * @returns {Description_12} 
     */

  }, {
    key: "attachDescription",
    value: function attachDescription(content) {
      var newElem = new Description_12('Description', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {InLine_7} 
     */

  }, {
    key: "addDescription",
    value: function addDescription(content) {
      return this.attachDescription(content).and();
    }
    /** 
     * @param {string} content
     * @returns {Advertiser_13} 
     */

  }, {
    key: "attachAdvertiser",
    value: function attachAdvertiser(content) {
      var newElem = new Advertiser_13('Advertiser', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {InLine_7} 
     */

  }, {
    key: "addAdvertiser",
    value: function addAdvertiser(content) {
      return this.attachAdvertiser(content).and();
    }
    /** 
     * @param {string} content
     * @param {{currency: string, model:("CPM"|"CPC"|"CPE"|"CPV")}} attributes
     * @returns {Pricing_14} 
     */

  }, {
    key: "attachPricing",
    value: function attachPricing(content, attributes) {
      var newElem = new Pricing_14('Pricing', this, {
        "attrs": ["currency", "model"]
        /*: Infos*/

      }, content, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @param {{currency: string, model:("CPM"|"CPC"|"CPE"|"CPV")}} attributes
     * @returns {InLine_7} 
     */

  }, {
    key: "addPricing",
    value: function addPricing(content, attributes) {
      return this.attachPricing(content, attributes).and();
    }
    /** 
     * @param {string} content
     * @param {{type: string}} attributes
     * @returns {Survey_15} 
     */

  }, {
    key: "attachSurvey",
    value: function attachSurvey(content, attributes) {
      var newElem = new Survey_15('Survey', this, {
        "attrs": ["type"]
        /*: Infos*/

      }, content, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @param {{type: string}} attributes
     * @returns {InLine_7} 
     */

  }, {
    key: "addSurvey",
    value: function addSurvey(content, attributes) {
      return this.attachSurvey(content, attributes).and();
    }
    /** 
     * @param {string} content
     * @returns {Error_16} 
     */

  }, {
    key: "attachError",
    value: function attachError(content) {
      var newElem = new Error_16('Error', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {InLine_7} 
     */

  }, {
    key: "addError",
    value: function addError(content) {
      return this.attachError(content).and();
    }
    /** 
     * @param {{id: string}} attributes
     * @returns {ViewableImpression_17} 
     */

  }, {
    key: "attachViewableImpression",
    value: function attachViewableImpression(attributes) {
      var newElem = new ViewableImpression_17('ViewableImpression', this, {
        "attrs": ["id"]
        /*: Infos*/

      }, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @returns {AdVerifications_21} 
     */

  }, {
    key: "attachAdVerifications",
    value: function attachAdVerifications() {
      var newElem = new AdVerifications_21('AdVerifications', this, {}
      /*: Infos*/
      );
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @returns {Extensions_26} 
     */

  }, {
    key: "attachExtensions",
    value: function attachExtensions() {
      var newElem = new Extensions_26('Extensions', this, {}
      /*: Infos*/
      );
      this.childs.push(newElem);
      return newElem;
    }
    /** @description required in Vast 4
     * @returns {Creatives_28} 
     */

  }, {
    key: "attachCreatives",
    value: function attachCreatives() {
      var newElem = new Creatives_28('Creatives', this, {}
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

  return InLine_7;
}(VastElement);

var Impression_73 =
/*#__PURE__*/
function (_VastElement67) {
  _inherits(Impression_73, _VastElement67);

  /**
   * @param {string} n
   * @param {Wrapper_72} p
   */
  function Impression_73(n, p) {
    var _ref67;

    var _this67;

    _classCallCheck(this, Impression_73);

    for (var _len67 = arguments.length, args = new Array(_len67 > 2 ? _len67 - 2 : 0), _key67 = 2; _key67 < _len67; _key67++) {
      args[_key67 - 2] = arguments[_key67];
    }

    _this67 = _possibleConstructorReturn(this, (_ref67 = Impression_73.__proto__ || Object.getPrototypeOf(Impression_73)).call.apply(_ref67, [this, n, p].concat(args)));
    _this67.parent = p;
    return _this67;
  }

  _createClass(Impression_73, [{
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

  return Impression_73;
}(VastElement);

var VASTAdTagURI_74 =
/*#__PURE__*/
function (_VastElement68) {
  _inherits(VASTAdTagURI_74, _VastElement68);

  /**
   * @param {string} n
   * @param {Wrapper_72} p
   */
  function VASTAdTagURI_74(n, p) {
    var _ref68;

    var _this68;

    _classCallCheck(this, VASTAdTagURI_74);

    for (var _len68 = arguments.length, args = new Array(_len68 > 2 ? _len68 - 2 : 0), _key68 = 2; _key68 < _len68; _key68++) {
      args[_key68 - 2] = arguments[_key68];
    }

    _this68 = _possibleConstructorReturn(this, (_ref68 = VASTAdTagURI_74.__proto__ || Object.getPrototypeOf(VASTAdTagURI_74)).call.apply(_ref68, [this, n, p].concat(args)));
    _this68.parent = p;
    return _this68;
  }

  _createClass(VASTAdTagURI_74, [{
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

  return VASTAdTagURI_74;
}(VastElement);

var AdSystem_75 =
/*#__PURE__*/
function (_VastElement69) {
  _inherits(AdSystem_75, _VastElement69);

  /**
   * @param {string} n
   * @param {Wrapper_72} p
   */
  function AdSystem_75(n, p) {
    var _ref69;

    var _this69;

    _classCallCheck(this, AdSystem_75);

    for (var _len69 = arguments.length, args = new Array(_len69 > 2 ? _len69 - 2 : 0), _key69 = 2; _key69 < _len69; _key69++) {
      args[_key69 - 2] = arguments[_key69];
    }

    _this69 = _possibleConstructorReturn(this, (_ref69 = AdSystem_75.__proto__ || Object.getPrototypeOf(AdSystem_75)).call.apply(_ref69, [this, n, p].concat(args)));
    _this69.parent = p;
    return _this69;
  }

  _createClass(AdSystem_75, [{
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

  return AdSystem_75;
}(VastElement);

var Pricing_76 =
/*#__PURE__*/
function (_VastElement70) {
  _inherits(Pricing_76, _VastElement70);

  /**
   * @param {string} n
   * @param {Wrapper_72} p
   */
  function Pricing_76(n, p) {
    var _ref70;

    var _this70;

    _classCallCheck(this, Pricing_76);

    for (var _len70 = arguments.length, args = new Array(_len70 > 2 ? _len70 - 2 : 0), _key70 = 2; _key70 < _len70; _key70++) {
      args[_key70 - 2] = arguments[_key70];
    }

    _this70 = _possibleConstructorReturn(this, (_ref70 = Pricing_76.__proto__ || Object.getPrototypeOf(Pricing_76)).call.apply(_ref70, [this, n, p].concat(args)));
    _this70.parent = p;
    return _this70;
  }

  _createClass(Pricing_76, [{
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

  return Pricing_76;
}(VastElement);

var Error_77 =
/*#__PURE__*/
function (_VastElement71) {
  _inherits(Error_77, _VastElement71);

  /**
   * @param {string} n
   * @param {Wrapper_72} p
   */
  function Error_77(n, p) {
    var _ref71;

    var _this71;

    _classCallCheck(this, Error_77);

    for (var _len71 = arguments.length, args = new Array(_len71 > 2 ? _len71 - 2 : 0), _key71 = 2; _key71 < _len71; _key71++) {
      args[_key71 - 2] = arguments[_key71];
    }

    _this71 = _possibleConstructorReturn(this, (_ref71 = Error_77.__proto__ || Object.getPrototypeOf(Error_77)).call.apply(_ref71, [this, n, p].concat(args)));
    _this71.parent = p;
    return _this71;
  }

  _createClass(Error_77, [{
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

  return Error_77;
}(VastElement);

var Viewable_79 =
/*#__PURE__*/
function (_VastElement72) {
  _inherits(Viewable_79, _VastElement72);

  /**
   * @param {string} n
   * @param {ViewableImpression_78} p
   */
  function Viewable_79(n, p) {
    var _ref72;

    var _this72;

    _classCallCheck(this, Viewable_79);

    for (var _len72 = arguments.length, args = new Array(_len72 > 2 ? _len72 - 2 : 0), _key72 = 2; _key72 < _len72; _key72++) {
      args[_key72 - 2] = arguments[_key72];
    }

    _this72 = _possibleConstructorReturn(this, (_ref72 = Viewable_79.__proto__ || Object.getPrototypeOf(Viewable_79)).call.apply(_ref72, [this, n, p].concat(args)));
    _this72.parent = p;
    return _this72;
  }

  _createClass(Viewable_79, [{
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

  return Viewable_79;
}(VastElement);

var NotViewable_80 =
/*#__PURE__*/
function (_VastElement73) {
  _inherits(NotViewable_80, _VastElement73);

  /**
   * @param {string} n
   * @param {ViewableImpression_78} p
   */
  function NotViewable_80(n, p) {
    var _ref73;

    var _this73;

    _classCallCheck(this, NotViewable_80);

    for (var _len73 = arguments.length, args = new Array(_len73 > 2 ? _len73 - 2 : 0), _key73 = 2; _key73 < _len73; _key73++) {
      args[_key73 - 2] = arguments[_key73];
    }

    _this73 = _possibleConstructorReturn(this, (_ref73 = NotViewable_80.__proto__ || Object.getPrototypeOf(NotViewable_80)).call.apply(_ref73, [this, n, p].concat(args)));
    _this73.parent = p;
    return _this73;
  }

  _createClass(NotViewable_80, [{
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

  return NotViewable_80;
}(VastElement);

var ViewUndetermined_81 =
/*#__PURE__*/
function (_VastElement74) {
  _inherits(ViewUndetermined_81, _VastElement74);

  /**
   * @param {string} n
   * @param {ViewableImpression_78} p
   */
  function ViewUndetermined_81(n, p) {
    var _ref74;

    var _this74;

    _classCallCheck(this, ViewUndetermined_81);

    for (var _len74 = arguments.length, args = new Array(_len74 > 2 ? _len74 - 2 : 0), _key74 = 2; _key74 < _len74; _key74++) {
      args[_key74 - 2] = arguments[_key74];
    }

    _this74 = _possibleConstructorReturn(this, (_ref74 = ViewUndetermined_81.__proto__ || Object.getPrototypeOf(ViewUndetermined_81)).call.apply(_ref74, [this, n, p].concat(args)));
    _this74.parent = p;
    return _this74;
  }

  _createClass(ViewUndetermined_81, [{
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

  return ViewUndetermined_81;
}(VastElement);

var ViewableImpression_78 =
/*#__PURE__*/
function (_VastElement75) {
  _inherits(ViewableImpression_78, _VastElement75);

  /**
   * @param {string} n
   * @param {Wrapper_72} p
   */
  function ViewableImpression_78(n, p) {
    var _ref75;

    var _this75;

    _classCallCheck(this, ViewableImpression_78);

    for (var _len75 = arguments.length, args = new Array(_len75 > 2 ? _len75 - 2 : 0), _key75 = 2; _key75 < _len75; _key75++) {
      args[_key75 - 2] = arguments[_key75];
    }

    _this75 = _possibleConstructorReturn(this, (_ref75 = ViewableImpression_78.__proto__ || Object.getPrototypeOf(ViewableImpression_78)).call.apply(_ref75, [this, n, p].concat(args)));
    _this75.parent = p;
    return _this75;
  }
  /** 
   * @param {string} content
   * @returns {Viewable_79} 
   */


  _createClass(ViewableImpression_78, [{
    key: "attachViewable",
    value: function attachViewable(content) {
      var newElem = new Viewable_79('Viewable', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {ViewableImpression_78} 
     */

  }, {
    key: "addViewable",
    value: function addViewable(content) {
      return this.attachViewable(content).and();
    }
    /** 
     * @param {string} content
     * @returns {NotViewable_80} 
     */

  }, {
    key: "attachNotViewable",
    value: function attachNotViewable(content) {
      var newElem = new NotViewable_80('NotViewable', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {ViewableImpression_78} 
     */

  }, {
    key: "addNotViewable",
    value: function addNotViewable(content) {
      return this.attachNotViewable(content).and();
    }
    /** 
     * @param {string} content
     * @returns {ViewUndetermined_81} 
     */

  }, {
    key: "attachViewUndetermined",
    value: function attachViewUndetermined(content) {
      var newElem = new ViewUndetermined_81('ViewUndetermined', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {ViewableImpression_78} 
     */

  }, {
    key: "addViewUndetermined",
    value: function addViewUndetermined(content) {
      return this.attachViewUndetermined(content).and();
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

  return ViewableImpression_78;
}(VastElement);

var ViewableImpression_84 =
/*#__PURE__*/
function (_VastElement76) {
  _inherits(ViewableImpression_84, _VastElement76);

  /**
   * @param {string} n
   * @param {Verification_83} p
   */
  function ViewableImpression_84(n, p) {
    var _ref76;

    var _this76;

    _classCallCheck(this, ViewableImpression_84);

    for (var _len76 = arguments.length, args = new Array(_len76 > 2 ? _len76 - 2 : 0), _key76 = 2; _key76 < _len76; _key76++) {
      args[_key76 - 2] = arguments[_key76];
    }

    _this76 = _possibleConstructorReturn(this, (_ref76 = ViewableImpression_84.__proto__ || Object.getPrototypeOf(ViewableImpression_84)).call.apply(_ref76, [this, n, p].concat(args)));
    _this76.parent = p;
    return _this76;
  }

  _createClass(ViewableImpression_84, [{
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

  return ViewableImpression_84;
}(VastElement);

var Verification_83 =
/*#__PURE__*/
function (_VastElement77) {
  _inherits(Verification_83, _VastElement77);

  /**
   * @param {string} n
   * @param {AdVerifications_82} p
   */
  function Verification_83(n, p) {
    var _ref77;

    var _this77;

    _classCallCheck(this, Verification_83);

    for (var _len77 = arguments.length, args = new Array(_len77 > 2 ? _len77 - 2 : 0), _key77 = 2; _key77 < _len77; _key77++) {
      args[_key77 - 2] = arguments[_key77];
    }

    _this77 = _possibleConstructorReturn(this, (_ref77 = Verification_83.__proto__ || Object.getPrototypeOf(Verification_83)).call.apply(_ref77, [this, n, p].concat(args)));
    _this77.parent = p;
    return _this77;
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {ViewableImpression_84} 
   */


  _createClass(Verification_83, [{
    key: "attachViewableImpression",
    value: function attachViewableImpression(content, attributes) {
      var newElem = new ViewableImpression_84('ViewableImpression', this, {
        "attrs": ["id"]
        /*: Infos*/

      }, content, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @param {{id: string}} attributes
     * @returns {Verification_83} 
     */

  }, {
    key: "addViewableImpression",
    value: function addViewableImpression(content, attributes) {
      return this.attachViewableImpression(content, attributes).and();
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

  return Verification_83;
}(VastElement);

var AdVerifications_82 =
/*#__PURE__*/
function (_VastElement78) {
  _inherits(AdVerifications_82, _VastElement78);

  /**
   * @param {string} n
   * @param {Wrapper_72} p
   */
  function AdVerifications_82(n, p) {
    var _ref78;

    var _this78;

    _classCallCheck(this, AdVerifications_82);

    for (var _len78 = arguments.length, args = new Array(_len78 > 2 ? _len78 - 2 : 0), _key78 = 2; _key78 < _len78; _key78++) {
      args[_key78 - 2] = arguments[_key78];
    }

    _this78 = _possibleConstructorReturn(this, (_ref78 = AdVerifications_82.__proto__ || Object.getPrototypeOf(AdVerifications_82)).call.apply(_ref78, [this, n, p].concat(args)));
    _this78.parent = p;
    return _this78;
  }
  /** 
   * @param {{vendor: string}} attributes
   * @returns {Verification_83} 
   */


  _createClass(AdVerifications_82, [{
    key: "attachVerification",
    value: function attachVerification(attributes) {
      var newElem = new Verification_83('Verification', this, {
        "attrs": ["vendor"]
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

  return AdVerifications_82;
}(VastElement);

var Extension_86 =
/*#__PURE__*/
function (_VastElement79) {
  _inherits(Extension_86, _VastElement79);

  /**
   * @param {string} n
   * @param {Extensions_85} p
   */
  function Extension_86(n, p) {
    var _ref79;

    var _this79;

    _classCallCheck(this, Extension_86);

    for (var _len79 = arguments.length, args = new Array(_len79 > 2 ? _len79 - 2 : 0), _key79 = 2; _key79 < _len79; _key79++) {
      args[_key79 - 2] = arguments[_key79];
    }

    _this79 = _possibleConstructorReturn(this, (_ref79 = Extension_86.__proto__ || Object.getPrototypeOf(Extension_86)).call.apply(_ref79, [this, n, p].concat(args)));
    _this79.parent = p;
    return _this79;
  }

  _createClass(Extension_86, [{
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

  return Extension_86;
}(VastElement);

var Extensions_85 =
/*#__PURE__*/
function (_VastElement80) {
  _inherits(Extensions_85, _VastElement80);

  /**
   * @param {string} n
   * @param {Wrapper_72} p
   */
  function Extensions_85(n, p) {
    var _ref80;

    var _this80;

    _classCallCheck(this, Extensions_85);

    for (var _len80 = arguments.length, args = new Array(_len80 > 2 ? _len80 - 2 : 0), _key80 = 2; _key80 < _len80; _key80++) {
      args[_key80 - 2] = arguments[_key80];
    }

    _this80 = _possibleConstructorReturn(this, (_ref80 = Extensions_85.__proto__ || Object.getPrototypeOf(Extensions_85)).call.apply(_ref80, [this, n, p].concat(args)));
    _this80.parent = p;
    return _this80;
  }
  /** 
   * @param {string} content
   * @param {{type: string}} attributes
   * @returns {Extension_86} 
   */


  _createClass(Extensions_85, [{
    key: "attachExtension",
    value: function attachExtension(content, attributes) {
      var newElem = new Extension_86('Extension', this, {
        "attrs": ["type"]
        /*: Infos*/

      }, content, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @param {{type: string}} attributes
     * @returns {Extensions_85} 
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

  return Extensions_85;
}(VastElement);

var Tracking_91 =
/*#__PURE__*/
function (_VastElement81) {
  _inherits(Tracking_91, _VastElement81);

  /**
   * @param {string} n
   * @param {TrackingEvents_90} p
   */
  function Tracking_91(n, p) {
    var _ref81;

    var _this81;

    _classCallCheck(this, Tracking_91);

    for (var _len81 = arguments.length, args = new Array(_len81 > 2 ? _len81 - 2 : 0), _key81 = 2; _key81 < _len81; _key81++) {
      args[_key81 - 2] = arguments[_key81];
    }

    _this81 = _possibleConstructorReturn(this, (_ref81 = Tracking_91.__proto__ || Object.getPrototypeOf(Tracking_91)).call.apply(_ref81, [this, n, p].concat(args)));
    _this81.parent = p;
    return _this81;
  }

  _createClass(Tracking_91, [{
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

  return Tracking_91;
}(VastElement);

var TrackingEvents_90 =
/*#__PURE__*/
function (_VastElement82) {
  _inherits(TrackingEvents_90, _VastElement82);

  /**
   * @param {string} n
   * @param {Linear_89} p
   */
  function TrackingEvents_90(n, p) {
    var _ref82;

    var _this82;

    _classCallCheck(this, TrackingEvents_90);

    for (var _len82 = arguments.length, args = new Array(_len82 > 2 ? _len82 - 2 : 0), _key82 = 2; _key82 < _len82; _key82++) {
      args[_key82 - 2] = arguments[_key82];
    }

    _this82 = _possibleConstructorReturn(this, (_ref82 = TrackingEvents_90.__proto__ || Object.getPrototypeOf(TrackingEvents_90)).call.apply(_ref82, [this, n, p].concat(args)));
    _this82.parent = p;
    return _this82;
  }
  /** 
   * @param {string} content
   * @param {{offset: string, event:("mute"|"unmute"|"pause"|"resume"|"rewind"|"skip"|"playerExpand"|"playerCollapse"|"otherAdInteraction"|"start"|"firstQuartile"|"midpoint"|"thirdQuartile"|"complete"|"acceptInvitationLinear"|"timeSpentViewing"|"progress")}} attributes
   * @returns {Tracking_91} 
   */


  _createClass(TrackingEvents_90, [{
    key: "attachTracking",
    value: function attachTracking(content, attributes) {
      var newElem = new Tracking_91('Tracking', this, {
        "attrs": ["offset", "event"]
        /*: Infos*/

      }, content, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @param {{offset: string, event:("mute"|"unmute"|"pause"|"resume"|"rewind"|"skip"|"playerExpand"|"playerCollapse"|"otherAdInteraction"|"start"|"firstQuartile"|"midpoint"|"thirdQuartile"|"complete"|"acceptInvitationLinear"|"timeSpentViewing"|"progress")}} attributes
     * @returns {TrackingEvents_90} 
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

  return TrackingEvents_90;
}(VastElement);

var ClickTracking_93 =
/*#__PURE__*/
function (_VastElement83) {
  _inherits(ClickTracking_93, _VastElement83);

  /**
   * @param {string} n
   * @param {VideoClicks_92} p
   */
  function ClickTracking_93(n, p) {
    var _ref83;

    var _this83;

    _classCallCheck(this, ClickTracking_93);

    for (var _len83 = arguments.length, args = new Array(_len83 > 2 ? _len83 - 2 : 0), _key83 = 2; _key83 < _len83; _key83++) {
      args[_key83 - 2] = arguments[_key83];
    }

    _this83 = _possibleConstructorReturn(this, (_ref83 = ClickTracking_93.__proto__ || Object.getPrototypeOf(ClickTracking_93)).call.apply(_ref83, [this, n, p].concat(args)));
    _this83.parent = p;
    return _this83;
  }

  _createClass(ClickTracking_93, [{
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

  return ClickTracking_93;
}(VastElement);

var CustomClick_94 =
/*#__PURE__*/
function (_VastElement84) {
  _inherits(CustomClick_94, _VastElement84);

  /**
   * @param {string} n
   * @param {VideoClicks_92} p
   */
  function CustomClick_94(n, p) {
    var _ref84;

    var _this84;

    _classCallCheck(this, CustomClick_94);

    for (var _len84 = arguments.length, args = new Array(_len84 > 2 ? _len84 - 2 : 0), _key84 = 2; _key84 < _len84; _key84++) {
      args[_key84 - 2] = arguments[_key84];
    }

    _this84 = _possibleConstructorReturn(this, (_ref84 = CustomClick_94.__proto__ || Object.getPrototypeOf(CustomClick_94)).call.apply(_ref84, [this, n, p].concat(args)));
    _this84.parent = p;
    return _this84;
  }

  _createClass(CustomClick_94, [{
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

  return CustomClick_94;
}(VastElement);

var VideoClicks_92 =
/*#__PURE__*/
function (_VastElement85) {
  _inherits(VideoClicks_92, _VastElement85);

  /**
   * @param {string} n
   * @param {Linear_89} p
   */
  function VideoClicks_92(n, p) {
    var _ref85;

    var _this85;

    _classCallCheck(this, VideoClicks_92);

    for (var _len85 = arguments.length, args = new Array(_len85 > 2 ? _len85 - 2 : 0), _key85 = 2; _key85 < _len85; _key85++) {
      args[_key85 - 2] = arguments[_key85];
    }

    _this85 = _possibleConstructorReturn(this, (_ref85 = VideoClicks_92.__proto__ || Object.getPrototypeOf(VideoClicks_92)).call.apply(_ref85, [this, n, p].concat(args)));
    _this85.parent = p;
    return _this85;
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {ClickTracking_93} 
   */


  _createClass(VideoClicks_92, [{
    key: "attachClickTracking",
    value: function attachClickTracking(content, attributes) {
      var newElem = new ClickTracking_93('ClickTracking', this, {
        "attrs": ["id"]
        /*: Infos*/

      }, content, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @param {{id: string}} attributes
     * @returns {VideoClicks_92} 
     */

  }, {
    key: "addClickTracking",
    value: function addClickTracking(content, attributes) {
      return this.attachClickTracking(content, attributes).and();
    }
    /** 
     * @param {string} content
     * @param {{id: string}} attributes
     * @returns {CustomClick_94} 
     */

  }, {
    key: "attachCustomClick",
    value: function attachCustomClick(content, attributes) {
      var newElem = new CustomClick_94('CustomClick', this, {
        "attrs": ["id"]
        /*: Infos*/

      }, content, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @param {{id: string}} attributes
     * @returns {VideoClicks_92} 
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

  return VideoClicks_92;
}(VastElement);

var StaticResource_97 =
/*#__PURE__*/
function (_VastElement86) {
  _inherits(StaticResource_97, _VastElement86);

  /**
   * @param {string} n
   * @param {Icon_96} p
   */
  function StaticResource_97(n, p) {
    var _ref86;

    var _this86;

    _classCallCheck(this, StaticResource_97);

    for (var _len86 = arguments.length, args = new Array(_len86 > 2 ? _len86 - 2 : 0), _key86 = 2; _key86 < _len86; _key86++) {
      args[_key86 - 2] = arguments[_key86];
    }

    _this86 = _possibleConstructorReturn(this, (_ref86 = StaticResource_97.__proto__ || Object.getPrototypeOf(StaticResource_97)).call.apply(_ref86, [this, n, p].concat(args)));
    _this86.parent = p;
    return _this86;
  }

  _createClass(StaticResource_97, [{
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

  return StaticResource_97;
}(VastElement);

var IFrameResource_98 =
/*#__PURE__*/
function (_VastElement87) {
  _inherits(IFrameResource_98, _VastElement87);

  /**
   * @param {string} n
   * @param {Icon_96} p
   */
  function IFrameResource_98(n, p) {
    var _ref87;

    var _this87;

    _classCallCheck(this, IFrameResource_98);

    for (var _len87 = arguments.length, args = new Array(_len87 > 2 ? _len87 - 2 : 0), _key87 = 2; _key87 < _len87; _key87++) {
      args[_key87 - 2] = arguments[_key87];
    }

    _this87 = _possibleConstructorReturn(this, (_ref87 = IFrameResource_98.__proto__ || Object.getPrototypeOf(IFrameResource_98)).call.apply(_ref87, [this, n, p].concat(args)));
    _this87.parent = p;
    return _this87;
  }

  _createClass(IFrameResource_98, [{
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

  return IFrameResource_98;
}(VastElement);

var HTMLResource_99 =
/*#__PURE__*/
function (_VastElement88) {
  _inherits(HTMLResource_99, _VastElement88);

  /**
   * @param {string} n
   * @param {Icon_96} p
   */
  function HTMLResource_99(n, p) {
    var _ref88;

    var _this88;

    _classCallCheck(this, HTMLResource_99);

    for (var _len88 = arguments.length, args = new Array(_len88 > 2 ? _len88 - 2 : 0), _key88 = 2; _key88 < _len88; _key88++) {
      args[_key88 - 2] = arguments[_key88];
    }

    _this88 = _possibleConstructorReturn(this, (_ref88 = HTMLResource_99.__proto__ || Object.getPrototypeOf(HTMLResource_99)).call.apply(_ref88, [this, n, p].concat(args)));
    _this88.parent = p;
    return _this88;
  }

  _createClass(HTMLResource_99, [{
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

  return HTMLResource_99;
}(VastElement);

var IconClickThrough_101 =
/*#__PURE__*/
function (_VastElement89) {
  _inherits(IconClickThrough_101, _VastElement89);

  /**
   * @param {string} n
   * @param {IconClicks_100} p
   */
  function IconClickThrough_101(n, p) {
    var _ref89;

    var _this89;

    _classCallCheck(this, IconClickThrough_101);

    for (var _len89 = arguments.length, args = new Array(_len89 > 2 ? _len89 - 2 : 0), _key89 = 2; _key89 < _len89; _key89++) {
      args[_key89 - 2] = arguments[_key89];
    }

    _this89 = _possibleConstructorReturn(this, (_ref89 = IconClickThrough_101.__proto__ || Object.getPrototypeOf(IconClickThrough_101)).call.apply(_ref89, [this, n, p].concat(args)));
    _this89.parent = p;
    return _this89;
  }

  _createClass(IconClickThrough_101, [{
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

  return IconClickThrough_101;
}(VastElement);

var IconClickTracking_102 =
/*#__PURE__*/
function (_VastElement90) {
  _inherits(IconClickTracking_102, _VastElement90);

  /**
   * @param {string} n
   * @param {IconClicks_100} p
   */
  function IconClickTracking_102(n, p) {
    var _ref90;

    var _this90;

    _classCallCheck(this, IconClickTracking_102);

    for (var _len90 = arguments.length, args = new Array(_len90 > 2 ? _len90 - 2 : 0), _key90 = 2; _key90 < _len90; _key90++) {
      args[_key90 - 2] = arguments[_key90];
    }

    _this90 = _possibleConstructorReturn(this, (_ref90 = IconClickTracking_102.__proto__ || Object.getPrototypeOf(IconClickTracking_102)).call.apply(_ref90, [this, n, p].concat(args)));
    _this90.parent = p;
    return _this90;
  }

  _createClass(IconClickTracking_102, [{
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

  return IconClickTracking_102;
}(VastElement);

var IconClicks_100 =
/*#__PURE__*/
function (_VastElement91) {
  _inherits(IconClicks_100, _VastElement91);

  /**
   * @param {string} n
   * @param {Icon_96} p
   */
  function IconClicks_100(n, p) {
    var _ref91;

    var _this91;

    _classCallCheck(this, IconClicks_100);

    for (var _len91 = arguments.length, args = new Array(_len91 > 2 ? _len91 - 2 : 0), _key91 = 2; _key91 < _len91; _key91++) {
      args[_key91 - 2] = arguments[_key91];
    }

    _this91 = _possibleConstructorReturn(this, (_ref91 = IconClicks_100.__proto__ || Object.getPrototypeOf(IconClicks_100)).call.apply(_ref91, [this, n, p].concat(args)));
    _this91.parent = p;
    return _this91;
  }
  /** 
   * @param {string} content
   * @returns {IconClickThrough_101} 
   */


  _createClass(IconClicks_100, [{
    key: "attachIconClickThrough",
    value: function attachIconClickThrough(content) {
      var newElem = new IconClickThrough_101('IconClickThrough', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {IconClicks_100} 
     */

  }, {
    key: "addIconClickThrough",
    value: function addIconClickThrough(content) {
      return this.attachIconClickThrough(content).and();
    }
    /** 
     * @param {string} content
     * @returns {IconClickTracking_102} 
     */

  }, {
    key: "attachIconClickTracking",
    value: function attachIconClickTracking(content) {
      var newElem = new IconClickTracking_102('IconClickTracking', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {IconClicks_100} 
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

  return IconClicks_100;
}(VastElement);

var IconViewTracking_103 =
/*#__PURE__*/
function (_VastElement92) {
  _inherits(IconViewTracking_103, _VastElement92);

  /**
   * @param {string} n
   * @param {Icon_96} p
   */
  function IconViewTracking_103(n, p) {
    var _ref92;

    var _this92;

    _classCallCheck(this, IconViewTracking_103);

    for (var _len92 = arguments.length, args = new Array(_len92 > 2 ? _len92 - 2 : 0), _key92 = 2; _key92 < _len92; _key92++) {
      args[_key92 - 2] = arguments[_key92];
    }

    _this92 = _possibleConstructorReturn(this, (_ref92 = IconViewTracking_103.__proto__ || Object.getPrototypeOf(IconViewTracking_103)).call.apply(_ref92, [this, n, p].concat(args)));
    _this92.parent = p;
    return _this92;
  }

  _createClass(IconViewTracking_103, [{
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

  return IconViewTracking_103;
}(VastElement);

var Icon_96 =
/*#__PURE__*/
function (_VastElement93) {
  _inherits(Icon_96, _VastElement93);

  /**
   * @param {string} n
   * @param {Icons_95} p
   */
  function Icon_96(n, p) {
    var _ref93;

    var _this93;

    _classCallCheck(this, Icon_96);

    for (var _len93 = arguments.length, args = new Array(_len93 > 2 ? _len93 - 2 : 0), _key93 = 2; _key93 < _len93; _key93++) {
      args[_key93 - 2] = arguments[_key93];
    }

    _this93 = _possibleConstructorReturn(this, (_ref93 = Icon_96.__proto__ || Object.getPrototypeOf(Icon_96)).call.apply(_ref93, [this, n, p].concat(args)));
    _this93.parent = p;
    return _this93;
  }
  /** 
   * @param {string} content
   * @param {{creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash")}} attributes
   * @returns {StaticResource_97} 
   */


  _createClass(Icon_96, [{
    key: "attachStaticResource",
    value: function attachStaticResource(content, attributes) {
      var newElem = new StaticResource_97('StaticResource', this, {
        "attrs": ["creativeType"]
        /*: Infos*/

      }, content, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @param {{creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash")}} attributes
     * @returns {Icon_96} 
     */

  }, {
    key: "addStaticResource",
    value: function addStaticResource(content, attributes) {
      return this.attachStaticResource(content, attributes).and();
    }
    /** 
     * @param {string} content
     * @returns {IFrameResource_98} 
     */

  }, {
    key: "attachIFrameResource",
    value: function attachIFrameResource(content) {
      var newElem = new IFrameResource_98('IFrameResource', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {Icon_96} 
     */

  }, {
    key: "addIFrameResource",
    value: function addIFrameResource(content) {
      return this.attachIFrameResource(content).and();
    }
    /** 
     * @param {string} content
     * @returns {HTMLResource_99} 
     */

  }, {
    key: "attachHTMLResource",
    value: function attachHTMLResource(content) {
      var newElem = new HTMLResource_99('HTMLResource', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {Icon_96} 
     */

  }, {
    key: "addHTMLResource",
    value: function addHTMLResource(content) {
      return this.attachHTMLResource(content).and();
    }
    /** 
     * @returns {IconClicks_100} 
     */

  }, {
    key: "attachIconClicks",
    value: function attachIconClicks() {
      var newElem = new IconClicks_100('IconClicks', this, {}
      /*: Infos*/
      );
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {IconViewTracking_103} 
     */

  }, {
    key: "attachIconViewTracking",
    value: function attachIconViewTracking(content) {
      var newElem = new IconViewTracking_103('IconViewTracking', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {Icon_96} 
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

  return Icon_96;
}(VastElement);

var Icons_95 =
/*#__PURE__*/
function (_VastElement94) {
  _inherits(Icons_95, _VastElement94);

  /**
   * @param {string} n
   * @param {Linear_89} p
   */
  function Icons_95(n, p) {
    var _ref94;

    var _this94;

    _classCallCheck(this, Icons_95);

    for (var _len94 = arguments.length, args = new Array(_len94 > 2 ? _len94 - 2 : 0), _key94 = 2; _key94 < _len94; _key94++) {
      args[_key94 - 2] = arguments[_key94];
    }

    _this94 = _possibleConstructorReturn(this, (_ref94 = Icons_95.__proto__ || Object.getPrototypeOf(Icons_95)).call.apply(_ref94, [this, n, p].concat(args)));
    _this94.parent = p;
    return _this94;
  }
  /** 
   * @param {{program: string, width: string, height: string, xPosition: string, yPosition: string, duration: string, offset: string, apiFramework: string, pxratio: string}} attributes
   * @returns {Icon_96} 
   */


  _createClass(Icons_95, [{
    key: "attachIcon",
    value: function attachIcon(attributes) {
      var newElem = new Icon_96('Icon', this, {
        "attrs": ["program", "width", "height", "xPosition", "yPosition", "duration", "offset", "apiFramework", "pxratio"]
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

  return Icons_95;
}(VastElement);

var InteractiveCreativeFile_104 =
/*#__PURE__*/
function (_VastElement95) {
  _inherits(InteractiveCreativeFile_104, _VastElement95);

  /**
   * @param {string} n
   * @param {Linear_89} p
   */
  function InteractiveCreativeFile_104(n, p) {
    var _ref95;

    var _this95;

    _classCallCheck(this, InteractiveCreativeFile_104);

    for (var _len95 = arguments.length, args = new Array(_len95 > 2 ? _len95 - 2 : 0), _key95 = 2; _key95 < _len95; _key95++) {
      args[_key95 - 2] = arguments[_key95];
    }

    _this95 = _possibleConstructorReturn(this, (_ref95 = InteractiveCreativeFile_104.__proto__ || Object.getPrototypeOf(InteractiveCreativeFile_104)).call.apply(_ref95, [this, n, p].concat(args)));
    _this95.parent = p;
    return _this95;
  }

  _createClass(InteractiveCreativeFile_104, [{
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

  return InteractiveCreativeFile_104;
}(VastElement);

var Linear_89 =
/*#__PURE__*/
function (_VastElement96) {
  _inherits(Linear_89, _VastElement96);

  /**
   * @param {string} n
   * @param {Creative_88} p
   */
  function Linear_89(n, p) {
    var _ref96;

    var _this96;

    _classCallCheck(this, Linear_89);

    for (var _len96 = arguments.length, args = new Array(_len96 > 2 ? _len96 - 2 : 0), _key96 = 2; _key96 < _len96; _key96++) {
      args[_key96 - 2] = arguments[_key96];
    }

    _this96 = _possibleConstructorReturn(this, (_ref96 = Linear_89.__proto__ || Object.getPrototypeOf(Linear_89)).call.apply(_ref96, [this, n, p].concat(args)));
    _this96.parent = p;
    return _this96;
  }
  /** 
   * @returns {TrackingEvents_90} 
   */


  _createClass(Linear_89, [{
    key: "attachTrackingEvents",
    value: function attachTrackingEvents() {
      var newElem = new TrackingEvents_90('TrackingEvents', this, {}
      /*: Infos*/
      );
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @returns {VideoClicks_92} 
     */

  }, {
    key: "attachVideoClicks",
    value: function attachVideoClicks() {
      var newElem = new VideoClicks_92('VideoClicks', this, {}
      /*: Infos*/
      );
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @returns {Icons_95} 
     */

  }, {
    key: "attachIcons",
    value: function attachIcons() {
      var newElem = new Icons_95('Icons', this, {}
      /*: Infos*/
      );
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {InteractiveCreativeFile_104} 
     */

  }, {
    key: "attachInteractiveCreativeFile",
    value: function attachInteractiveCreativeFile(content) {
      var newElem = new InteractiveCreativeFile_104('InteractiveCreativeFile', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {Linear_89} 
     */

  }, {
    key: "addInteractiveCreativeFile",
    value: function addInteractiveCreativeFile(content) {
      return this.attachInteractiveCreativeFile(content).and();
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

  return Linear_89;
}(VastElement);

var NonLinearClickThrough_107 =
/*#__PURE__*/
function (_VastElement97) {
  _inherits(NonLinearClickThrough_107, _VastElement97);

  /**
   * @param {string} n
   * @param {NonLinear_106} p
   */
  function NonLinearClickThrough_107(n, p) {
    var _ref97;

    var _this97;

    _classCallCheck(this, NonLinearClickThrough_107);

    for (var _len97 = arguments.length, args = new Array(_len97 > 2 ? _len97 - 2 : 0), _key97 = 2; _key97 < _len97; _key97++) {
      args[_key97 - 2] = arguments[_key97];
    }

    _this97 = _possibleConstructorReturn(this, (_ref97 = NonLinearClickThrough_107.__proto__ || Object.getPrototypeOf(NonLinearClickThrough_107)).call.apply(_ref97, [this, n, p].concat(args)));
    _this97.parent = p;
    return _this97;
  }

  _createClass(NonLinearClickThrough_107, [{
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

  return NonLinearClickThrough_107;
}(VastElement);

var NonLinearClickTracking_108 =
/*#__PURE__*/
function (_VastElement98) {
  _inherits(NonLinearClickTracking_108, _VastElement98);

  /**
   * @param {string} n
   * @param {NonLinear_106} p
   */
  function NonLinearClickTracking_108(n, p) {
    var _ref98;

    var _this98;

    _classCallCheck(this, NonLinearClickTracking_108);

    for (var _len98 = arguments.length, args = new Array(_len98 > 2 ? _len98 - 2 : 0), _key98 = 2; _key98 < _len98; _key98++) {
      args[_key98 - 2] = arguments[_key98];
    }

    _this98 = _possibleConstructorReturn(this, (_ref98 = NonLinearClickTracking_108.__proto__ || Object.getPrototypeOf(NonLinearClickTracking_108)).call.apply(_ref98, [this, n, p].concat(args)));
    _this98.parent = p;
    return _this98;
  }

  _createClass(NonLinearClickTracking_108, [{
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

  return NonLinearClickTracking_108;
}(VastElement);

var NonLinear_106 =
/*#__PURE__*/
function (_VastElement99) {
  _inherits(NonLinear_106, _VastElement99);

  /**
   * @param {string} n
   * @param {NonLinearAds_105} p
   */
  function NonLinear_106(n, p) {
    var _ref99;

    var _this99;

    _classCallCheck(this, NonLinear_106);

    for (var _len99 = arguments.length, args = new Array(_len99 > 2 ? _len99 - 2 : 0), _key99 = 2; _key99 < _len99; _key99++) {
      args[_key99 - 2] = arguments[_key99];
    }

    _this99 = _possibleConstructorReturn(this, (_ref99 = NonLinear_106.__proto__ || Object.getPrototypeOf(NonLinear_106)).call.apply(_ref99, [this, n, p].concat(args)));
    _this99.parent = p;
    return _this99;
  }
  /** 
   * @param {string} content
   * @returns {NonLinearClickThrough_107} 
   */


  _createClass(NonLinear_106, [{
    key: "attachNonLinearClickThrough",
    value: function attachNonLinearClickThrough(content) {
      var newElem = new NonLinearClickThrough_107('NonLinearClickThrough', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {NonLinear_106} 
     */

  }, {
    key: "addNonLinearClickThrough",
    value: function addNonLinearClickThrough(content) {
      return this.attachNonLinearClickThrough(content).and();
    }
    /** 
     * @param {string} content
     * @returns {NonLinearClickTracking_108} 
     */

  }, {
    key: "attachNonLinearClickTracking",
    value: function attachNonLinearClickTracking(content) {
      var newElem = new NonLinearClickTracking_108('NonLinearClickTracking', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {NonLinear_106} 
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

  return NonLinear_106;
}(VastElement);

var Tracking_110 =
/*#__PURE__*/
function (_VastElement100) {
  _inherits(Tracking_110, _VastElement100);

  /**
   * @param {string} n
   * @param {TrackingEvents_109} p
   */
  function Tracking_110(n, p) {
    var _ref100;

    var _this100;

    _classCallCheck(this, Tracking_110);

    for (var _len100 = arguments.length, args = new Array(_len100 > 2 ? _len100 - 2 : 0), _key100 = 2; _key100 < _len100; _key100++) {
      args[_key100 - 2] = arguments[_key100];
    }

    _this100 = _possibleConstructorReturn(this, (_ref100 = Tracking_110.__proto__ || Object.getPrototypeOf(Tracking_110)).call.apply(_ref100, [this, n, p].concat(args)));
    _this100.parent = p;
    return _this100;
  }

  _createClass(Tracking_110, [{
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

  return Tracking_110;
}(VastElement);

var TrackingEvents_109 =
/*#__PURE__*/
function (_VastElement101) {
  _inherits(TrackingEvents_109, _VastElement101);

  /**
   * @param {string} n
   * @param {NonLinearAds_105} p
   */
  function TrackingEvents_109(n, p) {
    var _ref101;

    var _this101;

    _classCallCheck(this, TrackingEvents_109);

    for (var _len101 = arguments.length, args = new Array(_len101 > 2 ? _len101 - 2 : 0), _key101 = 2; _key101 < _len101; _key101++) {
      args[_key101 - 2] = arguments[_key101];
    }

    _this101 = _possibleConstructorReturn(this, (_ref101 = TrackingEvents_109.__proto__ || Object.getPrototypeOf(TrackingEvents_109)).call.apply(_ref101, [this, n, p].concat(args)));
    _this101.parent = p;
    return _this101;
  }
  /** 
   * @param {string} content
   * @param {{event:("mute"|"unmute"|"pause"|"resume"|"rewind"|"skip"|"playerExpand"|"playerCollapse"|"otherAdInteraction"|"creativeView"|"acceptInvitation"|"adExpand"|"adCollapse"|"minimize"|"close"|"overlayViewDuration")}} attributes
   * @returns {Tracking_110} 
   */


  _createClass(TrackingEvents_109, [{
    key: "attachTracking",
    value: function attachTracking(content, attributes) {
      var newElem = new Tracking_110('Tracking', this, {
        "attrs": ["event"]
        /*: Infos*/

      }, content, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @param {{event:("mute"|"unmute"|"pause"|"resume"|"rewind"|"skip"|"playerExpand"|"playerCollapse"|"otherAdInteraction"|"creativeView"|"acceptInvitation"|"adExpand"|"adCollapse"|"minimize"|"close"|"overlayViewDuration")}} attributes
     * @returns {TrackingEvents_109} 
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

  return TrackingEvents_109;
}(VastElement);

var NonLinearAds_105 =
/*#__PURE__*/
function (_VastElement102) {
  _inherits(NonLinearAds_105, _VastElement102);

  /**
   * @param {string} n
   * @param {Creative_88} p
   */
  function NonLinearAds_105(n, p) {
    var _ref102;

    var _this102;

    _classCallCheck(this, NonLinearAds_105);

    for (var _len102 = arguments.length, args = new Array(_len102 > 2 ? _len102 - 2 : 0), _key102 = 2; _key102 < _len102; _key102++) {
      args[_key102 - 2] = arguments[_key102];
    }

    _this102 = _possibleConstructorReturn(this, (_ref102 = NonLinearAds_105.__proto__ || Object.getPrototypeOf(NonLinearAds_105)).call.apply(_ref102, [this, n, p].concat(args)));
    _this102.parent = p;
    return _this102;
  }
  /** 
   * @returns {NonLinear_106} 
   */


  _createClass(NonLinearAds_105, [{
    key: "attachNonLinear",
    value: function attachNonLinear() {
      var newElem = new NonLinear_106('NonLinear', this, {}
      /*: Infos*/
      );
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @returns {TrackingEvents_109} 
     */

  }, {
    key: "attachTrackingEvents",
    value: function attachTrackingEvents() {
      var newElem = new TrackingEvents_109('TrackingEvents', this, {}
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

  return NonLinearAds_105;
}(VastElement);

var StaticResource_113 =
/*#__PURE__*/
function (_VastElement103) {
  _inherits(StaticResource_113, _VastElement103);

  /**
   * @param {string} n
   * @param {Companion_112} p
   */
  function StaticResource_113(n, p) {
    var _ref103;

    var _this103;

    _classCallCheck(this, StaticResource_113);

    for (var _len103 = arguments.length, args = new Array(_len103 > 2 ? _len103 - 2 : 0), _key103 = 2; _key103 < _len103; _key103++) {
      args[_key103 - 2] = arguments[_key103];
    }

    _this103 = _possibleConstructorReturn(this, (_ref103 = StaticResource_113.__proto__ || Object.getPrototypeOf(StaticResource_113)).call.apply(_ref103, [this, n, p].concat(args)));
    _this103.parent = p;
    return _this103;
  }

  _createClass(StaticResource_113, [{
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

  return StaticResource_113;
}(VastElement);

var IFrameResource_114 =
/*#__PURE__*/
function (_VastElement104) {
  _inherits(IFrameResource_114, _VastElement104);

  /**
   * @param {string} n
   * @param {Companion_112} p
   */
  function IFrameResource_114(n, p) {
    var _ref104;

    var _this104;

    _classCallCheck(this, IFrameResource_114);

    for (var _len104 = arguments.length, args = new Array(_len104 > 2 ? _len104 - 2 : 0), _key104 = 2; _key104 < _len104; _key104++) {
      args[_key104 - 2] = arguments[_key104];
    }

    _this104 = _possibleConstructorReturn(this, (_ref104 = IFrameResource_114.__proto__ || Object.getPrototypeOf(IFrameResource_114)).call.apply(_ref104, [this, n, p].concat(args)));
    _this104.parent = p;
    return _this104;
  }

  _createClass(IFrameResource_114, [{
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

  return IFrameResource_114;
}(VastElement);

var HTMLResource_115 =
/*#__PURE__*/
function (_VastElement105) {
  _inherits(HTMLResource_115, _VastElement105);

  /**
   * @param {string} n
   * @param {Companion_112} p
   */
  function HTMLResource_115(n, p) {
    var _ref105;

    var _this105;

    _classCallCheck(this, HTMLResource_115);

    for (var _len105 = arguments.length, args = new Array(_len105 > 2 ? _len105 - 2 : 0), _key105 = 2; _key105 < _len105; _key105++) {
      args[_key105 - 2] = arguments[_key105];
    }

    _this105 = _possibleConstructorReturn(this, (_ref105 = HTMLResource_115.__proto__ || Object.getPrototypeOf(HTMLResource_115)).call.apply(_ref105, [this, n, p].concat(args)));
    _this105.parent = p;
    return _this105;
  }

  _createClass(HTMLResource_115, [{
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

  return HTMLResource_115;
}(VastElement);

var AdParameters_116 =
/*#__PURE__*/
function (_VastElement106) {
  _inherits(AdParameters_116, _VastElement106);

  /**
   * @param {string} n
   * @param {Companion_112} p
   */
  function AdParameters_116(n, p) {
    var _ref106;

    var _this106;

    _classCallCheck(this, AdParameters_116);

    for (var _len106 = arguments.length, args = new Array(_len106 > 2 ? _len106 - 2 : 0), _key106 = 2; _key106 < _len106; _key106++) {
      args[_key106 - 2] = arguments[_key106];
    }

    _this106 = _possibleConstructorReturn(this, (_ref106 = AdParameters_116.__proto__ || Object.getPrototypeOf(AdParameters_116)).call.apply(_ref106, [this, n, p].concat(args)));
    _this106.parent = p;
    return _this106;
  }

  _createClass(AdParameters_116, [{
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

  return AdParameters_116;
}(VastElement);

var AltText_117 =
/*#__PURE__*/
function (_VastElement107) {
  _inherits(AltText_117, _VastElement107);

  /**
   * @param {string} n
   * @param {Companion_112} p
   */
  function AltText_117(n, p) {
    var _ref107;

    var _this107;

    _classCallCheck(this, AltText_117);

    for (var _len107 = arguments.length, args = new Array(_len107 > 2 ? _len107 - 2 : 0), _key107 = 2; _key107 < _len107; _key107++) {
      args[_key107 - 2] = arguments[_key107];
    }

    _this107 = _possibleConstructorReturn(this, (_ref107 = AltText_117.__proto__ || Object.getPrototypeOf(AltText_117)).call.apply(_ref107, [this, n, p].concat(args)));
    _this107.parent = p;
    return _this107;
  }

  _createClass(AltText_117, [{
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

  return AltText_117;
}(VastElement);

var CompanionClickThrough_118 =
/*#__PURE__*/
function (_VastElement108) {
  _inherits(CompanionClickThrough_118, _VastElement108);

  /**
   * @param {string} n
   * @param {Companion_112} p
   */
  function CompanionClickThrough_118(n, p) {
    var _ref108;

    var _this108;

    _classCallCheck(this, CompanionClickThrough_118);

    for (var _len108 = arguments.length, args = new Array(_len108 > 2 ? _len108 - 2 : 0), _key108 = 2; _key108 < _len108; _key108++) {
      args[_key108 - 2] = arguments[_key108];
    }

    _this108 = _possibleConstructorReturn(this, (_ref108 = CompanionClickThrough_118.__proto__ || Object.getPrototypeOf(CompanionClickThrough_118)).call.apply(_ref108, [this, n, p].concat(args)));
    _this108.parent = p;
    return _this108;
  }

  _createClass(CompanionClickThrough_118, [{
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

  return CompanionClickThrough_118;
}(VastElement);

var CompanionClickTracking_119 =
/*#__PURE__*/
function (_VastElement109) {
  _inherits(CompanionClickTracking_119, _VastElement109);

  /**
   * @param {string} n
   * @param {Companion_112} p
   */
  function CompanionClickTracking_119(n, p) {
    var _ref109;

    var _this109;

    _classCallCheck(this, CompanionClickTracking_119);

    for (var _len109 = arguments.length, args = new Array(_len109 > 2 ? _len109 - 2 : 0), _key109 = 2; _key109 < _len109; _key109++) {
      args[_key109 - 2] = arguments[_key109];
    }

    _this109 = _possibleConstructorReturn(this, (_ref109 = CompanionClickTracking_119.__proto__ || Object.getPrototypeOf(CompanionClickTracking_119)).call.apply(_ref109, [this, n, p].concat(args)));
    _this109.parent = p;
    return _this109;
  }

  _createClass(CompanionClickTracking_119, [{
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

  return CompanionClickTracking_119;
}(VastElement);

var Tracking_121 =
/*#__PURE__*/
function (_VastElement110) {
  _inherits(Tracking_121, _VastElement110);

  /**
   * @param {string} n
   * @param {TrackingEvents_120} p
   */
  function Tracking_121(n, p) {
    var _ref110;

    var _this110;

    _classCallCheck(this, Tracking_121);

    for (var _len110 = arguments.length, args = new Array(_len110 > 2 ? _len110 - 2 : 0), _key110 = 2; _key110 < _len110; _key110++) {
      args[_key110 - 2] = arguments[_key110];
    }

    _this110 = _possibleConstructorReturn(this, (_ref110 = Tracking_121.__proto__ || Object.getPrototypeOf(Tracking_121)).call.apply(_ref110, [this, n, p].concat(args)));
    _this110.parent = p;
    return _this110;
  }

  _createClass(Tracking_121, [{
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

  return Tracking_121;
}(VastElement);

var TrackingEvents_120 =
/*#__PURE__*/
function (_VastElement111) {
  _inherits(TrackingEvents_120, _VastElement111);

  /**
   * @param {string} n
   * @param {Companion_112} p
   */
  function TrackingEvents_120(n, p) {
    var _ref111;

    var _this111;

    _classCallCheck(this, TrackingEvents_120);

    for (var _len111 = arguments.length, args = new Array(_len111 > 2 ? _len111 - 2 : 0), _key111 = 2; _key111 < _len111; _key111++) {
      args[_key111 - 2] = arguments[_key111];
    }

    _this111 = _possibleConstructorReturn(this, (_ref111 = TrackingEvents_120.__proto__ || Object.getPrototypeOf(TrackingEvents_120)).call.apply(_ref111, [this, n, p].concat(args)));
    _this111.parent = p;
    return _this111;
  }
  /** 
   * @param {string} content
   * @param {{event:("creativeView")}} attributes
   * @returns {Tracking_121} 
   */


  _createClass(TrackingEvents_120, [{
    key: "attachTracking",
    value: function attachTracking(content, attributes) {
      var newElem = new Tracking_121('Tracking', this, {
        "attrs": ["event"]
        /*: Infos*/

      }, content, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @param {{event:("creativeView")}} attributes
     * @returns {TrackingEvents_120} 
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

  return TrackingEvents_120;
}(VastElement);

var Companion_112 =
/*#__PURE__*/
function (_VastElement112) {
  _inherits(Companion_112, _VastElement112);

  /**
   * @param {string} n
   * @param {CompanionAds_111} p
   */
  function Companion_112(n, p) {
    var _ref112;

    var _this112;

    _classCallCheck(this, Companion_112);

    for (var _len112 = arguments.length, args = new Array(_len112 > 2 ? _len112 - 2 : 0), _key112 = 2; _key112 < _len112; _key112++) {
      args[_key112 - 2] = arguments[_key112];
    }

    _this112 = _possibleConstructorReturn(this, (_ref112 = Companion_112.__proto__ || Object.getPrototypeOf(Companion_112)).call.apply(_ref112, [this, n, p].concat(args)));
    _this112.parent = p;
    return _this112;
  }
  /** 
   * @param {string} content
   * @param {{creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash")}} attributes
   * @returns {StaticResource_113} 
   */


  _createClass(Companion_112, [{
    key: "attachStaticResource",
    value: function attachStaticResource(content, attributes) {
      var newElem = new StaticResource_113('StaticResource', this, {
        "attrs": ["creativeType"]
        /*: Infos*/

      }, content, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @param {{creativeType:("image/gif"|"image/jpeg"|"image/jpg"|"image/png"|"application/x-javascript"|"application/x-shockwave-flash")}} attributes
     * @returns {Companion_112} 
     */

  }, {
    key: "addStaticResource",
    value: function addStaticResource(content, attributes) {
      return this.attachStaticResource(content, attributes).and();
    }
    /** 
     * @param {string} content
     * @returns {IFrameResource_114} 
     */

  }, {
    key: "attachIFrameResource",
    value: function attachIFrameResource(content) {
      var newElem = new IFrameResource_114('IFrameResource', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {Companion_112} 
     */

  }, {
    key: "addIFrameResource",
    value: function addIFrameResource(content) {
      return this.attachIFrameResource(content).and();
    }
    /** 
     * @param {string} content
     * @returns {HTMLResource_115} 
     */

  }, {
    key: "attachHTMLResource",
    value: function attachHTMLResource(content) {
      var newElem = new HTMLResource_115('HTMLResource', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {Companion_112} 
     */

  }, {
    key: "addHTMLResource",
    value: function addHTMLResource(content) {
      return this.attachHTMLResource(content).and();
    }
    /** 
     * @param {string} content
     * @param {{xmlEncoded: string}} attributes
     * @returns {AdParameters_116} 
     */

  }, {
    key: "attachAdParameters",
    value: function attachAdParameters(content, attributes) {
      var newElem = new AdParameters_116('AdParameters', this, {
        "attrs": ["xmlEncoded"]
        /*: Infos*/

      }, content, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @param {{xmlEncoded: string}} attributes
     * @returns {Companion_112} 
     */

  }, {
    key: "addAdParameters",
    value: function addAdParameters(content, attributes) {
      return this.attachAdParameters(content, attributes).and();
    }
    /** 
     * @param {string} content
     * @returns {AltText_117} 
     */

  }, {
    key: "attachAltText",
    value: function attachAltText(content) {
      var newElem = new AltText_117('AltText', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {Companion_112} 
     */

  }, {
    key: "addAltText",
    value: function addAltText(content) {
      return this.attachAltText(content).and();
    }
    /** 
     * @param {string} content
     * @returns {CompanionClickThrough_118} 
     */

  }, {
    key: "attachCompanionClickThrough",
    value: function attachCompanionClickThrough(content) {
      var newElem = new CompanionClickThrough_118('CompanionClickThrough', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {Companion_112} 
     */

  }, {
    key: "addCompanionClickThrough",
    value: function addCompanionClickThrough(content) {
      return this.attachCompanionClickThrough(content).and();
    }
    /** 
     * @param {string} content
     * @param {{id: string}} attributes
     * @returns {CompanionClickTracking_119} 
     */

  }, {
    key: "attachCompanionClickTracking",
    value: function attachCompanionClickTracking(content, attributes) {
      var newElem = new CompanionClickTracking_119('CompanionClickTracking', this, {
        "attrs": ["id"]
        /*: Infos*/

      }, content, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @param {{id: string}} attributes
     * @returns {Companion_112} 
     */

  }, {
    key: "addCompanionClickTracking",
    value: function addCompanionClickTracking(content, attributes) {
      return this.attachCompanionClickTracking(content, attributes).and();
    }
    /** 
     * @returns {TrackingEvents_120} 
     */

  }, {
    key: "attachTrackingEvents",
    value: function attachTrackingEvents() {
      var newElem = new TrackingEvents_120('TrackingEvents', this, {}
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

  return Companion_112;
}(VastElement);

var CompanionAds_111 =
/*#__PURE__*/
function (_VastElement113) {
  _inherits(CompanionAds_111, _VastElement113);

  /**
   * @param {string} n
   * @param {Creative_88} p
   */
  function CompanionAds_111(n, p) {
    var _ref113;

    var _this113;

    _classCallCheck(this, CompanionAds_111);

    for (var _len113 = arguments.length, args = new Array(_len113 > 2 ? _len113 - 2 : 0), _key113 = 2; _key113 < _len113; _key113++) {
      args[_key113 - 2] = arguments[_key113];
    }

    _this113 = _possibleConstructorReturn(this, (_ref113 = CompanionAds_111.__proto__ || Object.getPrototypeOf(CompanionAds_111)).call.apply(_ref113, [this, n, p].concat(args)));
    _this113.parent = p;
    return _this113;
  }
  /** 
   * @param {{id: string, width: string, height: string, assetWidth: string, assetHeight: string, expandedWidth: string, expandedHeight: string, apiFramework: string, adSlotID: string, logoTile: string, logoTitle: string, logoArtist: string, logoURL: string, pxratio: string}} attributes
   * @returns {Companion_112} 
   */


  _createClass(CompanionAds_111, [{
    key: "attachCompanion",
    value: function attachCompanion(attributes) {
      var newElem = new Companion_112('Companion', this, {
        "attrs": ["id", "width", "height", "assetWidth", "assetHeight", "expandedWidth", "expandedHeight", "apiFramework", "adSlotID", "logoTile", "logoTitle", "logoArtist", "logoURL", "pxratio"]
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

  return CompanionAds_111;
}(VastElement);

var Creative_88 =
/*#__PURE__*/
function (_VastElement114) {
  _inherits(Creative_88, _VastElement114);

  /**
   * @param {string} n
   * @param {Creatives_87} p
   */
  function Creative_88(n, p) {
    var _ref114;

    var _this114;

    _classCallCheck(this, Creative_88);

    for (var _len114 = arguments.length, args = new Array(_len114 > 2 ? _len114 - 2 : 0), _key114 = 2; _key114 < _len114; _key114++) {
      args[_key114 - 2] = arguments[_key114];
    }

    _this114 = _possibleConstructorReturn(this, (_ref114 = Creative_88.__proto__ || Object.getPrototypeOf(Creative_88)).call.apply(_ref114, [this, n, p].concat(args)));
    _this114.parent = p;
    return _this114;
  }
  /** 
   * @returns {Linear_89} 
   */


  _createClass(Creative_88, [{
    key: "attachLinear",
    value: function attachLinear() {
      var newElem = new Linear_89('Linear', this, {}
      /*: Infos*/
      );
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @returns {NonLinearAds_105} 
     */

  }, {
    key: "attachNonLinearAds",
    value: function attachNonLinearAds() {
      var newElem = new NonLinearAds_105('NonLinearAds', this, {}
      /*: Infos*/
      );
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {{required:("all"|"any"|"none")}} attributes
     * @returns {CompanionAds_111} 
     */

  }, {
    key: "attachCompanionAds",
    value: function attachCompanionAds(attributes) {
      var newElem = new CompanionAds_111('CompanionAds', this, {
        "attrs": ["required"]
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

  return Creative_88;
}(VastElement);

var Creatives_87 =
/*#__PURE__*/
function (_VastElement115) {
  _inherits(Creatives_87, _VastElement115);

  /**
   * @param {string} n
   * @param {Wrapper_72} p
   */
  function Creatives_87(n, p) {
    var _ref115;

    var _this115;

    _classCallCheck(this, Creatives_87);

    for (var _len115 = arguments.length, args = new Array(_len115 > 2 ? _len115 - 2 : 0), _key115 = 2; _key115 < _len115; _key115++) {
      args[_key115 - 2] = arguments[_key115];
    }

    _this115 = _possibleConstructorReturn(this, (_ref115 = Creatives_87.__proto__ || Object.getPrototypeOf(Creatives_87)).call.apply(_ref115, [this, n, p].concat(args)));
    _this115.parent = p;
    return _this115;
  }
  /** 
   * @param {{id: string, sequence: string, adId: string}} attributes
   * @returns {Creative_88} 
   */


  _createClass(Creatives_87, [{
    key: "attachCreative",
    value: function attachCreative(attributes) {
      var newElem = new Creative_88('Creative', this, {
        "attrs": ["id", "sequence", "adId"]
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

  return Creatives_87;
}(VastElement);

var Wrapper_72 =
/*#__PURE__*/
function (_VastElement116) {
  _inherits(Wrapper_72, _VastElement116);

  /**
   * @param {string} n
   * @param {Ad_6} p
   */
  function Wrapper_72(n, p) {
    var _ref116;

    var _this116;

    _classCallCheck(this, Wrapper_72);

    for (var _len116 = arguments.length, args = new Array(_len116 > 2 ? _len116 - 2 : 0), _key116 = 2; _key116 < _len116; _key116++) {
      args[_key116 - 2] = arguments[_key116];
    }

    _this116 = _possibleConstructorReturn(this, (_ref116 = Wrapper_72.__proto__ || Object.getPrototypeOf(Wrapper_72)).call.apply(_ref116, [this, n, p].concat(args)));
    _this116.parent = p;
    return _this116;
  }
  /** 
   * @param {string} content
   * @param {{id: string}} attributes
   * @returns {Impression_73} 
   */


  _createClass(Wrapper_72, [{
    key: "attachImpression",
    value: function attachImpression(content, attributes) {
      var newElem = new Impression_73('Impression', this, {
        "attrs": ["id"]
        /*: Infos*/

      }, content, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @param {{id: string}} attributes
     * @returns {Wrapper_72} 
     */

  }, {
    key: "addImpression",
    value: function addImpression(content, attributes) {
      return this.attachImpression(content, attributes).and();
    }
    /** @description required in Vast 4
     * @param {string} content
     * @returns {VASTAdTagURI_74} 
     */

  }, {
    key: "attachVASTAdTagURI",
    value: function attachVASTAdTagURI(content) {
      var newElem = new VASTAdTagURI_74('VASTAdTagURI', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** @description required in Vast 4
     * @param {string} content
     * @returns {Wrapper_72} 
     */

  }, {
    key: "addVASTAdTagURI",
    value: function addVASTAdTagURI(content) {
      return this.attachVASTAdTagURI(content).and();
    }
    /** @description required in Vast 4
     * @param {string} content
     * @param {{version: string}} attributes
     * @returns {AdSystem_75} 
     */

  }, {
    key: "attachAdSystem",
    value: function attachAdSystem(content, attributes) {
      var newElem = new AdSystem_75('AdSystem', this, {
        "attrs": ["version"]
        /*: Infos*/

      }, content, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** @description required in Vast 4
     * @param {string} content
     * @param {{version: string}} attributes
     * @returns {Wrapper_72} 
     */

  }, {
    key: "addAdSystem",
    value: function addAdSystem(content, attributes) {
      return this.attachAdSystem(content, attributes).and();
    }
    /** 
     * @param {string} content
     * @param {{currency: string, model:("CPM"|"CPC"|"CPE"|"CPV")}} attributes
     * @returns {Pricing_76} 
     */

  }, {
    key: "attachPricing",
    value: function attachPricing(content, attributes) {
      var newElem = new Pricing_76('Pricing', this, {
        "attrs": ["currency", "model"]
        /*: Infos*/

      }, content, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @param {{currency: string, model:("CPM"|"CPC"|"CPE"|"CPV")}} attributes
     * @returns {Wrapper_72} 
     */

  }, {
    key: "addPricing",
    value: function addPricing(content, attributes) {
      return this.attachPricing(content, attributes).and();
    }
    /** 
     * @param {string} content
     * @returns {Error_77} 
     */

  }, {
    key: "attachError",
    value: function attachError(content) {
      var newElem = new Error_77('Error', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {Wrapper_72} 
     */

  }, {
    key: "addError",
    value: function addError(content) {
      return this.attachError(content).and();
    }
    /** 
     * @param {{id: string}} attributes
     * @returns {ViewableImpression_78} 
     */

  }, {
    key: "attachViewableImpression",
    value: function attachViewableImpression(attributes) {
      var newElem = new ViewableImpression_78('ViewableImpression', this, {
        "attrs": ["id"]
        /*: Infos*/

      }, attributes);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @returns {AdVerifications_82} 
     */

  }, {
    key: "attachAdVerifications",
    value: function attachAdVerifications() {
      var newElem = new AdVerifications_82('AdVerifications', this, {}
      /*: Infos*/
      );
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @returns {Extensions_85} 
     */

  }, {
    key: "attachExtensions",
    value: function attachExtensions() {
      var newElem = new Extensions_85('Extensions', this, {}
      /*: Infos*/
      );
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @returns {Creatives_87} 
     */

  }, {
    key: "attachCreatives",
    value: function attachCreatives() {
      var newElem = new Creatives_87('Creatives', this, {}
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

  return Wrapper_72;
}(VastElement);

var Ad_6 =
/*#__PURE__*/
function (_VastElement117) {
  _inherits(Ad_6, _VastElement117);

  /**
   * @param {string} n
   * @param {VAST_4} p
   */
  function Ad_6(n, p) {
    var _ref117;

    var _this117;

    _classCallCheck(this, Ad_6);

    for (var _len117 = arguments.length, args = new Array(_len117 > 2 ? _len117 - 2 : 0), _key117 = 2; _key117 < _len117; _key117++) {
      args[_key117 - 2] = arguments[_key117];
    }

    _this117 = _possibleConstructorReturn(this, (_ref117 = Ad_6.__proto__ || Object.getPrototypeOf(Ad_6)).call.apply(_ref117, [this, n, p].concat(args)));
    _this117.parent = p;
    return _this117;
  }
  /** 
   * @returns {InLine_7} 
   */


  _createClass(Ad_6, [{
    key: "attachInLine",
    value: function attachInLine() {
      var newElem = new InLine_7('InLine', this, {}
      /*: Infos*/
      );
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {{followAdditonalWrappers: string, allowMultipleAds: string, fallbackOnNoAd: string}} attributes
     * @returns {Wrapper_72} 
     */

  }, {
    key: "attachWrapper",
    value: function attachWrapper(attributes) {
      var newElem = new Wrapper_72('Wrapper', this, {
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

  return Ad_6;
}(VastElement);

var VAST_4 =
/*#__PURE__*/
function (_VastElement118) {
  _inherits(VAST_4, _VastElement118);

  /**
   * @param {string} n
   * @param {apiv4} p
   */
  function VAST_4(n, p) {
    var _ref118;

    var _this118;

    _classCallCheck(this, VAST_4);

    for (var _len118 = arguments.length, args = new Array(_len118 > 2 ? _len118 - 2 : 0), _key118 = 2; _key118 < _len118; _key118++) {
      args[_key118 - 2] = arguments[_key118];
    }

    _this118 = _possibleConstructorReturn(this, (_ref118 = VAST_4.__proto__ || Object.getPrototypeOf(VAST_4)).call.apply(_ref118, [this, n, p].concat(args)));
    _this118.parent = p;
    return _this118;
  }
  /** 
   * @param {string} content
   * @returns {Error_5} 
   */


  _createClass(VAST_4, [{
    key: "attachError",
    value: function attachError(content) {
      var newElem = new Error_5('Error', this, {}
      /*: Infos*/
      , content);
      this.childs.push(newElem);
      return newElem;
    }
    /** 
     * @param {string} content
     * @returns {VAST_4} 
     */

  }, {
    key: "addError",
    value: function addError(content) {
      return this.attachError(content).and();
    }
    /** 
     * @param {{id: string, sequence: string, conditionalAd: string}} attributes
     * @returns {Ad_6} 
     */

  }, {
    key: "attachAd",
    value: function attachAd(attributes) {
      var newElem = new Ad_6('Ad', this, {
        "attrs": ["id", "sequence", "conditionalAd"]
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

  return VAST_4;
}(VastElement);

var apiv4 =
/*#__PURE__*/
function (_VastElement119) {
  _inherits(apiv4, _VastElement119);

  /**
   * @param {string} n
   * @param {apiv4} p
   */
  function apiv4(n, p) {
    var _ref119;

    var _this119;

    _classCallCheck(this, apiv4);

    for (var _len119 = arguments.length, args = new Array(_len119 > 2 ? _len119 - 2 : 0), _key119 = 2; _key119 < _len119; _key119++) {
      args[_key119 - 2] = arguments[_key119];
    }

    _this119 = _possibleConstructorReturn(this, (_ref119 = apiv4.__proto__ || Object.getPrototypeOf(apiv4)).call.apply(_ref119, [this, n, p].concat(args)));
    _this119.parent = p;
    return _this119;
  }
  /** 
   * @param {{version:("4.0")}} attributes
   * @returns {VAST_4} 
   */


  _createClass(apiv4, [{
    key: "attachVAST",
    value: function attachVAST(attributes) {
      var newElem = new VAST_4('VAST', this, {
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

  return apiv4;
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
                      "required": {
                        "UniversalAdId": {
                          "attrsRequired": {
                            "idRegistry": null,
                            "idValue": null
                          }
                        }
                      },
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
                              },
                              "follow": {
                                "Mezzanine": {},
                                "InteractiveCreativeFile": {}
                              }
                            }
                          },
                          "follow": {
                            "AdParameters": {},
                            "VideoClicks": {
                              "follow": {
                                "ClickThrough": {},
                                "ClickTracking": {},
                                "CustomClick": {}
                              }
                            },
                            "TrackingEvents": {
                              "follow": {
                                "Tracking": {
                                  "attrsRequired": {
                                    "event": ["mute", "unmute", "pause", "resume", "rewind", "skip", "playerExpand", "playerCollapse", "otherAdInteraction", "start", "firstQuartile", "midpoint", "thirdQuartile", "complete", "acceptInvitationLinear", "timeSpentViewing", "progress"]
                                  }
                                }
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
                                  }
                                }
                              }
                            }
                          }
                        },
                        "NonLinearAds": {
                          "follow": {
                            "NonLinear": {
                              "follow": {
                                "NonLinearClickThrough": {},
                                "NonLinearClickTracking": {}
                              }
                            },
                            "TrackingEvents": {
                              "follow": {
                                "Tracking": {
                                  "attrsRequired": {
                                    "event": ["mute", "unmute", "pause", "resume", "rewind", "skip", "playerExpand", "playerCollapse", "otherAdInteraction", "creativeView", "acceptInvitation", "adExpand", "adCollapse", "minimize", "close", "overlayViewDuration"]
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
                "Category": {
                  "attrsRequired": {
                    "authority": null
                  }
                },
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
                "ViewableImpression": {
                  "follow": {
                    "Viewable": {},
                    "NotViewable": {},
                    "ViewUndetermined": {}
                  }
                },
                "AdVerifications": {
                  "follow": {
                    "Verification": {
                      "follow": {
                        "JavaScriptResource": {},
                        "FlashResource": {},
                        "ViewableImpression": {}
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
            },
            "Wrapper": {
              "required": {
                "VASTAdTagURI": {},
                "AdSystem": {}
              },
              "alo": {
                "Impression": {}
              },
              "follow": {
                "Pricing": {
                  "attrsRequired": {
                    "currency": null,
                    "model": ["CPM", "CPC", "CPE", "CPV"]
                  }
                },
                "Error": {},
                "ViewableImpression": {
                  "follow": {
                    "Viewable": {},
                    "NotViewable": {},
                    "ViewUndetermined": {}
                  }
                },
                "AdVerifications": {
                  "follow": {
                    "Verification": {
                      "follow": {
                        "ViewableImpression": {}
                      }
                    }
                  }
                },
                "Extensions": {
                  "follow": {
                    "Extension": {}
                  }
                },
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
                                    "event": ["mute", "unmute", "pause", "resume", "rewind", "skip", "playerExpand", "playerCollapse", "otherAdInteraction", "start", "firstQuartile", "midpoint", "thirdQuartile", "complete", "acceptInvitationLinear", "timeSpentViewing", "progress"]
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
                                  "follow": {
                                    "StaticResource": {
                                      "attrsRequired": {
                                        "creativeType": ["image/gif", "image/jpeg", "image/jpg", "image/png", "application/x-javascript", "application/x-shockwave-flash"]
                                      }
                                    },
                                    "IFrameResource": {},
                                    "HTMLResource": {},
                                    "IconClicks": {
                                      "follow": {
                                        "IconClickThrough": {},
                                        "IconClickTracking": {}
                                      }
                                    },
                                    "IconViewTracking": {}
                                  }
                                }
                              }
                            },
                            "InteractiveCreativeFile": {}
                          }
                        },
                        "NonLinearAds": {
                          "follow": {
                            "NonLinear": {
                              "follow": {
                                "NonLinearClickThrough": {},
                                "NonLinearClickTracking": {}
                              }
                            },
                            "TrackingEvents": {
                              "follow": {
                                "Tracking": {
                                  "attrsRequired": {
                                    "event": ["mute", "unmute", "pause", "resume", "rewind", "skip", "playerExpand", "playerCollapse", "otherAdInteraction", "creativeView", "acceptInvitation", "adExpand", "adCollapse", "minimize", "close", "overlayViewDuration"]
                                  }
                                }
                              }
                            }
                          }
                        },
                        "CompanionAds": {
                          "follow": {
                            "Companion": {
                              "follow": {
                                "StaticResource": {
                                  "attrsRequired": {
                                    "creativeType": ["image/gif", "image/jpeg", "image/jpg", "image/png", "application/x-javascript", "application/x-shockwave-flash"]
                                  }
                                },
                                "IFrameResource": {},
                                "HTMLResource": {},
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
      "follow": {
        "Error": {}
      },
      "attrsRequired": {
        "version": ["4.0"]
      }
    }
  }
};
module.exports = {
  apiv4: apiv4,
  validator: validator
};