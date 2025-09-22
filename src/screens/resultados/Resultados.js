import React, { Component } from "react";
import Cards from "../../components/peliculas/Cards";
import Tarjetas from "../../components/series/Tarjetas";

class Resultado extends Component {
    constructor(props){
        super(props)
        this.state = {
            movies: [],
            series: []
        }
    }

    componentDidMount(){
        console.log("props resultados: ", this.props)
        if (this.props.match.params.eleccion == 'series') {
            fetch(`https://api.themoviedb.org/3/search/tv?query=${this.props.match.params.busqueda}&api_key=b01c81adb05b13c4189ffba95ed51e5f`)
            .then((resp) => resp.json())
            .then((data) => this.setState({
                series: data.results
            }))
            .catch((error) => console.log('error fetch', error));
        } else{
            fetch(`https://api.themoviedb.org/3/search/movie?query=${this.props.match.params.busqueda}&api_key=b01c81adb05b13c4189ffba95ed51e5f`)
            .then((resp) => resp.json())
            .then((data) => this.setState({
                movies: data.results
            }))
            .catch((error) => console.log('error fetch', error));
        }        
    }

    render(){
        return(
           <div>
                { 
                    this.props.match.params.eleccion == 'series'?
                    <div>
                        <h2 className="alert alert-primary">Peliculas buscadas</h2>
                        <Tarjetas series={this.state.series}/>
                    </div>
                     :
                    <div>
                        <h2 className="alert alert-primary">Peliculas buscadas</h2>
                        <Cards peliculas={this.state.movies}/>
                    </div>
                    
                    
                }
            </div>
        )
    }
}

export default Resultado;