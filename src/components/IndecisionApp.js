import React from 'react';

import AddOption from './AddOption'
import Options from './Options';
import Header from './Header';
import Action from './Action';

class IndecisionApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      options : [],
    }
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleRemoveOption = this.handleRemoveOption.bind(this);
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({options}));
      }
    } catch (error) {
      
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.options.length !== prevState.options.length){
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options',json);
    }
  }

  componentWillUnmount(){
    console.log('component will unmount');
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

export default IndecisionApp;