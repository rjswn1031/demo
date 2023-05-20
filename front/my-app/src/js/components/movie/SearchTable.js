import React from 'react';

import '../../../css/movie/Movie.css';

const SearchTable = () => {
    return (
        <div>
            <table className='searchTable'>
                <tbody>
                    <tr>
                        <td>
                            <select>
                                <option>장르</option>
                            </select>
                        </td>
                        <td>개봉연도</td>
                        <td><input placeholder='검색어를 입력하세요'/></td>

                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default SearchTable;