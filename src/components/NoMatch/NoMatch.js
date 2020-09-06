import React from 'react';

import { Alert, AlertTitle } from '@material-ui/lab';
import { Container, Grid, Box } from '@material-ui/core';

const NoMatch = () => {

    return (
        <div>
            <Container>
                <Grid
                    container
                    direction="column"
                    justify="flex-end"
                    alignItems="center"
                >

                    <Box mx="auto" pt={20} bgcolor="">
                        <Alert severity="error">
                            <AlertTitle>Error</AlertTitle>
                            <strong>  HTTP 404 / 404 Not Found / 404 Error or Server Not Found</strong>
                        </Alert>
                    </Box>


                </Grid>

            </Container>


        </div>
    );
};

export default NoMatch;