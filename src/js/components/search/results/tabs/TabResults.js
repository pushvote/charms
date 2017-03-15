//This is needed for all react files?
import React from "react";

//this allows us to import Layout
export default class Tab_Results extends React.Component {

    render() {
        return (
            <div class="tab-pane fade in active" id="allResultsTable">

              <div class="col-xs-6">
                <h6>Personal List Search Results</h6>
                {this.props.searchPersonalResults}
              </div>

              <div class="col-xs-6">
                <h6>Master List Search Results</h6>
                {this.props.searchMasterResults}
              </div>

            </div>

        );
    }
}
