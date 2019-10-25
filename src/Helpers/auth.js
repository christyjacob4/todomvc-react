/* eslint-disable require-jsdoc */
class Auth {
  constructor(sdk) {
    this.sdk = sdk;
    this.authenticated = this.checkAuthenticated();
  }

  signup(email, password, name) {
    console.log(this.sdk);
    console.log(this.sdk.auth.register);
    this.sdk.auth.register(
        email,
        password,
        'http://localhost:3000/confirm',
        'http://localhost:3000/success',
        'http://localhost:3000/failure'
    );
  }

  login(email, password) {
    this.sdk.auth.login(
        email,
        password,
        'http://localhost:3000/success',
        'http://localhost:3000/failure'
    );
  }

  logout(callback) {
    return this.sdk.auth.logout().then(
        function(response) {
          localStorage.removeItem('auth_token');
          return response;
        },
        function(error) {
          console.log('AUTH', error);
          return error;
        }
    );
  }

  checkAuthenticated() {
    const promise = this.sdk.account.get();
    return promise.then(
        function(response) {
          localStorage.setItem('auth_token', 1);
          return response;
        },
        function(error) {
          localStorage.removeItem('auth_token');
          return null;
        }
    );
  }

  setAuthenticated(val) {
    this.authenticated = val;
  }

  getAuthenticated() {
    return this.checkAuthenticated();
  }
}

export default Auth;
