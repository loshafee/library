(function(l, i, v, e) { v = l.createElement(i); v.async = 1; v.src = '//' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; e = l.getElementsByTagName(i)[0]; e.parentNode.insertBefore(v, e)})(document, 'script');
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('lodash/merge'), require('lodash')) :
  typeof define === 'function' && define.amd ? define(['lodash/merge', 'lodash'], factory) :
  (global.VIVI = factory(global._merge,global._));
}(this, (function (_merge,_) { 'use strict';

  _merge = _merge && _merge.hasOwnProperty('default') ? _merge['default'] : _merge;
  _ = _ && _.hasOwnProperty('default') ? _['default'] : _;

  // src/foo.js

  var foo = ['hello world!', _merge];

  var version = "0.0.1";

  // src/main.js

  function core () {
    console.log('versoin' + version);
    console.log(foo);
    var a = _.map([1,2,3], function (item) {
    	return item * 2
    });
    console.log(a);
  }

  return core;

})));
