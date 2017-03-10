//This is needed for all react files?
import React from "react";

//this allows us to import Layout
export default class ViewSettings extends React.Component {
    render() {
        return (
          <li class="dropdown navbar-right">
            <a class="dropdown-toggle" data-toggle="dropdown" href="#">View Settings <span class="caret"></span>  </a>
            <ul class="dropdown-menu">
              <li><a href="#home" data-toggle="tab">Bottomless Scroll</a></li>
              <li><a href="#profile" data-toggle="tab">Another action</a></li>
            </ul>
          </li>
        );
    }
}
