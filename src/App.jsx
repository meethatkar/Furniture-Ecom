import { Outlet } from 'react-router';
import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop'; // Import the new component
import { PaginationProvider } from './Context/PaginationContext';
import { WishlistContextProvider } from './Context/Shopping/Wishlist';
import { CartContextProvider } from './Context/Shopping/Cart';

function App() {



  return (
    <div className='flex flex-col min-h-screen'>
      <ScrollToTop /> {/* Render ScrollToTop here */}
      <WishlistContextProvider>
        <CartContextProvider>
          <Navbar />
          <div className='flex-grow'>
            <PaginationProvider>
              <Outlet />
            </PaginationProvider>
          </div>
        </CartContextProvider>
      </WishlistContextProvider>
      <Footer />
    </div>
  )
}

export default App
