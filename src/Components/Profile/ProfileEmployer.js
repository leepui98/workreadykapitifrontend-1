import React, { Component } from 'react';
import EmployerProfileDesktop from "./employerProfileDesktop";
import EmployerProfileMobile from "./employerProfileMobile"

const useViewport = () => {
    const [width, setWidth] = React.useState(window.innerWidth);

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
      }, []);

      return { width };
}

    const ProfilePage=()=>{
        const { width } = useViewport();
        const breakpoint = 980;

        return width < breakpoint ? <EmployerProfileMobile /> : <EmployerProfileDesktop />;
    }
       export default ProfilePage;
    