import React, { Component } from "react";
import {
  FaEnvelope,
  FaUser,
  FaPhone,
  FaLocationArrow,
  FaTicketAlt,
  FaQuestion,
} from "react-icons/fa";
import profileImg from "../components/assets/img/profile.jpg";
import { connect } from "react-redux";
import { login } from "../redux/actions/auth";
import "../components/assets/css/Profile.css";

class Profile extends Component {
  render() {
    const { data: dataUser, loading, error } = this.props.auth;
    return (
      <React.Fragment>
        <div className="container">
          <div className="row card-row">
            <div className="card">
              <div className="card-body">
                <h3>Personal Info</h3>
                <div className="row">
                  <div className="col-md-1 user-icon">
                    <FaUser className="fa-icon" />
                    <FaEnvelope className="fa-icon" />
                    <FaTicketAlt className="fa-icon" />
                    <FaQuestion className="fa-icon" />
                    <FaPhone className="fa-icon" />
                    <FaLocationArrow className="fa-icon" />
                  </div>
                  <div className="col-md user-info">
                    <p>
                      {dataUser.fullName}
                      <br />
                      <span>Full Name</span>
                    </p>
                    <p>
                      {dataUser.email}
                      <br />
                      <span>E-mail</span>
                    </p>
                    <p>
                      Active
                      <br />
                      <span>Status</span>
                    </p>
                    <p>
                      {dataUser.gender}
                      <br />
                      <span>Gender</span>
                    </p>
                    <p>
                      {dataUser.phone}
                      <br />
                      <span>Mobile phone</span>
                    </p>
                    <p>
                      {dataUser.address}
                      <br />
                      <span>Address</span>
                    </p>
                  </div>
                  <div className="col-md">
                    <div className="card user-img-profile">
                      <img
                        className="card-img-top"
                        src={profileImg}
                        alt="profile"
                      />
                      <button className="btn btn-danger">
                        Change Photo Profile
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { login })(Profile);
