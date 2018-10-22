import React from 'react';

// this will return the path where webpack has bundled the image
import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.css';

const logo = (props) => {
    return (
        <div className={classes.Logo}>
            <div className={classes.Background}>
                <img src={burgerLogo} alt="logo"/>
            </div>
            <span className={classes.Title}>burger builder</span>
        </div>
        
    );
};

export default logo;