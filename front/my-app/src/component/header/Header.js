import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import HeaderBtn from '../header/HeaderBtn'

import '../../css/header.css'

const Header = () => {
    const menuList = [
        {title: 'menu1', url: '/main/menu1'},
        {title: 'menu2', url: '/main/menu2'},
        {title: 'menu3', url: '/main/menu3'},
        {title: 'menu4', url: '/main/menu4'},
        {title: 'menu5', url: '/main/menu5'}
    ];

    const [lists] = useState(menuList);

    return (
        <div id="headerContainer" className="header">
            <div id='headerTitle'><Link to={'/main/main'}>Demo</Link></div>
            <ul id='headerBtnWrap' key={lists}>
                {lists.map(list => <HeaderBtn key={list.title} title={list.title} url={list.url}/>)}
            </ul>
        </div>
    );
};

export default Header;