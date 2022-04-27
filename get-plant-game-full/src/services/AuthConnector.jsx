const baseUrl = "http://localhost:5000/api/v1/"

export default class AuthConnector {
  static async login (loginParams) {
    const res = await fetch(`${baseUrl}/login`, {
          method: 'POST',
          headers: headers(),
          body: JSON.stringify(loginParams)
      })
      return await res.json()
  }

  static async currentAdmin () {
    const res = await fetch(`${baseUrl}/currentAdmin`, {
          headers: headers()
      })
      return await res.json()
  }
}

function headers () {
  return {
    'content-type': 'application/json',
    'accept': 'application/json',
    'Authorization': localStorage.getItem('jwt')
  }
}