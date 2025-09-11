import React, {Component} from "react";
import { Link } from 'react-router-dom';

class Card extends Component{
    render(){
        return(
            <article class="single-card-movie">
                <img src="https://image.tmdb.org/t/p/w500/tzrJulItjttxzoX0t3B2My46TS7.jpg" class="card-img-top"
                    alt="..." />
                <div class="cardBody">
                    <h5 class="card-title">The Thursday Murder Club</h5>
                    <p class="card-text">A group of senior sleuths passionate about solving cold cases get plunged into
                        a real-life murder mystery in this comic crime caper.</p>
                    <a href="movie.html" class="btn btn-primary">Ver más</a>
                    <a href="" class="btn alert-primary">🩶</a>
                </div>
            </article>

            


        )
    }
}

export default Card;