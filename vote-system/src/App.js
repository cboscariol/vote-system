import React, {useState} from 'react'
import './App.css';
import like from './assets/like.svg'
import dislike from './assets/dislike.svg'
import coxinha from'./assets/coxinha.jpg'
import pizza from'./assets/pizza.jpeg'

function App() {
  const [counterCoxinha, setCounterCoxinha] = useState(0);
  const [counterPizza, setCountercounterPizza] = useState(0);

  function voteInFavorCoxinha() {
    setCounterCoxinha(counterCoxinha  >= 0  ? counterCoxinha +1 : counterCoxinha) 
  }

  function voteAgainstCoxinha() {
    setCounterCoxinha(counterCoxinha  >= 0  ? counterCoxinha +1 : counterCoxinha) 
  }

 function showTotalVotes() {
   return counterCoxinha + counterPizza
 }

  function voteInFavorPizza() {
    setCountercounterPizza(counterPizza >= 0 ? counterPizza +1 : counterPizza) 
  }

  function voteAgainstPizza() {
    setCounterCoxinha(counterCoxinha  >= 0  ? counterCoxinha +1 : counterCoxinha) 
  }



  return (
    <div className="App">
        <div className='card'> 
          <img className='food' src={coxinha} alt="" />
          <button  onClick={voteInFavorCoxinha}><img className='likeButton'src={like} alt="" /></button>
          <button onClick={() => {}}><img className='likeButton' src={dislike} alt="" /></button>
          <p>Likes {counterCoxinha}</p>
        </div>

           <p>{showTotalVotes()}</p>
 
        <div>
        <div className='card'> 
          <img className='food' src={pizza} alt="" />
          <button onClick={voteInFavorPizza}><img className='likeButton' src={like} alt="" /></button>
          <button onClick={() => {}}><img className='likeButton' src={dislike} alt="" /></button>
          <p>{counterPizza}</p>
        </div>
       
        </div> 
    </div>
  );
}

export default App;