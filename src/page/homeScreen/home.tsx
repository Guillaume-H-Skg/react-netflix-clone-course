import React from 'react'
import Banner from './banner/banner'
import Nav from '../../component/navbar/navbar'
import Feature from './feature/feature'
import FAQ from './FAQ/FaQuestion'
import Footer from '../../component/footer/footer'

const HomeSreen = () => {
  return (
    <div>
        <Nav/>

        <Banner/>
        
        <Feature/>
        
        <FAQ/>

        <Footer/>

    </div>
  )
}

export default HomeSreen