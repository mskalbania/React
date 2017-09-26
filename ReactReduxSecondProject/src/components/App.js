import React from "react";
import {Component} from "react";

import BookList from "../containers/BookList";
import BookDetails from "../containers/BookDetails";

export default class App extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-lg-5">
                    <BookList/>
                </div>
                <div className="col-lg-7">
                    <BookDetails/>
                </div>
            </div>
        );
    }
}
