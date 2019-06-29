import React from "react"
import BarChart from "Components/barChart"
import { tablet } from "./../static-data"

const Tablet = () => {
  return (
    <BarChart
      labels={tablet.labels}
      values={tablet.values}
      xLabel="TIME DURATION (YYYY-MM-DD)"
      yLabel="SOLD OUT (NO. )"
      tooltipText="TABLET"
    />
  )
}

export default Tablet