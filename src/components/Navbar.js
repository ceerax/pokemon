import React, { useContext } from "react";
import LikeContext from "../contexts/likeContext";
import Logo from '../img/logo.png'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {   
    const{likePokemons} = useContext(LikeContext)
    
    return (
        <nav>
            <div className="col-12 row m-0">
                <div className=" col-10 d-flex justify-content-center">
                    <img src={Logo} className="navbar-img" alt="logo" />
                </div>
                <div className="text-light col-1 " ><FontAwesomeIcon className="heart-nav" icon={faHeart}/>  {likePokemons.length}</div>
            </div>
        </nav>
    );
};

export default Navbar