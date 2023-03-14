import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import './App.css';
import { Reset } from 'styled-reset'

import Modal from './component/common/Modal';

import Login from './component/Login';
import MainPage from './component/MainPage';

import Main from './component/main/Main';
import Board from './component/board/Board';
import Menu2 from './component/menu2';
import Menu3 from './component/menu3';
import Menu4 from './component/menu4';
import Menu5 from './component/menu5';

function App() {
  library.add(fas)
  const isMaskOn = useSelector(state => state.modal.isMaskOn);

  return (
    <div className="App">
      <Reset />
      <Routes>
        <Route path='login' element={<Login />}></Route>
        <Route path='main/*'  element={<MainPage />}>
          <Route path='main' element={<Main/>}></Route>
          <Route path='board' element={<Board/>}></Route>
          <Route path='menu2' element={<Menu2/>}></Route>
          <Route path='menu3' element={<Menu3/>}></Route>
          <Route path='menu4' element={<Menu4/>}></Route>
          <Route path='menu5' element={<Menu5/>}></Route>
        </Route>
      </Routes>
      { isMaskOn && <Modal modalTitle={'test'} /> }
    </div>
  );
}

export default App;
