import React from 'react'
import Header from '../../shere/header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../../shere/footer/Footer'

const Main = () => {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default Main