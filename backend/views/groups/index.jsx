var React = require("react");

function DefaultLayout(props) {
  return (
    <html>
      <head>
        <title>{props.title}</title>
      </head>
      <body>
        <h1>test group display page</h1>
        {props.children}
      </body>
    </html>
  );
}

module.exports = DefaultLayout;
