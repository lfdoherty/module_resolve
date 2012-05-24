
var Module = require('module')

Module.prototype.resolve = function(path) {
  return Module._resolveFilename(path, this);
};
