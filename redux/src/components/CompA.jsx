import React from 'react'
import { useSelector } from 'react-redux'

const CompA = () => {
  let { count } = useSelector((state) => state.counter)
  console.log('compA: ' + count)
  return (
    <>
      <h1>navbar:{count}</h1>
    </>
  )
}

export default CompA
