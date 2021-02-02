import React from 'react';
import classes from './Button.module.scss'

export default class Button extends React.Component {

    render() {
        const inputClasses = [classes.Button];

        if (this.props.type === 'add') {
            inputClasses.push(classes.Add);
        } else if (this.props.type === 'remove') {
            inputClasses.push(classes.Remove);
        }

        return (
            <button
                onClick={this.props.onClick}
                className={inputClasses.join(' ')}
            >
                {this.props.text}
            </button>
        )
    }
}