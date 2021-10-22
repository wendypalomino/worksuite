import {useState, useEffect} from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({children}) {

    const [width, setWidth] = useState(window.innerWidth)

    const updateWidth = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    },[])


    return (
        <>
            <Navbar/>
            {children}
            { width >= 768 ? <></> : <Footer/> }    
        </>
    )
}