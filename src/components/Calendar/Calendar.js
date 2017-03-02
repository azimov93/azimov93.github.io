import React, { Component } from 'react';
import styles from './Calendar.scss';
import DayNames from './DayNames';
import Week from './Week';
import arrow from './assets/arrow.svg';
import Date from '../Date';
import Create from '../Create';

class Calendar extends Component {
    constructor(props) {
        super(props)
    };
    state =  {
        month: this.props.selected.clone(),
        selected: this.props.today,
    };
    previous = () => {
        const month = this.state.month;
        month.add(-1, "M");
        this.setState({ month: month });
    };
    next = () => {
        const month = this.state.month;
        month.add(1, "M");
        this.setState({ month: month });
    };
    select = (day) => {
        this.setState({
                selected: day.date
        });
        this.forceUpdate();
    };
    render() {
        return (
            <div className={styles.wrap}>
                <div className={styles.calendar}>
                    <div className={styles.header}>
                        <img className={`${styles.arrow} ${styles.prev}`} src={arrow} onClick={this.previous}/>
                        {this.renderMonthLabel()}
                        <img className={`${styles.arrow} ${styles.next}`} src={arrow} onClick={this.next}/>
                    </div>
                    <DayNames />
                    {this.renderWeeks()}
                </div>
                <Date selected={this.state.selected} data={this.state.selected.format("DD_MMMM_YYYY")}/>
            </div>
        );
    }
    renderWeeks = () => {
        let weeks = [],
            done = false,
            date = this.state.month.clone().startOf("month").add("w"-1).startOf('isoWeek'),
            monthIndex = date.month(),
            count = 0;


        while (!done) {
            weeks.push(<Week key={date.toString()} date={date.clone()} month={this.state.month} select={this.select} selected={this.state.selected} />);
            date.add(1, "w");
            done = count++ > 2 && monthIndex !== date.month();
            monthIndex = date.month();
        }

        return weeks;
    };
    renderMonthLabel = () => {
        return <span className={styles.label}>{this.state.month.format("MMM YYYY")}</span>;
    }
}

export default Calendar;