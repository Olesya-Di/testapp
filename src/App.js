import './App.css';
import React, {useState, useEffect} from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FilterLikesPage from './pages/FilterLikesPage';




const App = () => {
  
  const [saeAnimals, setSaeAnimals] = useState([]);
  const [likedCardsIds, setLikedCardsIds] = useState([]);
      
  useEffect(() => {
    
    fetch("https://acnhapi.com/v1a/sea")
    .then(response => response.json())
    .then(saeAnimals => {
      setSaeAnimals(saeAnimals);
    })
    .catch(error => console.log(error))

  }, []);

  return (
  <>
  {/* <img src={'./../public/img/cross.svg'}/>
  <img src={'./img/cross.svg'}/>
  <img src={'./../public/img/shells.png'}/>
  {require(`../../assets/pic-${j + 1}.jpg`).default} */}
    <section className='bodyContainer'>
      <section className='container'>
        <Router>
          <Routes>
            <Route path='/' exact element = {<Home
              saeAnimals = {saeAnimals}
              setSaeAnimals = {setSaeAnimals}
              likedCardsIds = {likedCardsIds}
              setLikedCardsIds = {setLikedCardsIds}
            />} />
            <Route path='/filter-likes-page' element = {<FilterLikesPage
              saeAnimals = {saeAnimals}
              setSaeAnimals = {setSaeAnimals}
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
