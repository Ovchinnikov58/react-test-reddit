import React from 'react';
import classes from './NotFound.module.scss'

export default class NotFound extends React.Component {

    render() {
        return (
            <div className={classes.NotFound}>
                <h1>NotFound 404 </h1>
            </div>
        )
    }
}