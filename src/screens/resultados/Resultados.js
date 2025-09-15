import React, { Component } from "react";

class Resultado extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        console.log("props resultados: ", this.props)
    }

    render(){
        return(
            <div>
                <h1>Lo que busco el usuario fue: {this.props.match.params.busqueda}</h1>
            </div>
        )
    }
}

export default Resultado;