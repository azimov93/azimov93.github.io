import React, { Component } from 'react';
import styles from './Create.scss';
import { setData } from '../../actions/actionsDate';
import { connect } from 'react-redux';
import close from './assets/close.svg';

class Create extends Component {
    // componentDidMount = () => {
    //     this.props.setData()
    // };
    state = {
        id: this.props.selected.format("DD_MMMM_YYYY"),
        name: '',
        description: '',
        errors: {}
    };
    handleChange = (e) => {
        if (!!this.state.errors[e.target.name]) {
            let errors = Object.assign({}, this.state.errors);
            delete errors[e.target.name];
            this.setState({
                [e.target.name]: e.target.value,
                errors
            })
        } else {
            this.setState({
                [e.target.name]: e.target.value
            })
        }
    };
    handleSubmit = (e) => {
        e.preventDefault();

        let errors = {};
        if ( this.state.name === '' ) errors.name = 'Participant is required';
        if ( this.state.description === '' ) errors.description = 'Description is required';
        this.setState({
            errors
        });
        const isValid = Object.keys(errors).length === 0;

        if (isValid) {
            const { id, name, description } = this.state;
            console.log(this.state);
            this.props.setData({ id, name, description });
        }
    };
    render() {
        return (
            <div className={styles.wrap}>
                <div className={styles.header}>
                    <h1 className={styles.title}>
                        New meeting on {this.props.selected.format("MMMM DD")}
                    </h1>
                    <img className={styles.close} src={close} />
                </div>
                <div className={styles.layout}>
                    <form className={styles.form} onSubmit={this.handleSubmit}>
                        <div className={styles.line}>
                            <label className={styles.label}>
                                Participant
                            </label>
                            <input
                                className={`${styles.input}` + (this.state.errors.name ? ` ${styles.error}` : ``)}
                                name="name"
                                value={this.state.value}
                                onChange={this.handleChange}
                                placeholder="Name" />
                            { this.state.errors.name && <span className={styles.errorMessage}>{this.state.errors.name}</span> }
                        </div>
                        <div className={styles.line}>
                            <label className={styles.label}>
                                Description
                            </label>
                            <textarea
                                className={`${styles.message}` + (this.state.errors.description ? ` ${styles.error}` : ``)}
                                name="description"
                                value={this.state.value}
                                onChange={this.handleChange}
                                placeholder="Meeting description" />
                            { this.state.errors.description && <span className={styles.errorMessage}>{this.state.errors.description}</span> }
                        </div>
                        <div className={styles.buttons}>
                            <button
                                type="reset"
                                name="cancel"
                                className={`${styles.button} ${styles.cancel}`}
                            >
                                CANCEL
                            </button>
                            <button
                                type="submit"
                                name="save"
                                className={`${styles.button} ${styles.save}`}
                            >
                                SAVE
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    };
}

export default connect(null, { setData })(Create);