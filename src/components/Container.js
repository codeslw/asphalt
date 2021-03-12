import React from 'react';

const Container = (props) => {
    return (
        <div style = {
            {
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                padding: '10px'

            }
        }>
            {props.children}
        </div>
    );
}

export default Container;
