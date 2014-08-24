'use strict';
var isMongo = require('is-mongo');
var isMysql = require('is-mysql');
var Q = require('q');
module.exports = function () {
  var promises = [isMongo(), isMysql()];
  return Q.all(promises);
};