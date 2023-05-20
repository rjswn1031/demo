import React, { useRef } from 'react';
import '../../../css/header/Header.css';
import { Link } from 'react-router-dom';
import Login from './login/Login';

const Header = () => {
    const searchNm = useRef();

    const searchMovie = () => {
        return null;
    }

    return (
        <div className='header'>
            <div className='header_logo'>HOCHA</div>
            <div className='header_search'>
                <input type="text" className='header_search_input' ref={searchNm}/>
                <Link to="/searchMovie" >
                <button onClick={searchMovie}>
                <img src='/header/img_search.png' className='header_search_btn' alt='검색'/>
                </button></Link>
            </div>
            <Login />
            
        </div>
    );
};

export default Header;