import React, {useState} from 'react';
import './Header.css';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import VideoCallRoundedIcon from '@material-ui/icons/VideoCallRounded';
import AppsRoundedIcon from '@material-ui/icons/AppsRounded';
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';

function Header() {
    const [inputSearch,setInputSearch] = useState('');

    return (
        <div className='header'>
            
            <div className="header__left">
            <MenuRoundedIcon className='header__menu header__icon' />
            <Link to='/'>
            <img className='header__logo'
            src='https://havecamerawilltravel.com/photographer/files/2020/01/youtube-logo-new.jpg' alt='yt' /> 
            </Link> 
            </div>

            <div className='header__search'>
            <input type="text" placeholder='Search'
            value={inputSearch} onChange={e => setInputSearch(e.target.value)} /> 
            <Link to={`/search/${inputSearch}`}>
            <SearchRoundedIcon className='header__searchButton' />
            </Link>
            
            </div>

            <div className="header__icons">
            <VideoCallRoundedIcon className='header__icon' />
            <AppsRoundedIcon className='header__icon' />
            <NotificationsRoundedIcon className='header__icon' />
            <Avatar src='https://avatars.githubusercontent.com/u/53949277?s=460&u=cff91b5655d56f505402273e6fa79928f28a8148&v=4'
            alt='Manvendra Rajpoot' />
            </div>

        </div>
    )
}

export default Header;
