import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'

// Import Header and Footer
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div classNameName="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
