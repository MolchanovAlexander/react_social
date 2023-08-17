import { useEffect, useState } from 'react';
import Post from '../post/Post';
import Share from '../share/Share';
import './feed.css'
import axios from 'axios'


export default function Feed() {
    const [posts, setPosts] = useState([])

    useEffect(() => {

        const fetchPosts = async () => {
            const res = await axios.get("posts/timeline/64ce880aba36c0bdbbc9ff89");
            setPosts(res.data);
        }

        fetchPosts()
    }, [])

    return (
        <div className='feedContainer' >
            <div className="feedWrapper">
                <Share />
                {posts.map(p => {
                   return <Post key={p.id} post={p} />
                })}


            </div>


        </div>
    );
}