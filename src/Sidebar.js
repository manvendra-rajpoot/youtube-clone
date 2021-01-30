import React from 'react';
import SidebarRow from './SidebarRow';
import './Sidebar.css';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import WhatshotRoundedIcon from '@material-ui/icons/WhatshotRounded';
import SubscriptionsRoundedIcon from '@material-ui/icons/SubscriptionsRounded';
import VideoLibraryRoundedIcon from '@material-ui/icons/VideoLibraryRounded';
import HistoryRoundedIcon from '@material-ui/icons/HistoryRounded';
import PlayCircleOutlineRoundedIcon from '@material-ui/icons/PlayCircleOutlineRounded';
import WatchLaterRoundedIcon from '@material-ui/icons/WatchLaterRounded';
import ThumbUpRoundedIcon from '@material-ui/icons/ThumbUpRounded';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import FlagRoundedIcon from '@material-ui/icons/FlagRounded';
import HelpRoundedIcon from '@material-ui/icons/HelpRounded';
import FeedbackRoundedIcon from '@material-ui/icons/FeedbackRounded';



function Sidebar() {
    return (
        <div className='sidebar'>
            
            <SidebarRow selected Icon={HomeRoundedIcon} title='Home'/>
            <SidebarRow Icon={WhatshotRoundedIcon} title='Trending'/>
            <SidebarRow Icon={SubscriptionsRoundedIcon} title='Subscriptions'/>
            <hr/>

            <SidebarRow Icon={VideoLibraryRoundedIcon} title='Library'/>
            <SidebarRow Icon={HistoryRoundedIcon} title='History'/>
            <SidebarRow Icon={PlayCircleOutlineRoundedIcon} title='Your videos'/>
            <SidebarRow Icon={WatchLaterRoundedIcon} title='Watch later'/>
            <SidebarRow Icon={ThumbUpRoundedIcon} title='Liked videos'/>
            <SidebarRow Icon={ExpandMoreRoundedIcon} title='Show more'/>
            <hr/>

            <SidebarRow Icon={SettingsRoundedIcon} title='Setting'/>
            <SidebarRow Icon={FlagRoundedIcon} title='Report history'/>
            <SidebarRow Icon={HelpRoundedIcon} title='Help'/>
            <SidebarRow Icon={FeedbackRoundedIcon} title='Send feedback'/>
            <hr/>
            
        </div>
    )
}

export default Sidebar;
