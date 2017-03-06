import React, { Component } from 'react';
import styles from './Create.scss';
import close from './assets/close.svg';
import { actions } from '../../actions/actionsDate';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Create extends Component {
    constructor(props) {
        super(props);

        if (!props.form.newEntry) {
            this.state = ({
                date: this.props.date,
                name: props.name,
                description: props.description,
                errors: {}
            });
        } else {
            this.state = ({
                date: this.props.date,
                name: '',
                description: '',
                errors: {}
            });
        }
    }
    handleChange = (e) => {
        if (!!this.state.errors[e.target.name]) {
            let errors = Object.assign({}, this.state.errors);
            delete errors[e.target.name];
            this.setState({
                [e.target.name]: e.target.value,
                errors
            })
        } else {
            this.setState({
                [e.target.name]: e.target.value
            })
        }
    };
    handleSubmit = (e) => {
        e.preventDefault();
        let meeting = {
            date: this.state.date,
            id: this.props.id,
            name: this.state.name,
            description: this.state.description
        };
        let errors = {};
        if (meeting.name.length < 1 || meeting.description.length < 1) {
            if (meeting.name.length < 1) errors.name = 'Participant is required';
            if (meeting.description.length < 1) errors.description = 'Description is required';
        }
        this.setState({
            errors
        });
        const isValid = Object.keys(errors).length === 0;

        if (isValid) {
            console.log(this.state);
            if (!this.props.form.newEntry) {
                this.props.actions.updateMeeting(meeting);
            } else {
                this.props.actions.saveNewMeeting(meeting);
            }

        }
    };
    render() {
        return (
            <div className={styles.wrap}>
                <div className={styles.header}>
                    <h1 className={styles.title}>
                        New meeting on {this.props.selected.format('MMMM DD')}
                    </h1>
                    <img className={styles.close} src={close} />
                </div>
                <div className={styles.layout}>
                    <form className={styles.form} onSubmit={this.handleSubmit}>
                        <div className={styles.line}>
                            <label className={styles.label}>
                                Participant
                            </label>
                            <input
                                className={`${styles.input}` + (this.state.errors.name ? ` ${styles.error}` : ``)}
                                name='name'
                                value={this.state.value}
                                onChange={this.handleChange}
                                placeholder='Name' />
                            { this.state.errors.name && <span className={styles.errorMessage}>{this.state.errors.name}</span> }
                        </div>
                        <div className={styles.line}>
                            <label className={styles.label}>
                                Description
                            </label>
                            <textarea
                                className={`${styles.message}` + (this.state.errors.description ? ` ${styles.error}` : ``)}
                                name='description'
                                value={this.state.value}
                                onChange={this.handleChange}
                                placeholder='Meeting description' />
                            { this.state.errors.description && <span className={styles.errorMessage}>{this.state.errors.description}</span> }
                        </div>
                        <div className={styles.buttons}>
                            <button
                                type='reset'
                                name='cancel'
                                className={`${styles.button} ${styles.cancel}`}
                            >
                                CANCEL
                            </button>
                            <button
                                type='submit'
                                name='save'
                                className={`${styles.button} ${styles.save}`}
                            >
                                SAVE
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    };
}

const mapStateToFromProps = (state) => {
    return {
        date: state.meetings.all[this.state.date],
        id: state.meetings.all[this.state.date].id,
        newEntry: state.form.newEntry,
        name: state.meetings.all[this.state.date].name,
        description: state.meetings.all[this.state.date].description,
        form: state.form
    };
};

const mapDispatchToFormProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
};

export default connect(mapStateToFromProps, mapDispatchToFormProps)(Create);