import React, { Component } from 'react';

import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar'
import Sidedrawer from '../Navigation/Sidedrawer/Sidedrawer';

class Layout extends Component {

    state = {
        showSidedrawer: false
    }

    sidedrawerOpenHandler = () => {
        this.setState({showSidedrawer: true});
    }

    sidedrawerClosedHandler = () => {
        this.setState({showSidedrawer: false});
    }

    render () {
        return (
            <div>
                <Toolbar openSidedrawer={this.sidedrawerOpenHandler} />
                <Sidedrawer show={this.state.showSidedrawer} backdropClosed={this.sidedrawerClosedHandler} />
                <main className={classes.Content}>{this.props.children}</main>
            </div>
        );
    }
}

export default Layout;