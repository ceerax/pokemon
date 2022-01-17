import React, { useState } from 'react'
import ModalPokemon from './modalPokemon';
import Pagination from './pagination';
import Pokemon from './pokemon'
const CardPokemon = (props) => {
    const { pokemons, cargando, page, setPage, total } = props;
    
     const lasPage = () =>{
        const nextPage = Math.max(page - 1, 0)
        setPage(nextPage)
     } 
     const nextPage = ()=>{
       const nextPage = Math.min(page + 1,total);
       setPage(nextPage)
     }
    return (
        <div>
            <div className=" d-flex justify-content-between pl-3 pr-3">
                <h1 className='text-light'>POKÉMONS</h1>
                <Pagination
                    page={page + 1}
                    totalPages={total}
                    onLeftClick={lasPage}
                    onRightClick={nextPage}

                />
            </div>
            <div className="row justify-content-center">
                {
                    cargando ?
                        <div class="d-flex justify-content-center m-5">
                            <div class="spinner-border text-light" role="status">                                
                                <span class="sr-only">Loading...</span>
                            </div>
                        </div> :
                        pokemons.map((pokemon, index) => {
                            return (
                                <Pokemon pokemon={pokemon} key={pokemon.name} />                                
                            )
                        })
                }
            </div>
        </div>
    )
}

export default CardPokemon