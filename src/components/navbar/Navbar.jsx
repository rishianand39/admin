import "./navbar.scss"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import BedtimeOutlinedIcon from '@mui/icons-material/BedtimeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import DensityMediumOutlinedIcon from '@mui/icons-material/DensityMediumOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContest";

const Navbar = () => {
 const {dispatch}=useContext(DarkModeContext)

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search" />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon />
          </div>
          <div className="item">
            <BedtimeOutlinedIcon onClick={()=>dispatch({type:"TOGGLE"})}/>
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon />
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon />
            <div className="counter">3</div>
          </div>
          <div className="item">
            <DensityMediumOutlinedIcon />
          </div>
          <div className="item">
           <img className="avatar" src="https://placeimg.com/640/480/people" alt="profile" />

          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar