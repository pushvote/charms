//This is needed for all react files?
import React from "react";

//this allows us to import Layout
export default class Footer extends React.Component {
    render() {
        return (
            <div>

              <ul class="nav nav-tabs">
                <li class="active"><a href="#cat" data-toggle="tab" aria-expanded="false">cat</a></li>
                <li class=""><a href="#dog" data-toggle="tab" aria-expanded="false">dog</a></li>
              </ul>


              <div id="myTabContent" class="tab-content">
                <div class="tab-pane fade in active" id="cat">
                  <h3></h3>
                  <span class="breadcrumb .d-inline-block">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Library</a></li>
                    <li class="active">cat</li>
                  </span>

                  <div>
                    <ul class="nav nav-tabs">
                      <li class="active"><a href="#profile" data-toggle="tab" aria-expanded="false">Votes</a></li>
                      <li class=""><a href="#profile" data-toggle="tab" aria-expanded="false">People</a></li>
                      <li><a href="#profile" data-toggle="tab" aria-expanded="false">Actions</a></li>
                      <li class="dropdown navbar-right">
                        <a class="dropdown-toggle" data-toggle="dropdown" href="#">View Settings <span class="caret"></span>  </a>
                        <ul class="dropdown-menu">
                          <li><a href="#home" data-toggle="tab">Bottomless Scroll</a></li>
                          <li><a href="#profile" data-toggle="tab">Another action</a></li>
                        </ul>
                      </li>
                      <div>
                        <input class="form-control  .d-inline-block" placeholder="Search" type="text" data-container="body" data-toggle="popover" data-placement="bottom" data-content="Vivamus
                          sagittis lacus vel augue laoreet rutrum faucibus." data-original-title="" title="" />
                      </div>
                    </ul>
                  </div>

                  <table class="table table-striped table-hover">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Children</th>
                        <th>People</th>
                        <th>BreadCrumbs</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="warning">
                        <td>1</td>
                        <td>cat</td>
                        <td>Column content</td>
                        <td>Column content</td>
                      </tr>
                      <tr class="active">
                        <td>2</td>
                        <td>Column content</td>
                        <td>Column content</td>
                        <td>Column content</td>
                      </tr>
                      <tr class="info">
                        <td>3</td>
                        <td>Column content</td>
                        <td>Column content</td>
                        <td>Column content</td>
                      </tr>
                      <tr class="success">
                        <td>4</td>
                        <td>Column content</td>
                        <td>Column content</td>
                        <td>Column content</td>
                      </tr>
                      <tr class="danger">
                        <td>5</td>
                        <td>Column content</td>
                        <td>Column content</td>
                        <td>Column content</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="tab-pane fade in" id="dog">
                  <h3></h3>
                  <span class="breadcrumb .d-inline-block">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Library</a></li>
                    <li class="active">dog</li>
                  </span>

                  <div>
                    <ul class="nav nav-tabs">
                      <li class="active"><a href="#profile" data-toggle="tab" aria-expanded="false">Votes</a></li>
                      <li class=""><a href="#profile" data-toggle="tab" aria-expanded="false">People</a></li>
                      <li><a href="#profile" data-toggle="tab" aria-expanded="false">Actions</a></li>
                      <li class="dropdown navbar-right">
                        <a class="dropdown-toggle" data-toggle="dropdown" href="#">View Settings <span class="caret"></span>  </a>
                        <ul class="dropdown-menu">
                          <li><a href="#home" data-toggle="tab">Bottomless Scroll</a></li>
                          <li><a href="#profile" data-toggle="tab">Another action</a></li>
                        </ul>
                      </li>
                      <div>
                        <input class="form-control  .d-inline-block" placeholder="Search" type="text" data-container="body" data-toggle="popover" data-placement="bottom" data-content="Vivamus
                          sagittis lacus vel augue laoreet rutrum faucibus." data-original-title="" title="" />
                      </div>
                    </ul>
                  </div>
                  
                  <table class="table table-striped table-hover">
                    <thead>
                          <tr>
                            <th>#</th>
                            <th>Children</th>
                            <th>People</th>
                            <th>BreadCrumbs</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr class="warning">
                            <td>1</td>
                            <td>dog</td>
                            <td>Column content</td>
                            <td>Column content</td>
                          </tr>
                          <tr class="active">
                            <td>2</td>
                            <td>Column content</td>
                            <td>Column content</td>
                            <td>Column content</td>
                          </tr>
                          <tr class="info">
                            <td>3</td>
                            <td>Column content</td>
                            <td>Column content</td>
                            <td>Column content</td>
                          </tr>
                          <tr class="success">
                            <td>4</td>
                            <td>Column content</td>
                            <td>Column content</td>
                            <td>Column content</td>
                          </tr>
                          <tr class="danger">
                            <td>5</td>
                            <td>Column content</td>
                            <td>Column content</td>
                            <td>Column content</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>


            </div>

        );
    }
}
