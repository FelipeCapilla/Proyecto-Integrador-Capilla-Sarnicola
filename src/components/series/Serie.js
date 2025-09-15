import React, { Component } from 'react'

class Serie extends Component {
  render() {
    return (
        <article className="single-card-tv">
                <img src="https://image.tmdb.org/t/p/w500/9mYeRoWguq5etbwJRdF8BXFKiF.jpg" className="card-img-top" alt="..."/>
                <div className="cardBody">
                    <h5 className="card-title">The Terminal List: Dark Wolf</h5>
                    <p className="card-text">Before The Terminal List, Navy SEAL Ben Edwards finds himself entangled in the
                        black operations side of the CIA. The deeper Ben goes into the 'gray', the harder it will become
                        to not give himself over to his darker impulses. Every man has two wolves inside him – light and
                        dark – fighting for control. Which wolf will Ben Edwards feed?</p>
                    <a href="serie.html" className="btn btn-primary">Ver más</a>
                </div>
            </article>
    )
  }
}

export default Serie
