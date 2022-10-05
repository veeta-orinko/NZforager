import React from 'react'
import Description from './Description'
import Home from './Home'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <header className="header">
        <h1>New Zealand Forager</h1>
      </header>
      <section className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="plants/:id" element={<Description />} />
        </Routes>
      </section>
    </>
  )
}

export default App
