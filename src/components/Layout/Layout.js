import React from 'react';

import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar'
import Sidedrawer from '../Navigation/Sidedrawer/Sidedrawer';

const layout = ( props ) => (
    <div>
        <Toolbar/>
        <Sidedrawer />
        <main className={classes.Content}>
            {props.children}
        </main>
    </div>
);

export default layout;