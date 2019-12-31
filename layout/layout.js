module.exports = function(title, htmlContent) {
  return ` 
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="generator" content="" />
    <title>
      ${[title, 'Ondrej Sevcik'].filter(i => i).join(' - ') }
    </title>

    <link rel="stylesheet" href="/styles.css">
  </head>
  <body>
    <nav class="menu">
      <a href="/">Articles</a>
    </nav>

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
