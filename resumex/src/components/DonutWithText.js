import React from 'react';
import {Doughnut, Chart} from 'react-chartjs-2';
import "./DonutWithText.css";

var originalDoughnutDraw = Chart.controllers.doughnut.prototype.draw;
Chart.helpers.extend(Chart.controllers.doughnut.prototype, {
  draw: function() {
    originalDoughnutDraw.apply(this, arguments);
    
    var chart = this.chart;
    var width = chart.chart.width,
        height = chart.chart.height,
        ctx = chart.chart.ctx;

    var fontSize = (height / 114).toFixed(2);
    ctx.font = fontSize + "em sans-serif";
    ctx.fillStyle = "white";
    ctx.textBaseline = "middle";

    //Showing the matched value (just one of the label's value)
    var sum = chart.config.data.datasets[0].data[0];

    
    var text = sum + '%',
        textX = Math.round((width - ctx.measureText(text).width) / 2),
        textY = height / 2;

    ctx.fillText(text, textX, textY);
  }
});

//Hiding legends on hover
Chart.defaults.global.legend.display = false;Chart.defaults.global.tooltips.enabled = false;






export default function DonutWithText(props) {
  
  const loadColor = (num) => {
    if(num >= 80) {
      return "#32CD32";
    } else if (num < 80 && num > 50) {
      return 'orange';
    } else {
      return 'red';
    }
  }
  
  const options = {
  
    legend: {
      display: false,
      onHover: false
    },
    responsive: true,
    maintainAspectRatio: true,
    cutoutPercentage: 70


  }


const data = {
	labels: [
		'Match',
		'No Match',
	],
	datasets: [{
		data: [`${props.match}`, `${props.unmatch}`],
		backgroundColor: [
		`${loadColor(`${props.match}`)}`,
		'#d3d3d3'
    
    ],
    borderWidth: 0
		
	}]
};


  
  return (
      <div className="match_rate_container">
        <h3>Match Rate</h3>
        <Doughnut data={data} options={options} />
      </div>
    );

}




