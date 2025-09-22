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
import DetalleMovie from "./screens/detalle/DetallePelicula"
import DetalleSerie from "./screens/detalle/DetalleSerie";
import NotFound from "./screens/notfound/NotFound";



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
        <Route path='/detallemovie/:id' component={DetalleMovie} />
        <Route path='/detalleserie/:id' component={DetalleSerie} />
        <Route path='' component={NotFound} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
