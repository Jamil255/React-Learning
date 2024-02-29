import React from 'react'

function Main({ name, img, number, email }) {
  return (
    <>
      <h2>My Contact</h2>
      <h3>my name {name}</h3>
      <img src={img} alt={img} />
      <p>{number}</p>
      <p>{email}</p>
      <hr />
    </>
  )
}

export default Main
