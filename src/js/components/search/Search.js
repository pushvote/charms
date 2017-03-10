//This is needed for all react files?
import React from "react";
import Results from "./results/Results";

//this allows us to import Layout
export default class Search extends React.Component {
  search(e){
    //prompt(e.target.value());
    //websocket.send(e.target.value);
    socket_vote.emit('autocomplete_request', "1", "JBoo", e.target.value);

  }
    render() {
        return (
            <div>
              <div class="form-group">
                <input onChange={this.search} class="form-control" placeholder="Search" type="text" data-container="body" data-toggle="popover" data-placement="bottom" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." data-original-title="" title=""/>
              </div>
              <Results/>
            </div>
        );
    }
}
