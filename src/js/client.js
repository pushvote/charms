import React from "react";
import ReactDOM from "react-dom"
import Layout from "./components/Layout";

import Archives from "./components/Archives";
import Featured from "./components/Featured";
import Settings from "./components/Settings";
import { Router, Route, IndexRoute, hashHistory } from "react-router";


const app = document.querySelector('#app');
$('[data-toggle="popover"]').popover();

ReactDOM.render(
<Layout/>
/*
<Router history={hashHistory}>
  <Route path="/" component={Layout}>
    <IndexRoute component={Featured}></IndexRoute>
    <Route path="archives(/:article)" name="archives" component={Archives}></Route>
    <Route path="settings" name="settings" component={Settings}></Route>
  </Route>
</Router>
*/

  , app);
