import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom"

HeaderBtn.propTypes = {
    title: PropTypes.string,
    url: PropTypes.string
};

function HeaderBtn(props) {
    return (
        <li>
            <Link to={props.url}>{props.title}</Link>
        </li>
    );
}

export default HeaderBtn;