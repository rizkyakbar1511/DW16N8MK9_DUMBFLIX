import React, { Component } from "react";
import "../components/assets/css/Transaksi.css";
import { dataTransaksi } from "../components/assets/data-source";
import {
  getTransactions,
  updateTransaction,
} from "../redux/actions/transaction";
import { connect } from "react-redux";

class Transaksi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = async (e) => {
    this.props.updateTransaction(e.target.value, { status: e.target.name });
  };

  componentDidMount() {
    this.props.getTransactions();
  }
  render() {
    const { transactions, loading, error } = this.props.transactions;

    return (
      <div className="transaction-table-wrapper">
        <h1>Incoming Transaction</h1>
        <table className="table table-dark text-center transaction-table">
          <thead>
            <tr style={{ color: "#FF0742" }}>
              <th scope="col">No</th>
              <th scope="col">Users</th>
              <th scope="col">Bukti Transfer</th>
              <th scope="col">Member Period</th>
              <th scope="col">Status User</th>
              <th scope="col">Status Payment</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          {transactions === null || loading ? (
            <p>Fetching Data . . .</p>
          ) : (
            <tbody>
              {transactions.data.map((item) => {
                return (
                  <tr className="transaction-table-data">
                    <th scope="row">{item.User.id}</th>
                    <td>{item.User.fullName}</td>
                    <td>{item.attache}</td>
                    <td>
                      {item.startDate} / {item.dueDate}
                    </td>
                    <td
                      style={{
                        color:
                          item.User.subscribe === true ? "#0ACF83" : "#FF0742",
                      }}
                    >
                      {item.User.subscribe ? "Active" : "Not Active"}
                    </td>
                    <td
                      style={{
                        color:
                          item.status === "approved"
                            ? "#0ACF83"
                            : item.status === "pending"
                            ? "#F7941E"
                            : "#FF0742",
                      }}
                    >
                      {item.status}
                    </td>
                    <td>
                      <div class="dropdown dropdown-transaction">
                        <button
                          class="btn btn-secondary dropdown-toggle btn-transaction"
                          type="button"
                          id="dropdownMenuButton"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        ></button>
                        <div
                          class="dropdown-menu dropdown-menu-transaction"
                          aria-labelledby="dropdownMenuButton"
                        >
                          <button
                            type="button"
                            name="approved"
                            value={item.User.id}
                            class="dropdown-item dropdown-item-transaction"
                            onClick={this.handleClick}
                          >
                            Approved
                          </button>
                          <button
                            type="button"
                            name="rejected"
                            value={item.User.id}
                            class="dropdown-item dropdown-item-transaction"
                            onClick={this.handleClick}
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          )}
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  transactions: state.transactions,
});

export default connect(mapStateToProps, { getTransactions, updateTransaction })(
  Transaksi
);
