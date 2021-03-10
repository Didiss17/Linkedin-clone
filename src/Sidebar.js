import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./Features/userSlice";
import "./Sidebar.css";

function Sidebar() {
  const user = useSelector(selectUser);
  
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1517524285303-d6fc683dddf8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2448&q=80"
          alt=""
        />
        <Avatar src={user.photoURL} className="sidebar__avatar" > {user.email[0]} </Avatar>
  <h2>{user.displayName}</h2>
        <h4> {user.email} </h4>
        
        
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="Sidebar__statNumber">2,543</p>
        </div>
        <div className="sidebar__stat">
          <p>Viewed on post</p>
          <p className="Sidebar__statNumber">1,356</p>
        </div>
      </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("digital marketing")}
        {recentItem("taghazout")}
        {recentItem("fishing")}
      </div>
    </div>
  );
 }


export default Sidebar ;
