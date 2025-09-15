import React, { Component } from 'react'
import Card from '../../components/peliculas/Card'

export default class Detalle extends Component {
    constructor(props){
        super(props)
        this.state = {
            personaje: [],
            id: this.props.match.params.id,
            cargando: true
        }
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/movie/${this.state.id}`)
        .then((resp) => resp.json())
        .then((data) => this.setState({
            personaje: data,
            cargando: false
        }))
        .catch((error) => console.log('error fetch', error))
    }

    render() {
        return (
            <section class="row">
                {
                    this.state.cargando 
                    ? 
                    <p>cargando...</p>
                    :
                    <Card
                    id={this.state.personaje.id}
                    img={this.state.personaje.image}
                    name={this.state.personaje.name}
                    description={this.state.description}
                    />    
                }
            </section>
        )
    }
}
