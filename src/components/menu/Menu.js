import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './Menu.module.scss'

export default class Menu extends React.Component {
    constructor(){
        super();

        this.state = {
            displayMenu: false,
        };

        this.toggleDropdownMenu = this.toggleDropdownMenu.bind(this);
    };

    toggleDropdownMenu(event) {
        event.preventDefault();
        if (!this.state.displayMenu) {
            this.setState({ displayMenu: true });
        } else {
            this.setState({ displayMenu: false });
        }
    }

    render() {
        return (
            <nav className={classes.Menu}>
                <ul className={classes.MenuList}>
                    <li className={classes.MenuItem}>
                        <NavLink to="/" exact className={classes.MenuLink} activeClassName={classes.active}>
                            Feed
                        </NavLink>
                    </li>

                    <li className={classes.MenuItem}>
                        <NavLink to="/bookmark" className={classes.MenuLink}>
                            Bookmark
                        </NavLink>
                    </li>
                </ul>
            </nav>
        )
    }
}