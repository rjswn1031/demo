import React from 'react';
import PropTypes from 'prop-types';

BoardContent.propTypes = {
    boardNo: PropTypes.number,
    boardTitle: PropTypes.string,
    boardRegDate: PropTypes.string,
    boardCategory: PropTypes.string,
    prkplceNm: PropTypes.string
};

function BoardContent(props) {
    return (
        <tr>
            <td>{props.boardNo}</td>
            <td>{props.boardCategory}</td>
            <td>{props.prkplceNm}</td>
            <td>{props.boardTitle}</td>
            <td>{props.boardRegDate}</td>
        </tr>
    );
}

export default BoardContent;