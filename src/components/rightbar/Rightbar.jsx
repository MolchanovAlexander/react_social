import './rightbar.css'
import { Users } from "../../dummyData.js"
import Online from '../online/Online';

export default function Rightbar() {
    return (
        <div className='rightbarContainer' >
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img src="/assets/gift.png" alt="" className="birthdayImg" />
                    <span className="birthdayText">
                        <b> Guf RIP</b> and <b>3 other friends</b>  have a birthday today.</span>
                </div>
                <img src="/assets/ad.png" alt="" className="rightbarAds" />
                <h4 className="rightbarTitle">Oline Friends</h4>
                <ul className="rightbarFriendList">
                  {Users.map(u=>(
                    <Online key={u.id} user={u} />
                  ))}
                </ul>
            </div>
        </div>
    );
}