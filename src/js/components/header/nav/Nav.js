//This is needed for all react files?
import React from "react";
import Banner from "./banner/Banner"
import Login from "./login/Login"
//this allows us to import Layout
export default class Header extends React.Component {
    render() {
        return (
          <nav class="navbar navbar-default">
            <div class="container-fluid">
              <div class="navbar-header">
                <Banner />
              </div>
              <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                  <Login />
                </ul>
              </div>
            </div>
          </nav>
        );
    }
}
