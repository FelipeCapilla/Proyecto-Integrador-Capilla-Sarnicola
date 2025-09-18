import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Tarjeta extends Component {

    constructor(props){
        super(props)
        this.state = {
            verMas: false,
            textoBoton: "Ver mas"
        }
    }

    componentDidMount(){
        let recuperoSerie = localStorage.getItem('series')
        let serieRecuperada = JSON.parse(recuperoSerie)
        if (serieRecuperada !== null) {
            if (serieRecuperada.include(this.props.id)) {
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
        let serieRecuperada = JSON.parse(recuperoSerie)
    
        if (recuperoSerie === null) {
          let peliculasString = JSON.stringify([id])
          localStorage.setItem('series', peliculasString )
          this.setState({esFav: true})
        }
        else{
            serieRecuperada.push(id)
          localStorage.setItem('series', JSON.stringify(serieRecuperada) )
          this.setState({esFav: true})
        }
    }

    eliminarFav(id){
        let recuperoSerie = localStorage.getItem('series')
        let serieRecuperada = JSON.parse(recuperoSerie)
    
        if (recuperoSerie === null) {
          alert('No hay series en favoritos')
        }
        else{
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
            <img src={``} className="" alt=""/>
            <div className="cardBody">
                <h5 className="card-title">{}</h5>
                {this.state.verMas ?  <p>{this.props.overview}</p> : ""}
                <button onClick={() => this.cambiarValores()}>{this.state.textoBoton}</button>
                <Link to={`/detail/id/${this.props.id}`}><button>Ver detalle</button></Link>
            </div>
            {
                this.state.esFav 
                ? 
                <button onClick={() => this.eliminarFav(this.props.id)}>Eliminar Favorito</button>
                : 
                <button onClick={() => this.agregarFav(this.props.id)}>Agregar Favorito</button>
            }
            </article>
        )
    }
}

export default Tarjeta
