import React, { Component } from 'react';
import styles from './Calendar.scss';

class DayNames extends Component {
    render() {
        return(
            <div className={`${styles.week} ${styles.names}`}>
                <span className={styles.dayName}>Mon</span>
                <span className={styles.dayName}>Tue</span>
                <span className={styles.dayName}>Wed</span>
                <span className={styles.dayName}>Thu</span>
                <span className={styles.dayName}>Fri</span>
                <span className={styles.dayName}>Sat</span>
                <span className={styles.dayName}>Sun</span>
            </div>
        )
    }
}

export default DayNames;