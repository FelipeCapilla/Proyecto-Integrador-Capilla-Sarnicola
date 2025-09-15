import React, {Component} from "react";
import { Link } from 'react-router-dom';

class Card extends Component{
    constructor(props){
        super(props)
        this.state = {
            verMas: false,
            textoBoton: "Ver mas"
        }
    }    

    cambiarValores(){
        this.setState({
            verMas: !this.state.verMas,
            textoBoton: this.state.verMas ? "ver mas" : "ver menos"
        })
    }

    render(){
        return(
            <article class="single-card-movie">
                <img src={this.props.img} class="card-img-top" alt="" />
                <div class="cardBody">
                    <h5 class="card-title">{this.props.name}</h5>
                    <p class="card-text">{this.props.description}</p>
                    {this.state.verMas ?  <a href="/movies" class="btn btn-primary">Ver mas</a> : ""}
                </div>
            </article>
        )
    }
}

export default Card;