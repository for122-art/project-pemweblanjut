import Navbar from './components/navbar'
import About from './components/about'
import Product from './components/product'
import Footer from "./components/footer";
import Hero from "./components/hero";
import { useState } from 'react'
import product1 from './assets/1.JPEG'
import product2 from './assets/2.JPEG'
import product3 from './assets/3.JPEG'
import product4 from './assets/4.JPEG'
import './App.css'

function App() {

  return (
    <>
      <Navbar />

      <div className="page">
        {/* HEADER */}
        <section className="hero-section">
          <p className="small-text">Premium Matcha Lifestyle</p>

          <h1 className="headline">JUST MATCHA NO DRAMA</h1>

          <div className="about-matcha">
            <h2>Apa Itu MamaMatcha?</h2>
            <p>
              Mamamatcha adalah minuman matcha premium 
              yang menawarkan perpaduan rasa autentik, creamy, dan estetik 
              dengan harga terjangkau. Menggunakan bubuk matcha impor Jepang berkualitas. 
            </p>
            
          </div>
        </section>

        <Hero />


        {/* INFO */}
        <section className="bottom-section">
          <div className="info-box">
            <h3>Premium Quality</h3>
            <p>Menggunakan matcha pilihan berkualitas tinggi.</p>
          </div>

          <div className="info-box">
            <h3>Fresh Everyday</h3>
            <p>Dibuat saat dipesan agar rasa tetap maksimal.</p>
          </div>

          <div className="info-box">
            <h3>Healthy Choice</h3>
            <p>Pilihan tepat untuk gaya hidup sehat modern.</p>
          </div>
        </section>
      </div>
      <About />
      <Product />
      <Footer />
    </>
  )
}

export default App