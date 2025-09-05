import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // "document.documentElement.scrollTo" is the modern IE-compatible way to scroll.
    // "window.scrollTo" is often supported but not as universally.
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pathname]); // This effect runs whenever the pathname changes

  return null; // This component doesn't render anything itself
}

export default ScrollToTop;
