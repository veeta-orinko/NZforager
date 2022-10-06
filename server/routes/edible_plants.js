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

router.post('/', (req, res) => {
  const plant = req.body
  console.log('route', req.body)
  db.post_plant(plant)
    .then((ids) => {
      return db.get_plant(ids[0])
    })
    .then((plant) => {
      res.json({
        plant_name: plant.plant_name,
        other_names: plant.other_names,
        edible_parts: plant.edible_parts,
        image_url: plant.image_url,
        description: plant.description,
        tags: plant.tags,
      })
    })
  // .catch((err) => {
  //   console.error(err)
  //   res.status(500).json({ message: 'Something went wrong' })
  // })
})

module.exports = router
