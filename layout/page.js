const layout = require('./layout');

module.exports = function(page) {
  let htmlContent = `
    <header>
      <h1>
        ${page.title}
      </h1>
    </header>

    <article>
      ${page.content}
    </article>
  `;

  return layout(page.title, htmlContent);
};
