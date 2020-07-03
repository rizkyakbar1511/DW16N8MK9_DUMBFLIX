import React, { Component } from "react";
import textlogo from "../components/assets/img/moneyheist.png";
import { Link } from "react-router-dom";
import { tvSeriesData } from "../components/assets/data-source";
import "../components/assets/css/Jumbotron-tv-shows.css";
import { getFilms } from "../redux/actions/film";
import { connect } from "react-redux";

class TvShows extends Component {
  componentDidMount() {
    this.props.getFilms();
  }

  render() {
    const { filmsAll, loading, error } = this.props.film;
    return (
      <React.Fragment>
        <div className="jumbotron jumbotron-fluid jumbotron-main-moneyheist">
          <div className="container-jumbotron">
            <img className="lead" src={textlogo} alt="text-witcher" />
            <p className="lead">
              Money Heist is a crime drama on Netflix - originally called La
              Casa de Papel. Money Heist season 3 has just been released by the
              streaming service. The plot reads: "Eight thieves take hostages
              and lock themselves in the Royal Mint of Spain as a criminal
              mastermind manipulates the police to carry out his plan."
            </p>
            <div className="second">
              <p className="p-year">2017</p>
              <p className="p-category">TV Series</p>
            </div>
            <Link to={"detail-tv-series/4"}>
              <button className="btn-watch">WATCH NOW !</button>
            </Link>
          </div>
        </div>
        <div className="container-fluid">
          <h3 className="movie-headline">TV Series</h3>
          {filmsAll === null || loading ? (
            <p>Fetching Data . . . .</p>
          ) : (
            <div className="row mb-5">
              {filmsAll.data.map((series) => {
                if (series.Category.id === 1) {
                  return (
                    <div className="col-md-2 mt-5" key={series.id}>
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
                          <Link to={"detail-tv-series/" + series.id}>
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
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  film: state.film,
});

export default connect(mapStateToProps, { getFilms })(TvShows);
