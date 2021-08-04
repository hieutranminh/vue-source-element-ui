import Proxy from './Proxy'

class DummyProxy extends Proxy {
  getOptions () {
    return this.submit('get', 'https://jsonplaceholder.typicode.com/users')
  }
}

export default DummyProxy
