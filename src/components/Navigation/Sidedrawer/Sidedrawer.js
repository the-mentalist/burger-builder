import React from 'react';

import classes from './Sidedrawer.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sidedrawer = (props) => {
    let attachedClass = [classes.Sidedrawer, classes.Close];
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