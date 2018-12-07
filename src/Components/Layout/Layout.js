import React, { Component } from 'react';
import classes from './Layout.css'

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className={classes.Layout}>
                <main>
                    {this.props.children}

                </main>
            </div>
         );
    }
}
 
export default Layout;