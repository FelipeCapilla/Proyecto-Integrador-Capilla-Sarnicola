import React, {Component} from "react";
import Cards from "../../components/peliculas/Cards";
import LaSeries from "../../components/series/LaSeries";


class Home extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=b01c81adb05b13c4189ffba95ed51e5f')
        .then((resp) => resp.json())
        .then((data) => console.log('error data', data))
        .catch((error) => console.log('error fetch', error))
    }

    render(){
        return(
            <section>
            <h2 class="alert alert-primary">Popular movies this week</h2>
            <Cards/>
            <h2 class="alert alert-warning">Popular series this week</h2>
            <LaSeries/>
            </section>

        )
    }
}

export default Home;