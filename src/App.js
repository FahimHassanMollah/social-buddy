import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './components/NoMatch/NoMatch';
import PostShow from './components/PostShow/PostShow';
import PostDetails from './components/PostDetails/PostDetails';


function App() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/')
    .then((response) =>response.json())
    .then((data)=>setPost(data))
    .catch((err) => {
      
    });
   
  }, [])
  return (
    <div className="">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <PostShow postArray={post}></PostShow>
          </Route>
          <Route path="/allPost">
            <PostShow postArray={post}></PostShow>
          </Route>
          <Route path="/post/details/:id">
            <PostDetails></PostDetails>
          </Route>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>

        </Switch>

      </Router>
    </div>
  );
}

export default App;
