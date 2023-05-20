import React, { useEffect, useState } from 'react';

import Dropdown from '../common/Dropdown';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import dayjs from 'dayjs';

import { toggleMask } from '../../slice/modalSlice'

BoardDetailModal.propTypes = {
    
};

function BoardDetailModal(props) {
    const dispatch = useDispatch();
    const detailNo = useSelector(state => state.modal.modalDetailBoardNo);

    useEffect(()=>{
        axios({
            method: 'post',
            url: 'http://localhost:8081/board/getBoard',
            params: {boardNo: detailNo}
        }).then(res => {
            console.log(res);
            const boardObj = {
                boardTitle: res.data.boardTitle,
                boardCategory: res.data.code.cdNm,
                prkplceNm: res.data.parkingInfo.prkplceNm,
                boardContent: res.data.boardContent
            }

            setBoardData(boardObj);
            /*
            boardCategory "bd01"
            boardContent "이것은 테스트 글들입니다. 하하하."
            boardDelYn false
            boardModDate null
            boardNo 105
            boardRegDate "202303111559"
            boardSecret false
            boardTitle "test105"
            boardWriter "admin"
            code {cdCd: 'bd01', cdNm: '시설', cdType: 'board'}
            parkingInfo {prkplceNo: '183-1-000014', prkplceNm: '삼성동 검배2길, 4길, 5길', prkplceSe: '공영', prkplceType: '노상', lnmAdr: '대전광역시 동구 삼성동 309-1', …}
            prkplceNo "183-1-000014"
            */
            // const boardObj = {
            //     boardTitle: '',
            //     boardCategory: '',
            //     prkplceNm: '',
            //     boardContent: ''
            // }
            // setBoardData(boardObj);
        })
    },[])

    // const defBoardData = {
    //     boardTitle: '',
    //     boardCategory: '',
    //     prkplceNm: '',
    //     boardContent: '',
    // }
    const [boardData, setBoardData] = useState({});
    //board_title, board_writer, board_reg_date, board_mod_date, board_del_yn, board_content, PRKPLCE_NO, board_secret, board_category
    //board_title board_content PRKPLCE_NO board_category
    return (
        <ul className='boardWriteModal'>
            <li className='title'>글제목</li>
            <li className='content'>{boardData.boardTitle}</li>
            <li className='title'>구분</li>
            <li className='content'>{boardData.boardCategory}</li>
            <li className='title'>주차장명</li>
            <li className='content'>{boardData.prkplceNm}</li>
            <li className='title'>글내용</li>
            <li className='content x2'>{boardData.boardContent}</li>
        </ul>
    );
};

export default BoardDetailModal;