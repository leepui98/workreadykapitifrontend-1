import React, { Component } from 'react';
import JobListingDesktop from "./jobListing"
import JobListingMobile from "./joblistingMobile"

const useViewport = () => {
    const [width, setWidth] = React.useState(window.innerWidth);

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
      }, []);

      return { width };
}

    const JobListingPage=()=>{
        const { width } = useViewport();
        const breakpoint = 980;

        return width < breakpoint ? <JobListingMobile /> : <JobListingDesktop />;
    }
       export default JobListingPage;
    