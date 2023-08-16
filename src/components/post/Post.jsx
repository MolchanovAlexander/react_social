import './post.css'
import { MoreVert } from "@mui/icons-material"
import { Users } from "../../dummyData.js"

export default function Post({post}) {

    return (
        <div className='postContainer' >
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className='postProfileImg' src={Users.filter(u=>u.id===post.userId)[0].profilePicture} alt="" />
                        <span className="postUserName">{Users.filter(u=>u.id===post.userId)[0].username}</span>
                        <span className="postDate">{post.date}</span>
                        <MoreVert/>
                    </div>
                    <div className="postTopRight"></div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img src={post.photo} alt="" className="postImg" />

                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="/assets/like.png" alt="" className="likeIcon" />
                        <img src="/assets/heart.png" alt="" className="likeIcon" />
                        <span className="postLikeCounter">{post.like} like it</span>
                    </div>
                    <div className="postBottomRight">
                    <span className="postCommentText">{post.comment} comments</span>
                    </div>
                </div>

            </div>


        </div>
    );
}