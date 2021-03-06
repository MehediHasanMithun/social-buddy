import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import User from '../User/User';
import './PostDetails.css';
import CommentIcon from '@material-ui/icons/Comment';
import Comment from '../Comment/Comment';
const PostDetails = () => {
    const { id } = useParams();
    //console.log("Id",id);
    const [post, setPost] = useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPost(data));
    }, [id]);
    const { userId, body, title } = post;
    //console.log(post);
    const [comments,setComments] = useState([]);
    useEffect(()=>{
        const url=`https://jsonplaceholder.typicode.com/comments?postId=${id}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setComments(data));
    },[id]);
    console.log(comments);
    return (
        <div>
            <div className="post">
                <User userId={userId}></User>
                <p className="title">{title}</p>
                <p className="body">{body}</p>
                <br/>
                <div className="comment">
                    <CommentIcon className="icon" />
                    <h3>Comments</h3>
                </div>
            </div>
            <div>
                {
                    comments.map(comment=><Comment comment={comment} key={comment.id}></Comment>)
                }
            </div>
        </div>
        
    );
};

export default PostDetails;