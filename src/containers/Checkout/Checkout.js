import React, { Component } from 'react';
import { Route } from 'react-router-dom' ;

import classes from './Checkout.css';
import Burger from '../../components/Burger/Burger';
import Button from '../../components/UI/Button/Button';
import ContactData from './ContactData/ContactData';

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

    componentWillMount () {
        const query = new URLSearchParams(this.props.location.search);
        let ingredients = {};
        let price = 0;
        for (let param of query.entries()) {
            if (param[0] === 'price') {
                price = param[1];
            } else if (param[1] > 0) {
                ingredients[param[0]] = param[1];
            }
        }
        this.setState({ingredients: ingredients, totalPrice: price});
    }

    render () {
        return (
            <div className={classes.Checkout}>
                <h3>Your tasty burger is ready to be placed</h3>
                <div style={{width: '100%', margin: 'auto'}}>
                    <Burger ingredients={this.state.ingredients} />
                </div>
                <Button btnType="Danger" clicked={this.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.purchaseContinued}>CONTINUE</Button>
                <Route path={this.props.match.path + '/contact-data'}
                    render={(props) => (<ContactData ingredients={this.state.ingredients} totalPrice={this.state.totalPrice} {...props} />)} />
            </div>
        );
    }
}

export default Checkout;