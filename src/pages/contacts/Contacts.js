import React from 'react';
import classes from './Contacts.module.scss'

export default class Contacts extends React.Component {

    render() {
        return (
            <div className={classes.Contacts}>
                <h1 className={classes.ContactsTitle}>Контакты</h1>
                <p className={classes.ContactsText}>
                    Наш телефон: 11-11-11
                </p>
            </div>
        )
    }
}