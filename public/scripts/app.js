'use strict';

console.log('App.js is running');

// JSX
var template = React.createElement(
  'h1',
  { id: 'someId' },
  'Indecision App'
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
