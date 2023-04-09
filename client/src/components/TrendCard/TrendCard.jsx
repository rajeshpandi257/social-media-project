import React from "react";
import "./TrendCard.css";
import { TrendData } from "../../Data/TrendData.js";
import ShareModal from "../ShareModal/ShareModal";
// import <PostModel></PostModel>
const TrendCard = () => {
  return (
    <div className="TrendCard">
      <h3>Trends for your</h3>

      {TrendData.map((trend, id) => {
        return (
          <div className="trend" key={id}>
            <span>#{trend.name}</span>
            <span>{trend.shares}k shares</span>
          </div>
        );
      })}
      <ShareModal />
    </div>
  );
};

export default TrendCard;
