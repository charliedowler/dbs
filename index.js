'use strict';
var isMongo = require('is-mongo');
var Q = require('q');
module.exports = function () {
  var promises = [isMongo()];
  return Q.all(promises);
};