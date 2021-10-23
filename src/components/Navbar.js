import {useState} from 'react'
import '../styles/layout/navbar.css'
import { Link } from 'react-router-dom'
import {AlignJustify, Bell, Calendar, Mail} from 'react-feather'
import Avatar from '../images/avatar.png'
import Logo from '../images/logo.png'
import AddFriends from '../images/addFriends.svg'
import Open from'../images/arrow.svg'
import MenuBarMobile from './sidebars/MenuBarMobile'
import MeetingBarMobile from './sidebars/MeetingBarMobile'
import MeetingBarDesktop from './sidebars/MeetingBarDesktop'
import Overlay from './Overlay'
import RoomsBar from './sidebars/RoomsBar'
import MenuBarDesktop from './sidebars/MenuBarDesktop'
import useScreenWidth from '../customHooks/useScreenWidth'


export default function Navbar() {

const [openMenuBar, setOpenMenuBar] = useState(false)
const [openMeetingBar, setOpenMeetingBar] = useState(false)
const [openMeetingBarDesktop, setOpenMeetingBarDesktop] = useState(false)
const [openRoomsBar, setOpenRoomsBar] = useState(false)
const [openMenuBarDesktop, setOpenMenuBarDesktop] = useState(false)

const width = useScreenWidth()
const minScreenWidth = width >= 768

const displayMenuBar = () => {
    setOpenMenuBar(true)
    openMenuBar && setOpenMenuBar(false)
    setOpenMeetingBar(false)
}

const displayMeetingBar = () => {
    setOpenMeetingBar(true)
    openMeetingBar && setOpenMeetingBar(false)
    setOpenMenuBar(false)
}

const displayMeetingBarDesktop = () => {
    setOpenMeetingBarDesktop(true)
    openMeetingBarDesktop && setOpenMeetingBarDesktop(false)
    setOpenRoomsBar(false)
}

const displayRoomsBar = () => {
    setOpenRoomsBar(true)
    openRoomsBar && setOpenRoomsBar(false)
    setOpenMeetingBarDesktop(false)
}

const displayHome = () => {
    setOpenMeetingBarDesktop(false)
    setOpenRoomsBar(false)
}

const deleteOverlay = () => {
    setOpenMenuBar(false)
    setOpenMeetingBar(false)
}

const displayMenuBarDesktop = () => {
    setOpenMenuBarDesktop(true)
    openMenuBarDesktop && setOpenMenuBarDesktop(false)
}

    return ( 
        <>
        <nav className="navbar">  
            <div className="navbar__mobile" onClick={displayMeetingBar}>
                <AlignJustify color="#111"/>
            </div>  
            <div className="logo">
                <img src={Logo} alt="logo"/>
            </div> 
            <div className="navbar__icons" >
                <div 
                    className={ minScreenWidth ? "navbar__icons--bell wrapper-icon": "navbar__icons--bell"}>
                    <Bell className="bell"  size={minScreenWidth ? 18: 24 } />
                </div>
                <div 
                    className="navbar__icons--avatar" 
                    onClick={ minScreenWidth ? displayMenuBarDesktop : displayMenuBar}>
                    <Overlay open={openMenuBar}/>
                    <img src={Avatar} alt="avatar"/>
                </div>
                <div className="navbar__icons--open">
                    <img src={Open} alt="open"/>
                </div>
                <div className="navbar__icons--addFriends wrapper-icon">
                    <img src={AddFriends} alt="addFriends"/>
                    <span>Invite friends</span>
                </div>
                <Link to="/calendar" className="navbar__desktop navbar__icons--calendar wrapper-icon">
                    <Calendar size={16}/>
                </Link>
                <div className="navbar__desktop navbar__icons--mail wrapper-icon">
                    <Mail size={16}/>
                </div>
            </div>
            <ul className="navbar__options">
                <Link to="/">
                    <li onClick={displayHome}>Home</li>
                </Link>
                <Link to="/meetings">
                    <li onClick={displayMeetingBarDesktop}>Meetings</li>
                </Link>
                <Link to="/rooms">
                    <li onClick={displayRoomsBar}>Rooms</li>
                </Link>
            </ul>

            {openMenuBar ? 
                <MenuBarMobile
                    handleProfile={()=> setOpenMenuBar(false)}
                    handleSettings={()=> setOpenMenuBar(false)}
                    handleUsers={()=> setOpenMenuBar(false)}
                    handleLogout={()=> setOpenMenuBar(false)}
                /> : <></> 
            }
            {openMeetingBar ? 
                <MeetingBarMobile
                    handleUpcoming={() => setOpenMeetingBar(false)}
                    handleHistory={() => setOpenMeetingBar(false)}
                /> : <></> 
            }
            {openMeetingBarDesktop ? 
                <MeetingBarDesktop
                    handleUpcoming={() => setOpenMeetingBar(false)}
                    handleHistory={() => setOpenMeetingBar(false)}
                /> : <></> 
            }
            {openMenuBarDesktop ? 
                <MenuBarDesktop
                    handleProfile={()=> setOpenMenuBarDesktop(false)}
                    handleSettings={()=> setOpenMenuBarDesktop(false)}
                    handleLogout={()=> setOpenMenuBarDesktop(false)}
                /> : <></> }
            {openRoomsBar ? <RoomsBar/> : <></>}
            </nav>
            <div 
                onClick={deleteOverlay}
                className={ minScreenWidth ? "" : (openMenuBar || openMeetingBar ) ? 
                "overlay__container" : ""}>
            </div>
        </>
    )
}
