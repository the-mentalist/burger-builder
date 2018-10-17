import React from 'react';

import classes from './Sidedrawer.css';
import NavigationItems from '../NavigationItems/NavigationItems';

const sideDrawer = (props) => {
    return (
        <div className={classes.Sidedrawer}>
            <nav>
                <NavigationItems />
            </nav>
        </div>
    );
}

export default sideDrawer;