import React from "react";
import "./HeaderOption.css";
import { Avatar } from "@material-ui/core";
import { selectUser } from "./Features/userSlice";
import { useSelector } from "react-redux";

function HeaderOption({ avatar, Icon, title , onClick }) {
  const user = useSelector(selectUser);
  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && (
      <Avatar className="headeroption__icon"  > {user?.email[0]} </Avatar>)}
      <h3 className="headeroption__title"> {title}</h3>
    </div>
  );
}

export default HeaderOption;
