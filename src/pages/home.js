import React from 'react'
import Header from '../components/organisme/Header'
import About from '../components/molekul/About'
import FilmPopular from '../components/molekul/FilmPopular'
import Footer from '../components/molekul/Footers'

const Home = () => {
  return (
    <div>
      <Header />
      <About />
      <FilmPopular />
      <Footer />
    </div>
  )
}

export default Home