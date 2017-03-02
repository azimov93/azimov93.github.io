import React, { Component } from 'react';
import {Link} from 'react-router';
import styles from '../UserBar.scss';

class Items extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <ul className={styles.menu}>
                {this.props.item.map(item =>
                    <li key={item.name} className={styles.item}>
                        <Link className={styles.link} to={item.link}><img className={styles.logos} src={item.image}/>{item.name}</Link>
                    </li>
                )}
            </ul>
        )
    }
};

export default Items;