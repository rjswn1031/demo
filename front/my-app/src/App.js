import React from 'react';
import {Routes, Route, Link} from 'react-router-dom'

import './App.css';
import Main from './component/main/Main';
import Menu from './component/menu/Menu';
import Counter from './component/menu/Counter';
import Input from './component/menu/Input';
import Input2 from './component/menu/Input2';
import List from './component/menu/List';


function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">main</Link> | <Link to="/Menu">menu</Link> | <Link to="/Counter">counter</Link>|{" "}
        <Link to="/Input">Input</Link> | {" "}
        <Link to="/Input2">Input2</Link> | {" "}
        <Link to="/List">List</Link> | {" "}
      </nav>
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/Menu' element={<Menu />}/>
        <Route path='/Counter' element={<Counter />}/>
        <Route path='/Input' element={<Input />}/>
        <Route path='/Input' element={<Input />}/>
        <Route path='/Input2' element={<Input2 />}/>
        <Route path='/List' element={<List />}/>
      </Routes>
    </div>
  );
}

export default App;
