import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/index';


class Posts extends Component {

    componentWillMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        return (this.props.posts.map((post) => {
            return (
                <li key={post.id} className="list-group-item">
                    <Link to={"posts/" + post.id}>
                        <span className="float-right">{post.categories}</span>
                        <strong>{post.title}</strong>
                    </Link>
                </li>);
        }));
    }

    render() {
        return (
            <div>
                <div className="text-xl-right">
                    <Link className="btn btn-primary" to="posts/new">New Post</Link>
                </div>
                <div>
                    <h3>Posts</h3>
                    <ul className="list-group">
                        {this.renderPosts()}
                    </ul>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {posts: state.posts.all}
}

export default connect(mapStateToProps, {fetchPosts: fetchPosts})(Posts);