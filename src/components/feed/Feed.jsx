import { useContext, useEffect, useState } from 'react';
import Post from '../post/Post';
import Share from '../share/Share';
import './feed.css'
import axios from 'axios'
import { AuthContext } from '../../context/AuthContext';


export default function Feed({ username }) {
    console.log(username);
    const [posts, setPosts] = useState([])
    const { user } = useContext(AuthContext)

    useEffect(() => {

        const fetchPosts = async () => {
            const res = username
                ? await axios.get("/posts/profile/" + username)
                : await axios.get("posts/timeline/" + user._id);
            setPosts(res.data);
        }

        fetchPosts()
    }, [username,  user._id])
    console.log(posts);
    return (
        <div className='feedContainer' >
            <div className="feedWrapper">
                <Share />
                {posts.map(p => {
                    return <Post key={p._id} post={p} />
                })}


            </div>


        </div>
    );
}