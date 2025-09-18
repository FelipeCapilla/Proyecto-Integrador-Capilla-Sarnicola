import React, {Component} from "react";
import Card from "../../components/peliculas/Card";
import Tarjeta from "../../components/series/Tarjeta";

class Favorites extends Component{
    constructor(props){
        super(props)
        this.state = {
            favoritos: [],
            favorito: []
        }
    }

    componentDidMount(){
        let peliculaFavorita = localStorage.getItem("favoritos")
        let serieFavorita = localStorage.getItem("favorito")
        if (peliculaFavorita !== null) {
            let peliculaARenderizar = JSON.parse(peliculaFavorita)
            if (peliculaARenderizar.length > 0) {
                let peliculaVacia = []
                peliculaARenderizar.map((elm) => 
                    fetch(`https://api.themoviedb.org/3/movie/${elm}&api_key=b01c81adb05b13c4189ffba95ed51e5f`)
                    .then((resp) => resp.json())
                    .then((data) =>{ 
                        peliculaVacia.push(data)
                        this.setState({favoritos: peliculaVacia})
                    })
                    .catch((error) => console.log('error fetch', error))
                )
            }
        }
        if (serieFavorita !== null) {
            let serieARenderizar = JSON.parse(serieFavorita)
            if (serieARenderizar.length > 0) {
                let serieVacia = []
                serieARenderizar.map((elm) => 
                    fetch(`https://api.themoviedb.org/3/tv/${elm}&api_key=b01c81adb05b13c4189ffba95ed51e5f`)
                    .then((resp) => resp.json())
                    .then((data) =>{ 
                        serieVacia.push(data)
                        this.setState({favorito: serieVacia})
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
                    
                    this.state.favoritos.map((elm, key) => 
                        <Card
                        key={elm.title + key}
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