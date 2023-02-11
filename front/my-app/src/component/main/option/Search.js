import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

Search.propTypes = {
    ctgType: PropTypes.object,
    stateCheckBox: PropTypes.object,
    searchOption: PropTypes.object,
    setStateCheckBox: PropTypes.func,
    setSearchOption: PropTypes.func
}

function Search(props) {

    /*
    const [stateCheckBox, setStateCheckBox] = useState({
        se: false,
        plType: false,
        chrgeL: false,
        plName: false,
        addr: false
    });

    const [searchOption, setSearchOption] = useState({
        se: 0,
        plType: 0,
        chrgeL: 0,
        plName: '',
        addr: ''
    });
    */

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
            <li>
                <input id='chk-se' type={'checkbox'} onChange={(e)=>{checkboxChangeHandler(e)}} />
                <FontAwesomeIcon icon={`fa-solid ${props.stateCheckBox.se ? 'fa-square-check' : 'fa-square'}`}/>
                <label htmlFor="chk-se">구분</label>
                <select disabled={props.stateCheckBox.se ? false : true} data-type="se"  onChange={(e)=>optionChangeHandler(e)}>
                    { props.ctgType.se && props.ctgType.se.map((x,idx) => (<option key={idx} value={x}>{x}</option>)) }
                </select>
            </li>
            <li>
                <input id='chk-plType' type={'checkbox'} onChange={(e)=>{checkboxChangeHandler(e)}} />
                <FontAwesomeIcon icon={`fa-solid ${props.stateCheckBox.plType ? 'fa-square-check' : 'fa-square'}`}/>
                <label htmlFor="chk-plType">형태구분</label>
                <select disabled={props.stateCheckBox.plType ? false : true} data-type="plType" onChange={(e)=>optionChangeHandler(e)}>
                    { props.ctgType.plType && props.ctgType.plType.map((x,idx) => (<option key={idx} value={x}>{x}</option>)) }
                </select>
            </li>
            <li>
                <input id='chk-chrge' type={'checkbox'} onChange={(e)=>{checkboxChangeHandler(e)}} />
                <FontAwesomeIcon icon={`fa-solid ${props.stateCheckBox.chrge ? 'fa-square-check' : 'fa-square'}`}/>
                <label htmlFor="chk-chrge">결제여부</label>
                <select disabled={props.stateCheckBox.chrge ? false : true} data-type="chrge" onChange={(e)=>optionChangeHandler(e)}>
                    { props.ctgType.chrge && props.ctgType.chrge.map((x,idx) => (<option key={idx} value={x}>{x}</option>)) }
                </select>
            </li>
            <li>
                <input id='chk-plName' type={'checkbox'} onChange={(e)=>{checkboxChangeHandler(e)}} />
                <FontAwesomeIcon icon={`fa-solid ${props.stateCheckBox.plName ? 'fa-square-check' : 'fa-square'}`}/>
                <label htmlFor="chk-plName">주차장명</label><br/>
                <input type={'text'} data-type="plName" onChange={(e)=>optionChangeHandler(e)} disabled={props.stateCheckBox.plName ? false : true}></input>
            </li>
            <li>
                <input id='chk-addr' type={'checkbox'} onChange={(e)=>{checkboxChangeHandler(e)}} />
                <FontAwesomeIcon icon={`fa-solid ${props.stateCheckBox.addr ? 'fa-square-check' : 'fa-square'}`}/>
                <label htmlFor="chk-addr">주소</label><br/>
                <input type={'text'} data-type="addr" onChange={(e)=>optionChangeHandler(e)} disabled={props.stateCheckBox.addr ? false : true}></input>
            </li>
        </ul>
    );
}

export default Search;