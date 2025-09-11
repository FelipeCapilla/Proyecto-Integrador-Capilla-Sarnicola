import React, { Component } from 'react'
import {withRouter} from "react-router-dom"

class Formulario extends Component {

    constructor(props){
        super(props)
        this.state = {
            busqueda: ''
        }
    }

    controlarForm(evento){
        evento.preventDefault()
        this.props.history.push('/resultados' + this.state.busqueda)
    }

    controlarInput(evento){
        this.setState({
            busqueda: evento.target.value
        })

    }
  render() {
    return (
        <form onSubmit={(evento) => this.controlarForm(evento)}>
            <input onChange={(evento) => this.controlarInput(evento)}/>
            <button> Buscar</button>
        </form>
    )
  }
}

export default withRouter(Formulario)
