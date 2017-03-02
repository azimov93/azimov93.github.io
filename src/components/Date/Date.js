import React, { Component } from 'react';
import styles from './Date.scss';
import { getData } from '../../actions/actionsDate';
import { connect } from 'react-redux';
import MeetList from './MeetList';

class Date extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount = () => {
        this.props.getData(this.props.data)
    };
    render() {
        const data = this.props.meets[this.props.data];
        return (
            <div className={styles.wrap}>
                <div className={styles.header}>
                    <h1 className={styles.title}>
                        {this.props.selected.format("MMMM DD")}
                    </h1>
                    <button
                        type="submit"
                        name="save"
                        className={`${styles.button} ${styles.create}`}
                    >
                        CREATE
                    </button>
                    {JSON.stringify(data)}
                </div>
            </div>
        )
    };
}

const mapStateToProps = (state) => {
    return {
        meets: state.meets
    }
};

export default connect(mapStateToProps, { getData })(Date);