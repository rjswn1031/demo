import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import '../../css/header.css'
import HeaderBtn from '../header/HeaderBtn'

const Header = () => {
    const menuList = [
        {title: 'menu1', url: '/menu1'},
        {title: 'menu2', url: '/menu2'},
        {title: 'menu3', url: '/menu3'},
        {title: 'menu4', url: '/menu4'},
        {title: 'menu5', url: '/menu5'}
    ];

    const [lists, setLists] = useState(menuList);

    return (
        <div id="headerContainer" className="header">
            <div id='headerTitle'><Link to={'/'}>Demo</Link></div>
            <ul id='headerBtnWrap' key={lists}>
                {lists.map(list => <HeaderBtn key={list.title} title={list.title} url={list.url}/>)}
            </ul>
        </div>
    );
};

export default Header;