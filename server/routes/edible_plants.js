const express = require('express')
const router = express.Router()
const db = require('../db/edible_plants')

// routing the images + descriptions to the main page

router.get('/', (req, res) => {
  db.get_plants()
    .then((plants) => {
      res.json(plants)
    })

    .catch((err) => {
      console.error(err.message)
      res.status(500).send('Server error')
    })
})

module.exports = router
