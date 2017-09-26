import React, {Component} from "react";

export default class SearchBar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="search-bar">
                <input onKeyUp={(e)=>this.props.onSearchBoxChange(e.target.value)} className="form-control" />
            </div>
        );
    }
}
//This class presents use of events handling and state purpose