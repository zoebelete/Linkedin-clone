import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import "./Sidebar.css";
function Sidebar() {
  const user = useSelector(selectUser);
  const recentItem = (topic) => (
    <div className="sidebar_recentItem">
      <span className="sidebar_hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR45kuwTKmF_ele-wsgcl-xG6DzGfAb2j-DMMb-3NojjHRKExaZPjDe51olYXrVigA_6dc&usqp=CAU"
          alt=""
        />
        <Avatar
          // src={user.photoURL}
          className="sidebar_avatar"
        >
          {/* {user.email[0]} */}
          {/* use the first letter of the email as avatar  */}
        </Avatar>
        <h2>{/* {user.displayName} */}</h2>
        <h4>{/* {user.email} */}</h4>
      </div>
      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>who viewed you</p>
          <p className="sidebar_statNumber">54647</p>
        </div>
        <div className="sidebar_stat">
          <p>views on post</p>
          <p className="sidebar_statNumber">655847</p>
        </div>
      </div>

      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItem("react.js")}
        {recentItem("programming")}
        {recentItem("softwareengineering")}
        {recentItem("design")}
        {recentItem("developer")}
      </div>
    </div>
  );
}

export default Sidebar;
