import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import './CommentUser.css';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

const CommentUser = (props) => {
    const classes = useStyles();
    const id = props.userId;
    const [user,setUser] =useState([]);
    const [valueAdded,setValueAdded] = useState(false);
    useEffect(()=>{
        const url ='https://randomuser.me/api/';
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setUser(data);
            setValueAdded(true);
        });
    },[id]);
    let name,userEmail,picture;
    if(valueAdded){
    const {title,first,last} = user.results[0].name;
    const {medium} =user.results[0].picture;
    const {email} = user.results[0];
    name =title+" "+first+" "+last;
    userEmail = email;
    picture = medium;
    }
   // console.log(name);
    //console.log(userEmail);
    //console.log(picture);
    return (
        <div className={classes.root}>
                <div>
                <Avatar className='user-ava' alt={name} src={picture}></Avatar>
                </div>
                <div className="comment-user-name" >
                  <h5>{name}</h5>
                  <p><small>{userEmail}</small></p>
                </div>
            </div>
    );
};

export default CommentUser;