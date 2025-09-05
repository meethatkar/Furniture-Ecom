import { Outlet } from 'react-router';
import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop'; // Import the new component

function App() {



  return (
    <>
      <ScrollToTop /> {/* Render ScrollToTop here */}
      <Navbar />
      <Outlet/>
      <Footer />
    </>
  )
}

export default App
