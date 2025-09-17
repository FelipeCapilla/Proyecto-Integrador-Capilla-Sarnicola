import React, {Component} from "react";
import Cards from "../../components/peliculas/Cards";

class Home extends Component{
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
        }, () => console.log(data)
        ))
        .catch((error) => console.log('error fetch', error))
    }

    render(){
        return(
            <section class="row cards" id="movies">
                {
                    this.state.pedidoInicialCompleto ?
                    <article>
                    <h2 className="alert alert-primary">Popular movies this week</h2>
                    <Cards peliculas={this.state.peliculas} />
                    <h2 className="alert alert-primary">Popular series this week</h2>
                    </article>
                    :
                    <h2>Cargando...</h2>
                }
            </section>

        )
    }
}

export default Home;