import React from "react"
import { Pie } from "react-chartjs-2"

class PieChart extends React.Component {
  constructor() {
    super()
  }

  render() {
    const data = {
      labels: this.props.labels,
      datasets: [
        {
          data: this.props.values,
          borderColor: ['#5FCFCF', '#EB5E81', '#36A2EB'],
          backgroundColor: ['#5FCFCF', '#EB5E81', '#36A2EB'],
        }
      ]
    };

    const options = {
      tooltips: {
        displayColors: false,
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
    }
    return (
      <div style={{ height: '400px', maxHeight: '400px' }}>
        <Pie ref="chart" data={data} options={options} height={0} />
      </div>
    )
  }
}

export default PieChart