import { Avatar } from '@material-ui/core';
import React from 'react';
import './VideoCard.css';

function VideoCard({image, title, channel, views, timestamp, channelImage}) {
    return (
        <div className='videocard'>
            <img src={image} alt="thumbnail"/>  
            <div className="videocard__info">
                <Avatar className='videocard__avatar' 
                src={channelImage}
                alt={channel} />

                <div className="videocard__text">
                    <h5>{title}</h5>
                    <p>{channel}</p>
                    <p>{views} • {timestamp}</p>
                </div>
            </div>          
        </div>
    )
}

export default VideoCard;
