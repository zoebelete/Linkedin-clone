import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HeaderOption from "./HeaderOption";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import HomeIcon from "@material-ui/icons/Home";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useDispatch } from "react-redux";
import { auth } from "./firebase";
import { logout } from "./features/userSlice";

function Header() {
  const dispatch = useDispatch();

  const logoutApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className="header">
      <div className="header_left">
        <img
          src="https://cdn.icon-icons.com/icons2/2201/PNG/512/linkedin_logo_square_icon_134016.png"
          alt=""
        />

        <div className="header_search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>

      <div className="header_right">
        <HeaderOption Icon={HomeIcon} title="home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notificatication" />
        <HeaderOption avatar={true} title="me" onClick={logoutApp} />
      </div>
    </div>
  );
}

export default Header;
