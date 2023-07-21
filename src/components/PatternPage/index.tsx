import { Outlet } from 'react-router-dom';
import { useEffect } from "react";
import { useLocation } from "react-router";

import Heading from '../Heading';
import Footing from '../Footing';

export default function PatternPage({ children }: { children?: React.ReactNode }){

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return(
    <>
      <Heading/>
        <div>
          <Outlet/>
          { children }
        </div>
      <Footing/>
    </>
  )
}