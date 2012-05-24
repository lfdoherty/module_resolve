

var testmodule = require('./test/testmodule')

require('./resolve')

var otherModulePath = testmodule.module.resolve('./othertestmodule')

console.log('found other module: ' + otherModulePath)
