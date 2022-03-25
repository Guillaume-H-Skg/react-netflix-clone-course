import React from 'react'
import Footer from '../../component/footer/footer'
import NavbarLogged from '../../component/navbar/navbarLogged'
import FilmCategories from '../../component/row/filmCategories'
import TopShow from './topShow/topShow'

const ShowList = () => {
  return (
    <>
      <NavbarLogged />
      <TopShow />
      <FilmCategories />
      <Footer />
    </>
  )
}

export default ShowList