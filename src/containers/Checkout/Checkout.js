import React, { Component } from 'react';

import classes from './Checkout.css';
import Burger from '../../components/Burger/Burger';
import Button from '../../components/UI/Button/Button';

class Checkout extends Component {
    state = {
        ingredients: {}
    }

    purchaseCancelled = () => {
        this.props.history.goBack();
    }

    purchaseContinued = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        let ingredients = {};
        for (let param of query.entries()) {
            ingredients[param[0]] = param[1];
        }
        this.setState({ingredients: ingredients});
        console.log('component mounted');
    }

    render () {
        console.log('render started');
        return (
            <div className={classes.Checkout}>
                Order Summary
                <Burger ingredients={this.state.ingredients}/>
                <h4>Continue to Checkout?</h4>
                <Button btnType="Danger" clicked={this.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.purchaseContinued}>CONTINUE</Button>
            </div>
        );
    }
}

export default Checkout;