import React from 'react'
import Tarjeta from './Tarjeta'

function Tarjetas(props) {
  return (
        <section className="row cards" id="tv-show">
           {
                props.series.map(
                    (elm, idx) =>
                    <Tarjeta
                        key={idx + elm.title}
                        id={elm.id} 
                        poster_path={elm.poster_path} 
                        name={elm.name} 
                        overview={elm.overview}
                    />
                )
            } 
        </section>
  )
}

export default Tarjetas

