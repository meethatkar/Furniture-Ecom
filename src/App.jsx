import { Outlet } from 'react-router';
import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop'; // Import the new component
import { PaginationProvider } from './Context/PaginationContext';
import { WishlistContextProvider } from './Context/Shopping/Wishlist';
import { CartContextProvider } from './Context/Shopping/Cart';
import { ProductContextProvider } from './Context/Products/ProductContext';

function App() {



  return (
    <div className='flex flex-col min-h-screen'>
      <ScrollToTop /> {/* Render ScrollToTop here */}
      <WishlistContextProvider>
        <CartContextProvider>
          <ProductContextProvider>
            <Navbar />
            <div className='flex-grow'>
              <PaginationProvider>
                <Outlet />
              </PaginationProvider>
            </div>
          </ProductContextProvider>
        </CartContextProvider>
      </WishlistContextProvider>
      <Footer />
    </div>
  )
}

export default App
