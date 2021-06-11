import React, {useState} from 'react'
import './App.css';
import like from './assets/like.svg'
import dislike from './assets/dislike.svg'
import coxinha from'./assets/coxinha.jpg'
import pizza from'./assets/pizza.jpeg'

function App() {
  const [counterLikeCoxinha, setCounterLikeCoxinha] = useState(0);
  const [counterAgainstCoxinha, setCounterAgainstCoxinha] = useState(0);

  const [counterLikePizza, setCounterLikePizza] = useState(0);
  const [counterAgainstPizza, setCounterAgainstPizza] = useState(0);


  function voteInFavorCoxinha() {
    setCounterLikeCoxinha(counterLikeCoxinha  >= 0  ? counterLikeCoxinha +1 : counterLikeCoxinha) 
  }

  function voteAgainstCoxinha() {
    setCounterAgainstCoxinha(counterAgainstCoxinha  >= 0  ? counterAgainstCoxinha +1 : counterAgainstCoxinha) 
  }

 function showTotalVotes() {
   return counterLikeCoxinha + counterAgainstCoxinha + counterLikePizza + counterAgainstPizza
 }

  function voteInFavorPizza() {
    setCounterLikePizza(counterLikePizza >= 0 ? counterLikePizza +1 : counterLikePizza) 
  }

  function voteAgainstPizza() {
    setCounterAgainstPizza(counterAgainstPizza  >= 0  ? counterAgainstPizza +1 : counterAgainstPizza) 
  }



  return (
    <div className="App">
        <div className='card'> 
          <img className='food' src={coxinha} alt="" />
          <button  onClick={voteInFavorCoxinha}><img className='likeButton'src={like} alt="" /></button>
          <button onClick={voteAgainstCoxinha}><img className='likeButton' src={dislike} alt="" /></button>
         <p>Like {counterLikeCoxinha}</p>
         <p>Dislike {counterAgainstCoxinha}</p>
        </div>

          
 
        <div>
        <div className='card'> 
          <img className='food' src={pizza} alt="" />
          <button onClick={voteInFavorPizza}><img className='likeButton' src={like} alt="" /></button>
          <button onClick={voteAgainstPizza}><img className='likeButton' src={dislike} alt="" /></button>
          <p>Like {counterLikePizza}</p>
          <p>Dislike {counterAgainstPizza} </p>
        </div>


        <p>Total votes {showTotalVotes()}</p>
       
        </div> 
    </div>
  );
}

export default App;