import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/App';
import Posts from './components/Posts';
import PostCreate from './components/PostCreate';

export default(
    <Route path="/" component={App}>
        <IndexRoute component={Posts}/>
        <Route path="new" component={PostCreate}/>
    </Route>
);