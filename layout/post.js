const layout = require('./layout');

module.exports = function(post) {
  var htmlContent = `
    <header>
        <h1>
          ${post.title}
        </h1>
        <div class="post-meta">
          <time datetime="">
            ${post.date.toISOString().substring(0, 10)}
          </time>
        </div>
    </header>

    <article>
      ${post.htmlContent}
    </article>
  `;

  return layout(post.title, htmlContent);
};
