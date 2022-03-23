import React from 'react'
import Footer from '../../component/footer/footer'
import NavbarLogged from '../../component/navbar/navbarLogged'
import FilmCategories from '../../component/row/filmCategories'
import TopShow from './topShow/topShow'

const ShowList = () => {
  return (
    <div>
        <NavbarLogged/>
        <TopShow/>
        <FilmCategories/>
        <Footer/>


    </div>
  )
}

export default ShowList