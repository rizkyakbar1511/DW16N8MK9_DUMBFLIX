import React, { Component } from "react";
import { Link } from "react-router-dom";
import AllMovies from "../components/AllMovies";
import { getFilms } from "../redux/actions/film";
import { connect } from "react-redux";

import "../components/assets/css/Filmadmin.css";
export class Filmadmin extends Component {
  state = {
    selectedCategory: "",
  };
  componentDidMount() {
    this.props.getFilms();
  }
  render() {
    const { filmsAll, loading, error } = this.props.film;
    let list;
    if (this.state.selectedCategory === "tv") {
      list = (
        <div className="container-fluid">
          <h3 className="movie-headline">TV Series</h3>
          <div className="row mb-5">
            {filmsAll.data.map((series) => {
              if (series.Category.id === 1) {
                return (
                  <div className="col-md-2" key={series.id}>
                    <div className="card px-1">
                      <img
                        className="card-img-top"
                        src={series.thumbnailFilm}
                        alt="tv-card"
                      />
                      <div
                        className="card-body p-0 mt-3"
                        style={{ width: "100%" }}
                      >
                        <Link to={"detail-tv-series-admin/" + series.id}>
                          <h5 className="card-title">{series.title}</h5>
                        </Link>
                        <p className="card-text">{series.year}</p>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      );
    } else if (this.state.selectedCategory === "movies") {
      list = (
        <div className="container-fluid">
          <h3 className="movie-headline">Movies</h3>
          <div className="row mb-5">
            {filmsAll.data.map((movie) => {
              if (movie.Category.id === 2) {
                return (
                  <div className="col-md-2" key={movie.id}>
                    <div className="card px-1">
                      <img
                        className="card-img-top"
                        src={movie.thumbnailFilm}
                        alt="tv-card"
                      />
                      <div
                        className="card-body p-0 mt-3"
                        style={{ width: "100%" }}
                      >
                        <Link to={"/detail-movies/" + movie.id}>
                          <h5 className="card-title">{movie.title}</h5>
                        </Link>
                        <p className="card-text">{movie.year}</p>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      );
    } else {
      list = (
        <div className="container-fluid">
          <h3 className="movie-headline">TV Series</h3>
          {filmsAll === null || loading ? (
            <p>Fetching Data . . . </p>
          ) : (
            <div className="row mb-5">
              {filmsAll.data.map((series) => {
                if (series.Category.id === 1) {
                  return (
                    <div className="col-md-2 mb-5" key={series.id}>
                      <div className="card px-1">
                        <img
                          className="card-img-top"
                          src={series.thumbnailFilm}
                          alt="tv-card"
                        />
                        <div
                          className="card-body p-0 mt-3"
                          style={{ width: "100%" }}
                        >
                          <Link to={"detail-tv-series-admin/" + series.id}>
                            <h5 className="card-title">{series.title}</h5>
                          </Link>
                          <p className="card-text">{series.year}</p>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          )}
          <h3 className="movie-headline">Movies</h3>
          {filmsAll === null || loading ? (
            <p>Fetching Data. . . .</p>
          ) : (
            <div className="row mb-5">
              {filmsAll.data.map((movie) => {
                if (movie.Category.id === 2) {
                  return (
                    <div className="col-md-2 mb-5" key={movie.id}>
                      <div className="card px-1">
                        <img
                          className="card-img-top"
                          src={movie.thumbnailFilm}
                          alt="tv-card"
                        />
                        <div
                          className="card-body p-0 mt-3"
                          style={{ width: "100%" }}
                        >
                          <Link to={"/detail-movies-admin/" + movie.id}>
                            <h5 className="card-title">{movie.title}</h5>
                          </Link>
                          <p className="card-text">{movie.year}</p>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          )}
        </div>
      );
    }
    return (
      <React.Fragment>
        <div className="row-admin">
          <p>List Film</p>
          <div className="input-group mb-3 filmadmin-select-wrapper">
            <select
              className="filmadmin-select"
              onChange={(e) => {
                this.setState({ selectedCategory: e.target.value });
              }}
            >
              <option value={""}>Category</option>
              <option value={"tv"}>Tv Series</option>
              <option value={"movies"}>Movies</option>
            </select>
          </div>
          <Link to="/addfilm">
            <button className="btn-add-film">Add Film</button>
          </Link>
        </div>
        {list}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  film: state.film,
});

export default connect(mapStateToProps, { getFilms })(Filmadmin);
