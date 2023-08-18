import './profile.css'
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';

// import { Users } from "../../dummyData.js"
// import Online from '../online/Online';

export default function Profile() {
    return (
        <>
            <Topbar />
            <div className='profileContainer' >
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img src="/assets/person/3.jpg" alt="" className="profileCoverImg" />
                            <img src="/assets/person/6.jpg" alt="" className="profileUserImg" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName"> fgfg Name dfd  </h4>
                            <span className="profileInfoDesc">gufffff ripppp sdsdsdsaxcbnbn</span>
                        </div>


                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <Rightbar profile/>
                    </div>

                </div>
            </div>
        </>

    );
}
