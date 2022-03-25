import React from 'react'
import Footer from '../../component/footer/footer'
import NavbarLogged from '../../component/navbar/navbarLogged'
import SeriesCategories from '../../component/row/seriesCategories'
import TopShow from '../showsListScreen/topShow/topShow'

const SeriesList = () => {
    return (
        <>
            <NavbarLogged />
            <TopShow />
            <SeriesCategories />
            <Footer />
        </>
    )
}

export default SeriesList