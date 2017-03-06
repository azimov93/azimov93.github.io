import React, { Component } from 'react';
import styles from './MeetingsList.scss';
import editIcon from './editIcon.svg';
import deleteIcon from './deleteIcon.svg';

class Item extends Component {
    constructor(props) {
        super(props);
    }
    // componentDidMount = () => {
    //     this.setCurrent();
    // };
    setCurrent = () => {
        let currentMeeting = {
            date: this.props.day,
            id: this.props.id,
            name: this.props.name,
            description: this.props.description
        };
        this.props.actions.setCurrentMeeting(currentMeeting);
    };
    handleDelete = () => {
        if (this.props.id) {
            this.props.actions.deleteMeeting(this.props);
        }
    };
    render() {
        return (
            <li className={styles.item}>
                <div className={styles.info}>
                    <p className={styles.desc}>{this.props.description}</p>
                    <span className={styles.name}>{this.props.name}</span>
                </div>
                <div className={styles.buttons}>
                    <a className={styles.link} onClick={() => {this.props.editCurrent(); this.setCurrent()}}>
                        <img className={styles.icon} src={editIcon}/>
                    </a>
                    <a className={styles.link} onClick={this.handleDelete}>
                        <img key={this.props.id} className={styles.icon} src={deleteIcon}/>
                    </a>
                </div>
            </li>
        )
    }
}

export default Item;