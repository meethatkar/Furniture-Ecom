import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useProduct } from '../Context/Products/ProductContext';

function ScrollToTop() {
  const { pathname } = useLocation();
  const { selectedCategory, filteredProducts } = useProduct();
  // whenever url changes it's scrolled to top.

  useEffect(() => {
    // "document.documentElement.scrollTo" is the modern IE-compatible way to scroll.
    // "window.scrollTo" is often supported but not as universally.
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pathname, selectedCategory, filteredProducts]); // This effect runs whenever the pathname changes

  return null; // This component doesn't render anything itself
}

export default ScrollToTop;
