import React from 'react'
import useCounter from '../utils/counter'
import useOnline from '../utils/online'

const A = () => {
  const { count, incirment } = useCounter()
  const { isOnline } = useOnline()
  return (
    <>
      <p>jamil:{count}</p>
      <h4 >useOnline:{isOnline?"online":"offline"}</h4>
      <button onClick={incirment}>INCR</button>
    </>
  )
}

export default A
