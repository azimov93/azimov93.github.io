import React, { Component } from 'react';
import Items from './Items';
import styles from './UserBar.scss';
import avatar from './avatar.png';
import settings from './settings.svg';
import logout from './logout.svg';
import list from './list.svg';
import person from './person.svg';


class UserBar extends Component{
    state = {
        links: [
            {
                link: '/',
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
                <Items item={this.state.links}/>
            </div>
        )
    }
};

export default UserBar;