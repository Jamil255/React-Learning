import React, { useState } from 'react'
import Foo from './UseState'

function App() {
  //   const clickMe = (fullName, age, ele) => {
  //   const [value, setValue] = useState('HELLO WORLD')
  //   //     console.log(fullName, age, ele.target)
  //   //   }
  //   const clickMe = () => {
  //     setValue('JAMIL AFZAL')
  //   }
  //   const [value, setValue] = useState(null)
  //   const addValue = () => {
  //     setValue(null)
  //   }
  //   console.log(null)
  //    let  array=[1,2,3,4,5,6,7,8,9,10]
  //     const [value, setValue] = useState(array)

  //     const updateArr = () => {
  //         setValue(array.push("adeel"))
  //     console.log(value);
  //     }

  // const (value,setValue)= useState(array)
  //     let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  //     const updateArr = () => {
  //         setValue([...array])
  //     }
  return (
    <>
      {/* <button
        onClick={(ele) => {
          clickMe(' jamil afzal', 20, ele)
        }}
      >
        CLICK ME!
      </button> */}

      {/* <p>{value}</p>
      <button onClick={clickMe}>CLICK ME!</button> */}
      {/* <p>Counetr:{value}</p> */}
      {/* <button onClick={addValue}>Add Value</button> */}
      <Foo />

      {/* <button onClick={updateArr}>Update Array</button> */}
    </>
  )
}
export default App

//
