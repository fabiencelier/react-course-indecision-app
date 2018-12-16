class IndecisionApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      options : props.options,
    }
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleRemoveOption = this.handleRemoveOption.bind(this);
  }

  handleDeleteOptions() {
    this.setState(() => ({ options : [] }));
  }

  handleAddOption(option) {
    if(!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option)>-1) {
      return 'This option already exists';
    }

    this.setState((prevState) => ({ options: [ ...prevState.options, option] }));
  }

  handleRemoveOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter(o => o !== optionToRemove)
    }))
  }

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }

  render() {
    const subtitle = 'Put yourlife in the hands of a computer'
    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleRemoveOption={this.handleRemoveOption}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div> 
    )
  }
}

  
  IndecisionApp.defaultProps = {
    options : [],
  }

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
}

Header.defaultProps = {
  title: 'Indecision App',
}


const Action = (props) => {
  return (
    <div>
      <button
        onClick={props.handlePick}
        disabled = {!props.hasOptions}
      >
        What should I do ?
      </button>
    </div>
  );
}

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove all</button>
      {
        props.options.map((opt) => (
        <Option
          key={opt}
          option={opt}
          handleRemoveOption={props.handleRemoveOption}
        />
      ))
      }
    </div>
  );
}


const Option = (props) => {
  return (
    <div>
      <p>{props.option} !</p>
      <button
        onClick={(e) => props.handleRemoveOption(props.option)}
      >
        Remove
      </button>
    </div>
  )
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
    this.setState(() => ({ error }));
  };

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