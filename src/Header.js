import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterSharpIcon from "@material-ui/icons/BusinessCenterSharp";
import MessageSharpIcon from "@material-ui/icons/MessageSharp";
import NotificationsSharpIcon from "@material-ui/icons/NotificationsSharp";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./Features/userSlice";

function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const logoutOfApp=()=>{
    dispatch(logout())
    auth.signOut();
  };
  return (
    <div className="header">
      <div className="header_left">
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
          alt=""
        />
        <div className="header_search">
          <SearchIcon />
          <input placeholder="Search" type="text"  />
        </div>
      </div>

      <div className="header_right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterSharpIcon} title="Jobs" />
        <HeaderOption Icon={MessageSharpIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsSharpIcon} title="Notifications" />
        <HeaderOption
          avatar={true}
          title = ""
          onClick={logoutOfApp}
        />
      </div>
    </div>
  );
}

export default Header;
