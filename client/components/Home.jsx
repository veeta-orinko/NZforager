import React, { useEffect } from 'react'
import { fetch_plants } from '../actions/plants'
import { useDispatch, useSelector } from 'react-redux'

function Home() {
  const dispatch = useDispatch()
  const plants = useSelector((s) => s.plants)

  const handleClick = (e) => {
    e.preventDefault()
    console.log('The link was clicked.')
  }

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
                <img
                  src={plant.image_url}
                  alt="plant photograph"
                  onClick={handleClick}
                />
                <p>{plant.plant_name}</p>
              </li>
            ))}
          </ul>
        }
      </section>
    </>
  )
}

export default Home
