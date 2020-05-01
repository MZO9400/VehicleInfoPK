import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Federal from "./Federal/Federal";
import Punjab from "./Punjab/Punjab";
import Sindh from "./Sindh/Sindh";
import Nav from "./Nav/Nav";
import Home from "./Home/Home";
import Result from "./Result/Result";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/federal" exact component={Federal} />
        <Route path="/punjab" exact component={Punjab} />
        <Route path="/sindh" exact component={Sindh} />
        <Route path="/result" exact component={Result} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
