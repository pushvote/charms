//This is needed for all react files?
import React from "react";
import Tab_Results from "./tabs/TabResults";
import Tab_Personal from "./tabs/TabPersonal";
import Tab_Master from "./tabs/TabMaster";
import Tab_History from "./tabs/TabHistory";
import Tab_Marked from "./tabs/TabMarked";
import ViewSettings from "./ViewSettings";

//this allows us to import Layout
export default class Results extends React.Component {

    constructor() {
        super();
        this.state = {
            name: "123"
        };
    };

    componentDidMount() {

    };

    dragulaDecorator = (componentBackingInstance) => {
        if (componentBackingInstance) {
            let options = {};
            Dragula([componentBackingInstance], options);
        }
    };

    render() {

      socket_vote.on('autocomplete_result', function(result) {
          if (result.length > 0) {
              result.forEach(function(parent_word) {
                  console.log(parent_word.category_name);
                  this.setState({name: "aaaaa"});
              })
          }
      })
      
        return (
            <div>
                <h3>Search Results</h3>

                <ul class="nav nav-tabs">
                    <li class="active">
                        <a href="#allResultsTable" data-toggle="tab" aria-expanded="false">Results</a>
                    </li>
                    <li class="">
                        <a href="#personalResultsTable" data-toggle="tab" aria-expanded="false">Personal</a>
                    </li>
                    <li class="">
                        <a href="#masterResultsTable" data-toggle="tab" aria-expanded="false">Master</a>
                    </li>
                    <li class="">
                        <a href="#historyResultsTable" data-toggle="tab" aria-expanded="false">History</a>
                    </li>
                    <li class="">
                        <a href="#markedResultsTable" data-toggle="tab" aria-expanded="false">Marked</a>
                    </li>
                    <ViewSettings/>
                    <div>
                        <input class="form-control .d-inline-block" placeholder="Search" type="text" data-container="body" data-toggle="popover" data-placement="bottom" data-content="Vivamus
                    sagittis lacus vel augue laoreet rutrum faucibus." data-original-title="" title=""/>
                    </div>
                </ul>

                <div id="myTabContent" class="tab-content">

                    <Tab_Results tits={this.state.name}/>
                    <Tab_Personal/>
                    <Tab_Master/>
                    <Tab_History/>
                    <Tab_Marked/>
                </div>

                <div class="row">
                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">{/*<!-- new line here because anything below here gets centerd!? -->*/}</div>
                </div>

            </div>
        );
    }
}
