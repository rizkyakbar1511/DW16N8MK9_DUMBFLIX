import React, { Component } from "react";
import { FaPaperclip, FaEnvelope } from "react-icons/fa";
import "../components/assets/css/Upgrade.css";
export class Upgrade extends Component {
  render() {
    return (
      <div className="container">
        <div className="card text-center">
          <div className="card-body">
            <h1 className="card-title card-title-upgrade">Premium</h1>
            <p className="card-text card-text-upgrade">
              Upgrade sekarang dan nikmati streaming film Tanpa Batas di{" "}
              <span>DUMBFLIX</span>
            </p>
            <p className="card-text card-text-upgrade">
              <span id="accNumber">Account No :</span> DW16N8MK9
            </p>
            <div className="upgrade-input">
              <input
                type="text"
                className="form-control"
                placeholder="Input your account number"
              />
              <button className="btn btn-attach">
                Attache proof of payment <FaPaperclip />
              </button>
              <button className="btn btn-send">
                <FaEnvelope /> Send
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Upgrade;
