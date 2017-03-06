import React, { Component } from 'react';
import styles from './Date.scss';
import { actions } from '../../actions/actionsDate';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MeetingsList from './MeetingsList';
import Create from '../Create';

class Date extends Component {
    constructor(props) {
        super(props);
    }
    createMeeting = () => {
        this.props.actions.createMeeting();
        this.props.actions.toggleForm();
    };
    editMeeting = () => {
        this.props.actions.editMeeting();
        this.props.actions.toggleForm();
    };
    renderMeetings = () => {
        if (!this.props.meetings[this.props.date] || this.props.meetings[this.props.date].length < 1) {
            return( '' )
        } else {
            return <MeetingsList edit={this.editMeeting} delete={this.deleteMeeting} date={this.props.date} data={this.props.meetings[this.props.date]} actions={this.props.actions}/>
        }
    };
    render() {
        const dateId = this.props.data;
        return (
            <div key={dateId} className={styles.wrap}>
                {
                    this.props.form.isOpen ?
                        <Create day={this.props.date} selected={this.props.selected.format("MMMM DD")}/>
                        :
                        <div className={styles.header}>
                            <h1 className={styles.title}>
                                {this.props.selected.format("MMMM DD")}
                            </h1>
                            <button
                                onClick={this.createMeeting}
                                className={`${styles.button} ${styles.create}`}
                            >
                                CREATE
                            </button>
                            {this.renderMeetings()}
                        </div>
                }
            </div>
        )
    };
}

const mapStateToDateProps = (state) => {
    return {
        meetings: state.meetings.all,
        current: state.meetings.current,
        form: state.form
    }
};

const mapDispatchToDateProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
};

export default connect(mapStateToDateProps, mapDispatchToDateProps)(Date);