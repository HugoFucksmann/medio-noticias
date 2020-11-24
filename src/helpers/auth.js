class Auth {
  constructor() {
    this.authenticated = false;
  }

  login(rd) {
    this.authenticated = true;
    rd();
  }

  logout(rd) {
    this.authenticated = false;
    rd();
  }

  isAuthenticated() {
    return this.authenticated;
  }
}

export default new Auth();
