import React, { Component } from 'react';
import styles from './MeetingsList.scss';
import Item from './Item';

class MeetingsList extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ul className={styles.wrap}>
                {this.props.data.map(meeting =>
                    <Item
                        actions={this.props.actions}
                        day={this.props.date}
                        key={meeting.id}
                        id={meeting.id}
                        description={meeting.description}
                        name={meeting.name}
                        editCurrent={this.props.edit}
                        current={this.setCurrent}
                    />
                )}
            </ul>
        )
    }
}

export default MeetingsList;