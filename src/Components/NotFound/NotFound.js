import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import './NotFound.css';
const NotFound = () => {
    return (
        <div className="not-found">
            <h1 className="digit">4<FavoriteIcon id="love-icon"/>4</h1>
            <h1>Sorry, page is not Found</h1>
        </div>
    );
};

export default NotFound;