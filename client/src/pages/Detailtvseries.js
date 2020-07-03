import React, { Component } from "react";
import ReactPlayer from "react-player";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import { getFilmDetails } from "../redux/actions/film";
import { connect } from "react-redux";
import "../components/assets/css/Detailtvseries.css";

class Detailtvseries extends Component {
  componentDidMount() {
    this.props.getFilmDetails(this.props.match.params.id);
  }
  render() {
    const { filmDetails, loading, error } = this.props.film;
    console.log(filmDetails);
    return (
      <React.Fragment>
        <div className="jumbotron jumbotron-player">
          {filmDetails === null || loading ? (
            <p>Fetching Data. . . . .</p>
          ) : (
            <div className="main-player-wrapper">
              <ReactPlayer
                className="react-player"
                url={
                  filmDetails.data.film.Episodes[0].linkFilm
                    ? filmDetails.data.film.Episodes[0].linkFilm
                    : ""
                }
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
                <p>Fetching Data. . . .</p>
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
            <div className="col-md-4">
              {filmDetails === null || loading ? (
                <p>Fetching Data. . . .</p>
              ) : (
                <div
                  id="carouselExampleControls"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  {filmDetails === null || loading ? (
                    <p>Fetching Data . . .</p>
                  ) : (
                    <div className="carousel-inner">
                      <div className="carousel-item active first-wrapper">
                        <p className="carousel-text">
                          {filmDetails.data.film.title}
                        </p>
                      </div>
                      {filmDetails.data.film.Episodes.map((item) => {
                        return (
                          <div className="carousel-item">
                            <p className="carousel-text">{item.title}</p>
                            <ReactPlayer
                              className="react-player"
                              url={item.linkFilm}
                              width="100%"
                              height="100%"
                              controls
                            />
                          </div>
                        );
                      })}
                    </div>
                  )}
                  <a
                    className="carousel-control-prev"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="prev"
                  >
                    <FaArrowCircleLeft
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="next"
                  >
                    <FaArrowCircleRight
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  film: state.film,
});

export default connect(mapStateToProps, { getFilmDetails })(Detailtvseries);
