import React from 'react';

import AddOption from './AddOption'
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {

  state = {
    options : [],
    selectedOption: undefined,
  };

  handleDeleteOptions = () => {
    this.setState(() => ({ options : [] }));
  };

  handleAddOption = (option) => {
    if(!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option)>-1) {
      return 'This option already exists';
    }

    this.setState((prevState) => ({ options: [ ...prevState.options, option] }));
  };

  handleRemoveOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter(o => o !== optionToRemove)
    }))
  };

  handleClearSelectedState = () => {
    this.setState(() => ({selectedOption: undefined}));
  }

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(() => ({
      selectedOption: option
    }))
  };

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
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleClearSelectedState={this.handleClearSelectedState}/>
      </div> 
    )
  }
}

export default IndecisionApp;