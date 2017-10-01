import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPost} from '../actions/index'
import {Link} from 'react-router';


class PostDetails extends Component {

    componentWillMount() {
        this.props.fetchPost(this.props.params.id);
    }

    render() {
        const selected = this.props.selected;

        if (!selected) {
            return <div>Loading...</div>
        }
        return (
            <div>
                <Link to="/">Back to Index</Link>
                <h1>{selected.title}</h1>
                <h2>{selected.categories}</h2>
                <p>{selected.content}</p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {selected: state.posts.selected}
}

export default connect(mapStateToProps, {fetchPost})(PostDetails);