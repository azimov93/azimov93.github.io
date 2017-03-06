import React from 'react';
import { IndexRoute, Route }  from 'react-router';
import App from './App';
import Calendar from './components/Calendar';

export default (
    <Route component={App} path='/'>
        <IndexRoute component={Calendar}>
        </IndexRoute>
    </Route>
);