const layout = require('../layout/layout');
const fs = require('fs');
const { markedHighlight } = require('../utils');

module.exports = function() {
  let contents = fs.readFileSync('./pages/styleguide-content.md').toString();
  let htmlContent = markedHighlight(contents);

  return layout('Style guide', htmlContent);
};
