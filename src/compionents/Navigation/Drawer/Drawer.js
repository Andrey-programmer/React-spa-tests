import React, { Component } from 'react';
import classes from './Drawer.css'
import {NavLink} from 'react-router-dom'
import Backdrop from '../../UI/Backdrop/Backdrop'

const links = [
    {to: '/', label: 'Список', exact: true},
    {to: '/auth', label: 'Авторизация', exact: false},
    {to: '/test-creator', label: 'Создать тест', exact: false},
]

class Drawer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    closeBackDrop = () => {
        this.props.onClose()
    }

    renderLinks() {
        return links.map((link, index) => {
            return (
                <li 
                    key={index}    
                >
                    <NavLink 
                        to={link.to} 
                        exact={link.exact}
                        activeClassName={classes.active}
                        onClick={this.closeBackDrop}
                    >
                        {link.label}
                    </NavLink>
                </li>
            )
        })
    }

    onClick

    render() { 
        
        const classDrawer = [
            classes.Drawer
        ]

        if (!this.props.isOpen) {
            classDrawer.push(classes.close)
        }

        return ( 
            <React.Fragment>
                {
                    this.props.isOpen 
                        ? <Backdrop 
                                onClick={this.props.onClose}
                           /> 
                        : null
                }

                <nav className={classDrawer.join(' ')}>
                    <ul>
                        {
                            this.renderLinks()
                        }
                    </ul>
                </nav>
            </React.Fragment>
            
        )
    }
}
 
export default Drawer;