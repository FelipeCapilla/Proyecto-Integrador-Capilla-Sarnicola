import React, {Component} from "react";
import { Link } from 'react-router-dom';

class Card extends Component{

    constructor(props){
        super(props)
        this.state = {
            verTodas: false,
            textoBoton: "Ver Más",
            seleccionar: false

        }
    }

    componentDidMount(){
        let recuperoPersonaje = localStorage.getItem('personaje')
        let personajeRecuperado = JSON.parse(recuperoPersonaje)
        if (personajeRecuperado !== null) {
            this.setState({esFav: true})
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
            <article className={`single-card-movie ${this.state.seleccionar ? "seleccionado" : ""}`}>
                <img src={this.props.img} alt="" />
                <div className="cardBody">
                    <h5 className="card-title">The Thursday Murder Club</h5>
                    <p className="card-text">A group of senior sleuths passionate about solving cold cases get plunged into
                        a real-life murder mystery in this comic crime caper.</p>
                    <a href="movie.html" className="btn btn-primary">Ver más</a>
                    <a href="" className="btn alert-primary">🩶</a>
                </div>
            </article>

            


        )
    }
}

export default Card;