import React from "react";
import { withRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

class Nav extends React.Component {
  state = {
    navCollapsed: true
  };

  _onToggleNav = () => {
    this.setState(state => {
      return { navCollapsed: !state.navCollapsed };
    });
  };

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <div className="navbar-header">
          <button
            className="navbar-toggler ml-auto custom-toggler"
            type="button"
            onClick={this._onToggleNav}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <a
          className="navbar-brand"
          style={{ cursor: "pointer" }}
          onClick={() => this.props.history.push("/")}
        >
          Vehicle Info Pakistan
        </a>
        <div
          className={
            (this.state.navCollapsed ? "collapse" : "") + " navbar-collapse"
          }
        >
          <ul className="navbar-nav">
            <li
              className={[
                "nav-item",
                this.props.history.location.pathname === "/federal"
                  ? "active"
                  : ""
              ].join(" ")}
              style={{ cursor: "pointer" }}
              onClick={() => {
                this.props.history.push("/federal");
                this._onToggleNav();
              }}
            >
              <a className="nav-link">Federal</a>
            </li>
            <li
              className={[
                "nav-item",
                this.props.history.location.pathname === "/punjab"
                  ? "active"
                  : ""
              ].join(" ")}
              style={{ cursor: "pointer" }}
              onClick={() => {
                this.props.history.push("/punjab");
                this._onToggleNav();
              }}
            >
              <a className="nav-link">Punjab</a>
            </li>
            <li
              className={[
                "nav-item",
                this.props.history.location.pathname === "/sindh"
                  ? "active"
                  : ""
              ].join(" ")}
              style={{ cursor: "pointer" }}
              onClick={() => {
                this.props.history.push("/sindh");
                this._onToggleNav();
              }}
            >
              <a className="nav-link">Sindh</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default withRouter(Nav);
