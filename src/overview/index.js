import React from "react"
import "./overview.scss"
import Mobile from "./../mobile"
import Tablet from "./../tablet"
import Gadgets from "./../gadgets"

class Overview extends React.Component {

  constructor() {
    super()

    this.state = {
      activeTab: "mobile"
    }
    this.setActiveTab = this.setActiveTab.bind(this)
  }

  /**
   * Used to highlight the active tab
   * @param {String} activeTabName - Indicates the active tab name
   */
  setActiveTab(activeTab) {
    this.setState({ activeTab })
  }

  render() {
    const { activeTab } = this.state
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
        {
          activeTab === "mobile" &&
          <Mobile
            history={this.props.history}
          />
        }
        {
          activeTab === "tablet" &&
          <Tablet />
        }
        {
          activeTab === "gadgets" &&
          <Gadgets />
        }
      </div>
    )
  }
}

export default Overview