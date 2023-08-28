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
            setPosts(res.data.sort((p1, p2) => {
                if (p1.createdAt < p2.createdAt) return 1;
                if (p1.createdAt > p2.createdAt) return -1;
                return 0;
            }));
        }

        fetchPosts()
    }, [username, user._id])
    
    return (
        <div className='feedContainer' >
            <div className="feedWrapper">
                {username === user.username && <Share />  }
                {posts.map(p => {
                    return <Post key={p._id} post={p} />
                })}


            </div>


        </div>
    );
}