import React, { useEffect, useState } from 'react'

function UseEffect1() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    document.title = count >= 1 ? `Chat(${count})` : `chats`
  }, [count])
  return (
    <>
      <p>{count}</p>
      <button
        style={{ margin: '30px 30px' }}
        onClick={() => {
          setCount(count + 1)
        }}
      >
        get Value
      </button>
    </>
  )
}

export default UseEffect1
