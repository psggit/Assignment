import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router";
import { Route } from "react-router-dom"
import { createBrowserHistory } from "history"
import Login from "./login"
import Overview from "./overview"
import Header from "Components/header"

const history = createBrowserHistory()

class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: localStorage.getItem("token") ? true : false
    }

    this.checkUserLoggedIn = this.checkUserLoggedIn.bind(this)
  }

  componentDidMount() {
    this.checkUserLoggedIn()
  }

  checkUserLoggedIn() {
    const { isLoggedIn } = this.state
    if (!isLoggedIn) {
      if (location.pathname !== "/login") {
        location.href = "/login"
      }
    } else if (isLoggedIn) {
      if (location.pathname !== "/overview") {
        location.href = "/overview"
      }
    }
  }

  render() {
    const { isLoggedIn } = this.state
    return (
      <div>
        {
          isLoggedIn &&
          <Header />
        }
        <Router history={history}>
          <Route exact path="/login" component={Login} />
          <Route exact path="/overview" component={Overview} />
        </Router>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Main />, rootElement);
