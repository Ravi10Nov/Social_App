import "./navBar.scss";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="left">
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <span>Social App</span>
                </Link>
                <HomeOutlinedIcon />
                <DarkModeOutlinedIcon />
                <AppsOutlinedIcon />
                <div className="search">
                    <SearchOutlinedIcon />
                    <input type="text" placeholder="Search..." />
                </div>
            </div>
            <div className="right">
                <PersonOutlineOutlinedIcon />
                <MailOutlineOutlinedIcon />
                <NotificationsNoneOutlinedIcon />
                <div className="user">
                    <img src='https://images.pexels.com/photos/5935227/pexels-photo-5935227.jpeg?auto=compress&cs=tinysrgb&w=600' />
                    <span>Ravi Kant</span>
                </div>
            </div>
        </div>
    )
};

export default NavBar;