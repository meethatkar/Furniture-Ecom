import { Outlet } from 'react-router';
import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop'; // Import the new component
import {PaginationProvider}  from './Context/PaginationContext';

function App() {



  return (
    <div className='flex flex-col min-h-screen'>
      <ScrollToTop /> {/* Render ScrollToTop here */}
      <Navbar />
      <div className='flex-grow'>
      <PaginationProvider> 
        <Outlet />
      </PaginationProvider>
      </div>
      <Footer />
    </div>
  )
}

export default App
