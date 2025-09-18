import React from "react";
import { Switch, Route } from "react-router-dom";
import "./css/styles.css";
import Header from "./components/header/Header";
import Home from "./screens/home/Home";
import Footer from "./components/footer/Footer";
import Movies from "./screens/movies/Movies";
import Series from "./screens/series/Series";
import Favorites from "./screens/favorites/Favorites";
import Resultados from "./screens/resultados/Resultados";
import Detalle from "./screens/detalle/DetallePelicula";



function App() {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route path='/' component={Home} exact={true} />
        <Route path='/movies' component={Movies} exact={true} />
        <Route path='/series' component={Series} exact={true} />
        <Route path='/favorites' component={Favorites} exact={true} />
        <Route path='/resultados/:busqueda' component={Resultados} exact={true} />
        <Route path='/detalle/:id' component={Detalle} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
