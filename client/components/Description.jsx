import React, { useEffect } from 'react'
import { fetch_plants } from '../actions/plants'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Upload from './Upload'
/// To do: add user photo option (right & left photo arrow + thumbnails)
// Recipe database via web scraping
// tags with clickthrough button to other plants sharing these characteristics

function Description() {
  const { id } = useParams()
  // destructuring
  const dispatch = useDispatch()
  const plants = useSelector((s) => s.plants)

  useEffect(() => {
    dispatch(fetch_plants())
  }, [])

  const selectedPlant = plants.find((plant) => {
    return plant.id == id
  })
  console.log(selectedPlant)
  return (
    <>
      <section className="main">
        {
          <ul>
            <li key={selectedPlant?.plant_name}>
              <img src={selectedPlant?.image_url} alt="plant photograph" />
              <Upload />
              <p>{selectedPlant?.plant_name}</p>
              <p>Other names: {selectedPlant?.other_names}</p>
              <p>Edible parts: {selectedPlant?.edible_parts}</p>
              <p>About: {selectedPlant?.description}</p>
              <button>{selectedPlant?.tags}</button>
            </li>
          </ul>
        }
      </section>
    </>
  )
}

export default Description

// to do: add a tags route to land on a tags page,
//separate buttons for each tag, maybe selected plant .map.tags

// {plants.map((plant) => (
//   <li key={plant.plant_name}>
//     <img src={plant.image_url} alt="plant photograph" />
//     <p>{plant.plant_name}</p>
//     <p>{plant.other_names}</p>
//     <p>{plant.edible_parts}</p>
//     <p>{plant.description}</p>
//     <button>{plant.tags}</button>
//   </li>
// ))}
