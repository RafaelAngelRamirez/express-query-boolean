'use strict';

var parser = require('../lib/parse');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.parser = {
  setUp: function(done) {
    this.options = {};

    done();
  },

  true: function(test) {
    test.deepEqual(
      parser({
        a: 'true'
      }),
      {
        a: true
      },
      'Converts \'true\' string.'
    );
    
    test.done();
  },

  false: function(test) {
    test.deepEqual(
      parser({
        a: 'false'
      }),
      {
        a: false
      },
      'Converts \'false\' string.'
    );

    test.done();
  },

  numbers: function(test){
    test.deepEqual(
      parser({
        a: '21'
      }),
      {
        a: 21
      },
      'Converts \'21\' to number.'
    );
    test.done();
  },

  empty: function(test) {
    test.deepEqual(
      parser({
        a: ''
      }),
      {
        a: ''
      },
      'Doesn\'t convert empty string.'
    );

    test.done();
  },

  recursive: function(test) {
    test.deepEqual(
      parser({
        a: {
          b: 'true',
          c: 'false',
          c: '5.4'
        }
      }),
      {
        a: {
          b: true,
          c: false,
          c: 5.4,
        }
      },
      'Recursively parses object.'
    );

    test.done();
  },

  array: function(test) {
    test.deepEqual(
      parser({
        array: [
          { a: 'true' },
          { b: 'false' },
          { c: 'test' },
          { d: '2.12' },
          { e: '2.12a' },
        ],
      }),
      {
        array: [
          { a: true },
          { b: false },
          { c: 'test' },
          { d: 2.12 },
          { e: '2.12a' },
        ],
      },
      'Recursively parses array.'
    );

    test.done();
  }

};
