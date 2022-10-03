import React, { useEffect } from 'react'
import { fetch_plants } from '../actions/plants'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const dispatch = useDispatch()
  const plants = useSelector((s) => s.plants)

  useEffect(() => {
    dispatch(fetch_plants())
  }, [])

  return (
    <>
      <header className="header">
        <h1>My Collection</h1>
      </header>
      <section className="main">
        {
          <ul>
            {plants.map((plant) => (
              <li key={plant.plant_name}>
                <img src={plant.image_url} alt="my collection" />
              </li>
            ))}
          </ul>
        }
      </section>
    </>
  )
}

export default App
