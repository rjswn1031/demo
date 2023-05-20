import React, { useEffect, useState } from 'react';
import SearchTable from '../components/movie/SearchTable';
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material'
import { maxWidth } from '@mui/system';

const MoviePage = () => {
    const [resultList,setResultList] = useState("")

    useEffect(() => {
        fetch("http://localhost:8080/searchMovie").then(res => res.json()).then(res => {
            setResultList(res);
        })
    },[])

    return (
        <div>
            <SearchTable/>
            <div>
                <TableContainer component={Paper} sx={{maxWidth:'70%'}}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>제목</TableCell>
                                <TableCell>제목(영어)</TableCell>
                                <TableCell>년도</TableCell>
                                <TableCell>타입</TableCell>
                                <TableCell>국가</TableCell>
                                <TableCell>장르</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {resultList && resultList.map((list) => ( 
                                <tr key={list.movieCd}>
                                    <td>{list.movieNm}</td>
                                    <td>{list.movieNmEn}</td>
                                    <td>{list.prdtYear}</td>
                                    <td>{list.typeNm}</td>
                                    <td>{list.nationAlt}</td>
                                    <td>{list.genreAlt}</td>
                                </tr>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
};

export default MoviePage;