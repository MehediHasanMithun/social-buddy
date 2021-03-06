import React from 'react';
import CommentUser from '../CommentUser/CommentUser';
import './Comment.css';

const Comment = (props) => {
    const {id,body} = props.comment;
    return (
        <div className="post">
            <CommentUser userId={id}></CommentUser>
            <p className="body">{body}</p>
        </div>
    );
};

export default Comment;