import React, { Component } from 'react'
import DetailTarjeta from '../../components/detailSerie/DetailTarjeta'

class DetalleSerie extends Component {
    constructor(props){
        super(props)
        this.state = {
            series: [],
            id: this.props.match.params.id,
            cargando: true
        }
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/tv/${this.state.id}?api_key=b01c81adb05b13c4189ffba95ed51e5f`)
        .then((resp) => resp.json())
        .then((data) => this.setState({
            series: data,
            cargando: false
        }))
        .catch((error) => console.log('error fetch', error))
    }

    render() {
        console.log("render detalle: ", this.state);
        return (
            <section class="row">
                {
                    this.state.cargando 
                    ? 
                    <p>cargando...</p>
                    :
                    <DetailTarjeta
                        id={this.state.series.id}
                        poster_path={this.state.series.poster_path}
                        name={this.state.series.name}
                        vote_average={this.state.series.vote_average}
                        first_air_date= {this.state.series.first_air_date}
                        overview={this.state.series.overview}
                        genres={this.state.series.genres.name}
                    />    
                }
            </section>
        )
    }
}

export default DetalleSerie;
