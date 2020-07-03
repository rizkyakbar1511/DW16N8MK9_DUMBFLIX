import React, { Component } from "react";
import textlogo from "../components/assets/img/joker.png";
import { Link } from "react-router-dom";
import "../components/assets/css/JumbotronMovies.css";
import { getFilms } from "../redux/actions/film";
import { connect } from "react-redux";

class Movies extends Component {
  componentDidMount() {
    this.props.getFilms();
  }

  render() {
    const { filmsAll, loading, error } = this.props.film;
    return (
      <React.Fragment>
        {filmsAll === null || loading ? (
          <p>Fetching Data . . . .</p>
        ) : (
          <div className="jumbotron jumbotron-fluid jumbotron-main-joker">
            <div className="container-jumbotron">
              <img
                className="lead"
                src={textlogo}
                alt="text-witcher"
                style={{ width: "168.18px" }}
              />
              <p className="lead">
                In Gotham City, mentally troubled comedian Arthur Fleck is
                disregarded and mistreated by society. He then embarks on a
                downward spiral of revolution and bloody crime. This path brings
                him face-to-face with his alter-ego: the Joker.
              </p>
              <div className="second">
                <p className="p-year">2019</p>
                <p className="p-category">Movies</p>
              </div>
              <Link to={"/detail-movies/" + filmsAll.data[6].id}>
                <button className="btn-watch">WATCH NOW !</button>
              </Link>
            </div>
          </div>
        )}
        <div className="container-fluid">
          <h3 className="movie-headline">Movies</h3>
          {filmsAll === null || loading ? (
            <p>Fetching Data . . . .</p>
          ) : (
            <div className="row mb-5">
              {filmsAll.data.map((movie) => {
                if (movie.Category.id === 2) {
                  return (
                    <div className="col-md-2 mt-5" key={movie.id}>
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
          )}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  film: state.film,
});

export default connect(mapStateToProps, { getFilms })(Movies);
