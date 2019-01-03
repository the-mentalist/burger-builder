import React from 'react';

import classes from './Input.css';

const input = (props) => {
    let el = null;
    switch(props.elementtype) {
        case ('input'):
            el = <input {...props.elementconfig} className={classes.InputEl} value={props.value} onChange={props.changed} />;
            break;
        case ('select'):
            el = (
                <select className={classes.InputEl} value={props.value} onChange={props.changed} >
                    {props.elementconfig.options.map(option => {
                        <option key={option.value} value={option.value}>{option.displayValue}</option>
                    })}
                </select>
            );
            break;
    }
    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {el}
        </div>
    );
}