//This is needed for all react files?
import React from "react";
import Title from "./Header/Title"
//this allows us to import Layout
export default class Header extends React.Component {
    render() {
        return (
          <Title />
        );
    }
}
