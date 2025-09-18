import React, { Component } from 'react'
import Tarjeta from '../../components/series/Tarjeta'

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
        fetch(`https://api.themoviedb.org/3/tv/${this.state.id}`)
        .then((resp) => resp.json())
        .then((data) => this.setState({
            series: data,
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
                    id={this.state.series.id}
                    poster_path={this.state.series.poster_path}
                    name={this.state.series.name}
                    vote_average={this.state.series.vote_average}
                    first_air_date= {this.state.series.first_air_date}
                    overview={this.state.series.overview}
                    />    
                }
            </section>
        )
    }
}

export default DetalleSerie;
