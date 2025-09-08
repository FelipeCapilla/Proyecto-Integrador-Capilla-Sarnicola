import React, {Component} from "react";
import Cards from "../../components/peliculas/Cards";

class Home extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        fetch('')
        .then((resp) => resp.json())
        .then((data) => console.log('error data', data))
        .catch((error) => console.log('error fetch', error))
    }

    render(){
        return(
            <section>
            <h2 class="alert alert-primary">Popular movies this week</h2>
            <Cards />
            </section>
        )
    }
}

export default Home;