'use strict'

const arithmetic = module.exports = {};

arithmetic.add = (arg1, arg2) => {
  if (arg1 === '' || typeof arg1 !== 'number' || arg2 === '' || typeof arg2 !== 'number') {
    return null;
  }

  return arg1 + arg2;
};

arithmetic.sub = (sub1, sub2) => {
  if (sub1 === '' || typeof sub1 !== 'number' || sub2 === '' || typeof sub2 !== 'number') {
    return null;
  }

  return sub1 - sub2;
};
