import React, { Component } from 'react';

import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar'
import Sidedrawer from '../Navigation/Sidedrawer/Sidedrawer';
import Background from '../../assets/images/burger-srtips.jpg';

class Layout extends Component {

    state = {
        showSidedrawer: false
    }

    sidedrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { showSidedrawer: !prevState.showSidedrawer };
        });
    }

    sidedrawerClosedHandler = () => {
        this.setState({showSidedrawer: false});
    }

    render () {
    let style = {
      backgroundImage: `url(${Background})`
    }
        return (
            <div style={style}>
                <Toolbar toggleSidedrawer={this.sidedrawerToggleHandler} />
                <Sidedrawer show={this.state.showSidedrawer} backdropClosed={this.sidedrawerClosedHandler} />
                <main className={classes.Content}>{this.props.children}</main>
            </div>
        );
    }
}

export default Layout;