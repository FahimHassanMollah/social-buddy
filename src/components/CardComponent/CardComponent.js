import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { Box } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    color: {
        backgroundColor: 'red'
    }
});

const CardComponent = (props) => {
    let { id, title, body } = props.post;
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    return (
        <div>
            <Card className={classes.root} style={{ textAlign: 'center' }} >
                <CardContent>
                    {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {id}
                    </Typography> */}
                    <Typography variant="h5" component="h2" color="textSecondary" >
                        {title}
                    </Typography>
                    <br />
                    {/* <Typography className={classes.pos} color="textSecondary">
                        adjective
                    </Typography> */}
                    <Typography variant="body2" component="p">
                        {body}
                        <br />
                        {'"a benevolent smile"'}
                    </Typography>
                </CardContent>
                {
                   props.readMoreBtn? <CardActions>
                   <Box mx='auto' clone>
                       <Link to={`/post/details/${id}`}> <Button variant="contained" color="primary">
                           Read more </Button>
                       </Link>
                   </Box>

               </CardActions>:""
                }
               
            </Card>
        </div>
    );
};

export default CardComponent;