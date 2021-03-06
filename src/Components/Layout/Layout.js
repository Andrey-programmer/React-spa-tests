import React, { Component } from 'react'
import classes from './Layout.css'
import MenuToggle from '../../compionents/Navigation/MenuToggle/MenuToggle'
import Drawer from '../../compionents/Navigation/Drawer/Drawer'
import { connect } from 'react-redux';

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

    menuClose = () => {
        this.setState({
            menu: false
        })
    }


    render() { 
        return ( 
            <div className={classes.Layout}>
                <Drawer
                    isOpen={this.state.menu}
                    onClose={this.menuClose}
                    isAuthenticated={this.props.isAuthenticated}
                />
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

function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.auth.token
    }
}
 
export default connect(mapStateToProps)(Layout);