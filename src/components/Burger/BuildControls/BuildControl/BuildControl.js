import React from 'react';

import classes from './BuildControl.css';

const buildControl = (props) => {
    let quantity = props.quantity ? props.quantity : 0;
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>
                {props.label}
                <div className={classes.UnitPrice}><span>&#36;</span>{props.price}</div>
            </div>
            
            <button 
                className={classes.Less} 
                onClick={props.removed} 
                disabled={props.disabled}>-</button>
            <span><input type="text" value={quantity} className={classes.TextLabel} readOnly /></span>
            <button 
                className={classes.More} 
                onClick={props.added}>+</button>
        </div>
    );
};

export default buildControl;