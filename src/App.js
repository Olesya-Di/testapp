import './App.css';
import React, {useState, useEffect} from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FilterLikesPage from './pages/FilterLikesPage';




const App = () => {
  
  const [seaAnimals, setSeaAnimals] = useState([]);
  const [likedCardsIds, setLikedCardsIds] = useState([]);
      
  useEffect(() => {
    
    fetch("https://acnhapi.com/v1a/sea")
    .then(response => response.json())
    .then(seaAnimals => {
      setSeaAnimals(seaAnimals);
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
              seaAnimals = {seaAnimals}
              setSeaAnimals = {setSeaAnimals}
              likedCardsIds = {likedCardsIds}
              setLikedCardsIds = {setLikedCardsIds}
            />} />
            <Route path='/filter-likes-page' element = {<FilterLikesPage
              seaAnimals = {seaAnimals}
              setSeaAnimals = {setSeaAnimals}
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
