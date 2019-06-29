import React from "react";
import ReactDOM from "react-dom";
import Button from "Components/button";
import GoogleLogin from "react-google-login";
import "Sass/style.scss";

const googleClientId = "244489353501-7e1i5chm6fr67h5mp9ukj3f0su7s7u12.apps.googleusercontent.com";

class Login extends React.Component {

  /**
   * googleSuccessResponse - on success login sets the token and username
   */
  googleSuccessResponse(response) {
    localStorage.setItem("token", response.accessToken)
    localStorage.setItem("name", response.profileObj.name)
    location.href = "/overview"
  }

  googleFailureResponse(response) {
    console.log("failure login", response)
  }

  render() {
    return (
      <div className="card">
        <h3>Graph overview</h3>
        <GoogleLogin
          clientId={googleClientId}
          onSuccess={this.googleSuccessResponse}
          onFailure={this.googleFailureResponse}
          render={renderProps => (
            <Button handleClick={renderProps.onClick}>
              Sign in with Google
            </Button>
          )}
        />
      </div>
    );
  }
}

export default Login
