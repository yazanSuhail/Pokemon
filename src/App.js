import { useState, useEffect } from 'react';
import AllPokemons from './components/AllPokemons';
import JumpButtons from './components/JumpButton';
import axios from 'axios';

import './App.css';


function App() {
  const [pokemon, setPokemon] = useState([])
  const [currentPage, setCurrentPage] = useState('https://pokeapi.co/api/v2/pokemon')
  const [nextPageURL, setNextPageURL] = useState()
  const [prevPageURL, setPrevPageURL] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getPokemons = async () => {
      setLoading(true)
      axios.get(currentPage).then(res => {
        setLoading(false)
        setNextPageURL(res.data.next)
        setPrevPageURL(res.data.previous)
        setPokemon(res.data.results.map(p => p.name))
      },
        (error) => {
          console.log(error);
        }
      );
    };
    getPokemons()
  }, [currentPage])

  const nextPage = () => {
    setCurrentPage(nextPageURL)
  }

  const prevPage = () => {
    setCurrentPage(prevPageURL)
  }

  if (loading === true) return <div>loading</div>;

  return (

    <div className="App">
      <JumpButtons pokemon={pokemon}
        nextPage={nextPageURL ? nextPage : null}
        prevPage={prevPageURL ? prevPage : null} />

      <AllPokemons pokemon={pokemon} />
    </div>
  );
}

export default App;
