import React, { Component } from 'react';
import styles from './Date.scss';
import { Link } from 'react-router';
import { getData } from '../../actions/actionsDate';
import { connect } from 'react-redux';
import MeetingsList from './MeetingsList';

class Date extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount = () => {
        this.props.getData(this.props.data);
    };
    render() {
        const dateId = this.props.data;
        return (
            <div key={dateId} className={styles.wrap}>
                <div className={styles.header}>
                    <h1 className={styles.title}>
                        {this.props.selected.format("MMMM DD")}
                    </h1>
                    <Link
                        to={`/cal/${this.props.data}/new`}
                        className={`${styles.button} ${styles.create}`}
                    >
                        CREATE
                    </Link>
                    {this.props.meets[dateId] && <MeetingsList data={this.props.meets[dateId]} date={dateId}/>}
                </div>
            </div>
        )
    };
}

const mapStateToProps = (state) => {
    return {
        meetings: state.meetings,
    }
};

export default connect(mapStateToProps, { getData })(Date);