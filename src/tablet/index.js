import React from "react"
import BarChart from "Components/barChart"
import { tablet } from "./../static-data"

const Tablet = () => {
  return (
    <div className="chart">
      <BarChart
        labels={tablet.labels}
        values={tablet.values}
        xLabel="DATE (YYYY-MM-DD)"
        yLabel="SOLD OUT (NO. )"
        tooltipText="TABLET"
      />
    </div>
  )
}

export default Tablet
