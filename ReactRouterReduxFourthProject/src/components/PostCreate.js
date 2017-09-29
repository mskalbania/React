import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import {createPost} from '../actions/index';
import {Link} from 'react-router';

class PostCreate extends Component {

    static contextTypes = {
        router: PropTypes.object
    };

    render() {
        //config objects (form control is handling by redux-form)
        const handleSubmit = this.props.handleSubmit;
        const title = this.props.fields.title;
        const categories = this.props.fields.categories;
        const content = this.props.fields.content;

        return (
            // ... dots in from fields is equivalent to ex. onChange = {this.title.onChange}
            <form onSubmit={handleSubmit(this.props.createPost)}>
                <h3>Create New Post</h3>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control" {...title}/>
                    <div className="text-help">
                        {title.touched ? title.error : ''}
                    </div>
                </div>
                <div className="form-group">
                    <label>Category</label>
                    <input type="text" className="form-control" {...categories}/>
                    <div className="text-help">
                        {categories.touched ? categories.error : ''}
                    </div>
                </div>
                <div className="form-group">
                    <label>Content</label>
                    <textarea className="form-control" {...content}/>
                    <div className="text-help">
                        {content.touched ? content.error : ''}
                    </div>
                </div>
                <button type="submit" className="btn btn-primary"
                        disabled={this.props.invalid}>Submit
                </button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
}

function validate(values) {
    const errors = {};

    if (!values.title) {
        errors.title = 'Enter a title';
    }
    if (!values.content) {
        errors.content = 'Enter Content';
    }
    if (!values.categories) {
        errors.categories = 'Enter Categories';
    }

    return errors;
}

export
default

reduxForm({
        form: 'NewPost',
        fields: ['title', 'categories', 'content'],
        validate
    },

    null
    , {
        createPost
    }
)
(PostCreate);

