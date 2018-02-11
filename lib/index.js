
module.exports = {
  /**
   * @param {{ cdata: true, logWarn: true, validateOnBuild: false, throwOnError: false, spaces: 2}} options
   */
  v2: (options = {}) => {
    const { apiv2 } = require('../build/api/vast2');
    const root = new apiv2();
    root.parseOptions(options);
    return root.attachVAST({ version: '2.0' });
  },
  /**
   * @param {{ cdata: true, logWarn: true, validateOnBuild: false, throwOnError: false, spaces: 2}} options
   */
  v3: (options = {}) => {
    const { apiv3 } = require('../build/api/vast3');
    const root = new apiv3();
    root.parseOptions(options);
    return root.attachVAST({ version: '3.0' });
  },
  /**
   * @param {{ cdata: true, logWarn: true, validateOnBuild: false, throwOnError: false, spaces: 2}} options
   */
  v4: (options = {}) => {
    const { apiv4 } = require('../build/api/vast4');
    const root = new apiv4();
    root.parseOptions(options);
    return root.attachVAST({ version: '4.0' });
  },
}