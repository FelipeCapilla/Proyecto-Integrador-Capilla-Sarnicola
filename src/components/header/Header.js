import React from "react";
import { Link } from 'react-router-dom'

function Header(){
    return(
        <nav>
            <ul class="nav nav-tabs my-4">
                
                <h2>Nombre de la Pagina</h2>

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
            </ul>
        </nav>
    )
}

export default Header;