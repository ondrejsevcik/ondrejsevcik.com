const fs = require('fs');
const { execSync } = require('child_process');
const marked = require('marked');
const postLayout = require('./layout/post');
const indexPage = require('./pages/index');
const styleguidePage = require('./pages/styleguide');
const tilPage = require('./pages/til');
const hljs = require('highlight.js');

// Github automatically deploys docs folder
const outputDir = 'docs';

// Clean output folder
execSync(
  `rm -r "${outputDir}"`,
  {stdio: 'inherit'}
);

// Copy all public files into output dir
execSync(
  `cp -r "public" "${outputDir}"`,
  {stdio: 'inherit'}
);

// Compile less into css and copy to output folder
execSync(
  `./node_modules/.bin/lessc ./layout/styles.less "${outputDir}/styles.css"`,
  {stdio: 'inherit'}
);

// Find all markdown posts into post object
const posts = fs.readdirSync('./posts')
  .map(fileName => {
    let path = `./posts/${fileName}`;
    let contents = fs.readFileSync(path).toString();

    let frontMatterContent = contents
      .split('\n')
      // skip first 5 lines - that's front-matter syntax
      .slice(0,5)
      .join('\n');

    let markdownContent = contents
      .split('\n')
      // the rest is the actual markdown content
      .slice(5)
      .join('\n');

    let title = frontMatterContent
      .match(/title:.+/)[0]
      .replace('title: ', '')
      .trim();

    let dateString = frontMatterContent
      .match(/date:.+/)[0]
      .replace('date: ', '')
      .trim();

    let tags = frontMatterContent
      .match(/tags:.+/)[0]
      .replace('tags: ', '')
      .trim()
      .split(',')
      .map(tag => tag.trim());

    hljs.configure({
      classPrefix: '' // don't append class prefix
    });

    return {
      title,
      date: new Date(dateString),
      tags,
      permalink: `/${fileName.replace('.md', '')}`,
      htmlContent: marked(markdownContent,{
        highlight(code, lang) {
          let highlightedCode = hljs.highlight(lang, code).value;
          return `${highlightedCode}`;
        }
      })
    };
  });

// Compile posts into html files
posts.forEach(post => {
  let htmlContent = postLayout(post);
  fs.mkdirSync(`${outputDir}/${post.permalink}`);
  fs.writeFileSync(`${outputDir}/${post.permalink}/index.html`, htmlContent);
});

// Compile index page
fs.writeFileSync(`${outputDir}/index.html`, indexPage(posts));

// Compile TIL page
fs.mkdirSync(`${outputDir}/til`);
fs.writeFileSync(`${outputDir}/til/index.html`, tilPage(posts));

// Compile styleguide page
fs.mkdirSync(`${outputDir}/styleguide`);
fs.writeFileSync(`${outputDir}/styleguide/index.html`, styleguidePage(posts));
