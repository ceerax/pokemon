import React, { useContext } from "react";
import LikeContext from "../contexts/likeContext";
import Modal from './modalPokemon'


const Pokemon = (props) => {
    const { likePokemons, updateLikepokemon } = useContext(LikeContext);
    const { pokemon } = props;

    const redHeart = "❤️";
    const blackHeart = "♥";

    const heart = likePokemons.includes(pokemon.name) ? redHeart : blackHeart
    const clikHeart = (e) => {
        updateLikepokemon(pokemon.name)

    }
    return (
        <div className=" col-sm-6 col-md-4 col-lg-2  mt-3">
            <div className="card ">
                <div className="d-flex justify-content-between ml-3 mr-3 ">
                    <p className="card-text d-flex align-items-center m-0 ">#{pokemon.id}</p>
                    <button onClick={clikHeart} className="btn btn-heart m-0 p-0 ">
                        {heart}
                    </button>
                </div>
                <h5 className="card-title">{pokemon.name}</h5>
                <div className=" container-img-pokemon d-flex justify-content-center">
                    <img src={pokemon.sprites.front_default} className="card-img-top" alt="pokemon.name" />
                </div>
                <div className="card-body">
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                        Ver mas !
                    </button>
                    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">{pokemon.id}</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                <img src={pokemon.sprites.front_default} className="card-img-top" alt="pokemon.name" />
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row ml-3 mr-3 d-flex justify-content-between">
                    <div className=""><h5>Type</h5></div>
                    {
                        pokemon.types.map((type, index) => {
                            return (
                                <div className="mr-1" key={index}>{type.type.name}</div>

                            )
                        })
                    }
                </div>

            </div>
        </div >


    )
}

export default Pokemon