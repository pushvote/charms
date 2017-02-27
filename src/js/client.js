import React from "react";
import ReactDOM from "react-dom"
import Layout from "./components/Layout";

import { Router, Route, IndexRoute, hashHistory } from "react-router";

const app = document.querySelector('#app');
ReactDOM.render(

  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Featured}></IndexRoute>
      <Route path="archives(/:article)" name="archives" component={Archives}></Route>
      <Route path="settings" name="settings" component={Settings}></Route>
    </Route>
  </Router>
  , app);
