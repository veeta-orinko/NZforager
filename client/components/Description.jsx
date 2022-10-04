import React, { useEffect } from 'react'
import { fetch_plants } from '../actions/plants'
import { useDispatch, useSelector } from 'react-redux'

/// To do: add browse/ user photo option (right & left photo arrow + thumbnails)
// Recipe database via web scraping
// tags with clickthrough button to other plants sharing these characteristics

function Description() {
  const dispatch = useDispatch()
  const plants = useSelector((s) => s.plants)

  useEffect(() => {
    dispatch(fetch_plants())
  }, [])

  return (
    <>
      <section className="main">
        {
          <ul>
            {plants.map((plant) => (
              <li key={plant.plant_name}>
                <img src={plant.image_url} alt="plant photograph" />
                <p>{plant.plant_name}</p>
                <p>{plant.other_names}</p>
                <p>{plant.edible_parts}</p>
                <p>{plant.description}</p>
                <button>{plant.tags}</button>
              </li>
            ))}
          </ul>
        }
      </section>
    </>
  )
}

export default Description
