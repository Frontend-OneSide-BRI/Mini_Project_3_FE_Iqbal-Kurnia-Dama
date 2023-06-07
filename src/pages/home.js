import React from 'react'
import Header from '../components/organisme/Header'
import About from '../components/molekul/About'
import BrowseComponent from '../components/molekul/BrowseFilm'

const Home = () => {
  return (
    <div>
      <Header />
      <About />
      <BrowseComponent />
    </div>
  )
}

export default Home