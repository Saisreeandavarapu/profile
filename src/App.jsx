import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Profile from './Components/Profile'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
      <Header/>
      <Profile/>
      <Footer/>
    </div>
  )
}

export default App
