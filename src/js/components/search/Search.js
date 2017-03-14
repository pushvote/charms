//This is needed for all react files?
import React from "react";
import Results from "./results/Results";
import Dragula from 'react-dragula';

//this allows us to import Layout
export default class Search extends React.Component {

    constructor() {
        super();

        this.state = {
            parentSearchResults: this.createTable({results: ""})
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
            const listChildren = results.map((result, index) => `"${result.category_name}",`)
            return <td>
                {listChildren}
            </td>;
        } else {
            return <td key={Math.random().toString()}>"No Children"</td>
        }
    }

    createRow({results}) {
        if (results.length > 0 && results !== "") {
            const listItems = results.map((result, index) => (
                <tr class="warning" key={index}>
                    <td>{index + 1}</td>
                    <td key={result.category.id.toString()}>
                        {result.category.category_name}
                    </td>

                    {this.createCellChildren({results: result.category_children})}

                </tr>
            ));

            return listItems;
        } else {
            return (
                <tr class="warning">
                    <td>1</td>
                    <td>{"Waiting for results..."}</td>
                    <td>{"Waiting for results..."}</td>
                    <td>{"Waiting for results..."}</td>
                </tr>
            );
        }

    }

    createTable({results}) {
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
                    parentSearchResults: this.createTable({results})
                });
            }

        });
    };

    search(e) {
        if (e.target.value !== '') {
            socket_vote.emit('autocomplete_request', '1', 'JBoo', e.target.value);
        } else {
            this.setState({
                parentSearchResults: this.createTable({results: ''})
            });
        }
    };

    render() {
        return (
            <div>
                <div class="form-group">
                    <input onChange={this.search.bind(this)} class="form-control" placeholder="Search" type="text" data-container="body" data-toggle="popover" data-placement="bottom" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." data-original-title="" title=""/>
                </div>
                <Results searchResults={this.state.parentSearchResults}/>
            </div>
        );
    }
}
