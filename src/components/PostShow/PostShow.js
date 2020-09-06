import React from 'react';
import CardComponent from '../CardComponent/CardComponent';
import { Grid, Container, Box } from '@material-ui/core'; import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const PostShow = (props) => {
    const classes = useStyles();
    // console.log(props.postArray);
    return (
        <div>
            {/* <h1>post show pageww</h1>
            <CardComponent></CardComponent> */}
            <Container>
                <Box component="div" p={4} >
                    <Grid container spacing={2}>
                        {
                            props.postArray.map((post) => <Grid item xs={6} lg={3} sm={4}><CardComponent key={post.id} readMoreBtn={true} post={post}></CardComponent></Grid>)
                        }
                    </Grid>
                </Box>
            </Container>
        </div>
    );
};

export default PostShow;