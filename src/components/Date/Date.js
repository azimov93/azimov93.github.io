import React, { Component } from 'react';
import styles from './Date.scss';
import { Link } from 'react-router';
import { getData } from '../../actions/actionsDate';
import { connect } from 'react-redux';
import MeetList from './MeetList';

class Date extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount = () => {
        this.props.getData(this.props.data);
    };
    render() {
        return (
            <div className={styles.wrap}>
                <div className={styles.header}>
                    <h1 className={styles.title}>
                        {this.props.selected.format("MMMM DD")}
                    </h1>
                    <Link
                        to={`/cal/${this.props.data}/new`}
                        type="submit"
                        name="save"
                        className={`${styles.button} ${styles.create}`}
                    >
                        CREATE
                    </Link>
                    <MeetList data={this.props.meets} date={this.props.data} />
                    {JSON.stringify(this.props.meets)}
                </div>
            </div>
        )
    };
}

const mapStateToProps = (state) => {
    return {
        meets: state.meets,
    }
};

export default connect(mapStateToProps, { getData })(Date);