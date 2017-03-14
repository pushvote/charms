//This is needed for all react files?
import React from "react";

//this allows us to import Layout
export default class Tab_Results extends React.Component {

    /*
  socket_vote.on('autocomplete_result', function (result) {
      if (result.length > 0) {
          $("#suggestion").empty();
          $("#suggestion_wrapper").slideDown(100);
          result.forEach(function(parent_word){
              $("#suggestion").append("<tr id='" + htmlEntities(parent_word.id) + "'><td class='rel-name'>" + "<b>" + htmlEntities(parent_word.category_name.substring(name.length, parent_word.category_name.length)) + "</b></td></tr>");
          })
      }
      else {
          close_suggestion();
      }

  });

  */

    render() {
        return (
            <div class="tab-pane fade in active" id="allResultsTable">

              <div class="col-xs-6">
                <h6>Personal List Search Results</h6>
                {this.props.searchResults}
              </div>

              <div class="col-xs-6">
                <h6>Master List Search Results</h6>
                {this.props.searchResults}
              </div>

            </div>

        );
    }
}
