import React, { Component } from 'react'
import classes from './Layout.css'
import MenuToggle from '../../compionents/Navigation/MenuToggle/MenuToggle'

class Layout extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            menu: false
        }
    }

    toggleMenu = () => {
        this.setState({
            menu: !this.state.menu
        })
    }


    render() { 
        return ( 
            <div className={classes.Layout}>
                <MenuToggle
                     onToggle={this.toggleMenu}
                     isOpen={this.state.menu}
                />
                <main>
                    {this.props.children}

                </main>
            </div>
         );
    }
}
 
export default Layout;