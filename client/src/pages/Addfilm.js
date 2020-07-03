import React, { Component } from "react";
import { FaPaperclip } from "react-icons/fa";
import { connect } from "react-redux";
import { addFilm } from "../redux/actions/film";
import EpisodesForm from "../components/formAdder/EpisodesForm";
import "../components/assets/css/Addfilm.css";

class Addfilm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      filmAdded: false,
      newForm: [],
    };
    this.formAdder = this.formAdder.bind(this);
  }

  formAdder() {
    const formEpisode = this.state.newForm.concat(EpisodesForm);
    this.setState({ newForm: formEpisode });
  }

  handleChange = (e) => {
    const { data } = this.state;
    this.setState({
      data: { ...data, [e.target.name]: e.target.value },
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.props.addFilm(this.state.data);
    this.setState({ data: {}, filmAdded: true });
  };
  render() {
    const formEpisode = this.state.newForm.map((Element, index) => {
      return <Element key={index} index={index} />;
    });
    const { data } = this.state;
    console.log(data);
    return (
      <>
        <div className="row">
          <div className="container-fluid container-addfilm">
            <p id="headline-add-film">Add Film</p>
            {this.state.filmAdded ? (
              <div className="alert alert-success" role="alert">
                Film added successfully !
              </div>
            ) : null}
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control input-title"
                  placeholder="Title"
                  name="title"
                  value={data.title ? data.title : ""}
                  onChange={this.handleChange}
                />
                <input
                  type="text"
                  className="form-control upload-thumbnail-addfilm"
                  placeholder="Attach Thumbnail"
                  name="thumbnailFilm"
                  value={data.thumbnailFilm ? data.thumbnailFilm : ""}
                  onChange={this.handleChange}
                />
                <div className="input-group-prepend prepend-wrapper">
                  <span className="input-group-text fa-paper-clip-add-film prepend-content">
                    <FaPaperclip />
                  </span>
                </div>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Year"
                  name="year"
                  value={data.year ? data.year : ""}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <select
                  className="addfilm-select"
                  name="categoryId"
                  onChange={this.handleChange}
                >
                  <option value="">Category</option>
                  <option value={1}>Tv Series</option>
                  <option value={2}>Movies</option>
                </select>
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="6"
                  placeholder="Description"
                  name="description"
                  value={data.description ? data.description : ""}
                  onChange={this.handleChange}
                ></textarea>
              </div>
              <button type="submit" className="btn-save-add-film">
                Save
              </button>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="container-fluid container-newform">
            <div className="btn-form-wrapper">
              <button onClick={this.formAdder} className="btn-add-form-episode">
                +
              </button>
            </div>
            <div className="new-form-wrapper">{formEpisode}</div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    film: state.film,
  };
};

export default connect(mapStateToProps, { addFilm })(Addfilm);
