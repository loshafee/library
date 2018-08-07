// src/main.js
import foo from './foo.js';
import { version } from '../package.json'
import _ from 'lodash'

function core () {
  console.log('versoin' + version)
  console.log(foo);
  var a = _.map([1,2,3], function (item) {
  	return item * 2
  })
  console.log(a)
}
export default core