import React from 'react';

const Follower = ({ follower }) => {
    return (
        <a href={follower.html_url} key={follower.id} className='listItem'>
            <div className='userAvatar'>
                <img src={follower.avatar_url} alt={`Avatar for ${follower.login}`} />
            </div>
            <div className='userInfo'>{follower.login}</div>
        </a>
    );
};

export default Follower;
