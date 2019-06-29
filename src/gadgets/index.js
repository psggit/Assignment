import React from "react"
import PieChart from "Components/pieChart"
import { gadgets } from "./../static-data"

const Gadgets = () => {
  return (
    <div className="chart">
      <PieChart
        labels={gadgets.labels}
        values={gadgets.values}
      />
    </div>
  )
}

export default Gadgets