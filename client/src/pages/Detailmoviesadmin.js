import React, { Component } from "react";
import ReactPlayer from "react-player";
import {
  FaArrowCircleRight,
  FaArrowCircleLeft,
  FaPlusCircle,
  FaPaperclip,
} from "react-icons/fa";
import { getFilmDetails } from "../redux/actions/film";
import { connect } from "react-redux";
import "../components/assets/css/Detailtvseriesadmin.css";

class Detailmoviesadmin extends Component {
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
              <div className="btn-add-episodes-wrapper">
                <button
                  className="btn btn-add-episodes"
                  data-toggle="modal"
                  data-target="#modal-add-episodes"
                >
                  <FaPlusCircle /> Add Episode
                </button>
              </div>
              <div className="modal fade" id="modal-add-episodes" role="dialog">
                <div className="modal-dialog modal-dialog-centered modal-all-wrapper">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title"> Add Episodes</h5>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <form>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control input-episode"
                            placeholder="Title Episode"
                          />
                          <input
                            type="text"
                            className="form-control upload-thumbnail"
                            placeholder="Attach Thumbnail"
                          />
                          <div className="input-group-prepend">
                            <span className="input-group-text fa-paper-clip">
                              <FaPaperclip />
                            </span>
                          </div>
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Link Film"
                          />
                        </div>
                        <button
                          type="button"
                          className="btn btn-outline-secondary btn-modal-add"
                          data-dismiss="modal"
                        >
                          Add
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {filmDetails === null || loading ? (
                <p>Fetching Data. . . .</p>
              ) : (
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
                  <p className="carousel-text">
                    {filmDetails.data.film.Episodes[0].title}
                  </p>
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

export default connect(mapStateToProps, { getFilmDetails })(Detailmoviesadmin);
