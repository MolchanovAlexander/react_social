import Share from '../share/Share';
import './feed.css'
// import { Search, Person, Chat, Notifications} from "@mui/icons-material"

export default function Feed() {
    return (
        <div className='feedContainer' >
            <div className="feedWrapper">
                <Share />
            </div>


        </div>
    );
}