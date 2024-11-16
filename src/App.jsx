import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Index } from './ScreenComponents/Index'
import { Movies } from './ScreenComponents/Movies'
import { Error } from './ScreenComponents/Error'
import { Menu } from './Component/Menu'
import { About } from './ScreenComponents/About'
import { Footer } from './Component/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <BrowserRouter>
      <Menu/>
        <Routes>
          <Route path='/'  element={<Index/>} /> 
          <Route path='/movies'  element={<Movies/>} /> 
          <Route path='/about'  element={<About/>} /> 
          <Route path='*'  element={<Error/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
