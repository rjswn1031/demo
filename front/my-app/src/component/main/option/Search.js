import React, { useState } from 'react';
import PropTypes from 'prop-types';

Search.propTypes = {
    ctgType: PropTypes.object
}

function Search(props) {
    let categoryList = [
        '구분', '형태구분', '주차장명', '주소', '결제여부'
    ];
    /**
     * se
     * plType
     * chrge
     */
    /* const categoryType = props.ctgType;
    const [categories] = useState(categoryType); */
    const [se] = useState([props.ctgType.se]);
    return (
        <ul>
            <li>
                <input type={'checkbox'} />구분 {props.ctgType.plType}
                <select>
                    {/* 비동기 문제로 보임 */}
                    {se.map(x=>`<option>${x}</option>`)}
                </select>
            </li>
            <li><input type={'checkbox'} />형태구분</li>
            <li><input type={'checkbox'} />주차장명</li>
            <li><input type={'checkbox'} />주소</li>
            <li><input type={'checkbox'} />결제여부</li>
        </ul>
    );
}

export default Search;