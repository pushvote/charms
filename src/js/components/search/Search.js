//This is needed for all react files?
import React from "react";
import Results from "./results/Results";
import Dragula from 'react-dragula';


//this allows us to import Layout
export default class Search extends React.Component {

    constructor() {
        super();
        this.state = {
            parentSearchPersonalResults: this.createPersonalTable({results: ""}),
            parentSearchMasterResults: this.createMasterTable({results: ""})
        };
    };

    dragulaDecorator = (componentBackingInstance) => {
        if (componentBackingInstance) {
            let options = {};
            Dragula([componentBackingInstance], options);
        }
    };

    createCellChildren({results}) {

        if (results.length > 0 && results !== "") {
            const listChildren = results.map((result, index) =>
            <a href={"/category_id/" + result.id} key={result.id}>{result.category_name} </a>)
            return (<td class="setWidth concat" key={Math.random().toString()}>
              <div>{listChildren}</div>
            </td>);
        } else {
            return <td style={this.styleTD} key={Math.random().toString()}>No Children</td>
            }
              }

    createCellPeople({results}) {
        if (results.length > 0 && results !== "") {
            const listChildren = results.map((result, index) => <a href={"/person_id/" + result.uid} key={result.uid}>{result.name},</a>)
            return <td key={Math.random().toString()}>
              {listChildren}
            </td>;
        } else {
            return <td key={Math.random().toString()}>Error: No People?</td>
        }
    }

  createCellCategory({category}){
      return (
        <td key={category.id.toString()}>
          <a href={"/category_id/" + category.id}>{category.category_name}</a>
        </td>)
    }

    createRow({results}) {
        if (results && results.length > 0 && results !== "") {
            const listItems = results.map((result, index) => (
                <tr class="warning" key={index}>
                  <td>{index + 1}</td>

                  {this.createCellCategory({category: result.category})}
                  {this.createCellChildren({results: result.category_children})}
                  {this.createCellPeople({results: result.category_people})}
                </tr>
            ));

            return listItems;
        } else {
            return (
                <tr class="warning">
                  <td class="col-xs-1">1</td>
                  <td class="col-xs-1">{"Waiting for results..."}</td>
                  <td class="col-xs-2">{"Waiting for results..."}</td>
                  <td class="col-xs-2">{"Waiting for results..."}</td>
                </tr>
            );
        }
    }

    createPersonalTable({results}) {
        //console.log(results);
        //console.log(results && results[0] && results[0].category_people[0].uid);
        //filter out non-personal results
        if (results.length > 0) {
            results = results.filter((result) => result.category_people.some((person) => person.uid == person_id))
        }

        return (
            <table class="table-responsive table table-striped table-hover">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Children</th>
                  <th>People</th>
                </tr>
              </thead>
              <tbody ref={this.dragulaDecorator}>
                {this.createRow({results})}
              </tbody>
            </table>
        );
    }

    createMasterTable({results}) {
        return (
            <table class="table-responsive table table-striped table-hover">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Children</th>
                  <th>People</th>
                </tr>
              </thead>
              <tbody ref={this.dragulaDecorator}>
                {this.createRow({results})}
              </tbody>
            </table>
        );
    }

    componentWillMount() {}
    componentDidMount() {
        socket_vote.on('autocomplete_result', (results) => {
            if (results.length > 0) {
                this.setState({
                    parentSearchPersonalResults: this.createPersonalTable({results}),
                    parentSearchMasterResults: this.createMasterTable({results})
                });
            } else {
                this.setState({
                    parentSearchPersonalResults: this.createPersonalTable({results: ""}),
                    parentSearchMasterResults: this.createMasterTable({results: ""})
                });
            }

        });
    };

    searchMainAutoComplete(e) {
        if (e.target.value !== '') {
            socket_vote.emit('autocomplete_request', person_id, person_name, e.target.value);
        } else {
            this.setState({
                parentSearchPersonalResults: this.createPersonalTable({results: ""}),
                parentSearchMasterResults: this.createMasterTable({results: ""})
            });
        }
    };

    searchMainEnter(e) {
        if (e.keyCode === 13) {
            socket_vote.emit('switch_to_word_request', person_id, person_name, e.target.value);
            socket_vote.emit('autocomplete_request', person_id, person_name, e.target.value); //TODO: make this one request only
            e.target.value = "";
        }
    }

    render() {
        return (
            <div>
              <div class="form-group">
                <input onKeyUp={this.searchMainEnter} onChange={this.searchMainAutoComplete.bind(this)} class="form-control" placeholder="Search" type="text" data-container="body" data-toggle="popover" data-placement="bottom" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." data-original-title="" title=""/>
              </div>
              <Results searchPersonalResults={this.state.parentSearchPersonalResults} searchMasterResults={this.state.parentSearchMasterResults}/>
            </div>
        );
    }
}
