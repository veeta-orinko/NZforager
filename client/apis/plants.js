import request from 'superagent'

export function get_plants() {
  return request
    .get('/')
    .send()
    .then((res) => {
      return res.body
    })
    .catch((error) => {
      console.error('error message goes here', error.message)
    })
}
