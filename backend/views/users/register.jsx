const React = require("react");

function HelloMessage(props) {
  <h1>This is a test...</h1>;
  return (
    <div>
      Hello
      <h1>Testing...</h1>
      <form action="/register" method="POST">
        <div>
          <label htmlFor="username">
            Username:
            <input type="text" id="username" name="username" />
          </label>
        </div>
        <div>
          <label htmlFor="email">
            Email:
            <input type="email" id="email" name="email" />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            Password:
            <input type="password" id="password" name="password" />
          </label>
        </div>
        <button>Register test</button>
      </form>
      {props.name}
    </div>
  );
}

module.exports = HelloMessage;
