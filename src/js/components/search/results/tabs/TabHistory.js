
//This is needed for all react files?
import React from "react";
import Dragula from 'react-dragula';

//this allows us to import Layout
export default class Tab_History extends React.Component {

  dragulaDecorator = (componentBackingInstance) => {
    if (componentBackingInstance) {
      let options = { };
      Dragula([componentBackingInstance], options);
    }
  };

    render() {
        return (
          <div class="tab-pane fade in" id="historyResultsTable">
            <h6>History Results</h6>
            <table class="table table-striped table-hover">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>People</th>
                  <th>Breadcrumb</th>
                </tr>
              </thead>
              <tbody ref={this.dragulaDecorator}>
                <tr class="warning">
                  <td>1</td>
                  <td>History <span class="badge">14</span></td>
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
        );
    }
}
