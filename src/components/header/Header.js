import React from "react";
import { Link } from 'react-router-dom'
import Formulario from "../formulario/Formulario";

function Header(){
    return(
        <React.Fragment>
        <h1>Ariel's Movies</h1>
        <nav>
            <ul className="nav nav-tabs my-4">


                <li className="nav-item">
                    <Link className="nav-link" to='/' >Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/movies' >Peliculas</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to='/series' >Series</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/favorites' >Favoritas</Link>
                </li>
                <Formulario/>
            </ul>
        </nav>
        </React.Fragment>
       
    )
}

export default Header;