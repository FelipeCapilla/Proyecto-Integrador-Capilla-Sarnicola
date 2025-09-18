import React, {Component} from "react";
import { Link } from 'react-router-dom'

class Card extends Component{
    constructor(props){
        super(props)
        this.state = {
            verMas: false,
            textoBoton: "Ver mas"
        }
    }

    componentDidMount(){
        let recuperoPelicula = localStorage.getItem('peliculas')
        let peliculaRecuperada = JSON.parse(recuperoPelicula)
        if (peliculaRecuperada !== null) {
            if (peliculaRecuperada.include(this.props.id)) {
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
        let recuperoPelicula = localStorage.getItem('peliculas')
        let peliculaRecuperada = JSON.parse(recuperoPelicula)
    
        if (recuperoPelicula === null) {
          let peliculasString = JSON.stringify([id])
          localStorage.setItem('peliculas', peliculasString )
          this.setState({esFav: true})
        }
        else{
            peliculaRecuperada.push(id)
          localStorage.setItem('peliculas', JSON.stringify(peliculaRecuperada) )
          this.setState({esFav: true})
        }
    }

    eliminarFav(id){
        let recuperoPelicula = localStorage.getItem('peliculas')
        let peliculaRecuperada = JSON.parse(recuperoPelicula)
    
        if (recuperoPelicula === null) {
          alert('No hay peliculas en favoritos')
        }
        else{
          let nuevosFav = peliculaRecuperada.filter((elm) => elm !== id)
          if (nuevosFav.length === 0) {
            localStorage.removeItem('peliculas')
          }
          else{
            localStorage.setItem('peliculas', JSON.stringify(nuevosFav))
          }
          this.setState({esFav: false})
        
        }
    }

    render(){
        return(
            <article className="single-card-movie">
            <img src={`https://image.tmdb.org/t/p/w500${this.props.poster_path}`} className="card-img-top" alt="" />
            <div className="cardBody">
                <h5 className="card-title">{this.props.title}</h5>
                {this.state.verMas ?  <p>{this.props.overview}</p> : ""}
                <button onClick={() => this.cambiarValores()} className="btn btn-primary">{this.state.textoBoton}</button>
                <Link to={`/detail/id/${this.props.id}`}><button className="btn btn-primary">Ver detalle</button></Link>
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

export default Card;