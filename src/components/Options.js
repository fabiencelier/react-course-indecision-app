import React from 'react';
import Option from './Option';

const Options = (props) => (
  <div>
    <button onClick={props.handleDeleteOptions}>Remove all</button>
    {props.options.length === 0 && <p>Please add an option to get started</p>}
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

export default Options