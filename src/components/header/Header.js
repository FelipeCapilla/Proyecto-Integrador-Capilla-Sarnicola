import React from "react";
import { Link } from 'react-router-dom'
import Formulario from "../formulario/Formulario";

function Header(){
    return(
        <React.Fragment>
        <h1>UdeSA Movies</h1>
        <nav>
            <ul class="nav nav-tabs my-4">


                <li class="nav-item">
                    <Link class="nav-link" to='/' >Home</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to='/movies' >Peliculas</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to='/series' >Series</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to='/favorites' >Favoritas</Link>
                </li>
                <Formulario/>
            </ul>
        </nav>
        </React.Fragment>
       
    )
}

export default Header;