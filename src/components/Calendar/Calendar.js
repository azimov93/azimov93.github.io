import React, { Component } from 'react';
import styles from './Calendar.scss';
import DayNames from './DayNames';
import Week from './Week';
import arrow from './assets/arrow.svg';
import moment from 'moment';
import { actions } from '../../actions/actionsDate';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Date from '../Date';
import Create from '../Create';

class Calendar extends Component {
    constructor(props) {
        super(props)
    };
    componentDidMount() {
        this.props.actions.getAllMeetings();
    }
    state =  {
        month: moment().startOf("day").clone(),
        selected: moment().startOf("day"),
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
                {/*{React.Children.map(this.props.children, (child) =>*/}
                    {/*React.cloneElement(child,*/}
                    {/*{*/}
                        {/*selected: this.state.selected,*/}
                        {/*date: this.state.selected.format('DDMMMYY'),*/}
                    {/*}))*/}
                {/*}*/}
                <Date selected={this.state.selected} date={this.state.selected.format('DDMMMYY')}/>
                {/*<Create date={this.state.selected.format('DDMMMYY')}/>*/}
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

const mapStateToCalendarAppProps = (state) => {
    return {
        meetings: state.meetings.all,
        current: state.meetings.current,
    }
};

const mapDispatchToCalendarAppProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
};

export default connect(mapStateToCalendarAppProps, mapDispatchToCalendarAppProps)(Calendar);