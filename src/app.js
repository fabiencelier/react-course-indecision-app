console.log('App.js is running');

// JSX
const template = <h1 id="someId">Indecision App</h1>;
const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);