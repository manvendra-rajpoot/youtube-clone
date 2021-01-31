import { Avatar } from '@material-ui/core';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import React from 'react';
import './ChannelRow.css';


function ChannelRow({image, channel, verified, subs, noOfVideos, description}) {
    return (
        <div className='channelrow'>
            <Avatar className='channelrow__logo' src={image} alt={channel} />
            <div className="channelrow__info">
                <div className="channelrow__infoTitle">
                    <h4>{channel}</h4>
                    {verified && <CheckCircleOutlineIcon />}
                </div>
                <p>{subs} subscribers • {noOfVideos} videos</p>
                <p>{description}</p>
            </div>

            
        </div>
    )
}

export default ChannelRow
