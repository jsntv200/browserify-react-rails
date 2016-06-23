//= require_self
//= require react-server
//= require react_ujs
//= require turbolinks

// Expose jQuery
window.$ = window.jQuery = require('jquery');

// Expose React for react_ujs
window.React = require('react');

// Require the rails unobtrusive javascript
require('jquery-ujs');

// Require our components
require('./components');
