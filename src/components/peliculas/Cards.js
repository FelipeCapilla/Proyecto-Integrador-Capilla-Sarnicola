import React from "react";
import Card from "./Card";

function Cards(props){
    return(
        <section className="row cards all-movies" id="movies">
            {
                props.personajes.map(
                    (elm, idx) =>
                    <Card
                        key={idx + elm.name}
                        id={elm.id} 
                        img={elm.poster_path} 
                        name={elm.name} 
                        description={elm.description}
                    />
                )
            }
        </section>
    )
}

export default Cards;