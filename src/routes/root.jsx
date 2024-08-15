import React from "react";
import Header from "../components/header";
import { Outlet } from "react-router-dom";

function Root(props)
{
    return(        
         <>
         < Header/>
         <Outlet />
         <footer>
         </footer>
         </>
    );
}
export default Root;
