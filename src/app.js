console.log('App.js is running');

// JSX - JavaScript Xml

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in hands of a computer.'
}

const template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
    <ol>
      <li>Item 1</li>
      <li>Item 2</li>
    </ol>
  </div>
);

const user = {
  name: 'Fabien',
  age: 25,
  location: 'Paris',
}

const templateTwo = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
  </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);