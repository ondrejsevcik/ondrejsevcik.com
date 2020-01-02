const marked = require('marked');
const hljs = require('highlight.js');

hljs.configure({
  classPrefix: '' // don't append class prefix
});

exports.markedHighlight = function(markdownContent) {
  return marked(markdownContent,{
    highlight(code, lang) {
      let highlightedCode = hljs.highlight(lang, code).value;
      return `${highlightedCode}`;
    }
  });
};
