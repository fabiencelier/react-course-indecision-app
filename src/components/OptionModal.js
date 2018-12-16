import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    contentLabel={'Selected Option'}
    onRequestClose={props.handleClearSelectedState}
  >
      <h3>Selected Option</h3>
      {props.selectedOption && <p>{props.selectedOption}</p>}
      <button onClick={props.handleClearSelectedState}>Ok.</button>
  </Modal>
);


export default OptionModal;
