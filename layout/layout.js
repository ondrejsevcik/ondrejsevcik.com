module.exports = function(title, htmlContent) {
  let navContent = [
    {href: '/', label: 'Articles'},
    {href: '/til', label: 'TIL'},
  ]
    .map(item => `<a href="${item.href}">${item.label}</a>`)
    .join(' | ');

  return ` 
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="generator" content="" />
    <title>
      ${[title, 'Ondrej Sevcik'].filter(i => i).join(' - ') }
    </title>

    <link rel="stylesheet" href="/styles.css">
  </head>
  <body>
    <nav class="menu">${navContent}</nav>

    <div>
      ${htmlContent}
    </div>

    <div class="footer">
      <div class="copyright">
        &copy; ${new Date().getFullYear()} Ondrej Sevcik
      </div>
    </div>
  </body>
</html>
`;
};
