import React from 'react';

import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrwerToggle from '../Sidedrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>
            <DrwerToggle clicked={props.openSidedrawer}>Menu</DrwerToggle>
            <div className={classes.Logo}><Logo /></div>
            <nav className={classes.DesktopOnly}><NavigationItems /></nav>
        </header>
    );
};

export default toolbar;