import React from 'react';
import Calendar from '../../../components/Calendar';
import moment from 'moment';

class Main extends React.Component {
    render() {
        return <Calendar selected={moment().startOf("day")} today={moment().startOf("day")} />;
    }
}

export default Main;