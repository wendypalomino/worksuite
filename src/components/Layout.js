import Navbar from './Navbar'
import Footer from './Footer'
import useScreenWidth from '../customHooks/useScreenWidth'

export default function Layout({children}) {
    const width = useScreenWidth()
    const minScreenWidth = width >= 768

    return (
        <>
            <Navbar/>
            {children}
            { minScreenWidth ? <></> : <Footer/> }    
        </>
    )
}