import { useEffect } from "react";
import { useLocation } from "react-router";

// Make sure we scroll to top when we change pages.  Esp when clicking 
// the contact us link when on mobile or with many products 


const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>
};

export default ScrollToTop;