import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import './User.css';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const User = (props) => {
    const classes = useStyles();
    const userId = props.userId;
    const [user, setUser] = useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data));
    },[userId]);
    // console.log(user.name);
    return (
            <div className={classes.root}>
                <div>
                <Avatar className='user-ava' alt={user.name} src=""></Avatar>
                </div>
                <div >
                  <h3>{user.name}</h3>
                  <p>{user.email}</p>
                </div>
            </div>

    );
};

export default User;