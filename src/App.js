import React, { useState, useEffect } from 'react';
import './App.css';
import Follower from './components/Follower';
import NoMutualFollowers from './components/NoMutualFollowers';
import InputField from './components/InputField';
import HeadingText from './components/headingText';

const App = () => {
    const [username1, setUsername1] = useState('');
    const [username2, setUsername2] = useState('');
    const [followersOfUser1, setFollowersOfUser1] = useState([]);
    const [followersOfUser2, setFollowersOfUser2] = useState([]);
    const [mutualFollowers, setMutualFollowers] = useState([]);

    /*
      Fetches the followers data when both usernames are entered 
    */
    useEffect(() => {
        const fetchData = async () => {
            const response1 = await fetch(`https://api.github.com/users/${username1}/followers`);
            const data1 = await response1.json();
            setFollowersOfUser1(data1);

            const response2 = await fetch(`https://api.github.com/users/${username2}/followers`);
            const data2 = await response2.json();
            setFollowersOfUser2(data2);
        };

        if (username1 && username2) {
            fetchData();
        }
    }, [username1, username2]);

    /*
      Finds the mutual followers when the followers data is available
    */
    useEffect(() => {
        const getMutualFollowers = () => {
            const mutual = [];
            followersOfUser1.forEach((follower1) => {
                followersOfUser2.forEach((follower2) => {
                    if (follower1.login === follower2.login) {
                        mutual.push(follower1);
                    }
                });
            });
            setMutualFollowers(mutual);
        };
        if (followersOfUser1.length > 0 && followersOfUser2.length > 0) {
            getMutualFollowers();
        }
    }, [followersOfUser1, followersOfUser2]);

    return (
        <div className='container'>
            <HeadingText headingText='Github Mutual Followers' />

            <div className='textFieldContainer'>
                <InputField
                    testId='user1'
                    placeholder='Enter GitHub UserName1'
                    value={username1}
                    onChange={(e) => setUsername1(e.target.value)}
                />

                <InputField
                    testId='user2'
                    placeholder='Enter GitHub UserName2'
                    value={username2}
                    onChange={(e) => setUsername2(e.target.value)}
                />
            </div>

            <div className='resultContainer'>
                {mutualFollowers.length > 0 ? (
                    mutualFollowers.map((follower) => <Follower follower={follower} />)
                ) : (
                    <NoMutualFollowers textMessage='No mutual followers' />
                )}
            </div>
        </div>
    );
};

export default App;
