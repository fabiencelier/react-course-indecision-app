const appRoot = document.getElementById('app');

const app = {
  title: 'Visibility Toggle',
  isVisible : false,
  details : 'This are awesome details',
};

const toggleVisibility = () => {
  app.isVisible = !app.isVisible;
  render();
};

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      <button onClick={toggleVisibility}>
        {app.isVisible ? 'hideDetails' : 'showDetails' }
      </button>
      {app.isVisible && <p>{app.details}</p>}
    </div>
  );
  ReactDOM.render(template, appRoot);
};

render(); 