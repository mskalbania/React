import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/App';
import Posts from './components/Posts';
import PostCreate from './components/PostCreate';
import PostDetails from "./components/PostDetails";

export default(
    <Route path="/" component={App}>
        <IndexRoute component={Posts}/>
        <Route path="posts/new" component={PostCreate}/>
        <Route path="posts/:id" component={PostDetails}/>
    </Route>
);