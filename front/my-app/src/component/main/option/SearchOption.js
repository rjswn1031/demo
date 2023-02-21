import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

SearchOption.propTypes = {
    optType: PropTypes.string,
    searchTitle: PropTypes.object,
    stateCheckBox: PropTypes.object,
    ctgType: PropTypes.object,
    checkboxChangeHandler: PropTypes.func,
    optionChangeHandler: PropTypes.func
}

function SearchOption(props) {

    function SearchOptionSelect() {
        return (
            <select disabled={props.stateCheckBox[props.optType] ? false : true} data-type={props.optType}  onChange={(e)=>props.optionChangeHandler(e)}>
                { props.ctgType[props.optType] && props.ctgType[props.optType].map((x,idx) => (<option key={idx} value={x}>{x}</option>)) }
            </select>
        )
    }
    function SearchOptionText() {
        return (
            <input type={'text'} data-type="addr" onChange={(e)=>props.optionChangeHandler(e)} disabled={props.stateCheckBox[props.optType] ? false : true}></input>
        )
    }

    return (
        <li>
            <input id={`chk-${props.optType}`} type={'checkbox'} onChange={(e)=>{props.checkboxChangeHandler(e)}} />
            <FontAwesomeIcon icon={`fa-solid ${props.stateCheckBox[props.optType] ? 'fa-square-check' : 'fa-square'}`}/>
            <label htmlFor={`chk-${props.optType}`}>{props.searchTitle[props.optType]}</label>
            {
                props.optType === 'plName' || props.optType === 'addr' ? <SearchOptionText /> : <SearchOptionSelect />
            }
        </li>
    );
}

export default SearchOption;