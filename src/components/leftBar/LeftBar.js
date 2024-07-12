import "./leftBar.scss";
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';
import SwitchVideoOutlinedIcon from '@mui/icons-material/SwitchVideoOutlined';
import HourglassBottomOutlinedIcon from '@mui/icons-material/HourglassBottomOutlined';
import CastForEducationOutlinedIcon from '@mui/icons-material/CastForEducationOutlined';
import GolfCourseOutlinedIcon from '@mui/icons-material/GolfCourseOutlined';



const LeftBar = () => {
    return (
        <div className="leftBar">
            <div className="container">
                <div className="menu">
                    <div className="user">
                        <img src="https://images.pexels.com/photos/5935227/pexels-photo-5935227.jpeg?auto=compress&cs=tinysrgb&w=600" alt="user" />
                        <span>Ravi Kant</span>
                    </div>
                    <div className="item">
                        <GroupOutlinedIcon style={{ color: 'lightblue' }} />
                        <span>Friends</span>
                    </div>
                    <div className="item">
                        <Groups2OutlinedIcon style={{ color: 'lightgreen' }} />
                        <span>Groups</span>
                    </div>
                    <div className="item">
                        <LocalGroceryStoreOutlinedIcon style={{ color: 'lightseagreen' }} />
                        <span>MarketPlace</span>
                    </div>
                    <div className="item">
                        <WatchLaterOutlinedIcon style={{ color: 'limegreen' }} />
                        <span>Watch</span>
                    </div>
                    <div className="item">
                        <TimerOutlinedIcon style={{ color: 'lightpink' }} />
                        <span>Memories</span>
                    </div>
                </div>
                <hr />
                <div className="menu">
                    <span>Your Shortcuts</span>
                    <div className="item">
                        <EmojiEventsOutlinedIcon style={{ color: 'blue' }} />
                        <span>Events</span>
                    </div>
                    <div className="item">
                        <SportsEsportsOutlinedIcon style={{ color: 'green' }} />
                        <span>Gaming</span>
                    </div>
                    <div className="item">
                        <CollectionsOutlinedIcon style={{ color: 'lightblue' }} />
                        <span>Gallary</span>
                    </div>
                    <div className="item">
                        <SwitchVideoOutlinedIcon style={{ color: 'lightblue' }} />
                        <span>Videos</span>
                    </div>
                </div>
                <hr />
                <div className="menu">
                    <span>Others</span>
                    <div className="item">
                        <HourglassBottomOutlinedIcon style={{ color: 'Lightgary' }} />
                        <span>Fundraiser</span>
                    </div>
                    <div className="item">
                        <CastForEducationOutlinedIcon style={{ color: 'red' }} />
                        <span>Toturials</span>
                    </div>
                    <div className="item">
                        <GolfCourseOutlinedIcon style={{ color: 'purple' }} />
                        <span>Courses</span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default LeftBar;