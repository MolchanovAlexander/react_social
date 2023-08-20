import './rightbar.css'
import { Users } from "../../dummyData.js"
import Online from '../online/Online';

export default function Rightbar({ user }) {
    const HomeRightbar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img src="/assets/gift.png" alt="" className="birthdayImg" />
                    <span className="birthdayText">
                        <b> Guf RIP</b> and <b>3 other friends</b>  have a birthday today.</span>
                </div>
                <img src="/assets/ad.png" alt="" className="rightbarAds" />
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
                        <span className="rightbarInfoValue">{user.relationship === 1 ? "Single" : user.relationship === 2 ? "Married" : "Empty" }</span>
                    </div>
                </div>
                <h4 className="userInformationTitle">user followings</h4>
                <div className="rightbarFollowings">
                    <div className="rightbarFollowing">
                        <img src="/assets/person/9.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Liam Nison</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="/assets/person/10.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Liam Nison</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="/assets/person/7.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Liam Nison</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="/assets/person/5.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Liam Nison</span>
                    </div>
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