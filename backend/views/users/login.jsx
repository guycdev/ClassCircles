const React = require("react");

function Login(props) {
  <h1>This is a test of the login...</h1>;
  return (
    <div>
      <h1>Testing login...</h1>
      <form action="/login" method="POST">
        <div>
          <label htmlFor="username">
            Username:
            <input type="text" id="username" name="username" />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            Email:
            <input type="password" id="password" name="password" />
          </label>
        </div>
        <button>Login test</button>
      </form>
      {props.name}
    </div>
  );
}

module.exports = Login;
