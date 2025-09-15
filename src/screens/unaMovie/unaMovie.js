import React, { Component } from 'react'
import Card from '../../components/peliculas/Card'

class unaMovie extends Component {

    constructor(props){
        super(props)
        this.state = {
            personajes: [],
            id: this.props.match.params.id,
            cargando: true
        }
    }

    componentDidMount(){
        fetch()
        .then((resp)=> resp.json())
        .then((data)=> {
            this.setState({
            personajes: data,
            cargando: false })})
        .catch((error)=> console.log('error fetch', error))
    }

  render() {
    return (
      <div>
        <Card/>
      </div>
    )
  }
}

export default unaMovie
