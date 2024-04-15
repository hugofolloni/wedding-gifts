import React from "react";
import Welcome from "./Welcome";
import HelpUs from "./HelpUs";
import Photos from "./Photos";

const Homepage = () => {

    return ( 
        <div>
            <Welcome id='welcome'/>
            <HelpUs id='lista'/>
            <Photos/>
        </div>

     );
}
 
export default Homepage;