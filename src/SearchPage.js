import React from 'react';
import './SearchPage.css';
import TuneIcon from '@material-ui/icons/Tune';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

function SearchPage() {
    return (
        <div className='searchpage'>
            <div className="searchpage__filter">
                <TuneIcon  />
                <h6>FILTER</h6>                
            </div> 
            <hr/>   

            <ChannelRow 
            image='https://yt3.ggpht.com/ytc/AAUvwnirKKnFkPbW7BtDX4R8LVdHnFgcKZx1ZwbOlwgBkw=s176-c-k-c0x00ffffff-no-rj'
            channel='Jovian'
            verified
            subs='6.91K'
            noOfVideos={99}
            description='Your cloud platform for hands-on learning. - Watch live hands-on video tutorials - Build real-world data science & ML projects ...'
            /> 

            <hr/> 
            <VideoRow title='Binary Search, Linked Lists and Complexity | Data Structures and Algorithms in Python (1/6)
            '
            views='1.7K'
            timestamp='1 hours ago'
            description='Looking to ace your next big coding interview? Check out this beginner-friendly lecture on Binary Search, Linked Lists and Complexity...'           channel='Jovian'
            channelImage='https://yt3.ggpht.com/ytc/AAUvwnirKKnFkPbW7BtDX4R8LVdHnFgcKZx1ZwbOlwgBkw=s68-c-k-c0x00ffffff-no-rj'
            image='https://i.ytimg.com/vi/Jh4t9o2y_pw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLArk1o1dg-khq9QHkjMy7htrEQtKw'/>  
            <VideoRow
            title='Starting a Career in Data Science and Machine Learning in 2021? Here are 10 tips & advices to follow'
            views='6.9K'
            timestamp='7 months ago'
            channelImage='https://yt3.ggpht.com/ytc/AAUvwnirKKnFkPbW7BtDX4R8LVdHnFgcKZx1ZwbOlwgBkw=s68-c-k-c0x00ffffff-no-rj'
            channel='Jovian'
            image='https://i.ytimg.com/vi/wi2FiyCoT8M/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCuGZ9UHBPCYp_p74KjJCo0KC571Q'
            description='Looking to build a career in Data Science but confused about where to start? There is no shortage of data science courses, tutorials, and learning materials available online ... '
            />
            <VideoRow
            title='Deep Learning with PyTorch: Zero to GANs Introduction'
            views='4.3K'
            timestamp='11 months ago'
            channelImage='https://yt3.ggpht.com/ytc/AAUvwnirKKnFkPbW7BtDX4R8LVdHnFgcKZx1ZwbOlwgBkw=s68-c-k-c0x00ffffff-no-rj'
            channel='Jovian'
            image='https://i.ytimg.com/an_webp/zEtukWs_B2I/mqdefault_6s.webp?du=3000&sqp=CJ6u2YAG&rs=AOn4CLC3czebJJZBiY5yiM3asw_sn-iByA'
            description='"Deep Learning with PyTorch: Zero to GANs" is a beginner-friendly online course offering a practical and coding-focused introduction to deep learning using the PyTorch framework. Enroll now to start learning.'
            />
            <VideoRow
            title='Python Fundamentals for Beginners (Hindi) | Data Analysis with Python | Free Certification Course'
            views='11K'
            timestamp='5 months ago'
            channelImage='https://yt3.ggpht.com/ytc/AAUvwnirKKnFkPbW7BtDX4R8LVdHnFgcKZx1ZwbOlwgBkw=s68-c-k-c0x00ffffff-no-rj'
            channel='Jovian'
            image='https://i.ytimg.com/an_webp/jESyKxRZD3A/mqdefault_6s.webp?du=3000&sqp=CODk2YAG&rs=AOn4CLD1dcEkkfFXtKS4gDr6Ndx0qif0ow'
            description='Python Fundamentals and basic applications in Hindi. This course has focused on simplifying the fundamentals of Python to a beginner level with detailed explanations to the programming concepts...'
            />
            <VideoRow
            title='Zero to Pandas Course is a stepping stone for Machine Learning'
            views='550'
            timestamp='3 months ago'
            channelImage='https://yt3.ggpht.com/ytc/AAUvwnirKKnFkPbW7BtDX4R8LVdHnFgcKZx1ZwbOlwgBkw=s68-c-k-c0x00ffffff-no-rj'
            channel='Jovian'
            image='https://i.ytimg.com/an_webp/cNwQ8_7MqgE/mqdefault_6s.webp?du=3000&sqp=CKvd2YAG&rs=AOn4CLAagf60dInkiAXAIX7gX_aIcA5TpA'
            description='Konstantinos Alvertos, Computer Network Engineer at National & Ph.D. student at the Kapodistrian University of Athens based in Greece recently took jovian.ai is Data Analysis with Python Course(zerotopandas.com).'
            />

            

        </div>
    )
}

export default SearchPage;
