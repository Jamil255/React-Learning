import React from 'react'
import Child from './Child'
import { useState } from 'react'
import { useCallback } from 'react'

const CallbackHook = () => {
  const [countOne, setCountOne] = useState(0)
  const [countTwo, setCountTwo] = useState(0)

  const incirmentOne = () => {
    setCountOne(countOne + 1)
  }
  const incirmentTwo = () => {
    setCountTwo(countTwo + 1)
  }
  const fun = useCallback(() => {
    console.log('hi')
  }, [countOne])

  return (
    <>
      <Child fun={fun} />
      <button onClick={incirmentOne}>add -{countOne}</button>
      <button onClick={incirmentTwo}>add-{countTwo}</button>
    </>
  )
}

export default CallbackHook
