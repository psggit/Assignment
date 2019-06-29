import React from "react"
import "./overview.scss"
import LineChart from "Components/lineChart"
import BarChart from "Components/barChart"
import PieChart from "Components/pieChart"
import Button from "Components/button"
import { mobile, tablet, gadgets } from "./../static-data"

class Overview extends React.Component {

  constructor() {
    super()

    this.state = {
      activeTab: "mobile",
      fromDate: "",
      toDate: "",
      mobileData: {
        labels: [...mobile.labels],
        values: [...mobile.values]
      }
    }
    this.setActiveTab = this.setActiveTab.bind(this)
    this.resetFilter = this.resetFilter.bind(this)
    this.applyFilter = this.applyFilter.bind(this)
    this.setFilter = this.setFilter.bind(this)
    this.handleDateChange = this.handleDateChange.bind(this)
  }

  /**
   * Sets the filter on page reload
   */
  componentDidMount() {
    if (location.search.length) {
      const fromDate = location.search.split("?")[1].split("&")[0].split("=")[1]
      const toDate = location.search.split("?")[1].split("&")[1].split("=")[1]
      this.setState({
        fromDate, toDate
      }, () => this.setFilter(mobile))
    }
  }

  /**
   * Used to highlight the active tab
   * @param {String} activeTabName - Indicates the active tab name
   */
  setActiveTab(activeTab) {
    this.setState({ activeTab })
  }

  /**
   * applyFilter - sets the filtered value
   */
  applyFilter(e) {
    e.preventDefault()
    this.setFilter(this.state.mobileData)
  }

  setFilter(mobileData) {
    const { fromDate, toDate } = this.state
    const mobileDataset = mobileData.labels.map((item) => new Date(item))

    const minDate = new Date(Math.min(...mobileDataset)).getFullYear() + "-" + (parseInt(new Date(Math.min(...mobileDataset)).getMonth()) + 1) + "-" + new Date(Math.min(...mobileDataset)).getDate()
    const maxDate = new Date(Math.max(...mobileDataset)).getFullYear() + "-" + (parseInt(new Date(Math.max(...mobileDataset)).getMonth()) + 1) + "-" + new Date(Math.max(...mobileDataset)).getDate()

    //from and to date validation - filters the data within given date range
    if ((fromDate) >= (minDate) && (toDate) <= (maxDate)) {
      const filteredValues = []
      const filteredLabels = mobileData.labels.filter((item, i) => {
        if (item >= (fromDate) && item <= (toDate)) {
          filteredValues[i] = mobileData.values[i]
          return item
        }
      })
      this.setState({
        mobileData: { ...this.state.mobile, labels: filteredLabels, values: filteredValues }
      })
      this.props.history.push(`/overview?fromDate=${fromDate}&toDate=${toDate}`)
    } else {
      alert("Selected date is not valid")
    }
  }

  /**
   * resetFilter - resets the state
   */
  resetFilter() {
    this.setState({
      fromDate: "",
      toDate: "",
      mobileData: { labels: mobile.labels, values: mobile.values }
    })
    this.props.history.push(`/overview`)
  }

  /**
   * handleDateChange - sets the date
   */
  handleDateChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const { activeTab, mobileData } = this.state
    return (
      <div id="overview">
        <h2>{activeTab}</h2>
        <div className="header">
          <ul className="nav">
            <li
              onClick={() => this.setActiveTab("mobile")}
              className={`${activeTab === "mobile" ? 'active' : ''}`}
            >
              <a>Mobile</a>
            </li>
            <li
              onClick={() => this.setActiveTab("tablet")}
              className={`${activeTab === "tablet" ? 'active' : ''}`}
            >
              <a>Tablet</a>
            </li>
            <li
              onClick={() => this.setActiveTab("gadgets")}
              className={`${activeTab === "gadgets" ? 'active' : ''}`}
            >
              <a>Gadgets</a>
            </li>
          </ul>
        </div>
        <div className="chart">
          {
            activeTab === "mobile" &&
            <LineChart
              labels={mobileData.labels}
              values={mobileData.values}
              xLabel="TIME DURATION (YYYY-MM-DD)"
              yLabel="SOLD OUT (NO. )"
              tooltipText="MOBILES"
            />
          }
          {
            activeTab === "tablet" &&
            <BarChart
              labels={tablet.labels}
              values={tablet.values}
              xLabel="TIME DURATION (MM/DD/YYYY)"
              yLabel="SOLD OUT (NO. )"
              tooltipText="TABLET"
            />
          }
          {
            activeTab === "gadgets" &&
            <PieChart
              labels={gadgets.labels}
              values={gadgets.values}
            />
          }
        </div>
        {
          activeTab === "mobile" &&
          <div className="footer">
            <form onSubmit={this.applyFilter}>
              <div>
                <label>From</label>
                <input
                  type="date"
                  required
                  pattern="\d{1,2}/\d{1,2}/\d{4}"
                  name="fromDate"
                  value={this.state.fromDate}
                  onChange={(e) => this.handleDateChange(e)}
                />
              </div>
              <div>
                <label>To</label>
                <input
                  type="date"
                  name="toDate"
                  pattern="\d{1,2}/\d{1,2}/\d{4}"
                  required
                  value={this.state.toDate}
                  onChange={(e) => this.handleDateChange(e)}
                />
              </div>
              <Button handleClick={this.applyFilter}>Filter</Button>
            </form>
            <Button handleClick={this.resetFilter}>Reset</Button>

          </div>
        }
      </div>
    )
  }
}

export default Overview