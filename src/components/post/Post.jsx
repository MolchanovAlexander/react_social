import './post.css'
import { MoreVert } from "@mui/icons-material"

export default function Post() {
    return (
        <div className='postContainer' >
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className='postProfileImg' src="/assets/person/3.jpg" alt="" />
                        <span className="postUserName">NameGuf</span>
                        <span className="postDate"> 5 minutes ago</span>
                        <MoreVert/>
                    </div>
                    <div className="postTopRight"></div>
                </div>
                <div className="postCenter">

                </div>
                <div className="postBottom">

                </div>

            </div>


        </div>
    );
}