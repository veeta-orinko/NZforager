exports.up = function (knex) {
  return knex.schema.createTable('edible_plants', (table) => {
    table.increments('id').primary()
    table.string('plant_name')
    table.string('other_names')
    table.string('edible_parts')
    table.string('image_url')
    table.string('description')
    table.string('tags')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('edible_plants')
}
