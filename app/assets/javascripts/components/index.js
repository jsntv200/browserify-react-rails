// babel-polyfill is mandatory to use es7 async functions
require('babel-polyfill');

// It's not possible to use the import syntax in the root file,
// use require('...').default instead. Load all modules here.
const HelloWorld = require('./hello-world').default;

// Expose all modules through App to limit the amount of Globals
window.App = {
  HelloWorld,
};
