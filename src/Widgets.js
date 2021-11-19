import React from "react";
import "./Wedgets.css";
import { InfoIcon } from "@material-ui/icons/Info";
import { FiberManualRecordIcon } from "@material-ui/icons/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => {
    <div className="widgets_article">
      <div className="widget_articleleft">
        <FiberManualRecordIcon />
      </div>
      <div className="widget_articleright"></div>
    </div>;
  };

  return (
    <div className="widgets">
      <div className="widget__header">
        <h2>Linkedin News</h2>
        <InfoIcon />
      </div>
      {newsArticle}
    </div>
  );
}

export default Widgets;
