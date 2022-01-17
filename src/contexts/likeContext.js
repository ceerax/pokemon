import React from "react";

const LikeContext =React.createContext({
    likePokemons:[],
    updateLikepokemon:(id)=> null
})
export const LikeProvaider =LikeContext.Provider;
export default LikeContext;