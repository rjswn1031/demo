import React from 'react';
import PropTypes from 'prop-types';

import Dropdown from '../common/Dropdown';

BoardWriteModal.propTypes = {
    
};

function BoardWriteModal(props) {
    const gubunList = [
        {title: 'test1', value: 1},
        {title: 'test2', value: 2},
        {title: 'test3', value: 3}
    ]
    const parkList = [
        {title: 'test1', value: 1},
        {title: 'test2', value: 2},
        {title: 'test3', value: 3}
    ]
    const clickHandler = (r) => {console.log(r);}
    //board_title, board_writer, board_reg_date, board_mod_date, board_del_yn, board_content, PRKPLCE_NO, board_secret, board_category
    //board_title board_content PRKPLCE_NO board_category
    return (
        <ul className='boardWriteModal'>
            <li className='title'>글제목</li>
            <li><input></input></li>
            <li className='title'>구분</li>
            <li>
                <Dropdown checkSelected={clickHandler} list={gubunList} ></Dropdown>
            </li>
            <li className='title'>주차장명</li>
            <li>
                <Dropdown checkSelected={clickHandler} list={parkList} ></Dropdown>
            </li>
            <li className='title'>글내용</li>
            <li>
                <textarea></textarea>
            </li>
            <li className='btnContainer'>
                <button>초기화</button>
                <button>글등록</button>
            </li>
        </ul>
    );
};

export default BoardWriteModal;