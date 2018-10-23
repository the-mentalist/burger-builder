import React, { Component } from 'react';

import classes from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';

// class based, so that modal updates only when visible
class Modal extends Component {
    render () {
        return (
            <div>
                <Backdrop show={props.show} clicked={props.modalClosed} />
                <div className={classes.Modal}
                    style={{
                        transform: props.show ? 'translateY(0)' : 'translateY(-100%)',
                        opacity: props.show ? '1' : '0'
                    }}>
                    {props.children}
                </div>
            </div>
        );
    }
}

export default Modal;