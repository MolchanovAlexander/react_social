import './share.css'
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material"

export default function Share() {
    return (
        <div className='shareContainer' >
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src="/assets/person/1.jpg" alt="" className="shareProfileImg" />
                    <input placeholder="What's in your mind?" className="shareInput" />
                </div>
                <hr className='shareHr' />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia htmlColor='tomato' className='shareIcon' />
                            <span className="shareOptionText">photo of video </span>
                        </div>
                        <div className="shareOption">
                            <Label htmlColor='lightblue' className='shareIcon' />
                            <span className="shareOptionText">Tag </span>
                        </div>
                        <div className="shareOption">
                            <Room htmlColor='orange' className='shareIcon' />
                            <span className="shareOptionText">Location </span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions htmlColor='goldenrod' className='shareIcon' />
                            <span className="shareOptionText">Feelings </span>
                        </div>

                    </div>
                    <button className='shareButton'>Share</button>
                </div>
            </div>


        </div>
    );
}