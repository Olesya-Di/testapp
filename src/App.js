import React from 'react';
import './App.css';
//mport Container from 'react-bootstrap/Container';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FilterLikesPage from './pages/FilterLikesPage';


const App = () => {
  return (
  <>


  <div className='container col-12'>
    <div className='container pt-4'>
      <Router>
        <Routes>
          <Route path='/' exact element = {<Home/>} />
          <Route path='/filter-likes-page' element = {<FilterLikesPage/>} />
        </Routes>
      </Router>    
    </div>
  </div>
  </>
  )
}

export default App;
