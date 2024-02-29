import React from 'react'
import styles from './App.module.css'
function Card({ img, price, desc, id }) {
  return (
    <>
      <div className={` ${styles.main1}`}>
        <div
          className={`card ${styles.card}`}
          style={{ width: '18rem', margin: '40px' }}
        >
          <img
            src={img}
            className="card-img-top"
            width={'200px'}
            height={'200px'}
            alt="Product"
          />
          <div className="card-body">
            <h5 className="card-title">{price}$</h5>
            <p className="card-text">{desc}</p>
          </div>
        </div>
      </div>
    </>
  )
}
export default Card
