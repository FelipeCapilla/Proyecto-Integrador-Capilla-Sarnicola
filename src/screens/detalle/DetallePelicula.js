import React, { Component } from 'react'
import Card from '../../components/peliculas/Card'

class Detalle extends Component {
    constructor(props){
        super(props)
        this.state = {
            peliculas: [],
            id: this.props.match.params.id,
            cargando: true
        }
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/movie/${this.state.id}`)
        .then((resp) => resp.json())
        .then((data) => this.setState({
            peliculas: data,
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
                    id={this.state.peliculas.id}
                    poster_path={this.state.peliculas.poster_path}
                    title={this.state.peliculas.title}
                    overview={this.state.peliculas.overview}
                    />    
                }
            </section>
        )
    }
}

export default Detalle
