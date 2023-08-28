import './rightbar.css'
import { Users } from "../../dummyData.js"
import Online from '../online/Online';
import { PF } from '../../apiCalls';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { Add, Remove } from '@mui/icons-material';

export default function Rightbar({ user }) {
    const { user: currentUser } = useContext(AuthContext)
    const [friends, setFriends] = useState([])
    const [followed, setFollowed] = useState(false)
    useEffect(()=>{
        setFollowed(currentUser.followings.includes(user?._id))
    })
    useEffect(() => {
        const getFriends = async () => {
            if (user._id) {
                try {
                    const friendList = await axios.get("/users/friends/" + user._id)
                    setFriends(friendList.data)
                } catch (err) {
                    console.log(err);
                }
            }
            return;
        }
        getFriends();
    }, [user._id])
    const handleClick =async()=>{
        try{
            followed ? await axios.put("/users/"+ user._id +"/follow") : await axios.put("/users/"+ user._id +"/unfollow")
        }catch(err){
            console.log(err);
        }
    }
    const HomeRightbar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img src={`${PF}/gift.png`} alt="" className="birthdayImg" />
                    <span className="birthdayText">
                        <b> Guf RIP</b> and <b>3 other friends</b>  have a birthday today.</span>
                </div>
                <img src={`${PF}/ad.png`} alt="" className="rightbarAds" />
                <h4 className="rightbarTitle">Oline Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map(u => (
                        <Online key={u.id} user={u} />
                    ))}
                </ul>
            </>
        )
    }
    const ProfileRightbar = () => {
        return (
            <>
                {user.username !== currentUser.username && (
                    <button className="rightbarFollowButton" onClick={handleClick}>
                       {followed ? "Unfollow" : "Follow"}
                       {followed ? <Remove /> : <Add />}
                        
                        </button>
                )}
                <h4 className="userInformationTitle">info title</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City:</span>
                        <span className="rightbarInfoValue">{user.city}</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From:</span>
                        <span className="rightbarInfoValue">{user.from}</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship:</span>
                        <span className="rightbarInfoValue">{user.relationship === 1 ? "Single" : user.relationship === 2 ? "Married" : "Empty"}</span>
                    </div>
                </div>
                <h4 className="userInformationTitle">user followings</h4>
                <div className="rightbarFollowings">
                    {friends.map(friend => {
                        return (<Link key={friend._id}
                            to={"/profile/" + friend.username}
                            style={{ textDecoration: "none" }}
                        >
                            <div className="rightbarFollowing">
                                <img
                                    src={friend.profilePicture || PF + "/person/noAvatar.png"}
                                    alt=""
                                    className="rightbarFollowingImg"
                                />
                                <span className="rightbarFollowingName">{friend.username}</span>
                            </div>
                        </Link>)

                    })}


                </div>


            </>
        )
    }
    return (
        <div className='rightbarContainer' >
            <div className="rightbarWrapper">
                {user ? <ProfileRightbar /> : <HomeRightbar />}
            </div>
        </div>
    );
}