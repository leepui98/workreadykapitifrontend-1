import React, { Component } from 'react';
import EmployerAddJobDesktop from "./employerAddJob"
import EmployerAddJobMobile from "./employerAddJobMobile"

const useViewport = () => {
    const [width, setWidth] = React.useState(window.innerWidth);

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
      }, []);

      return { width };
}

    const EmployerAddJobPage=()=>{
        const { width } = useViewport();
        const breakpoint = 980;

        return width < breakpoint ? <EmployerAddJobMobile /> : <EmployerAddJobDesktop />;
    }
       export default EmployerAddJobPage;
    