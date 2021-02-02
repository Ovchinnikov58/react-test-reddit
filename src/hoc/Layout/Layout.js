import React from 'react';
import Footer from '../../components/footer/Footer'
import classes from './Layout.module.scss'


export default class Layout extends React.Component {
    render() {
        return (
                <div className={classes.Layout}>
                    <div className={classes.content}>
                        { this.props.children }
                    </div>
                    <Footer className={classes.footer}/>
                </div>
        )
    }
}