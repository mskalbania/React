import React, {Component} from "react";

export default class SearchBar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="search-bar">
                <input className="form-control"
                       onKeyUp={(e) => this.props.onSearchBoxChange(e.target.value)}
                       onClick={(e) => e.target.value = ""}
                />
            </div>
        );
    }
}
//This class presents use of events handling and state purpose