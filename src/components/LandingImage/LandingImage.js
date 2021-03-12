import React from 'react';
import classes from './LandingImage.module.css'
import Container from '../Container'
const LandingImage = () => {
    return (
    <Container>
        <div className = {classes.LandingImage}>
            <div className={classes.content}>
                <div className={classes.text}>
                    <h1> Some text to hook customers and let us know what they want...</h1>
                </div>
                <div className={classes.button}>
                    <button> Lets Start!</button>
                </div>
            </div>
            <div className={classes.image}>
                <img src="https://constructionequipment.com/sites/ce/files/styles/list/public/Bomag-BW-219-single-drum-compactor.gif?itok=OCoy1s-B" alt=""/>
            </div>
        </div>

        </Container>
            );
}

export default LandingImage;
