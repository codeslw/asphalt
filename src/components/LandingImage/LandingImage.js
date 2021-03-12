import React from 'react';
import classes from './LandingImage.module.css'
import Container from '../Container'
const LandingImage = () => {
    return (
    <Container>
        <div className = {classes.LandingImage}>
            <div className={classes.content}>
                <div className={classes.text}>
                    <h1> Some text to hook customers</h1>
                </div>
                <div className={classes.button}>
                    <button> Lets Start!</button>
                </div>
            </div>
            <div className={classes.image}>
                
            </div>
        </div>

        </Container>
            );
}

export default LandingImage;
