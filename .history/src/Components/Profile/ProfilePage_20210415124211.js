import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import ProfilePageMobile from "./ProfilePageMobile";
import ProfilePageDesktop from "./ProfilePageDesktop"

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

        return width < breakpoint ? <ProfilePageMobile /> : <ProfilePageDesktop />;
    }
       export default ProfilePage;
    