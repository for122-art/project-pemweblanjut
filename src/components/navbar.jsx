import { useState, useEffect } from "react"
import '../styles/navbar.css'
import logo from '../assets/logo.png'

function Navbar() {
  const [show, setShow] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY) {
        setShow(false)
      } else {
        setShow(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <nav className={`navbar ${show ? "show" : "hide"}`}>
      
      {/* BRAND */}
      <div className="nav-brand">
        <img src={logo} alt="Logo" className="nav-logo-img" />

        <div className="nav-text">
          <span className="nav-top">MAMA</span>
          <span className="nav-bottom">MATCHA</span>
        </div>
      </div>

      {/* OPENING HOURS */}
<div className="opening-hours">
  <h4>Opening Hours</h4>
  <p>Senin - Jumat: 08.00 - 22.00</p>
</div>

    </nav>
  )
}

export default Navbar