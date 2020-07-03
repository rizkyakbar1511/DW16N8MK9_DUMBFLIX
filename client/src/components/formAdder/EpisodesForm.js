import React, { Component } from "react";
import { FaPaperclip } from "react-icons/fa";
import { connect } from "react-redux";
import { addEpisode } from "../../redux/actions/episode";

class EpisodesForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
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

  render() {
    const { data } = this.state;
    console.log(data);

    return (
      <div style={{ marginBottom: "150px" }}>
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
              placeholder="Id Film"
              style={{ width: "75px" }}
              name="filmId"
              value={data.filmId ? data.filmId : ""}
              onChange={this.handleChange}
            />
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
            <div className="input-group-prepend prepend-wrapper">
              <span className="input-group-text fa-paper-clip prepend-content">
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
    );
  }
}

const mapStateToProps = (state) => {
  return {
    episode: state.episode,
  };
};

export default connect(mapStateToProps, { addEpisode })(EpisodesForm);
