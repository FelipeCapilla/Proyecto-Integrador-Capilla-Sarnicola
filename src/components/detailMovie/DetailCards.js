import React from "react";
import DetailCard from "./DetailCard"

function DetailCards(props){
    return(
        <section className="row cards all-movies" id="movies">
            {
                props.peliculas.map(
                    (elm, idx) =>
                    <DetailCard
                        key={idx + elm.title}
                        id={elm.id} 
                        poster_path={elm.poster_path} 
                        title={elm.title} 
                        vote_average={elm.vote_average}
                        first_air_date= {elm.first_air_date}
                        overview={elm.overview}
                    />
                )
            }
        </section>
    )
}

export default DetailCards;