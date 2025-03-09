import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

function App() {
  

  return (
    <>
     
      <h1>Vite + React</h1>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  )
}

export default App
