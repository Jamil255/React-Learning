import { useState } from 'react'
import CompA from './components/CompA'
import { add } from './store/slice/counterSlice'
import { useDispatch } from 'react-redux'
import { minus } from './store/slice/counterSlice'
import UserName from './components/UserName'
import { updateName } from './store/slice/userSlice'
const App = () => {
  const [count, setCount] = useState()
  const [userName, setUserName] = useState()
  const dispatch = useDispatch()
  console.log('app ')
  return (
    <>
      <CompA />
      <button
        onClick={() => {
          dispatch(add())
        }}
      >
        Update
      </button>
      <button
        onClick={() => {
          dispatch(minus())
        }}
      >
        Decirment
      </button>

      <div style={{ margin: '10px' }}>
        {' '}
        <UserName />
      </div>
      <button
        onClick={() => {
          dispatch(updateName())
        }}
      >
        repalce
      </button>
    </>
  )
}

export default App
