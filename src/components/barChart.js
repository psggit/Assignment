import React from "react"
import { Bar } from "react-chartjs-2"

class BarGraph extends React.Component {
  constructor() {
    super()
  }

  render() {
    const data = {
      labels: this.props.labels,
      datasets: [
        {
          fill: false,
          label: this.props.tooltipText,
          data: this.props.values,
          borderColor: 'rgba(75, 192, 192, 0.4)',
          backgroundColor: 'rgba(75, 192, 192, 1)',
          pointRadius: 0,
          pointHoverRadius: 5,
          pointHoverBorderWidth: 2,
          pointHoverBorderColor: "#473793",
          pointHoverBackgroundColor: "#fff",
          lineTension: 0
        }
      ]
    };

    const options = {
      tooltips: {
        displayColors: false,
        backgroundColor: "#fff",
        bodyFontColor: "#000",
        titleFontColor: "#5a6872",
        yPadding: 5,
        xPadding: 15,
        mode: 'index',
        intersect: false
      },
      hover: {
        mode: 'index',
        intersect: false
      },
      legend: {
        display: true
      },
      responsive: true,
      maintainAspectRatio: true,
      scales: {
        yAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: this.props.yLabel,
              fontSize: 10
            }
          }
        ],
        xAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: this.props.xLabel,
              fontSize: 10
            }
          }
        ]
      }
    }
    return (
      <div style={{ height: '400px', maxHeight: '400px' }}>
        <Bar ref="chart" data={data} options={options} height={0} />
      </div>
    )
  }
}

export default BarGraph