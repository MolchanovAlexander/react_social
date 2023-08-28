import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import './home.css'
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';


export default function Home() {
const user = useContext(AuthContext)
    return (
        <>
            <Topbar />
            <div className="homeContainer">
                <Sidebar />
                <Feed username={null}/>
                <Rightbar user={user}/>
            </div>
            
        </>



    );
}

