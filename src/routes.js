import React from 'react';
import { IndexRoute, Route }  from 'react-router';
import App from './App';
import Calendar from './components/Calendar';
import Date from './components/Date';
import Create from './components/Create';

export default (
    <Route component={App} path='/'>
        <Route path="/cal" component={Calendar}>
            <Route path="/cal/:dateId" component={Date}/>
            <Route path="/cal/:dateId/new" component={Create}/>
            {/*<Route path="/:dateId/:meetId/edit" component={Edit}/>*/}
        </Route>
    </Route>
);