class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision App';
    const subtitle = 'Put yourlife in the hands of a computer'
    const options = ['Thing 1', 'Thing 2', 'Thing 3'];

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options}/>
        <AddOption />
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  handleClick() {
    alert('Handle click')
  }
  render(){
    return (
      <div>
        <button onClick={this.handleClick}>What should I do ?</button>
      </div>
    );
  }
}

class Options extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    alert(this.props.options);
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Remove all</button>
        {this.props.options.map((opt) => <Option key={opt} option={opt} />)}
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.option} !</p>
      </div>
    )
  }
}

class AddOption extends React.Component {
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    if(option){
      console.log(option)
    }
  }
  render(){
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));