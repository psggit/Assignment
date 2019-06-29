import React from "react"
import "./header.scss"
import Icon from "./../icons"

class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: localStorage.getItem("token") ? true : false,
      name: localStorage.getItem("name") ? localStorage.getItem("name") : ""
    }
  }

  /**
   * handleLogout - clears the localStorage
   */
  handleLogout() {
    localStorage.clear()
    location.href = "/login"
  }

  render() {
    const { isLoggedIn, name } = this.state
    return (
      <div id="header">
        {
          isLoggedIn &&
          <div>
            <p>{name}</p>
            <span onClick={this.handleLogout}>
              <Icon name="logout" />
            </span>
          </div>
        }
      </div>
    )
  }
}

export default Header 