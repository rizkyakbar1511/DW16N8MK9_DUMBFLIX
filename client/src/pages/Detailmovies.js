import React, { Component } from "react";
import ReactPlayer from "react-player";
import { getFilmDetails } from "../redux/actions/film";
import { connect } from "react-redux";
import "../components/assets/css/Detailmovies.css";

class Detailmovies extends Component {
  componentDidMount() {
    this.props.getFilmDetails(this.props.match.params.id);
  }
  render() {
    const { filmDetails, loading, error } = this.props.film;
    return (
      <React.Fragment>
        <div className="jumbotron jumbotron-player">
          {filmDetails === null || loading ? (
            <p>Fetching Data. . . . .</p>
          ) : (
            <div className="main-player-wrapper">
              <ReactPlayer
                className="react-player"
                url={filmDetails.data.film.Episodes[0].linkFilm}
                width="100%"
                height="100%"
                controls
              />
            </div>
          )}
        </div>
        <div className="row">
          <div className="container">
            <div className="col-md-8">
              {filmDetails === null || loading ? (
                <p>Fetching Data . . .</p>
              ) : (
                <div className="card card-tvseries">
                  <img
                    src={filmDetails.data.film.thumbnailFilm}
                    className="card-img-top"
                    alt="detail-card-img"
                  />
                  <div className="card-body card-body-tvseries">
                    <h1>{filmDetails.data.film.title}</h1>
                    <div className="small-title">
                      <p className="small-year">{filmDetails.data.film.year}</p>
                      <p className="small-category">
                        {filmDetails.data.film.Category.name}
                      </p>
                    </div>
                    <p className="card-text">
                      {filmDetails.data.film.description}
                    </p>
                  </div>
                </div>
              )}
            </div>
            {filmDetails === null || loading ? (
              <p>Fetching Data . . . .</p>
            ) : (
              <div className="col-md-4">
                <div
                  id="carouselExampleControls"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <ReactPlayer
                        className="react-player"
                        url={filmDetails.data.film.Episodes[0].linkFilm}
                        width="100%"
                        height="100%"
                        controls
                      />
                    </div>
                  </div>
                </div>
                <p className="carousel-text">
                  {filmDetails.data.film.Episodes[0].title}
                </p>
              </div>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  film: state.film,
});

export default connect(mapStateToProps, { getFilmDetails })(Detailmovies);
