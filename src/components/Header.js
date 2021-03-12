import React from 'react';
import classes from './Header.module.css'
import {NavHashLink} from 'react-router-hash-link'
import Container from './Container'
const Header = () => {
    
    const navItems = ['AboutUs', 'Services', 'Projects', 'Contacts', 'Materials']

    return (
        <Container>
                <div className ={classes.Header}>
            <div className={classes.logo}><h1>Logo</h1></div>
            <div className={classes.NavItems}>
                {navItems.map(item => {
                    return (<NavHashLink 
                        style = {{textDecoration:'none'}}
                        smooth
                        to ={`#${item}`}>
                            {item}
                            </NavHashLink>);
                })}
            </div>
            {/* <div className={classes.contactNumber}>
                <span>+998XXXXXXXXX</span>
                <span>+998XXXXXXXXX</span>
                 
            </div> */}
        </div>
    
        </Container>
    );
}

export default Header;
