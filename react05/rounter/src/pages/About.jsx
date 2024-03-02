import React from 'react'
import { useParams } from 'react-router-dom'

function About() {
  let param = useParams()
  console.log(param.id)
  return (
    <>
      <h3>about...</h3>
    </>
  )
}

export default About
