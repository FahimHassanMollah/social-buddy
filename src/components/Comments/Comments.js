import React, { useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}));

const Comments = (props) => {
    let { name, email, body } = props.comments;
    // console.log(props.personImage);
    const classes = useStyles();
    return (
        <div>
            <Card variant="outlined">
                <CardHeader
                    avatar={
                        <Avatar alt="Remy Sharp" src={props.personImage && props.personImage.picture.large} className={classes.large} />
                    }
                    title={name}
                    subheader={email}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {body}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
};

export default Comments;