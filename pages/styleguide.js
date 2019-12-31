const layout = require('../layout/layout');
const fs = require('fs');
const marked = require('marked');

module.exports = function() {
  let contents = fs.readFileSync('./pages/styleguide-content.md').toString();
  let htmlContent = marked(contents);

  return layout('Style guide', htmlContent);
};
