import React from 'react';
import PropTypes from 'prop-types';

Button.propTypes = {
    t : PropTypes.string
    , fc : PropTypes.func    
};

function Button(props) {
    return (
        <button onClick={props.fc}>{props.t}</button>
          );
}

export default Button;