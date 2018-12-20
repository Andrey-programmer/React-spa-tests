import React, { Component } from 'react';
import classes from './Drawer.css'
import {NavLink} from 'react-router-dom'
import Backdrop from '../../UI/Backdrop/Backdrop'


class Drawer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    closeBackDrop = () => {
        this.props.onClose()
    }

    renderLinks(links) {
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

        const links = [
            {to: '/', label: 'Список', exact: true},
        ]

        if (this.props.isAuthenticated) {
            links.push({to: '/test-creator', label: 'Создать тест', exact: false})
            links.push({to: '/logout', label: 'Выйти', exact: false})
        } else {
            links.push({to: '/auth', label: 'Авторизация', exact: false})
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
                            this.renderLinks(links)
                        }
                    </ul>
                </nav>
            </React.Fragment>
            
        )
    }
}
 
export default Drawer;