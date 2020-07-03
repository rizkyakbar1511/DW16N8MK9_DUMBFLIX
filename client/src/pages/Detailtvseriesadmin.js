import React, { Component } from "react";
import ReactPlayer from "react-player";
import {
  FaArrowCircleRight,
  FaArrowCircleLeft,
  FaPlusCircle,
  FaPaperclip,
} from "react-icons/fa";
import { getFilmDetails } from "../redux/actions/film";
import { addEpisode } from "../redux/actions/episode";
import { connect } from "react-redux";
import "../components/assets/css/Detailtvseriesadmin.css";

class Detailtvseriesadmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        filmId: this.props.match.params.id,
      },
      episodeAdded: false,
    };
  }

  handleChange = (e) => {
    const { data } = this.state;
    this.setState({
      data: { ...data, [e.target.name]: e.target.value },
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.props.addEpisode(this.state.data);
    this.setState({ data: {}, episodeAdded: true });
  };

  componentDidMount() {
    this.props.getFilmDetails(this.props.match.params.id);
  }
  render() {
    const { filmDetails, loading } = this.props.film;
    const { data } = this.state;
    console.log(data);

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
                      {this.state.episodeAdded ? (
                        <div className="alert alert-success" role="alert">
                          Episode added successfully !
                        </div>
                      ) : null}
                      <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control input-episode"
                            placeholder="Title Episode"
                            name="title"
                            value={data.title ? data.title : ""}
                            onChange={this.handleChange}
                          />
                          <input
                            type="text"
                            className="form-control upload-thumbnail"
                            placeholder="Attach Thumbnail"
                            name="thumbnailFilm"
                            value={data.thumbnailFilm ? data.thumbnailFilm : ""}
                            onChange={this.handleChange}
                          />
                          <div className="input-group-prepend prepend-wrapper2">
                            <span className="input-group-text fa-paper-clip prepend-content2">
                              <FaPaperclip />
                            </span>
                          </div>
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Link Film"
                            name="linkFilm"
                            value={data.linkFilm ? data.linkFilm : ""}
                            onChange={this.handleChange}
                          />
                        </div>
                        <button
                          type="submit"
                          className="btn btn-outline-secondary btn-modal-add"
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

export default connect(mapStateToProps, { getFilmDetails, addEpisode })(
  Detailtvseriesadmin
);
