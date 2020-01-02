const layout = require('../layout/layout');

module.exports = function(posts) {
  let postsHtml = posts
    .filter(post => post.tags.includes('til'))
    // Sort by date from newest to oldest
    .sort((postA, postB) => postB.date.valueOf() - postA.date.valueOf())
    .map((post) => {
      return `
        <li>
          <a href="${post.permalink}">
            ${post.title}
          </a>
          <br>
          <time>
            ${post.date.toISOString().substring(0, 10)}
          </time>
        </li>
      `;
    })
    .join('');

  return layout('TIL', `<ul>${postsHtml}</ul>`);
};
