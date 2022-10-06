import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { send_plant } from '../actions/plants'

function Add() {
  const dispatch = useDispatch()

  const initialData = {
    plant_name: '',
    other_names: '',
    edible_parts: '',
    image_url: '',
    description: '',
    tags: '',
  }

  const [form, setForm] = useState(initialData)

  const handleChange = (evt) => {
    evt.preventDefault()
    setForm({
      ...form,
      [evt.target.name]: evt.target.value,
    })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    dispatch(send_plant(form))
    setForm('')
  }

  return (
    <form encType="multipart/form-data" onSubmit={handleSubmit}>
      <label htmlFor="plant_name">Plant Name:</label>
      <input onChange={handleChange} name="plant_name" type="text" />
      <input type="submit" />
    </form>
  )
}

export default Add
