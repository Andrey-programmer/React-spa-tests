import React, { Component } from 'react';
import classes from './Drawer.css'

const links = [
    1, 2, 3
]

class Drawer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    renderLinks() {
        return links.map((link, index) => {
            return (
                <li 
                    key={index}    
                >
                    <a href="http://Google.com">
                        Link {link}
                    </a>
                </li>
            )
        })
    }

    render() { 
        
        const classDrawer = [
            classes.Drawer
        ]

        if (!this.props.isOpen) {
            classDrawer.push(classes.close)
        }

        return ( 
            <nav className={classDrawer.join(' ')}>
                <ul>
                    {
                        this.renderLinks()
                    }
                </ul>
            </nav>
        )
    }
}
 
export default Drawer;