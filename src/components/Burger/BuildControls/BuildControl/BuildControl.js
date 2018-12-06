import React from 'react';

import classes from './BuildControl.css';

const buildControl = (props) => {
    let quantity = props.quantity ? <div className={classes.TextLabel}><label>{props.quantity}</label></div> : null;
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <button 
                className={classes.Less} 
                onClick={props.removed} 
                disabled={props.disabled}>Less</button>
            {quantity}
            <button 
                className={classes.More} 
                onClick={props.added}>More</button>
        </div>
    );
};

export default buildControl;