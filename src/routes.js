import React from 'react';
import { IndexRoute, Route }  from 'react-router';
import App from './App';
import Main from './containers/pages/Main'

export default (
    <Route component={App} path='/'>
        <IndexRoute component={Main}/>
    </Route>
);