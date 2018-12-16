import React from 'react';

const Option = (props) => (
  <div>
    <p>{props.option}
      <button
        onClick={(e) => props.handleRemoveOption(props.option)}
      >
        Remove
      </button>
    </p>
  </div>
);

export default Option;
