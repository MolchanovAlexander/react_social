import './topbar.css'
import { Search, Person, Chat, Notifications } from "@mui/icons-material"
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

export default function Topbar() {
    const { user } = useContext(AuthContext)
    return (
        <div className='topbarContainer' >
            <div className="topbarLeft">
                <Link to="/" style={{ textDecoration: "none" }}><span className="logo">SalatSocial</span></Link>
            </div>
            <div className="topbarCenter">
                <div className="searchBar">
                    <Search className='searchIcon' />
                    <input className='searchInput' placeholder='Search for friends, post of video' />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications />
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <Link to={`/profile/${user.username}`}>
                    <img
                        src={user.profilePicture || "/assets/person/noAvatar.png"}
                        alt="" className="topbarImg" />
                </Link>

            </div>


        </div>
    );
}