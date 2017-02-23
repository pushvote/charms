//This is needed for all react files?
import React from "react";
import Title from "./Header/Title"
//this allows us to import Layout
export default class Header extends React.Component {
handleChange(e){
  const title = e.target.value;
  this.props.changeTitle(title);
}
    render() {
        return (
            <div>
              <Title title={this.props.title}/>

              <input value={this.props.title} onChange={this.handleChange.bind(this)}/>
            </div>
        );
    }
}
