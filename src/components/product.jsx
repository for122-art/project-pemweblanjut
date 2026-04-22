import '../styles/product.css'

import best1 from '../assets/best 1.jpeg'
import best2 from '../assets/best 2.jpeg'
import best3 from '../assets/best 3.jpeg'

import product1 from '../assets/produk 1.jpeg'
import product2 from '../assets/produk 2.jpeg'
import product4 from '../assets/produk 4.jpeg'
import product3 from '../assets/produk 3.jpeg'
import product5 from '../assets/produk 5.jpeg'
import product9 from '../assets/produk 9.jpeg'
import product10 from '../assets/og.jpeg'
import product11 from '../assets/cloud.jpeg'

function Product() {
  const bestSeller = [
  { image: best1, name: "Coconut Matcha" },
  { image: best2, name: "Matcha Cookies" },
  { image: best3, name: "Choco Matcha" }
]

  const products = [
  { image: product1, name: "Taro Punch Matcha" },
  { image: product2, name: "Red Velvet Cloud" },
  { image: product4, name: "Hot Matcha Latte" },
  { image: product3, name: "Hot Honey Usucha" },
  { image: product5, name: "Orange Matcha" },
  { image: product9, name: "Honey Matcha" },
  { image: product10, name: "Match OG" },
  { image: product11, name: "Matcha Cloud" }
]

  return (
    <section className="product-section" id="product">
      <div className="product-container">

        <p className="product-tag">OUR PRODUCT</p>
        <h2 className="product-title">Best Seller Matcha Series</h2>

        {/* BEST SELLER */}
        <div className="best-grid">
          {bestSeller.map((item, index) => (
            <div className="best-card" key={index}>
              <img src={item.image} alt={item.name} />
              <p className="best-name">{item.name}</p>
            </div>
          ))}
        </div>

        <h3 className="all-product-title">Another Products</h3>

        {/* ALL PRODUCT */}
        <div className="product-grid">
          {products.map((item, index) => (
            <div className="product-card" key={index}>
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Product