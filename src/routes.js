import React from 'react';
import { IndexRoute, Route }  from 'react-router';
import App from './App';
import Calendar from './components/Calendar';
import Clients from './components/Clients';

export default (
    <Route component={App} path='/'>
        <IndexRoute component={Calendar} />
        <Route path="/clients" component={Clients}/>
    </Route>
);