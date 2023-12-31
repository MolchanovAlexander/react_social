import './post.css'
import { MoreVert } from "@mui/icons-material"
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { format } from 'timeago.js';
import { Link } from "react-router-dom"
import { AuthContext } from '../../context/AuthContext';
import { PF } from "../../apiCalls"

export default function Post({ post }) {
    const [like, setLike] = useState(post.likes.length)
    const [isLiked, setIsLiked] = useState(false)
    const [user, setUser] = useState({})
    
    const { user: currentUser } = useContext(AuthContext)
    useEffect(() => {
        setIsLiked(post.likes.includes(currentUser._id))
        
    }, [post.likes,currentUser._id])

    useEffect(() => {

        const fetchUser = async () => {
            const res = await axios.get(`/users?userId=${post.userId}`);
            setUser(res.data);
        }

        fetchUser()
    }, [post.userId])

    const likeHandler = async() => {
        try {
           await axios.put("/posts/" + post._id + "/like", {userId: currentUser._id})
        } catch (err) {

        }
        setLike(isLiked ? like - 1 : like + 1)
        setIsLiked(!isLiked)
    }
    return (
        <div className='postContainer' >
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <Link to={`/profile/${user.username}`}>
                            <img
                                className='postProfileImg'
                                src={user.profilePicture || PF + "/person/noAvatar.png"}
                                alt="" />
                        </Link>

                        <span className="postUserName">{user.username}</span>
                        <span className="postDate">{format(post.updatedAt)}</span>
                        <MoreVert />
                    </div>
                    <div className="postTopRight"></div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img src={post.img} alt="" className="postImg" />

                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="http://localhost:8800/uploads/like.png" alt="" className="likeIcon" onClick={likeHandler} />
                        <img src="http://localhost:8800/uploads/heart.png" alt="" className="likeIcon" onClick={likeHandler} />
                        <span className="postLikeCounter">{like} like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>
                </div>

            </div>


        </div>
    );
}