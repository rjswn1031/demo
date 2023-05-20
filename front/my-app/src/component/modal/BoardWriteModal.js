import React, { useState } from 'react';

import Dropdown from '../common/Dropdown';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import dayjs from 'dayjs';

import { toggleMask } from '../../slice/modalSlice'

BoardWriteModal.propTypes = {
    
};

function BoardWriteModal(props) {
    const dispatch = useDispatch();
    const boardCodeList = useSelector(state => state.total.boardCodeList);
    const parkList = useSelector(state => state.total.parkList);
    const defaultBoard = {
        boardTitle: '',
        boardWriter: 'user',
        boardRegDate: dayjs(new Date()).format('YYYYMMDDHHmm'),
        boardContent: '',
        prkplceNo: parkList[0].prkplceNo,
        boardCategory: boardCodeList[0].cdCd
    };

    const typeClickHandler = (r) => {
        setBoardInfo({...boardInfo, "boardCategory": r});
    }
    const parkNameClickHandler = (r) => {
        setBoardInfo({...boardInfo, "prkplceNo": r});
    }

    const insertBoard = async () => {
      axios({
        method: 'post',
        url: 'http://localhost:8081/board/insertBoard',
        params: {...boardInfo, boardRegDate: dayjs().format('YYYYMMDDHHmm')}
      }).then(res=>{
        let message = res ? '글 등록이 완료되었습니다.' : '오류가 발생하였습니다.';
        alert(message);
        dispatch(toggleMask(false));
      });
    }

    const [boardInfo, setBoardInfo] = useState({...defaultBoard});
    //board_title, board_writer, board_reg_date, board_mod_date, board_del_yn, board_content, PRKPLCE_NO, board_secret, board_category
    //board_title board_content PRKPLCE_NO board_category
    return (
        <ul className='boardWriteModal'>
            <li className='title'>글제목</li>
            <li><input onChange={(e)=>{setBoardInfo({...boardInfo, 'boardTitle': e.target.value})}}></input></li>
            <li className='title'>구분</li>
            <li>
                <Dropdown checkSelected={typeClickHandler} list={boardCodeList.map(x=>{return { title: x.cdNm,value: x.cdCd}})} ></Dropdown>
            </li>
            <li className='title'>주차장명</li>
            <li>
                <Dropdown checkSelected={parkNameClickHandler} list={parkList.map(x=>{return { title: x.prkplceNm, value: x.prkplceNo}})} ></Dropdown>
            </li>
            <li className='title'>글내용</li>
            <li>
                <textarea onChange={(e)=>{setBoardInfo({...boardInfo, 'boardContent': e.target.value})}}></textarea>
            </li>
            <li className='btnContainer'>
                <button>초기화</button>
                <button onClick={insertBoard}>글등록</button>
            </li>
        </ul>
    );
};

export default BoardWriteModal;