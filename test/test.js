'use strict';
var assert = require('assert');
var dbs = require('../index');

it('Should detect all databases are running', function(done) {
  this.timeout(10000);
  dbs().then(function(result) {
    result.forEach(function(db) {
      assert.equal(db.running, true);
    });
    done();
  });
});
