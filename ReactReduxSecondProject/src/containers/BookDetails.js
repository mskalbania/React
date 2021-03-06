import React, {Component} from "react";
import {connect} from "react-redux";

class BookDetails extends Component {

    render() {
        if(!this.props.book){
            return <div>No book selected</div>
        }

        return (
            <div><h3>{this.props.book.title}</h3></div>
        );
    }
}

function mapStateToProps(state) {
    return {
        book: state.activeBook
    }
}

export default connect(mapStateToProps)(BookDetails)