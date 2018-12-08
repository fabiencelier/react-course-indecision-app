console.log('App.js is running');

// JSX
// const template = <h1 id="someId">This is JSX from app.js</h1>;
var template = React.createElement(
    "p",
    null,
    "This is JSX from app.js"
  );

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);