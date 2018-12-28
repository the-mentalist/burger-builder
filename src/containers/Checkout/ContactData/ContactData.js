import React, { Component } from 'react';

import classes from './ContactData.css';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Button from '../../../components/UI/Button/Button';
import axios from '../../../axios-orders';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            postCode: '',
            street: ''
        },
        phone: '',
        loading: false
    }

    purchaseContinuedHandler = (event) => {
        // since inside form
        event.preventDefault();
        console.log(this.props.ingredients);
        this.setState({loading: true});
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,
            customer: {
                name: '',
                email: '',
                phone: '',
                address: {
                    postCode: '',
                    street: ''
                }
            }
        };
        // orders node is created, .json added for firebase
        axios.post('/orders.json', order)
        // close the modal and spinner
        .then(response => {
            this.setState({loading: false});
        })
        .catch(response => {
            this.setState({loading: false});
        });
    } 

    render () {
        let form = (
            <form>
                <input type="text" name="name" placeholder="Enter Name" required />
                <input type="text" name="email" placeholder="Enter Email" required />
                <input type="text" name="street" placeholder="Street Name" required />
                <input type="text" name="postal" placeholder="Postal Code" required />
                <input type="tel" name="phone" placeholder="Phone number required" maxLength="10" required />
                <Button btnType="Success" clicked={this.purchaseContinuedHandler}>Order</Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner />;
        }
        return (
            // return form
            <div className={classes.ContactData}>
                <h4>Complete your order details</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;