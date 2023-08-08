import './topbar.css'
import { Search } from "@mui/icons-material"
export default function Topbar() {
  return (
    <div className='topbarContainer' >
      <div className="topbarleft">
        <span className="logo">LamaSocial</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search />
          <input className='searchInput' placeholder='Search for friends, post of video' />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
            <span className="topbarLink">Homepage</span>
            <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          
        </div>
      </div>


    </div>
  );
}