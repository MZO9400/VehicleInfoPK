import React from "react";
import { withRouter } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import "bootstrap/dist/css/bootstrap.min.css";
import CSS from "./Result.module.css";
export default withRouter(props => {
  if (!props.location.html) props.history.push("/");
  return <div className={CSS.main}>{ReactHtmlParser(props.location.html)}</div>;
});
