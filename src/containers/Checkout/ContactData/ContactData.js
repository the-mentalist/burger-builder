import React, { Component } from 'react';

import classes from './ContactData.css';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Button from '../../../components/UI/Button/Button';
import axios from '../../../axios-orders';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Enter Name'
                },
                value: ''
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Enter Email'
                },
                value: ''
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Enter street name'
                },
                value: ''
            },
            postalCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Enter Postal Code'
                },
                value: ''
            },
            phone: {
                elementType: 'input',
                elementConfig: {
                    type: 'tel',
                    placeholder: 'Enter your phone number'
                },
                value: ''
            },
            deliverMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'fastest', displayValue: 'Fastest'},
                        {value: 'cheapest', displayValue: 'Cheapest'}
                    ]
                },
                value: ''
            }
        },
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
            this.props.history.push('/');
        })
        .catch(response => {
            this.setState({loading: false});
        });
    }

    inputChangedHandler = (event, identifier) => {
        
    }

    render () {
        // create arr for orderForm object
        let inputElements = [];
        for (let key in this.state.orderForm) {
            inputElements.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }
        let form = (
            <form>
                {inputElements.map(element => {
                    return <Input 
                        elementtype={element.config.elementType}
                        key={element.id}
                        elementconfig={element.config.elementConfig}
                        value={element.config.value}
                        changed={(event) => this.inputChangedHandler(event, element.id)} />
                })}
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