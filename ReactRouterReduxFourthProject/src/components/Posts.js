import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/index';


class Posts extends Component {

    componentWillMount() {
        this.props.fetchPosts();
    }

    render() {
        return (
            <div>
                <Link className="btn btn-primary" to="/new">New Post</Link>
                <div>Posts</div>
            </div>
        );
    }
}

export default connect(null, {fetchPosts: fetchPosts})(Posts);