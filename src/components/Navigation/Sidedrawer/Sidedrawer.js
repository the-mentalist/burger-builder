import React from 'react';

import classes from './Sidedrawer.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';

const sideDrawer = (props) => {
    return (
        <div className={classes.Sidedrawer}>
            <Logo/>
            <nav>
                <NavigationItems />
            </nav>
        </div>
    );
}

export default sideDrawer;