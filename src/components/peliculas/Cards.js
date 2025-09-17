import React from "react";
import Card from "./Card";

function Cards(props){
    return(
        <section className="row cards all-movies" id="movies">
            {
                props.peliculas.map(
                    (elm, idx) =>
                    <Card
                        key={idx + elm.title}
                        id={elm.id} 
                        poster_path={elm.poster_path} 
                        title={elm.title} 
                        overview={elm.overview}
                    />
                )
            }
        </section>
    )
}

export default Cards;