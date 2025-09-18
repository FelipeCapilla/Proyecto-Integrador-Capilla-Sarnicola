import React, {Component} from "react";
import Card from "../../components/peliculas/Card";

class Favorites extends Component{
    constructor(props){
        super(props)
        this.state = {
            favoritos: []
        }
    }

    componentDidMount(){
        let peliculaFavorita = localStorage.getItem("favoritos")
        if (peliculaFavorita !== null) {
            let peliculaARenderizar = JSON.parse(peliculaFavorita)
            if (peliculaARenderizar.length > 0) {
                let peliculaVacia = []
                peliculaARenderizar.map((elm) => 
                    fetch(`ttps://api.themoviedb.org/3/movie/${elm}`)
                    .then((resp) => resp.json())
                    .then((data) =>{ 
                        peliculaVacia.push(data)
                        this.setState({favoritos: peliculaVacia})
                    })
                    .catch((error) => console.log('error fetch', error))
                )
            }
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.favoritos.map((elm) => 
                        <Card
                        id={elm.id}
                        poster_path={elm.poster_path}
                        title={elm.title}
                        overview={elm.overview}
                        />
                    )
                }
            </div>
        )
    }
}

export default Favorites;