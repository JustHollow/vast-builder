module.exports = {
  /**
   * @param {{ cdata: true, logWarn: true, validateOnBuild: false, throwOnError: false, spaces: 2}} options
   */
  v2: function v2(options) {
    options = options || {};

    var api = require('../build/api/vast2');

    var root = new api.apiv2();
    root.parseOptions(options);
    return root.attachVAST({
      version: '2.0'
    });
  },

  /**
   * @param {{ cdata: true, logWarn: true, validateOnBuild: false, throwOnError: false, spaces: 2}} options
   */
  v3: function v3(options) {
    options = options || {};

    var api = require('../build/api/vast3');

    var root = new api.apiv3();
    root.parseOptions(options);
    return root.attachVAST({
      version: '3.0'
    });
  },

  /**
   * @param {{ cdata: true, logWarn: true, validateOnBuild: false, throwOnError: false, spaces: 2}} options
   */
  v4: function v4(options) {
    options = options || {};

    var api = require('../build/api/vast4');

    var root = new api.apiv4();
    root.parseOptions(options);
    return root.attachVAST({
      version: '4.0'
    });
  },
  compat: function compat() {
    if (__dirname.indexOf('compat/lib') === -1) {
      return require('../compat/lib/index');
    }

    throw new Error('sorry, it seems you already are in the compatibility version');
  }
};