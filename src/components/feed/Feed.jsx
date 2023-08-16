import Post from '../post/Post';
import Share from '../share/Share';
import './feed.css'
import { Posts } from "../../dummyData.js"

export default function Feed() {
    return (
        <div className='feedContainer' >
            <div className="feedWrapper">
                <Share />
                {Posts.map(p => {
                   return <Post key={p.id} post={p} />
                })}


            </div>


        </div>
    );
}