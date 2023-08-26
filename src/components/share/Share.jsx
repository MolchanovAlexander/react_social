import { useContext, useRef, useState } from 'react';
import './share.css'
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material"
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';

export default function Share() {
    const { user } = useContext(AuthContext)
    const desc = useRef()
    const [file, setFile] = useState(null)

    const handleSubmit=async (e)=>{
        e.preventDefault();
        const newPost = {
            userId: user._id,
            desc: desc.current.value
        }
        try{
           await axios.post("/posts",newPost)
        }catch(err){

        }
    }
    return (
        <div className='shareContainer' >
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src={user.profilePicture || "/assets/person/noAvatar.png"} alt="" className="shareProfileImg" />
                    <input
                        placeholder={"What's in your mind " + user.username + " ?"}
                        className="shareInput"
                        ref={desc}
                    />
                </div>
                <hr className='shareHr' />
                <form className="shareBottom" onSubmit={handleSubmit}>
                    <div className="shareOptions">
                        <label htmlFor="file" className="shareOption">
                            <PermMedia htmlColor='tomato' className='shareIcon' />
                            <span className="shareOptionText">photo of video </span>
                            <input
                                style={{ display: "none" }}
                                type="file"
                                 name="file"
                                id='file'
                                accept='.png,.jpg,.jpeg'
                                onChange={(e) => setFile(e.target.files[0])}
                            //right now only 1 file 
                            />
                        </label>
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
                    <button className='shareButton'type='submit'>Share</button>
                </form>
            </div>


        </div>
    );
}