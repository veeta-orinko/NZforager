import request from 'superagent'

export function get_plants() {
  return request
    .get('/api/v1/plants')
    .send()
    .then((res) => {
      return res.body
    })
    .catch((error) => {
      console.error('error message goes here', error.message)
    })
}
export function post_plant(plant) {
  return request
    .post('/api/v1/plants')
    .send(plant)
    .then((res) => {
      return res.body
    })
    .catch((error) => {
      console.error('error message goes here', error.message)
    })
}
