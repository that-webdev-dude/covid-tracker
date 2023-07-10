import "./Card.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbtack } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Chart from "./Chart";

const Card = ({ item, bookmark, onPin, onUnpin, onClose }) => {
  return (
    <div className="card">
      <div className="header">
        <div className="title">
          <img className="title-thumb" src={item.img} alt="country flag" />
          <div className="title-text">{item.name}</div>
        </div>
        <div className="controls">
          {bookmark ? (
            <button
              className="btn "
              onClick={(e) => {
                e.preventDefault();
                onUnpin(item.id);
              }}
            >
              <FontAwesomeIcon icon={faThumbtack} />
            </button>
          ) : (
            <button
              className="btn "
              onClick={(e) => {
                e.preventDefault();
                onPin(item.id);
              }}
            >
              <FontAwesomeIcon icon={faThumbtack} className="unselected" />
            </button>
          )}

          <button
            className="btn"
            onClick={(e) => {
              e.preventDefault();
              onClose(item.id);
            }}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
      </div>

      <div className="info">
        <div className="app-info">
          <div className="title">
            <small>Cases</small>
          </div>
          <div className="value">
            <span>{item.totalCases}</span>
          </div>
          <div className="extra">
            <small>Today: {item.todayCases}</small>
          </div>
        </div>
        <div className="app-info">
          <div className="title">
            <small>Deaths</small>
          </div>
          <div className="value">
            <span>{item.totalDeaths}</span>
          </div>
          <div className="extra">
            <small>Today: {item.todayDeaths}</small>
          </div>
        </div>
      </div>
      <div className="graph">
        <div className="chart-container">
          <Chart
            className="chart"
            xAxis={item.history.date}
            series1={item.history.cases}
            series2={item.history.deaths}
          />
        </div>
      </div>

      <small className="last-update">Last Update: {item.lastUpdate}</small>
    </div>
  );
};

export default Card;
