import React from 'react';
import Navbar from 'react-bootstrap/Navbar'

const menu = () => {

    return (
        <div>
            <Navbar>
                <Navbar.Brand href="/">List of Items</Navbar.Brand>
                <Navbar.Toggle />
   
            </Navbar>
        </div>
    );
};

export default menu;