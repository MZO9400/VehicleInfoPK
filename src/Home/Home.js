import React from "react";
import { withRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CSS from "./Home.module.css";
class Home extends React.Component {
  render() {
    return (
      <div className={CSS.center}>
        <h1>Vehicle Information Pakistan</h1>
        <p>
          Select one of the provinces below and find information of a vehicle
          providing its number
        </p>
        <div className="btn-group-vertical btn-block">
          <button
            className="btn btn-primary btn-lg"
            onClick={() => this.props.history.push("/federal")}
          >
            Federal
          </button>
          <button
            className="btn btn-primary btn-lg"
            onClick={() => this.props.history.push("/punjab")}
          >
            Punjab
          </button>
          <button
            className="btn btn-primary btn-lg"
            onClick={() => this.props.history.push("/sindh")}
          >
            Sindh
          </button>
        </div>
      </div>
    );
  }
}
export default withRouter(Home);
