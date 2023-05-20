import './App.css';
import MoviePage from './js/pages/MoviePage';
import LoginPage from './js/pages/LoginPage';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './js/components/header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/searchMovie' element={<MoviePage />} />
          <Route path='/login' element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
