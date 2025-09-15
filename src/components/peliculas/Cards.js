import React from "react";
import Card from "./Card";


function Cards(props){
    return(
        <section class="row cards all-movies" id="movies">
            {
                props.personajes.map(
                    (elm, idx) =>
                    <Card
                        key={idx + elm.name}
                        id={elm.id} 
                        img={elm.image} 
                        name={elm.name} 
                        description={elm.description}
                    />
                )
            }
        </section>
    )
}

export default Cards;