import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaLock,
  FaUser,
  FaMale,
  FaPhone,
  FaLocationArrow,
  FaFilm,
  FaMoneyBill,
} from "react-icons/fa";
import {
  MdAccountCircle,
  MdExitToApp,
  MdCreditCard,
  MdAssignment,
} from "react-icons/md";
import "./assets/css/NavigationBar.css";
import logo from "./assets/img/header-logo.png";
import profileImg from "././assets/img/profile.jpg";

//Redux import
import { connect } from "react-redux";
import { register, login } from "../redux/actions/auth";

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      isLogin: false,
      registered: false,
    };
  }

  handleChange = (event) => {
    const { data } = this.state;
    this.setState({
      data: { ...data, [event.target.name]: event.target.value },
    });
  };

  handleSubmitRegister = async (event) => {
    event.preventDefault();
    this.props.register(this.state.data);
    this.setState({ data: {}, registered: true });
  };

  handleSubmitLogin = async (event) => {
    event.preventDefault();
    this.props.login(this.state.data);
    this.setState({ data: {}, isLogin: true });
  };

  handleLogout() {
    this.setState({ isLogin: false });
    localStorage.removeItem("token");
  }

  render() {
    const { data: dataUser, loading, error } = this.props.auth;
    const { data } = this.state;

    let navUsers;
    if (localStorage.getItem("token")) {
      if (dataUser.role === 1) {
        navUsers = (
          <div className="dropdown show">
            <button
              className="btn"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img
                src={profileImg}
                className="rounded-circle"
                width="40px"
                alt="profile-img"
              />
              <p>Welcome, Admin!</p>
            </button>

            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <Link className="dropdown-item" to="/filmadmin">
                <FaFilm /> Film
              </Link>
              <Link className="dropdown-item" to="/transaksi">
                <FaMoneyBill /> Transaksi
              </Link>
              <button
                onClick={() => {
                  this.handleLogout();
                }}
                className="dropdown-item"
              >
                <MdExitToApp /> Logout
              </button>
            </div>
          </div>
        );
      } else {
        navUsers = (
          <div className="dropdown show">
            <button
              className="btn"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img
                src={profileImg}
                className="rounded-circle"
                width="40px"
                alt="profile-img"
              />
              <p>Welcome! {dataUser.fullName}</p>
            </button>

            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <Link className="dropdown-item" to="/profile">
                <MdAccountCircle /> Profile
              </Link>
              <Link className="dropdown-item" to="/upgrade">
                <MdCreditCard /> Upgrade
              </Link>
              <button
                onClick={() => {
                  this.handleLogout();
                }}
                className="dropdown-item"
              >
                <MdExitToApp /> Logout
              </button>
            </div>
          </div>
        );
      }
    } else {
      navUsers = (
        <>
          <div className="nav-btn">
            <button
              type="button"
              className="btn"
              data-toggle="modal"
              data-target="#modal-login"
            >
              <MdAccountCircle /> Sign-in
            </button>
            <button
              type="button"
              className="btn"
              data-toggle="modal"
              data-target="#modal-register"
            >
              <MdAssignment /> Sign-up
            </button>
          </div>
          <div className="modal fade" id="modal-login" role="dialog">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">
                    <FaUser /> Member Area
                  </h5>
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
                  <p>
                    <span>DUMBFLIX</span> - A better place for watching online
                    in high quality.
                  </p>
                  {loading ? (
                    <h3>Logging In</h3>
                  ) : error ? (
                    <div className="alert alert-danger" role="alert">
                      {error.message}
                    </div>
                  ) : (
                    <h1></h1>
                  )}
                  <form id="form-login" onSubmit={this.handleSubmitLogin}>
                    <div className="form-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <FaEnvelope />
                        </span>
                      </div>
                      <input
                        type="text"
                        name="email"
                        className="form-control"
                        placeholder="E-Mail"
                        value={data.email ? data.email : ""}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <FaLock />
                        </span>
                      </div>
                      <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Password"
                        value={data.password ? data.password : ""}
                        onChange={this.handleChange}
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-outline-secondary btn-modal-signin"
                    >
                      Sign-in
                    </button>
                  </form>
                </div>
                <div className="modal-footer">
                  <p>
                    Not a member yet?{" "}
                    <a
                      href="#"
                      data-toggle="modal"
                      data-target="#modal-register"
                      data-dismiss="modal"
                    >
                      Sign-up
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="modal fade" id="modal-register" role="dialog">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Create Account</h5>
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
                  {this.state.registered ? (
                    <div className="alert alert-success" role="alert">
                      Register Success, Enjoy !
                    </div>
                  ) : null}
                  <form onSubmit={this.handleSubmitRegister}>
                    <div className="form-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <FaUser />
                        </span>
                      </div>
                      <input
                        name="fullName"
                        type="text"
                        className="form-control"
                        placeholder="Full Name"
                        value={data.fullName ? data.fullName : ""}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <FaEnvelope />
                        </span>
                      </div>
                      <input
                        name="email"
                        type="email"
                        className="form-control"
                        placeholder="E-Mail"
                        value={data.email ? data.email : ""}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <FaLock />
                        </span>
                      </div>
                      <input
                        name="password"
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        value={data.password ? data.password : ""}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <FaMale />
                        </span>
                      </div>
                      <input
                        name="gender"
                        type="text"
                        className="form-control"
                        placeholder="Gender"
                        value={data.gender ? data.gender : ""}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <FaPhone />
                        </span>
                      </div>
                      <input
                        name="phone"
                        type="text"
                        className="form-control"
                        placeholder="Phone"
                        value={data.phone ? data.phone : ""}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <FaLocationArrow />
                        </span>
                      </div>
                      <input
                        name="address"
                        type="text"
                        className="form-control"
                        placeholder="Address"
                        value={data.address ? data.address : ""}
                        onChange={this.handleChange}
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-outline-secondary btn-modal-signup"
                    >
                      Sign-up
                    </button>
                  </form>
                </div>
                <div className="modal-footer">
                  <p>
                    Already a Member ?{" "}
                    <a
                      href="#"
                      data-toggle="modal"
                      data-target="#modal-login"
                      data-dismiss="modal"
                    >
                      Sign-in
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
    return (
      <nav className="navbar text-center navbar-expand-lg navbar-dark">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <Link to="/" className="nav-link active">
              <li className="nav-item active">Home</li>
            </Link>
            <Link to="/tvshows" className="nav-link">
              <li className="nav-item">Tv Shows</li>
            </Link>
            <Link to="/movies" className="nav-link">
              <li className="nav-item">Movies</li>
            </Link>
          </ul>
          <div className="navbar-brand">
            <img src={logo} alt="header-logo" />
          </div>
          {navUsers}
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { register, login })(NavigationBar);
