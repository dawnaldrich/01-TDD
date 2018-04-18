'use strict';

const greet = require('../lib/greet');

describe('greet.test.js', () => {
  describe('greet.name', () => {
    test('Should return hello, NAME', () => {
      expect(greet.name('world')).toEqual('hello world');
    });
    test('Should return null in case of error', () => {
      expect(greet.name('')).toEqual(null);
    });
    test('Should also return null in case of error', () => {
      expect(greet.name(7)).toEqual(null);
    });
  });
});
