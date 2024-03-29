import React from 'react'
import { useSelector } from 'react-redux'

const UserName = () => {
  let { userName } = useSelector((state) => state.user)
  return (
    <>
      <h2> username:{userName}</h2>
    </>
  )
}

export default UserName
