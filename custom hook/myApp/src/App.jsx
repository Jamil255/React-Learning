
import { useState } from 'react'
import './App.css'
import A from './components/A'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <A/>
    </>
  )
}

export default App
