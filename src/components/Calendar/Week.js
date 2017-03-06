import React, { Component } from 'react';
import styles from './Calendar.scss';

class Week extends Component {
    render() {
        let days = [],
            date = this.props.date,
            month = this.props.month,
            hasMeetings = this.props.planned;

        for (let i = 0; i < 7; i++) {
            let day = {
                name: date.format("dd").substring(0, 1),
                number: date.date(),
                isCurrentMonth: date.month() === month.month(),
                isToday: date.isSame(new Date(), "day"),
                date: date
            };
            days.push(
                <span
                    key={day.date.toString()}
                    className={`${styles.day}` + (day.isToday ? ` ${styles.today}` : ``) + (day.isCurrentMonth ? `` : ` ${styles.diffMonth}`) + (day.date.isSame(this.props.selected) ? ` ${styles.selected}` : ``)}
                    onClick={this.props.select.bind(null, day)}
                >
                    {day.number}
                    <span className={`${styles.dot}` + (hasMeetings[date.format('DDMMMYY')] ? ` ${styles.excist}` : ``)}/>
                </span>);
            date = date.clone();
            date.add(1, "d");

        }
        return(
            <div className={styles.week} key={days[0].toString()}>
                {days}
            </div>
        )
    }
}

export default Week;