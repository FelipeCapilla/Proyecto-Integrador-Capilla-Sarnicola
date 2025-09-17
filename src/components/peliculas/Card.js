import React, {Component} from "react";
import { Link } from 'react-router-dom';

class Card extends Component{
    constructor(props){
        super(props)
        this.state = {
            verMas: false,
            textoBoton: "Ver mas"
        }
    }

    componentDidMount(){
        let recuperoPersonaje = localStorage.getItem('personaje')
        let personajeRecuperado = JSON.parse(recuperoPersonaje)
        if (personajeRecuperado !== null) {
            if (personajeRecuperado.include(this.props.id)) {
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
        let recuperoPersonaje = localStorage.getItem('personajes')
        let personajeRecuperado = JSON.parse(recuperoPersonaje)
    
        if (recuperoPersonaje === null) {
          let personajesString = JSON.stringify([id])
          localStorage.setItem('personajes', personajesString )
          this.setState({esFav: true})
        }
        else{
            personajeRecuperado.push(id)
          localStorage.setItem('personajes', JSON.stringify(personajeRecuperado) )
          this.setState({esFav: true})
        }
    }

    eliminarFav(id){
        let recuperoPersonaje = localStorage.getItem('personajes')
        let personajeRecuperado = JSON.parse(recuperoPersonaje)
    
        if (recuperoPersonaje === null) {
          alert('No hay personajes en favoritos')
        }
        else{
          let nuevosFav = personajeRecuperado.filter((elm) => elm !== id)
          if (nuevosFav.length === 0) {
            localStorage.removeItem('personajes')
          }
          else{
            localStorage.setItem('personajes', JSON.stringify(nuevosFav))
          }
          this.setState({esFav: false})
        
        }
    }

    render(){
        return(
            <article className="single-card-movie">
            <img src={`https://image.tmdb.org/t/p/w500$${this.props.poster_path}`} className="card-img-top" alt="" />
            <div className="cardBody">
                <h5 className="card-title">{this.props.name}</h5>
                <p className="card-text">{this.props.description}</p>
                {this.state.verMas ?  <a href="/movies" className="btn btn-primary">Ver mas</a> : ""}
            </div>
        </article>
        )
    }
}

export default Card;