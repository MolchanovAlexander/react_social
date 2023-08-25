import { useContext } from "react";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import './home.css'
import { AuthContext } from "../../context/AuthContext";


export default function Home() {
    const {user}=useContext(AuthContext)
    return (
        <>
            <Topbar authUser={user}/>
            <div className="homeContainer">
                <Sidebar />
                <Feed/>
                <Rightbar/>
            </div>
            
        </>



    );
}

