import React, {Component} from "react";
import Cards from "../../components/peliculas/Cards";
import Tarjetas from "../../components/series/Tarjetas";

class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            peliculas: [],
            series: [],
        }
    }

    componentDidMount(){
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=b01c81adb05b13c4189ffba95ed51e5f')
        .then((resp) => resp.json())
        .then((data) => this.setState({
            peliculas: data.results,
            series: data.results,
        }, () => console.log(data.results)
        ))
        .catch((error) => console.log('error fetch', error));

        fetch('https://api.themoviedb.org/3/tv/popular?api_key=b01c81adb05b13c4189ffba95ed51e5f')
        .then((resp) => resp.json())
        .then((data) => this.setState({
            series: data.results
        }, () => console.log(data.results)
        ))
        .catch((error) => console.log('error fetch', error))
    }

    render(){
        return(
            <section className="row cards" id="movies">
                <article>
                <h2 className="alert alert-primary">Popular movies this week</h2>
                <Cards peliculas={this.state.peliculas} />
                <h2 className="alert alert-primary">Popular series this week</h2>
                <Tarjetas series={this.state.series}/>
                </article>
            </section>

        )
    }
}

export default Home;