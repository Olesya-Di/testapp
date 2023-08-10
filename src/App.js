import './App.css';
import React, {useState, useEffect} from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FilterLikesPage from './pages/FilterLikesPage';
import hearts from './img/hearts.png'

const App = ({ team, setTeam }) => {
  
  const [people, setPeople] = useState([]);
  const [likedCardsIds, setLikedCardsIds] = useState([]);
      
  useEffect(() => {
    
    fetch("https://randomuser.me/api?results=20")
    .then(response => response.json())
    .then(data => {
      setPeople(data.results);
    })
    .catch(error => console.log(error))

  }, []);

  const styleBodyContainer = team ? "body__light" : "body__dark"
  const styleTeam = team ? "team__light" : "team__dark";

  return (
  <>
    <section className={`bodyContainer ${styleBodyContainer}`}>
      { team && <img className="bodyContainer__logo" src={hearts} alt='hearts'/> }
      <section className='container'>
        <Router>
          <Routes>
            <Route path='/' exact element = {<Home
              styleTeam = {styleTeam}
              team = {team}
              setTeam = {setTeam}
              people = {people}
              setPeople = {setPeople}
              likedCardsIds = {likedCardsIds}
              setLikedCardsIds = {setLikedCardsIds}
            />} />
            <Route path='/filter-likes-page' element = {<FilterLikesPage
              styleTeam = {styleTeam}
              team = {team}
              setTeam = {setTeam}
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
