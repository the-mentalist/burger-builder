import React from 'react';

import classes from './BuildControl.css';

const buildControl = (props) => {
    let quantity = props.quantity ? props.quantity : 0;
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <button 
                className={classes.Less} 
                onClick={props.removed} 
                disabled={props.disabled}>-</button>
            <span><input type="text" value={quantity} className={classes.TextLabel} /></span>
            <button 
                className={classes.More} 
                onClick={props.added}>+</button>
        </div>
    );
};

export default buildControl;