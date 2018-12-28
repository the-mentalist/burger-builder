import React from 'react';

import classes from './Order.css';

const Order = (props) => {
    return (
        <div className={classes.Order}>
            <p>Ingredients</p>
            <p>Price</p>
        </div>
    );
};

export default Order;