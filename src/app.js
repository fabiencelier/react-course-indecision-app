console.log('App.js is running');

// JSX - JavaScript Xml
const template = (
  <div>
    <h1>Indecision App</h1>
    <p>Some info</p>
    <ol>
      <li>Item 1</li>
      <li>Item 2</li>
    </ol>
  </div>
);

const templateTwo = (
  <div>
    <h1>Fabien</h1>
    <p>Age: 25</p>
    <p>Location: Paris</p>
  </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);