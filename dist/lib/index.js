module.exports = {
  /**
   * @param {{ cdata: true, logWarn: true, validateOnBuild: false, throwOnError: false, spaces: 2}} options
   */
  v2: function v2() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var _require = require('../build/api/vast2'),
        apiv2 = _require.apiv2;

    var root = new apiv2();
    root.parseOptions(options);
    return root.attachVAST({
      version: '2.0'
    });
  },

  /**
   * @param {{ cdata: true, logWarn: true, validateOnBuild: false, throwOnError: false, spaces: 2}} options
   */
  v3: function v3() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var _require2 = require('../build/api/vast3'),
        apiv3 = _require2.apiv3;

    var root = new apiv3();
    root.parseOptions(options);
    return root.attachVAST({
      version: '3.0'
    });
  },

  /**
   * @param {{ cdata: true, logWarn: true, validateOnBuild: false, throwOnError: false, spaces: 2}} options
   */
  v4: function v4() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var _require3 = require('../build/api/vast4'),
        apiv4 = _require3.apiv4;

    var root = new apiv4();
    root.parseOptions(options);
    return root.attachVAST({
      version: '4.0'
    });
  }
};