import { useContext, useRef, useState } from 'react';
import './share.css'
import { PermMedia, Label, Room, EmojiEmotions, Cancel } from "@mui/icons-material"
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
import { PF } from "../../apiCalls"

export default function Share() {
    const { user } = useContext(AuthContext)

    const desc = useRef()
    const [file, setFile] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            userId: user._id,
            desc: desc.current.value
        }
        if (file) {
            const data = new FormData();
            const fileName = Date.now() + file.name;
            data.append("name", fileName);
            data.append("file", file);
            newPost.img = PF +"/"+ fileName;
            console.log(newPost);
            try {
                await axios.post("/upload", data);
            } catch (err) { }
        }
        try {
            await axios.post("/posts", newPost);
            window.location.reload();
        } catch (err) { }
    }

    //
    return (
        <div className='shareContainer' >
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src={user.profilePicture || PF + "/person/noAvatar.png"} alt="" className="shareProfileImg" />
                    <input
                        placeholder={"What's in your mind " + user.username + " ?"}
                        className="shareInput"
                        ref={desc}
                    />
                </div>
                <hr className='shareHr' />
                {file && <div className='shareImgContainer'>
                    <img src={URL.createObjectURL(file)} alt="" className="shareImg" />
                    <Cancel className='shareCancelImg' onClick={()=>setFile(null)}/>
                    </div>}
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
                    <button className='shareButton' type='submit'>Share</button>
                </form>
            </div>


        </div>
    );
}