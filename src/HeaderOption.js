import { Avatar } from "@material-ui/core";
import React from "react";
import "./HeaderOption.css";
import onClick from "./Header";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function HeaderOption({ avatar, Icon, title }) {
  const user = useSelector(selectUser);

  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && (
        <Avatar className="headerOption__icon">{user?.email[0]}</Avatar>
      )}
      <h3 className="headerOption_title">{title}</h3>
    </div>
  );
}
export default HeaderOption;
