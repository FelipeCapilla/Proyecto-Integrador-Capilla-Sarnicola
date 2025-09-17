import React, {Component} from "react";
import Cards from "../../components/peliculas/Cards";
import LaSeries from "../../components/series/LaSeries";

class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            personajes: [],
            backup: [],
            pedidoInicialCompleto: false,
            paginaALlamar: 1
        }
    }

    componentDidMount(){
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=b01c81adb05b13c4189ffba95ed51e5f')
        .then((resp) => resp.json())
        .then((data) => this.setState({
            personajes: data.results,
            backup: data.results,
            pedidoInicialCompleto: true,
            paginaALlamar: this.state.paginaALlamar + 1
        }))
        .catch((error) => console.log('error fetch', error))
    }

    cargarMas(){
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=b01c81adb05b13c4189ffba95ed51e5f?page=${this.state.paginaALlamar}`)
        .then(reps => reps.json())
        .then(data => this.setState({
            personajes: this.state.personajes.concat(data.results),
            backup: this.state.backup.concat(data.results),
            paginaALlamar: this.state.paginaALlamar + 1
        }))
        .catch(error => console.log(error))
    }

    render(){
        return(
            <section class="row cards" id="movies">
                {
                    this.state.pedidoInicialCompleto ?
                    <article>
                    <h2 className="alert alert-primary">Popular movies this week</h2>
                    <Cards personajes={this.state.personajes} />
                    <button onClick={() => this.cargarMas()}> Cargar mas Peliculas</button>
                    <h2 className="alert alert-warning">Popular series this week</h2>
                    <LaSeries />
                    <button onClick={() => this.cargarMas()}> Cargar mas Series</button>
                    </article>
                    :
                    <h2>Cargando...</h2>
                }
            </section>

        )
    }
}

export default Home;