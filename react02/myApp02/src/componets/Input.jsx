import React from 'react'
function Input() {
//   const [fName, setFName] = useState('')
    //   const [lName, setLName] = useState('')
    function login(e) {
        console.log(e.target.value);
    }
  return (
      <>
          
          <input type="text" onChange={login} />
      {/* <p>
        {fName} {lName}
      </p>
      <input type="text" onChange={(e) => setFName(e.target.value)} />
      <br />
      <br />
      <input type="text" onChange={(e) => setLName(e.target.value)} /> */}
    </>
  )
}

export default Input
