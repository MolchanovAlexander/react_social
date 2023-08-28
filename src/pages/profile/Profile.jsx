import './profile.css'
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { PF } from "../../apiCalls"
// import Online from '../online/Online';

export default function Profile() {

    const [user, setUser] = useState({})


const username = useParams().username

    useEffect(() => {

        const fetchUser = async () => {
            const res = await axios.get(`/users?username=${username}`);
            setUser(res.data);
        }

        fetchUser()
    },[username])
    
    //console.log(PF);
    return (
        <>
            <Topbar />
            <div className='profileContainer' >
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img src={user.coverPicture || PF + "/person/noCover.png"} alt="" className="profileCoverImg" />
                            <img src={user.profilePicture || PF + "/person/noAvatar.png"} alt="" className="profileUserImg" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName"> {user.username} </h4>
                            <span className="profileInfoDesc">{user.desc}</span>
                        </div>


                    </div>
                    <div className="profileRightBottom">
                        <Feed username={username}/>
                        <Rightbar user={user} />
                    </div>

                </div>
            </div>
        </>

    );
}
