import React from 'react';
import PropTypes from 'prop-types';


Button.prototype = {
    title: PropTypes.string,
    clickHandler: PropTypes.func,
}

function Button(props) {
    return (
        <button onClick={props.clickHandler}>{props.title}</button>
    );
}

export default Button;