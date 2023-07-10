import React from "react";
import Chart from "./Chart";
import "./Card.css";

const Card = ({ item, bookmark, onPin, onUnpin, onClose }) => {
  return (
    <div>
      {bookmark ? (
        <button
          onClick={(e) => {
            e.preventDefault();
            onUnpin(item.id);
          }}
        >
          unpin
        </button>
      ) : (
        <button
          onClick={(e) => {
            e.preventDefault();
            onPin(item.id);
          }}
        >
          pin
        </button>
      )}

      <button
        onClick={(e) => {
          e.preventDefault();
          onClose(item.id);
        }}
      >
        close
      </button>

      <div>{item.name}</div>
      <div>{item.totalCases}</div>
      <div>{item.totalDeaths}</div>
      <div>{item.todayCases}</div>
      <div>{item.todayDeaths}</div>
      <Chart
        xAxis={item.history.date}
        series1={item.history.cases}
        series2={item.history.deaths}
      />
    </div>
  );
};

export default Card;
