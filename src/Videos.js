import React from 'react';
import VideoCard from './VideoCard';
import './Videos.css';

function Videos() {
    return (
        <div className='videos'>
            <h3>Recommanded</h3>
            <div className="videos__cards">
            <VideoCard 
            title='30 Courses Giveaway on My Birthday 🎂 Ask me Anything (LIVE QnA) 🎙'
            views='5.7K'
            timestamp='17 hours ago'
            channelImage='https://yt3.ggpht.com/ytc/AAUvwnhpLAOxx0GesrqkAMyNs3Fd3ZULf8yfNc8nTmMp=s68-c-k-c0x00ffffff-no-rj'
            channel='Code For Cause'
            image='https://i.ytimg.com/an_webp/U2TT2NniPXw/mqdefault_6s.webp?du=3000&sqp=CJzA1IAG&rs=AOn4CLA93FvVWXgmJ7PXGDrICHdHohTYWA'
            />
            <VideoCard 
            title='Binary Search, Linked Lists and Complexity | Data Structures and Algorithms in Python (1/6)
            '
            views='1.7K'
            timestamp='1 hours ago'
            channelImage='https://yt3.ggpht.com/ytc/AAUvwnirKKnFkPbW7BtDX4R8LVdHnFgcKZx1ZwbOlwgBkw=s68-c-k-c0x00ffffff-no-rj'
            channel='Jovian'
            image='https://i.ytimg.com/vi/Jh4t9o2y_pw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLArk1o1dg-khq9QHkjMy7htrEQtKw'
            />
            <VideoCard 
            title='Elizabeth Olsen Explains The Origins Of Wanda Maximoff aka The Scarlet Witch
            '
            views='2.9M'
            timestamp='4 years ago'
            channelImage='https://yt3.ggpht.com/ytc/AAUvwng2tTAwwFb3WBNUi9N4cev-aU8x2hk7MuY530Djdtg=s68-c-k-c0x00ffffff-no-rj'
            channel='Allure'
            image='https://i.ytimg.com/an_webp/7Z7bZOJV3v8/mqdefault_6s_480x270.webp?du=3000&sqp=CKzF1YAG&rs=AOn4CLAb-aTTmHM71Yr5KOHHTKRvKyN8uA'
            />
            <VideoCard 
            title='52 GAJ KA DAMAN | PRANJAL DAHIYA | AMAN JAJI | RENUKA PANWAR'
            views='503M'
            timestamp='3 months ago'
            channelImage='https://yt3.ggpht.com/ytc/AAUvwnjc20_kdpFx7BMVCzjqQ3qmS04DVewl-JnVf5oWWg=s68-c-k-c0x00ffffff-no-rj'
            channel='Desi Records'
            image='https://i.ytimg.com/an_webp/CZt-rVn2BJs/mqdefault_6s.webp?du=3000&sqp=COSi1YAG&rs=AOn4CLBz1gQDCjA75sk3Wp5JUlVJZoOVHA'
            />
            
            <VideoCard 
            title='Bumrah Magic in Seris Final | FULL HIGHLIGHTS'
            views='8M'
            timestamp='5 months ago'
            channelImage='https://yt3.ggpht.com/ytc/AAUvwnjhVehyUjc5A_1Bslm7T9T4Vfto9to-j1sMl1q2=s68-c-k-c0x00ffffff-no-rj'
            channel='NZC'
            image='https://i.ytimg.com/an_webp/yZ3L7wKNDFI/mqdefault_6s.webp?du=3000&sqp=CLao1YAG&rs=AOn4CLAil5rVgOqiS_EUN1Ia12ao3rb1jw'
            />
            </div>
            
        </div>
    )
}

export default Videos;
