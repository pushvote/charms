import React from "react";
import ReactDOM from "react-dom"
import Layout from "./components/Layout";
import Dragon from "./test/Dragon";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

const app = document.querySelector('#app');
$('[data-toggle="popover"]').popover();





//http://stackoverflow.com/questions/13413057/how-to-insert-close-button-in-popover-for-bootstrap
$(document).ready(function() {
    $("[data-toggle='popover']").popover({
        placement: 'bottom',
        html: 'true',
        title : '<span class="text-info"><strong>title</strong></span>'+
                '<button type="button" id="close" class="close" onclick="$(&quot;#example&quot;).popover(&quot;hide&quot;);">&times;</button>',
        content : 'test'
    });
});


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
    </Route>
  </Router>,
app);
