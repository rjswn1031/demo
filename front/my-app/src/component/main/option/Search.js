import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

Search.propTypes = {
    ctgType: PropTypes.object
}

function Search(props) {

    //console.log(props.ctgType.se.map(x=>x))
    /**
     * se
     * plType
     * chrge
     */
    /* const categoryType = props.ctgType;
    const [categories] = useState(categoryType); */
    //const [se] = useState([props.ctgType.se]);
    return (
        <ul>
            <li>
                <input type={'checkbox'} />구분
                <select>
                    { props.ctgType.se && props.ctgType.se.map((x,idx) => (<option key={idx} value={idx}>{x}</option>)) }
                </select>
            </li>
            <li>
                <input type={'checkbox'} />형태구분
                <select>
                    { props.ctgType.plType && props.ctgType.plType.map((x,idx) => (<option key={idx} value={idx}>{x}</option>)) }
                </select>
            </li>
            <li>
                <input type={'checkbox'} />결제여부
                <select>
                    { props.ctgType.chrge && props.ctgType.chrge.map((x,idx) => (<option key={idx} value={idx}>{x}</option>)) }
                </select>
            </li>
            <li><FontAwesomeIcon icon="fa-solid fa-square-check" /><input type={'checkbox'} />주차장명</li>
            <li><input type={'checkbox'} />주소</li>
        </ul>
    );
}

export default Search;