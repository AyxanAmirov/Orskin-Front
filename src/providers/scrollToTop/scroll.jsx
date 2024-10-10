import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

const ScrollToTop = ({ children }) => {
  const { pathname } = useLocation();
  const dispacth = useDispatch()

  useEffect(() => {
    window.scrollTo(0, 0);
    dispacth({
      type: "ANY"
    })

  }, [pathname]);

  return children;
};

export default ScrollToTop;
