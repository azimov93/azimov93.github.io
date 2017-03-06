import React, { Component } from 'react';
import styles from './MeetingsList.scss';
import editIcon from './editIcon.svg';
import deleteIcon from './deleteIcon.svg';

class MeetingsList extends Component{
    editMeeting() {
        this.props.actions.editMeeting();
        this.props.actions.toggleForm();
    }
    render() {
        return (
            <ul className={styles.wrap}>
                {this.props.data.map(meeting =>
                    <li key={meeting.id} className={styles.item}>
                        <div className={styles.info}>
                            <p className={styles.desc}>{meeting.description}</p>
                            <span className={styles.name}>{meeting.name}</span>
                        </div>
                        <div className={styles.buttons}>
                            <a className={styles.link} onClick={this.editMeeting()}>
                                <img className={styles.icon} src={editIcon}/>
                            </a>
                            <img key={meeting.id} className={styles.icon} src={deleteIcon}/>
                        </div>
                    </li>
                )}
            </ul>
        )
    }
}

export default MeetingsList;