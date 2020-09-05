import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';
const Header = () => {
    return (
        <div>
            <AppBar position="static">
           <Container>
           <Toolbar>
               
                    <Button href="/allPost" color="inherit">
                        All post
                    </Button>
                    {/* <Button color="inherit">Login</Button> */}
                </Toolbar>
           </Container>
            </AppBar>
        </div>
    );
};

export default Header;