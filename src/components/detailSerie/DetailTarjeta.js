import React, { Component } from 'react'

class DetailTarjeta extends Component {

    constructor(props){
        super(props)
        this.state = {
            verMas: false,
            textoBoton: "Ver mas"
        }
    }

    componentDidMount(){
        let recuperoSerie = localStorage.getItem('series')
        if (recuperoSerie !== null) {
            let serieRecuperada = JSON.parse(recuperoSerie)
            if (serieRecuperada.includes(this.props.id)) {
            this.setState({esFav: true})
            }
        }
    }

    cambiarValores(){
        this.setState({
            verMas: !this.state.verMas,
            textoBoton: this.state.verMas ? "ver mas" : "ver menos"
        })
    }

    agregarFav(id){
        let recuperoSerie = localStorage.getItem('series')
        
        if (recuperoSerie === null) {
          let seriesString = JSON.stringify([id])
          localStorage.setItem('series', seriesString )
          this.setState({esFav: true})
        }
        else{
          let serieRecuperada = JSON.parse(recuperoSerie)
          serieRecuperada.push(id)
          localStorage.setItem('series', JSON.stringify(serieRecuperada) )
          this.setState({esFav: true})
        }
    }

    eliminarFav(id){
        let recuperoSerie = localStorage.getItem('series')
        
        if (recuperoSerie === null) {
          alert('No hay series en favoritos')
        }
        else{
          let serieRecuperada = JSON.parse(recuperoSerie)
          let nuevosFav = serieRecuperada.filter((elm) => elm !== id)
          if (nuevosFav.length === 0) {
            localStorage.removeItem('series')
          }
          else{
            localStorage.setItem('series', JSON.stringify(nuevosFav))
          }
          this.setState({esFav: false})
        
        }
    }

  render() {
    return (
            <article className="single-card-tv">
            <img src={`https://image.tmdb.org/t/p/w500${this.props.poster_path}`} class="card-img-top" alt=""/>
            <div className="cardBody">
                <h5 className="card-title">{this.props.name}</h5>
                <p>{this.props.vote_average}</p>
                <p>{this.props.first_air_date}</p>
                {this.state.verMas ?  <p className="card-text">{this.props.overview}</p> : ""}
                <button onClick={() => this.cambiarValores()} className="btn btn-primary">{this.state.textoBoton}</button>
            </div>
            {
                this.state.esFav 
                ? 
                <button onClick={() => this.eliminarFav(this.props.id)} className="btn btn-primary">Eliminar Favorito</button>
                : 
                <button onClick={() => this.agregarFav(this.props.id)} className="btn btn-primary">🩶</button>
            }
            </article>
        )
    }
}

export default DetailTarjeta
