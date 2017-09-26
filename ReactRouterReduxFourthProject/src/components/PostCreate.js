import React, {Component} from 'react';
import {reduxForm} from 'redux-form';

import {connect} from 'react-redux';
import {fetchPosts} from '../actions/index';


class PostCreate extends Component {

    render() {
        const handleSubmit = this.props.handleSubmit;
        const title = this.props.fields.title;
        const category = this.props.fields.category;
        const content = this.props.fields.content;

        return (
            <form onSubmit={handleSubmit}>
                <h3>Create New Post</h3>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control" {...title}/>
                    <label>Category</label>
                    <input type="text" className="form-control" {...category}/>
                    <label>Content</label>
                    <textarea className="form-control" {...content}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'NewPost',
    fields: ['title', 'category', 'content'],

})(PostCreate);

