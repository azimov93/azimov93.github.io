import React from 'react';
import Calendar from '../../../components/Calendar';
import moment from 'moment';

class Main extends React.Component {
    render() {
        return (
            <div>
                <Calendar selected={moment().startOf("day")} />
            </div>
        );
    }
}

export default Main;