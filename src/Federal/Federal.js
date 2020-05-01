import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CSS from "./Federal.module.css";

class Federal extends React.Component {
  state = { number: "", invalid: true, warning: false };
  handleChange = e => {
    let splitNum = e.split("-");
    if (
      splitNum[0] &&
      splitNum[1] &&
      (splitNum[0].length === 3 || splitNum[0].length === 2) &&
      splitNum[1].length === 3 &&
      /^[0-9]*$/.test(splitNum[1]) &&
      /^[A-Z]+$/.test(splitNum[0])
    )
      this.setState({ invalid: false });
    else this.setState({ invalid: true });
    this.setState({ number: e });
  };
  submit = () => {
    axios
      .post("https://vehicleinfo.azurewebsites.net/Islamabad", {
        VehicleNumber: this.state.number
      })
      .then(res =>
        this.props.history.push({
          pathname: "/result",
          html: res.data
        })
      )
      .catch(e => this.setState({ warning: true }));
  };
  render() {
    const warning = this.state.warning ? (
      <div
        className="alert alert-danger alert-dismissible fade show"
        role="alert"
      >
        <strong>Vehicle against the number is not found</strong>
        <button
          type="button"
          className="close"
          onClick={() => this.setState({ warning: false })}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    ) : null;
    return (
      <div className={[CSS.container, "form-group"].join(" ")}>
        {warning}
        <label htmlFor="formGroupExampleInput">Vehicle number:</label>
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput"
          value={this.state.number}
          onChange={e => this.handleChange(e.target.value)}
        />
        <button
          className={["btn btn-primary btn-block", CSS.button].join(" ")}
          disabled={this.state.invalid}
          onClick={this.submit}
        >
          {this.state.invalid ? "AAA-111" : "Search"}
        </button>
      </div>
    );
  }
}
export default withRouter(Federal);
