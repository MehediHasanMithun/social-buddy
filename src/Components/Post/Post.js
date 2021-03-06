import React from 'react';
import { Button } from '@material-ui/core';
import './Post.css';
import User from '../User/User';
import {Link} from 'react-router-dom';
const Post = (props) => {
    const {id,title,userId,body} = props.post;
    return (
        <div className="post">
            <User userId={userId}></User>
            <p className="title">{title}</p>
            <p className="body">{body}</p>
            <Link className="link" to={"/post/"+id}> 
            <Button id="see-more" color="primary">See more</Button>
            </Link>
        </div>
    );
};

export default Post;