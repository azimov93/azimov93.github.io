import React, { Component } from 'react';
import Items from './Items';
import styles from './UserBar.scss';
import avatar from './assets/avatar.png';
import settings from './assets/settings.svg';
import logout from './assets/logout.svg';
import list from './assets/list.svg';
import person from './assets/person.svg';
import { connect } from 'react-redux';
import { actions } from '../../actions/actionsDate';
import { bindActionCreators } from 'redux';

class UserBar extends Component{
    state = {
        links: [
            {
                link: '/cal',
                image: list,
                name: 'Schedule'
            },
            {
                link: '/clients',
                image: person,
                name: 'My clients'
            }
        ]
    };
    componentDidMount = () => {
        this.props.actions.getAllMeetings();
    };
    render() {
        return(
            <div className={styles.wrap}>
                <div className={styles.avatar}>
                    <img className={styles.image} src={avatar}/>
                </div>
                <div className={styles.buttons}>
                    <div className={`${styles.button} ${styles.settings}`}>
                        <img className={styles.icon} src={settings}/>
                    </div>
                    <div className={`${styles.button} ${styles.logout}`}>
                        <img className={styles.icon} src={logout}/>
                    </div>
                </div>
                <Items item={this.state.links} count={this.props.meetings.lastId}/>
            </div>
        )
    }
}

const mapStateToAppProps = (state) => {
    return {
        meetings: state.meetings,
    }
};

const mapDispatchToAppProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
};

export default connect(mapStateToAppProps, mapDispatchToAppProps)(UserBar);