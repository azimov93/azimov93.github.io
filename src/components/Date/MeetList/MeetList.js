import React, { Component } from 'react';
import styles from './MeetList.scss';
import editIcon from './editIcon.svg';
import deleteIcon from './deleteIcon.svg';

export const MeetList = (props) => {
    return(
        <ul className={styles.wrap}>
            {props.data[props.date].map(meet =>
                <li key={meet.id} className={styles.item}>
                    <div className={styles.info}>
                        <p className={styles.desc}>{meet.description}</p>
                        <span className={styles.name}>{meet.name}</span>
                    </div>
                    <div className={styles.buttons}>
                        <img className={styles.icon} src={editIcon}/>
                        <img key={meet.id} className={styles.icon} src={deleteIcon}/>
                    </div>
                </li>
            )}
        </ul>
    )
};