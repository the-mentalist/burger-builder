import React from 'react';

import classes from './Order.css';

const Order = (props) => {
    // converting ingredients object to list
    let ingredients = [];
    for (let ingredientName in props.ingredients) {
        ingredients.push({
            name: ingredientName,
            quantity: props.ingredients[ingredientName]
        });
    }
    console.log(ingredients);
    const ingredientsDisplay = ingredients.map(ing => {
        return <span style={{textTransform: 'capitalize', display: 'inline-block', margin: '0 8px'}} key={ing.name}>
            {ing.name} ({ing.quantity})
        </span>
    });
    return (
        <div className={classes.Order}>
            <p>Ingredients: {ingredientsDisplay}</p>
            <p>Price: <strong><span>&#36;</span>{Number.parseFloat(props.price).toFixed(2)}</strong></p>
        </div>
    );
};

export default Order;