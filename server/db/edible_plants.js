const connection = require('./connection')

// returns all the data
function get_plants(db = connection) {
  return db('edible_plants').select()
}

function get_plant(id, db = connection) {
  return db('edible_plants').select().where('id', id)
}

function post_plant(plant, db = connection) {
  return db('edible_plants').insert({
    plant_name: plant.plant_name,
    other_names: plant.other_names,
    edible_parts: plant.edible_parts,
    image_url: plant.image_url,
    description: plant.description,
    tags: plant.tags,
  })
}

module.exports = {
  get_plant,
  get_plants,
  post_plant,
}
