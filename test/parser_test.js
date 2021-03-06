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
  
  dates: function(test){
    test.deepEqual( parser({
      a: "2020-03-17T23:05:53.733Z"
    }),
    {
      a: new Date("2020-03-17T23:05:53.733Z")
    },
    'Must be valid date.')
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
          d: '5.4',
          e: "2020-03-17T23:05:53.733Z",
          f: {
            g:'This is a string'
          }
        }
      }),
      {
        a: {
          b: true,
          c: false,
          d:5.4,
          e: new Date("2020-03-17T23:05:53.733Z"),
          f: {
            g:'This is a string'
          }
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
          { f: "2020-03-17T23:05:53.733Z" },
        ],
      }),
      {
        array: [
          { a: true },
          { b: false },
          { c: 'test' },
          { d: 2.12 },
          { e: '2.12a' },
          { f: new Date("2020-03-17T23:05:53.733Z") },
        ],
      },
      'Recursively parses array.'
    );

    test.done();
  }

};
