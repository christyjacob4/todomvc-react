import Cookies from "js-cookie";

class Auth {
  constructor(sdk) {
    this.sdk = sdk;

    let promise = this.sdk.account.get();
    this.authenticated = promise.then(
      function(response) {
        return true;
      },
      function(error) {
        return false;
      }
    );
  }

  signup(name, email, password) {
    let promise = sdk.auth.register(
      email,
      password,
      "http://localhost:3000?success=1",
      "http://localhost:3000/",
      "http://localhost:3000?failure=1"
    );

    promise.then(
      function(response) {
        console.log(response)
      },
      function(error) {
        console.log(error);
      }
    );
  }

  login(callback) {
    this.authenticated = true;
    // callback();
  }

  logout(callback) {
    this.authenticated = false;
    // callback();
  }

  isAuthenticated() {
    return this.authenticated;
  }
}

export default Auth;
