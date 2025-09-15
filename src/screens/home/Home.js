import React, {Component} from "react";
import Cards from "../../components/peliculas/Cards";
import LaSeries from "../../components/series/LaSeries";


class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            personajes: [],
        }
    }

    componentDidMount(){
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=b01c81adb05b13c4189ffba95ed51e5f')
        .then((resp) => resp.json())
        .then((data) => console.log('error data', data))
        .catch((error) => console.log('error fetch', error))
    }

    cargarMas(){
        fetch(`https://api.themoviedb.org/3/movie/popular?page=${this.state.paginaALlamar}`)
        .then(reps => reps.json())
        .then(data => {
            console.log('data', data)
            this.setState({
            personajes: this.state.personajes.concat(data.results)
        })})
        .catch(error => console.log(error))
    }

    render(){
        return(
            <section>
            <h2 class="alert alert-primary">Popular movies this week</h2>
            <Cards/>
            <button onClick={() => this.cargarMas()}> Cargar mas Peliculas</button>
            <h2 class="alert alert-warning">Popular series this week</h2>
            <LaSeries/>
            <button onClick={() => this.cargarMas()}> Cargar mas Series</button>
            </section>

        )
    }
}

export default Home;