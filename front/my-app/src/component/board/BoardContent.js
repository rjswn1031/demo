import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import { useDispatch } from 'react-redux';

import { toggleMask, changeModalType, setBoardDetailNo } from '../../slice/modalSlice'

BoardContent.propTypes = {
    boardNo: PropTypes.number,
    boardTitle: PropTypes.string,
    boardRegDate: PropTypes.string,
    boardCategory: PropTypes.string,
    prkplceNm: PropTypes.string
};

function BoardContent(props) {
    const dispatch = useDispatch();

    const detailClickHandler = () => {
        dispatch(setBoardDetailNo(props.boardNo));
        dispatch(changeModalType('boardDetail'));
        dispatch(toggleMask(true));
    }

    return (
        <tr>
            <td>{props.boardNo}</td>
            <td>{props.boardCategory}</td>
            <td>{props.prkplceNm}</td>
            <td><span onClick={()=>{detailClickHandler();}}>{props.boardTitle}</span></td>
            <td>{dayjs(props.boardRegDate).format('YYYY-MM-DD HH:mm')}</td>
        </tr>
    );
}

export default BoardContent;