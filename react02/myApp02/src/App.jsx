import React from 'react'
import Footer from './componets/Footer.jsx'
import Main from './componets/Main.jsx'
import './App.css'
import Input from './componets/Input.jsx'
function App() {
  return (
    <>
      <Input />
      <Main
        name={'jamil afzal'}
        img={'https://picsum.photos/id/1/200/200'}
        number={'+92322828828'}
        email={'inno@gmail.com'}
      />
      <Main
        name={'adeel afzal'}
        img={'https://cdn.pixabay.com/photo/2012/04/12/23/48/car-30990_640.png'}
        number={'+9232223339'}
        email={'test@gmail.com'}
      />

      <Main
        name={'sakhi mughal'}
        img={
          'https://images.pexels.com/photos/35967/mini-cooper-auto-model-vehicle.jpg?cs=srgb&dl=pexels-pixabay-35967.jpg&fm=jpg'
        }
        number={'+9231110202'}
        email={'sakhi@gmail.com'}
      />
    </>
  )
}

export default App
