import React from 'react';
import { IndexRoute, Route }  from 'react-router';
import App from './App';

export default (
    <Route component={App} path='/'>
        {/*<IndexRoute component={Calendar} />*/}
        {/*<Route component={Clients} path='clients' />*/}
    </Route>
);