import React from 'react';
import { Outlet } from 'react-router-dom'

import Header from './header/Header';


function MainPage(props) {
    return (
        <div id='mainPageContainer'>
            <Header />
            <Outlet />
        </div>
    );
}

export default MainPage;