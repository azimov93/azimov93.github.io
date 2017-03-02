import React, { Component } from 'react';
import {Link} from 'react-router';
import styles from './UserBar.scss';
import avatar from './avatar.png';
import settings from './settings.svg';
import logout from './logout.svg';
import list from './list.svg';
import person from './person.svg';


export default () => {
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
            <ul className={styles.menu}>
                <li className={styles.item}>
                    <Link className={styles.link} to="/"><img className={styles.logos} src={list}/>Schedule</Link>
                </li>
                <li className={styles.item}>
                    <Link className={styles.link} to="/clients"><img className={styles.logos} src={person}/>My clients</Link>
                </li>
            </ul>
        </div>
    )
}