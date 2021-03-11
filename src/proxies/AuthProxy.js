import Proxy from './Proxy';

class AuthProxy extends Proxy {
  /**
   * The constructor for the ArtistProxy.
   *
   * @param {Object} parameters The query parameters.
   */
  constructor(parameters = {}) {
    super('auth/admin', parameters);
  }

  /**
   * Method used to login.
   */
  login(data = {}) {
    return this.submit('post', `${this.endpoint}/login`, data);
  }

  /**
   * Method used to register the user.
   */
  register(data = {}) {
    return this.submit('post', `${this.endpoint}/register`, data);
  }
}

export default AuthProxy;
