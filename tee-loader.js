const loaderUtils = require('loader-utils');
const path = require('path');

module.exports = function(source) {
  const options = loaderUtils.getOptions(this) || {label: ''};
  console.groupCollapsed(`[tee-loader: ${options.label}]: ${path.basename(this.resource)}`);
  console.log(source);
  console.groupEnd();
  return source;
}