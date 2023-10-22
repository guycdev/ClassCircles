var React = require("react");

function DefaultLayout(props) {
  return (
    <html>
      <head>
        <title>{props.title}</title>
      </head>
      <body>
        <h1>test group display SHOW page id</h1>

        <h2>Display groups in boxes here to join...</h2>

        <h2>Otherwise, make a new group/post...</h2>
        <form action="/groups/FILL IN HERE/comments" method="POST">
          <div>
            <label htmlFor="comment">
              <input type="text" name="comment" id="comment" />
            </label>
          </div>
          <button>Submit comment</button>
        </form>

        {props.children}
      </body>
    </html>
  );
}

module.exports = DefaultLayout;
