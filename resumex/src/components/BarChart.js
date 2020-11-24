import React from "react";
import { ProgressBar } from "react-bootstrap";
import "./BarChart.css";

export default function BarChart(props) {
  const score = props.score;

  const loadColor = (num) => {
    if (num >= 80) {
      return "success";
    } else if (num < 80 && num > 50) {
      return "warning";
    } else {
      return "danger";
    }
  };

  const loadIcon = (num) => {
    if (num >= 80) {
      return "✅";
    } else if (num < 80 && num > 50) {
      return "⚠️";
    } else {
      return "❌";
    }
  };
  

  return (
    <>
      <style type="text/css">
        {`
      .progress {
        height: 30px;
        font-size: 1em;
        width: 100%;
      }
     `}
      </style>

      <div className="bar_container">
        <div className="icon">
          {loadIcon(score)}
        </div>
        <ProgressBar
          now={score}
          variant={loadColor(score)}
          label={`${score}%`}
        />
      </div>
    </>
  );
}



