import React from 'react'
import { useMemo } from 'react'
import { useState } from 'react'

const MemoHook = () => {
  const [countOne, setCountOne] = useState(0)
  const [countTWo, setCountTwo] = useState(0)
  const incrimentOne = () => {
    setCountOne(countOne + 1)
  }
  const incrimentTwo = () => {
    setCountTwo(countTWo + 1)
  }
  const isEven = useMemo(() => {
    console.warn('--------------')
    let i = 0
    while (i < 2000000000) i++
    return countTWo % 2 === 0
  }, [countTWo])
  return (
    <>
      <button onClick={incrimentOne}>add -{countOne}</button>
      <span>{isEven ? 'even' : 'odd'}</span>
      <button onClick={incrimentTwo}>add -{countTWo}</button>
    </>
  )
}

export default MemoHook
