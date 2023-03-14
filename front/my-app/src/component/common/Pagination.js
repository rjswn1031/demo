import { React, useState } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

Pagination.propTypes = {
    totalCnt: PropTypes.number,
    chkSelectNum: PropTypes.func
};

function Pagination(props) {
    /*
    총 게시물 개수가 32개 일 경우
        - 1~4번 버튼 표출
        - < > 화살표 기능 막기
        - 4번 선택시 2개만 표출

    총 게시물 개수가 72개일 경우
        - 1~5번 버튼 표출
        - > 버튼 선택 시 6~8 버튼 표출

        - [1,2,3,4,5] [6,7,8]
        - [1,2,3,4,5] [6,7,8,9,10] [11,12,13,14,15]
    */

    const maxPageNum = 5;
    const listPerPage = 10;
    const btnCnt = Math.ceil(props.totalCnt / listPerPage)//props.totalCnt % listPerPage === 0 ? props.totalCnt / listPerPage : props.totalCnt / listPerPage + 1;

    const [nowPageNum, setNowPageNum] = useState(0);
    const [selectPageNum, setSelectPageNum] = useState(0);

    const setPageBtn = () => {
        const retArr = [];
        const minBtnCtn = maxPageNum * nowPageNum;
        const maxBtnCtn = maxPageNum * nowPageNum + maxPageNum;
        for(let i=0; i<btnCnt; i++) {
            if(i >= minBtnCtn && i < maxBtnCtn) {
                retArr.push(
                    <button className={selectPageNum === i ? 'on' : ''} key={i} onClick={()=>{
                        props.chkSelectNum(i);
                        setSelectPageNum(i);
                    }}>{i+1}</button>
                )
            }
        }
        return retArr;
    }

    const movePostPage = () => {
        setNowPageNum( (nowPageNum-1) < 0 ? 0 : nowPageNum-1 );
    }

    const movePrePage = () => {
        const max = (nowPageNum+1) * maxPageNum;
        setNowPageNum( max > btnCnt ? nowPageNum : nowPageNum+1 );
    }

    return (
        <div className='pageContainer'>
            <button onClick={()=>{movePostPage()}}><FontAwesomeIcon icon="fa-solid fa-caret-left" /></button>
            {setPageBtn()}
            <button onClick={()=>{movePrePage()}}><FontAwesomeIcon icon="fa-solid fa-caret-right" /></button>
        </div>
    );
}

export default Pagination;