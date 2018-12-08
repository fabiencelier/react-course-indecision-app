'use strict';

console.log('App.js is running');

// JSX - JavaScript Xml
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Indecision App'
  ),
  React.createElement(
    'p',
    null,
    'Some info'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item 1'
    ),
    React.createElement(
      'li',
      null,
      'Item 2'
    )
  )
);

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Fabien'
  ),
  React.createElement(
    'p',
    null,
    'Age: 25'
  ),
  React.createElement(
    'p',
    null,
    'Location: Paris'
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
