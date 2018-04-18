'use strict';

const arithmetic = require('../lib/arithmetic');

describe('arithmetic.test.js', () => {
  describe('arithmetic.add', () => {
    test('Should return SUM of 2 arguments', () => {
      expect(arithmetic.add(4, 3)).toEqual(7);
    });
    test('Should return null in case of error', () => {
      expect(arithmetic.add('', 'dog')).toEqual(null);
    });
  });
  describe('arithmetic.sub', () => {
    test('Should return subtraction result', () => {
      expect(arithmetic.sub(13, 2)).toEqual(11);
    });
    test('Should return null in case of error', () => {
      expect(arithmetic.sub('', 'dog')).toEqual(null);
    });
  });
});

