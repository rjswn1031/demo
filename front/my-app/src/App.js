import { Route, Routes } from 'react-router-dom'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
/* import {  } from '@fortawesome/free-regular-svg-icons' */

import './App.css';
import { Reset } from 'styled-reset'

import Header from './component/header/Header';
import Main from './component/main/Main';
import Menu1 from './component/menu1';
import Menu2 from './component/menu2';
import Menu3 from './component/menu3';
import Menu4 from './component/menu4';
import Menu5 from './component/menu5';

function App() {
  library.add(fas)

  return (
    <div className="App">
      <Reset />
      <Header />
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/menu1' element={<Menu1/>}></Route>
        <Route path='/menu2' element={<Menu2/>}></Route>
        <Route path='/menu3' element={<Menu3/>}></Route>
        <Route path='/menu4' element={<Menu4/>}></Route>
        <Route path='/menu5' element={<Menu5/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
