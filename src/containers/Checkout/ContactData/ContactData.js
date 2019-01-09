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
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Enter Email'
                },
                value: '',
                validation: {
                    required: true,
                    email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i
                },
                valid: false,
                touched: false
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Enter street name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            postalCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Enter Postal Code'
                },
                value: '',
                validation: {
                    required: true,
                    length: 6
                },
                valid: false,
                touched: false
            },
            phone: {
                elementType: 'input',
                elementConfig: {
                    type: 'tel',
                    placeholder: 'Enter your phone number'
                },
                value: '',
                validation: {
                    required: true,
                    length: 10
                },
                valid: false,
                touched: false
            },
            deliverMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'select', displayValue: '-- select delivery method --', disabled: true},
                        {value: 'fastest', displayValue: 'Fastest'},
                        {value: 'cheapest', displayValue: 'Cheapest'}
                    ]
                },
                value: 'select',
                validation: {},
                valid: false
            }
        },
        loading: false,
        formValid: false
    }

    checkValidity(value, rules) {
        let isValid = true;

        if (rules.required) {
            isValid = value !== null && value.trim() !== '' && isValid;
        }
        if (rules.email) {
            isValid = rules.email.test(value);
        }
        if (rules.length) {
            isValid = value.length === rules.length && isValid;
        }
        return isValid;
    }

    purchaseContinuedHandler = (event) => {
        // since inside form
        event.preventDefault();
        console.log(this.props.ingredients);
        this.setState({loading: true});
        let formData = {};
        for (let identifier in this.state.orderForm) {
            formData[identifier] = this.state.orderForm[identifier].value;
        }
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,
            formData: formData
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
        // update the value
        // event.target.value
        let orderForm = {
            ...this.state.orderForm
        };
        let properties = {
            ...orderForm[identifier]
        };
        properties.value = event.target.value;
        properties.valid = this.checkValidity(properties.value, properties.validation);
        properties.touched = true;
        orderForm[identifier] = properties;
        // check form validation
        let formValid = true;
        for (let inputIdentifier in orderForm) {
            formValid = formValid && orderForm[inputIdentifier].valid;
        }
        this.setState({orderForm: orderForm, formValid: formValid});
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
            <form onSubmit={this.purchaseContinuedHandler}>
                {inputElements.map(element => {
                    return <Input 
                        elementtype={element.config.elementType}
                        key={element.id}
                        elementconfig={element.config.elementConfig}
                        value={element.config.value}
                        touched={element.config.touched}
                        isValid={element.config.valid}
                        changed={(event) => this.inputChangedHandler(event, element.id)} />
                })}
                <Button btnType="Success" disabled={!this.state.formValid}>Order</Button>
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