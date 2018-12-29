import React, { Component } from 'react';

import Order from '../../components/Order/Order';
import classes from './Orders.css';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {
    state = {
        orders: [],
        loading: false
    }

    componentDidMount () {
        axios.get('/orders.json')
        .then(response => {
            console.log(response);
            const orders = [];
            // creating orders list, response.data is object with unique keys
            for (let key in response.data) {
                orders.push({
                    ...response.data[key],
                    id: key
                });
            }
            this.setState({orders: orders, loading: false});
        })
        .catch(error => {
            this.setState({loading: false});
        });
    }

    render () {
        let orders = this.state.orders.map(order => {
            return <Order key={order.id} ingredients={order.ingredients} price={order.price}/>
        });
        return (
            <div className={classes.Orders}>
                {orders}
            </div>
        );
    }
}

export default withErrorHandler(Orders, axios);