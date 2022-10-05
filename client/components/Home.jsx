import React, { useEffect } from 'react'
import { fetch_plants } from '../actions/plants'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Home() {
  const dispatch = useDispatch()
  const plants = useSelector((s) => s.plants)

  // const handleClick = (e) => {
  //   e.preventDefault()
  //   console.log('The link was clicked.')
  // }

  useEffect(() => {
    dispatch(fetch_plants())
  }, [])

  return (
    <section className="main">
      {
        <div className="card">
          {plants.map((plant) => (
            <div className="displaycard" key={plant.plant_name}>
              <Link to={`/plants/${plant.id}`}>
                <img src={plant.image_url} alt="plant photograph" />
              </Link>
              <p>{plant.plant_name}</p>
            </div>
          ))}
        </div>
      }
    </section>
  )
}

export default Home
