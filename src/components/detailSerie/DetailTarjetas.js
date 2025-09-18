import React from 'react'
import DetailTarjeta from './DetailTarjeta'

function DetailTarjetas(props) {
  return (
        <section className="row cards" id="tv-show">
           {
                props.series.map(
                    (elm, idx) =>
                    <DetailTarjeta
                        key={idx + elm.title}
                        id={elm.id} 
                        poster_path={elm.poster_path} 
                        name={elm.name} 
                        vote_average={elm.vote_average}
                        first_air_date= {elm.first_air_date}
                        overview={elm.overview}
                    />
                )
            } 
        </section>
  )
}

export default DetailTarjetas
