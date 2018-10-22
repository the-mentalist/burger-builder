import React from 'react';

import classes from './Sidedrawer.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sidedrawer = (props) => {
    const attachedClass = [classes.Sidedrawer, classes.Closed];
    if (props.show) {
        attachedClass = [classes.Sidedrawer, classes.Open];
    }
    return (
        <div>
            <Backdrop show={props.show} clicked={props.backdropClosed} />
            <div className={attachedClass.join(' ')}>
                <div className={classes.Logo}><Logo/></div>
                <nav><NavigationItems /></nav>
            </div>
        </div>
        );
    }
    
    export default sidedrawer;