function PageBoilerplate(params: any) {
  const template = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>HTMX Trello Clone</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    ${params.template}
  </body>
</html>
  `;
  return template;
}

export { PageBoilerplate };
