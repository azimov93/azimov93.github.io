import React, { Component } from 'react';
import styles from './Clients.scss';
import ClientsList from './ClientsList';

class Clients extends Component {
    state = {
        clients: [
            {
                letter: 'E',
                names: ['Eddie Albert', 'Eddy Arnold']
            },
            {
                letter: 'N',
                names: ['Neil Armstrong', 'Nils Asther']
            },
            {
                letter: 'S',
                names: ['Stella Adler', 'Steve Allen']
            },
        ]
    };
    render() {
        return (
            <div className={styles.wrap}>
                <h2 className={styles.word}>My clients</h2>
                <ClientsList clients={this.state.clients}/>
            </div>
        )
    }
}

export default Clients;