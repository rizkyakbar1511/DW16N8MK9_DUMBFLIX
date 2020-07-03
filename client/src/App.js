import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Upgrade from "./pages/Upgrade";
import Detailtvseries from "./pages/Detailtvseries";
import Detailtvseriesadmin from "./pages/Detailtvseriesadmin";
import Detailmoviesadmin from "./pages/Detailmoviesadmin";
import Detailmovies from "./pages/Detailmovies";
import NavigationBar from "./components/NavigationBar";
import TvShows from "./pages/TvShows";
import Movies from "./pages/Movies";
import Filmadmin from "./pages/Filmadmin";
import Addfilm from "./pages/Addfilm";
import Transaksi from "./pages/Transaksi";
import "./components/assets/FontAwesomeIcon";
import "./App.css";

export class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <NavigationBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/profile" component={Profile} />
            <Route path="/upgrade" component={Upgrade} />
            <Route path="/tvshows" component={TvShows} />
            <Route path="/movies" component={Movies} />
            <Route path="/addfilm" component={Addfilm} />
            <Route path="/transaksi" component={Transaksi} />
            <Route path="/filmadmin" component={Filmadmin} />
            <Route path="/detail-tv-series/:id" component={Detailtvseries} />
            <Route path="/detail-movies/:id" component={Detailmovies} />
            <Route
              path="/detail-tv-series-admin/:id"
              component={Detailtvseriesadmin}
            />
            <Route
              path="/detail-movies-admin/:id"
              component={Detailmoviesadmin}
            />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
