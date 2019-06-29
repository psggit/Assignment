import React from "react"
import PieChart from "Components/pieChart"
import { gadgets } from "./../static-data"

const Gadgets = () => {
  return (
    <PieChart
      labels={gadgets.labels}
      values={gadgets.values}
    />
  )
}

export default Gadgets