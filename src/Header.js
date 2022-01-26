import React from 'react';
import "./Header.css";
import HeaderOption from "./HeaderOption";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
function Header() {
    return( 
        <div className="header">
            
            <div className="header__left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="" />
            
            <div className="header__search">
                <SearchIcon/>
                <input placeholder="Search" type="text" />
            </div>
            </div>
            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home"/>
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
                <HeaderOption Icon={ChatIcon} title="Messaging"/>
                <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
                <HeaderOption avatar= "https://media.istockphoto.com/photos/portrait-teenager-picture-id846730696?k=20&m=846730696&s=612x612&w=0&h=dV17mFeCvF99EhhE49rVYlxcH9er2Ik3kr-axd1c0A8=" title="me"/>
            </div>
        </div>
    )
}

export default Header;
