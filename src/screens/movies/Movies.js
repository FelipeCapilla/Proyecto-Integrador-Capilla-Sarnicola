import React, { Component } from 'react'
import Cards from '../../components/peliculas/Cards'
import Filtro from '../../components/filtro/Filtro'


class Movies extends Component {

    constructor(props){
        super(props)
        this.state = {
            peliculas: [],
            backup: [],
            pedidoInicialCompleto: false,
            paginaALlamar: 1
        }
    }

    componentDidMount(){
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=b01c81adb05b13c4189ffba95ed51e5f')
        .then((resp) => resp.json())
        .then((data) => this.setState({
            peliculas: data.results,
            backup: data.results,
            pedidoInicialCompleto: true,
            paginaALlamar: this.state.paginaALlamar + 1
        }, () => console.log(data.results)
        ))
        .catch((error) => console.log('error fetch', error))
    }

    cargarMas(){

    }

    filtrarPeliculas(textoAFiltrar){
        const filtrado = this.state.backup.filter(
            (elm) => elm.name.toLowerCase().includes(textoAFiltrar.toLowerCase())
        )
        this.setState({peliculas:filtrado})
    }

  render() {
    return (
        <div>
        <Filtro filtrar = {(textoAFiltrar) => this.filtrarPeliculas(textoAFiltrar)}/>
        <section className="row cards" id="movies">
            <article>
            {
                this.state.pedidoInicialCompleto ?
                <div>
                    <h2 className="alert alert-primary">Popular series this week</h2>
                    <Cards peliculas={this.state.peliculas}/>
                </div>
                :
                <h2>Cargando...</h2>
            }
            
            
            </article>

        </section>
        </div>
    )
  }
}

export default Movies
