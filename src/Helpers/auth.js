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

  signup(email, password, name) {
    let promise = this.sdk.auth.register(
      email,
      password,
      "http://localhost:3000/success",
      "http://localhost:3000/",
      "http://localhost:3000/failure"
    );

    return promise.then(
      function(response) {
        console.log(response)
        return response;
      },
      function(error) {
        console.log(error);
        return error;
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
