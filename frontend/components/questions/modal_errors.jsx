import React from 'react';

const ModalErrors = (props) => {
  return (
    <div className="modal-errors-wrapper">
      <ul className="modal-errors">
        {
          props.errors.map((error, idx) => {
            return (
              <li key={`modal-error-${idx}`}>
                { error }
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};

export default ModalErrors;
