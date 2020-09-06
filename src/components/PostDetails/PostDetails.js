import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CardComponent from '../CardComponent/CardComponent';
import { Container, Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import Comments from '../Comments/Comments';

const PostDetails = () => {
    let { id } = useParams();
    const [singlePost, setSinglePost] = useState({});
    const [comments, setcomments] = useState([]);
    const [personImage, setPersonImage] = useState([])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response) => response.json())
            .then((data) => setSinglePost(data))
            .catch((err) => console.log(err));

    }, [])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
            .then((response) => response.json())
            .then((data) => setcomments(data))
            .catch((err) => console.log(err));

    }, [])
   
    useEffect(() => {
        fetch(`https://randomuser.me/api/?results=5`)
            .then((response) => response.json())
            .then((data) => setPersonImage(data.results))
            .catch((err) => console.log(err));
    }, [id])
    return (
        <div>

            <Container >
                <Box px={10}>
                    <h3 style={{ textAlign: 'center', backgroundColor: '#3f51b5', fontSize: '20px', padding: '20px', color: 'white' }}> Post details</h3>
                    <CardComponent readMoreBtn={false} post={singlePost}></CardComponent>
                </Box>
            </Container>
            <Container>
            <Box component="div" p={4} >
            <h3 style={{ textAlign: 'center', backgroundColor: '#3f51b5', fontSize: '20px', padding: '20px', color: 'white' }}> Comments details</h3>
                    <Grid container spacing={2}>
                        
                        {
                        //   console.log(comments)
                         
                          comments.map((comments,index) => <Grid item xs={12} lg={6} sm={6}><Comments key={comments.id} personImage={personImage[index]} comments={comments}></Comments></Grid>)
                        }
                        
                    </Grid>
                </Box>
            </Container>
        </div>
    );
};

export default PostDetails;