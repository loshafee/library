(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('./foo.js'), require('lodash')) :
  typeof define === 'function' && define.amd ? define(['./foo.js', 'lodash'], factory) :
  (global.VIVI = factory(global.foo,global._));
}(this, (function (foo,_) { 'use strict';

  foo = foo && foo.hasOwnProperty('default') ? foo['default'] : foo;
  _ = _ && _.hasOwnProperty('default') ? _['default'] : _;

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
