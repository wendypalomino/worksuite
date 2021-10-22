import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useLocation } from "react-router-dom";

export default function Layout(props) {

    const location = useLocation();

    return (
        <div>
            {location.pathname !== "" && (<Navbar/>) }
            {props.children}
            {location.pathname !== "" && (<Footer/>) }     
        </div>
    )
}