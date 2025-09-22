import React, { Component } from 'react'
import {withRouter} from "react-router-dom"

class Formulario extends Component {
    constructor(props){
        super(props)
        this.state = {
            busqueda: '',
            eleccion: ''
        }
    }

    controlarForm(evento){
        evento.preventDefault()
        console.log(this.state.busqueda , this.state.eleccion)
        this.props.history.push('/resultados/' + this.state.busqueda + '/' + this.state.eleccion)
    }

    controlarInput(evento){
        this.setState({
            busqueda: evento.target.value
        })

    }
    elegirSeccion(event){
        this.setState({
            eleccion: event.target.value
        })
        
    }
  render() {
    return (
        <form onSubmit={(evento) => this.controlarForm(evento)}>
            <input onChange={(evento) => this.controlarInput(evento)}/>
            <input onChange={(event)=> this.elegirSeccion(event)} type="radio" value="movie" name='tipo' />
            <label>Peliculas</label>
            <input onChange={(event)=> this.elegirSeccion(event)} type="radio" value="series" name='tipo'/>
            <label>Series</label>
            <button>Buscar</button>
        </form>
    )
  }
}

export default withRouter(Formulario)
