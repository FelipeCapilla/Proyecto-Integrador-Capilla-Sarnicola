import React, { Component } from 'react'
import Tarjetas from '../../components/series/Tarjetas'
import Filtro from '../../components/filtro/Filtro'

class Series extends Component {

    constructor(props){
        super(props)
        this.state = {
            series: [],
            backup: [],
            pedidoInicialCompleto: false,
            paginaALlamar: 1
        }
    }

    componentDidMount(){
        fetch('https://api.themoviedb.org/3/tv/popular?api_key=b01c81adb05b13c4189ffba95ed51e5f')
        .then((resp) => resp.json())
        .then((data) => this.setState({
            series: data.results,
            backup: data.results,
            pedidoInicialCompleto: true,
            paginaALlamar: this.state.paginaALlamar + 1
        }, () => console.log(data.results)
        ))
        .catch((error) => console.log('error fetch', error))
    }

    cargarMas(){
      fetch(`https://api.themoviedb.org/3/tv/popular?page=${this.state.paginaALlamar}`)
      .then(resp => resp.json())
      .then(data => this.setState({
        series: this.state.series.concat(data.results),
        backup: this.state.backup.concat(data.results),
        paginaALlamar: this.state.paginaALlamar + 1
      }))
      .catch(error => console.log('error fetch', error))
    }

    filtrarSeries(textoAFiltrar){
        const filtrado = this.state.backup.filter(
            (elm) => elm.name.toLowerCase().includes(textoAFiltrar.toLowerCase())
        )
        this.setState({series:filtrado})
    }

  render() {
    return (
      <div>
        <Filtro filtrar = {(textoAFiltrar) => this.filtrarSeries(textoAFiltrar)}/>
        <section className="row cards" id="movies">
          <article>
          {
            this.state.pedidoInicialCompleto ?
            <div>
              <h2 className="alert alert-primary">Popular series this week</h2>
              <Tarjetas series={this.state.series}/>
              <button onClick={() => this.cargarMas()}>Cargar mas series</button>
            </div>
            :
            <h2>Cargando...</h2>
          }
          </article>
        </section>
      </div>      
    )
  }
}

export default Series
