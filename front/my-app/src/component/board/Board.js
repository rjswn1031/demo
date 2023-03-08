import { React, useState } from 'react';

import BoardContent from './BoardContent';
import Dropdown from '../common/Dropdown';
import Pagination from '../common/Pagination';

import '../../css/board.css'

function Board(props) {
    const boardHeader = ['번호', '항목', '주차장명', '제목', '등록일시'];

    //====================================================================================================================================
    //임시 하드 코딩
    const testBoardContent = [
        {boardNo: 0, boardTitle: 'test1', boardRegDate: '2023-01-01', boardCategory: '시설', prkplceNm: '원동중동 천변 노상'},
        {boardNo: 1, boardTitle: 'test2', boardRegDate: '2023-01-02', boardCategory: '시설', prkplceNm: '원동중동 천변 노상'},
        {boardNo: 2, boardTitle: 'test3', boardRegDate: '2023-01-03', boardCategory: '시설', prkplceNm: '원동중동 천변 노상'},
        {boardNo: 3, boardTitle: 'test4', boardRegDate: '2023-01-04', boardCategory: '시설', prkplceNm: '원동중동 천변 노상'},
        {boardNo: 4, boardTitle: 'test5', boardRegDate: '2023-01-05', boardCategory: '시설', prkplceNm: '원동중동 천변'},
        {boardNo: 5, boardTitle: 'test6', boardRegDate: '2023-01-11', boardCategory: '비용', prkplceNm: '원동중동 천변'},
        {boardNo: 6, boardTitle: 'test7', boardRegDate: '2023-01-13', boardCategory: '비용', prkplceNm: '원동중동 천변'},
        {boardNo: 7, boardTitle: 'test8', boardRegDate: '2023-01-21', boardCategory: '비용', prkplceNm: '원동중동 천변'},
        {boardNo: 8, boardTitle: 'test9', boardRegDate: '2023-01-22', boardCategory: '비용', prkplceNm: '원동중동 천변 노상'},
        {boardNo: 9, boardTitle: 'test10', boardRegDate: '2023-02-13', boardCategory: '비용', prkplceNm: '원동중동 천변 노상'},
        {boardNo: 10, boardTitle: 'test11', boardRegDate: '2023-02-15', boardCategory: '비용', prkplceNm: '원동중동 천변'},
        {boardNo: 11, boardTitle: 'test12', boardRegDate: '2023-02-21', boardCategory: '관리', prkplceNm: '원동중동 천변 노상'},
        {boardNo: 12, boardTitle: 'test13', boardRegDate: '2023-02-21', boardCategory: '관리', prkplceNm: '원동중동 천변'},
        {boardNo: 13, boardTitle: 'test14', boardRegDate: '2023-02-23', boardCategory: '관리', prkplceNm: '원동중동 천변 노상'},
        {boardNo: 14, boardTitle: 'test15', boardRegDate: '2023-02-24', boardCategory: '관리', prkplceNm: '원동중동 천변 노상'},
        {boardNo: 15, boardTitle: 'test16', boardRegDate: '2023-03-02', boardCategory: '관리', prkplceNm: '원동중동 천변'},
        {boardNo: 16, boardTitle: 'test17', boardRegDate: '2023-03-02', boardCategory: '관리', prkplceNm: '원동중동 천변'},
        {boardNo: 17, boardTitle: 'test18', boardRegDate: '2023-03-03', boardCategory: '관리', prkplceNm: '원동중동 천변 노상'},
        {boardNo: 18, boardTitle: 'test19', boardRegDate: '2023-03-03', boardCategory: '관리', prkplceNm: '원동중동 천변'},
        {boardNo: 19, boardTitle: 'test20', boardRegDate: '2023-03-03', boardCategory: '관리', prkplceNm: '원동중동 천변 노상'},
        {boardNo: 20, boardTitle: 'test21', boardRegDate: '2023-03-04', boardCategory: '관리', prkplceNm: '원동중동 천변 노상'},
    ];
    const [testContent, setTestContent] = useState(testBoardContent);
    
    const optionList = ['시설', '비용', '관리'];
    const [optionLists, setOptionLists] = useState([...optionList]);
    const clickHandler = () => {
        console.log(123);
    }
    
    //====================================================================================================================================

    const [boardTh, setBoardTh] = useState([...boardHeader]);
    const [nowPage, setNowPage] = useState(0);

    const chkSelectNum = (no) => {
        console.log(no);
        setNowPage(no);
    }

    return (
        <div id='boardContainer'>
            <div id='boardSearchContainer'>
                <Dropdown list={ optionLists.map((x,i)=>{return {"value":i, "title":x} })} checkSelected={()=>{}}></Dropdown> {/* [{value: 1, title:'zzz'}, {value: 2, title:'qqq'}, {value: 3, title:'www'}] */}
                <div id='searchContainer'>
                    <input type={'text'} placeholder="검색어를 입력해주세요."></input> {/* 20rem 3rem */}
                    <button>검색</button>
                </div>
            </div>
            <div id='boardContentContainer'>
                <table>
                    <colgroup>
                        <col width={"8%"} />
                        <col width={"8%"} />
                        <col width={"16%"} />
                        <col width={"48%"} />
                        <col width={"20%"} />
                    </colgroup>
                    <thead>
                        <tr>
                            {boardTh.map(title => <th key={title}>{title}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        { testContent.filter(content => content.boardNo < 10).map(content => {
                            return <BoardContent 
                                key={content.boardNo}
                                boardNo={content.boardNo}
                                boardTitle={content.boardTitle}
                                boardRegDate={content.boardRegDate}
                                boardCategory={content.boardCategory}
                                prkplceNm={content.prkplceNm}
                            />
                        })}
                    </tbody>
                </table>
                <div id='boardPageContainer'>
                    <Pagination totalCnt={212} chkSelectNum={chkSelectNum}/>
                </div>
            </div>
        </div>
    );
}

export default Board;