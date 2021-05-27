const path = require('path');

const R = (...p) => path.resolve(__dirname, '../', ...p);
const join = (...p) => path.join(__dirname, '../', ...p);

module.exports = {
  R,
  join,
  src: path.resolve(__dirname, '../src'),
  ui: path.resolve(__dirname, '../src/ui'),
  views: path.resolve(__dirname, '../src/views'),
  dist: path.resolve(__dirname, '../dist'),
};
