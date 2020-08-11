import axios from 'axios';

class FetchApi {
  static baseEndPoint() {
    return "http://localhost:7000/"
  }

  static headers() {
    return {
        "Content-Type": 'application/json',
        Accept: 'application/json',
    } 
  }

  static get(url) {
    const config = {
      headers:  this.headers()
    }
    return axios.get(`${this.baseEndPoint()}${url}`, config)
  }

  static post(url, data) {
    return axios.post(`${this.baseEndPoint()}${url}`, data)
  }
}

export default FetchApi