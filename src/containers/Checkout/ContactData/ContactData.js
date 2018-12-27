import React, { Component } from 'react';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            postCode: '',
            street: ''
        },
        phone: ''
    }

    render () {
        return (
            // return form
            <div>
                <h4>Complete your order details</h4>
            </div>
        );
    }
}

export default ContactData;