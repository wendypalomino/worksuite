import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {AlignJustify, Bell, Calendar, Mail} from 'react-feather'
import Avatar from '../images/avatar.png'
import Logo from '../images/logo.png'
import AddFriends from '../images/addFriends.svg'
import Open from'../images/arrow.svg'
import MenuBar from './sidebars/MenuBarMobile'
import MeetingBarMobile from './sidebars/MeetingBarMobile'
import MeetingBarDesktop from './sidebars/MeetingBarDesktop'
import Overlay from './Overlay'
import RoomsBar from './sidebars/RoomsBar'
import MenuBarDesktop from './sidebars/MenuBarDesktop'


export default function Navbar() {

const [openMenuBar, setOpenMenuBar] = useState(false)
const [openMeetingBar, setOpenMeetingBar] = useState(false)
const [openMeetingBarDesktop, setOpenMeetingBarDesktop] = useState(false)
const [openRoomsBar, setOpenRoomsBar] = useState(false)
const [openMenuBarDesktop, setOpenMenuBarDesktop] = useState(false)


const [width, setWidth] = useState(window.innerWidth)
const minScreenWidth = width >= 768


const updateWidth = () => {
    setWidth(window.innerWidth);
};

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


useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
},[])

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
                <MenuBar
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
            {openRoomsBar ?
                <RoomsBar/> : <></>
            }
            </nav>
            <div 
                onClick={deleteOverlay}
                className={ minScreenWidth ? "" : (openMenuBar || openMeetingBar ) ? 
                "overlay__container" : ""}>
            </div>

            <style jsx>{`
                .navbar__desktop, .navbar__options, 
                .navbar__icons--open, .navbar__icons--addFriends{
                    display:none
                }

                .navbar__mobile,.navbar__icons, .logo{
                    cursor: pointer;
                }

                .navbar{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border-bottom: solid var(--fc-border);
                    padding:0.5em 1em;
                    background:white;
                    position:relative;
                    width:100%;
                }

                .navbar__icons{
                    display:flex;
                    align-items: center;
                    gap: 0.6em;
                }

                .navbar__icons--avatar{
                    position:relative;
                    border-radius: 50%;
                    width:40px;
                    height:40px;
                    overflow:hidden;
                    text-align:center;
                }

                @media screen and (min-width: 768px){
                    .navbar__desktop, .navbar__options, 
                    .navbar__icons--open, .navbar__icons--addFriends{
                        display:block
                    }

                    .navbar__mobile{
                        display:none
                    }

                    .navbar{
                        display:grid;
                        grid-template-columns: auto auto 1fr auto;
                        padding:0 1em;
                    }

                    .logo{
                        grid-column: 1/2;
                        grid-row: 1/2;
                        padding:0 1em;   
                    }

                    .navbar__options{
                        grid-column: 2/3;
                        grid-row: 1/2;
                        display: flex;
                        align-items: center;
                        height: 100%;

                    }

                    li{
                        height: 100%;
                        text-align: center;
                        display:flex;
                        align-items:center;
                        padding: 2em 1.5em;

                    }

                    .navbar__icons{
                        grid-column: 4/5;
                        grid-row: 1/2;
                        display:grid;
                        grid-template-columns: repeat(6,auto);
                        gap: 0.5em;
                    }

                    .navbar__icons--addFriends{
                        grid-column: 1/2;
                        grid-row: 1/2;
                        display:flex;
                        align-items:center;
                        gap:0.5em;

                    }

                    .navbar__icons--calendar{
                        grid-column:2/3;
                        grid-row: 1/2;
                    }

                    .navbar__icons--bell{
                        grid-column:3/4;
                        grid-row: 1/2;
                    }

                    .navbar__icons--mail{
                        grid-column:4/5;
                        grid-row: 1/2;
                    }

                    .navbar__icons--avatar{
                        all:initial;
                        grid-column:5/6;
                        grid-row: 1/2;
                    }

                    .navbar__icons--open{
                        grid-column:6/7;
                        grid-row: 1/2;
                    }

                @media screen and (min-width: 992px){
                    li{
                        padding: 2em;
                    }
                }

                @media screen and (min-width: 1200px){
                    li{
                        padding: 2em 2.5em;
                    }
                }
                }
            `}</style>
        </>
    )
}
