import React, { useEffect, useState } from 'react'

import Navbar from './components/Navbar'
import Searchbar from './components/searchbar'
import Card from './components/cardPokemons'
import './App.css';
import { getPokemon, getPokemonData, searchPokemon } from './api';
import { LikeProvaider } from './contexts/likeContext'


const localStorageKey = "favorite_pokemon";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [like, setLike] = useState([]);
  const [notfound, setNotfound] = useState(false);
  const [searching, setSearching] = useState(false);

  const fetchPokemon = async () => {
    try {
        setLoading(true)
        const data = await getPokemon(24, 25 * page);

        const promises = data.results.map(async (pokemon) => {
          return await getPokemonData(pokemon.url)
        });
        const results = await Promise.all(promises)
        setPokemons(results);
        setLoading(false);
        setTotal(Math.ceil(data.count / 25));
        setNotfound(false);
    } catch (error) {
    }
  }

  const loadlikepokemons = () => {
    const pokemons = JSON.parse(window.localStorage.getItem('localStorageKey')) || [];
    setLike(pokemons)
  }


  const updateLikeitePokemon = (name) => {
    const updated = [...like];
    const isLike = updated.indexOf(name);
    if (isLike >= 0) {
      updated.splice(isLike, 1);
    } else {
      updated.push(name);
    }
    setLike(updated);
    window.localStorage.setItem(localStorageKey, JSON.stringify(updated));
  };

  const onSearch = async (pokemon) => {
    if (!pokemon) {
      return fetchPokemon();
    }
    setLoading(true);
    setNotfound(false);
    setSearching(true);
    const result = await searchPokemon(pokemon);
    if (!result) {
      setNotfound(true);
      setLoading(false);
      return;
    } else {
      setPokemons([result]);
      setPage(0);
      setTotal(1)

    }
    setLoading(false);
    setSearching(false)
  }

  useEffect(() => {
    loadlikepokemons();
  }, [])

  useEffect(() => {
    if (!searching) {
      fetchPokemon();      
    }
  }, [page]);


  return (
    <LikeProvaider value={{
      likePokemons: like,
      updateLikepokemon: updateLikeitePokemon
    }}>
      <div className='m-5'>
        <Navbar />
        <div className="App">
          <Searchbar onSearch={onSearch} />
          {notfound ? (
            <div>¡no se encontro el pokemon!</div>
          ) : (
            <Card
              pokemons={pokemons}
              cargando={loading}
              page={page}
              setPage={setPage}
              total={total}
            />
          )}
        </div>
      </div>
    </LikeProvaider>
  );
}

export default App;
