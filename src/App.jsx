import './App.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

function App() {
  

  return (
    <>
     <div className='mx-auto'>
      <Navbar></Navbar>
      {/* outlet so that navbar and footer remains same in every location and the middle content changes according to routing and components */}
      <Outlet></Outlet>
      <Footer></Footer>
     </div>
    </>
  )
}

export default App
