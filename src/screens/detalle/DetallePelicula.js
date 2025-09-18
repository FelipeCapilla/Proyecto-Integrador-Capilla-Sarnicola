import React, { Component } from 'react'
import DetailCard from '../../components/detailMovie/DetailCard'

class DetallePelicula extends Component {
    constructor(props){
        super(props)
        this.state = {
            peliculas: [],
            id: this.props.match.params.id,
            cargando: true
        }
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/movie/${this.state.id}&api_key=b01c81adb05b13c4189ffba95ed51e5f`)
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
                    <DetailCard
                        id={this.state.peliculas.id}
                        poster_path={this.state.peliculas.poster_path}
                        title={this.state.peliculas.title}
                        vote_average={this.state.peliculas.vote_average}
                        first_air_date= {this.state.peliculas.first_air_date}
                        overview={this.state.peliculas.overview}
                    />    
                }
            </section>
        )
    }
}

export default DetallePelicula;
