import React from "react"
import Button from "./../button"

class Filter extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.props.applyFilter}>
          <div>
            <label>From</label>
            <input
              type="date"
              required
              pattern="\d{1,2}/\d{1,2}/\d{4}"
              name="fromDate"
              value={this.props ? this.props.fromDate : ""}
              onChange={(e) => this.props.handleDateChange(e)}
            />
          </div>
          <div>
            <label>To</label>
            <input
              type="date"
              name="toDate"
              pattern="\d{1,2}/\d{1,2}/\d{4}"
              required
              value={this.props ? this.props.toDate : ""}
              onChange={(e) => this.props.handleDateChange(e)}
            />
          </div>
          <Button>Filter</Button>
        </form>
        <Button handleClick={this.props.resetFilter}>Reset</Button>
      </React.Fragment>
    )
  }
}

export default Filter