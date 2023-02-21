import React from 'react';
import PropTypes from 'prop-types';

import SearchOption from './SearchOption';

Search.propTypes = {
    ctgType: PropTypes.object,
    searchTitle: PropTypes.object,
    stateCheckBox: PropTypes.object,
    searchOption: PropTypes.object,
    setStateCheckBox: PropTypes.func,
    setSearchOption: PropTypes.func
}

function Search(props) {

    const optionChangeHandler = (e) => {
        const optionObj = {...props.searchOption};
        optionObj[e.target.dataset.type] = e.target.value;

        props.setSearchOption(optionObj)
    }

    const checkboxChangeHandler = (e) => {
        const type = e.target.id.split('-')[1];
        const isChecked = e.target.checked;

        const stateObj = {...props.stateCheckBox};
        stateObj[type] = isChecked;

        props.setStateCheckBox(stateObj);
    }

    /**
     * se
     * plType
     * chrge
     */
    return (
        <ul>
            {Object.keys(props.searchTitle).map(key=><SearchOption key={key} optType={key} searchTitle={props.searchTitle} stateCheckBox={props.stateCheckBox} ctgType={props.ctgType} optionChangeHandler={optionChangeHandler} checkboxChangeHandler={checkboxChangeHandler}/>)}
        </ul>
    );
}

export default Search;