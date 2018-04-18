'use strict';

const greet = module.exports = {};

greet.name = function (name) {
  if (name === '' || typeof name !== 'string') return null;
  return `hello ${name}`;
};

