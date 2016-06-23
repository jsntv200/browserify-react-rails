// babel-polyfill is mandatory to use es7 async functions
require('babel-polyfill');

// It's not possible to use the import syntax in the root file,
// use require('...').default instead.
window.App = {
  HelloWorld: require('./hello-world').default
};
