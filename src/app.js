class IndecisionApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      options : [],
    }
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
  }

  handleDeleteOptions() {
    this.setState(() => {
      return {
        options : [],
      }
    })
  }

  handleAddOption(option) {
    if(!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option)>-1) {
      return 'This option already exists';
    }

    this.setState((prevState) => {
      return {
        options: [ ...prevState.options, option],
      }
    });
  }

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }

  render() {
    const title = 'Indecision App';
    const subtitle = 'Put yourlife in the hands of a computer'
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
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
  render(){
    return (
      <div>
        <button
          onClick={this.props.handlePick}
          disabled = {!this.props.hasOptions}
        >
          What should I do ?
        </button>
      </div>
    );
  }
}

class Options extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove all</button>
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

  constructor(props){
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined,
    }
  }

  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    this.setState(() => {
      return { error }
    })
  }
  
  render(){
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));