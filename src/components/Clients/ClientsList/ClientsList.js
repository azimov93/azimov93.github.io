import React, { Component } from 'react';
import styles from './ClientsList.scss';

class ClientsList extends Component {
    render() {
        console.log(this.props);
        return (
            <ul className={styles.layout}>
                {this.props.clients.map(clients =>
                    <li key={clients.letter} className={styles.list}>
                        <span className={styles.letter}>{clients.letter}</span>
                        <ul className={styles.names}>
                            {clients.names.map(name =>
                                <li key={name} className={styles.name}>{name}</li>
                            )}
                        </ul>
                    </li>
                )}
            </ul>
        )
    }
}

export default ClientsList;