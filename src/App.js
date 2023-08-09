import './App.css';
import React, {useState, useEffect} from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FilterLikesPage from './pages/FilterLikesPage';

const App = () => {
  
  const [people, setPeople] = useState([]);
  const [likedCardsIds, setLikedCardsIds] = useState([]);
      
  useEffect(() => {
    
    fetch("https://randomuser.me/api?results=24")
    .then(response => response.json())
    .then(data => {
      setPeople(data.results);
    })
    .catch(error => console.log(error))

  }, []);

  return (
  <>
    <section className='bodyContainer'>
      <section className='container'>
        <Router>
          <Routes>
            <Route path='/' exact element = {<Home
              people = {people}
              setPeople = {setPeople}
              likedCardsIds = {likedCardsIds}
              setLikedCardsIds = {setLikedCardsIds}
            />} />
            <Route path='/filter-likes-page' element = {<FilterLikesPage
              people = {people}
              setPeople = {setPeople}
              likedCardsIds = {likedCardsIds}
              setLikedCardsIds = {setLikedCardsIds}
            />} />
          </Routes>
        </Router>    
      </section>
    </section>
  </>
  )
}

export default App;
