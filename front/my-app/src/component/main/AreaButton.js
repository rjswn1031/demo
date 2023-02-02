import React from 'react';
import PropTypes from 'prop-types';

AreaButton.propTypes = {
    onIdx: PropTypes.string,
    title: PropTypes.string,
    btnClick: PropTypes.func
};

function AreaButton(props) {
    return (
        <li className={props.onIdx} onClick={props.btnClick}>{props.title}</li>
    );
}

export default AreaButton;