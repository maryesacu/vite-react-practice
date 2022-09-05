import { useState } from 'react'
import './App.css'
import Header from './Header'
import Employees from './Employees'
import Footer from './Footer'

function App() {
  return (
    <main>
      <Header />
      <Employees />
      <Footer />
    </main>
  )
}

export default App