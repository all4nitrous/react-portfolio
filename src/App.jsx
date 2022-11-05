import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/about/Experience/Experience'
import Services from './components/Services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/about/Testimonials/Testimonials'
import Contact from './components/about/contact/Contact'
import Footer from './components/footer/Footer'
const App = () => {
  return (
      <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
      </>
    )
}

export default App