import { Avatar } from '@material-ui/core'
import React from 'react';
import './VideoRow.css';

function VideoRow({image, title, channel, channelImage, views, timestamp, description}) {
    return (
        <div className='videorow'>
            <img src={image} alt="thumbnail"/>  
            <div className="videorow__info">
                <h5>{title}</h5>
                <p>{views} • {timestamp}</p>    
                <div className="videorow__infoChannel">
                    <Avatar className='videorow__channelIcon' src={channelImage}  alt={channel}/> 
                    <p> {channel} </p>
                </div>
                <p>{description}</p>
            </div> 
        </div>
    )
}

export default VideoRow
