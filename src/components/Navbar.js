import {useState} from 'react'
import {AlignJustify, Bell, Calendar, Mail} from 'react-feather'
import Avatar from '../images/avatar.png'
import Logo from '../images/logo.png'
import AddFriends from '../images/addFriends.svg'
import Open from'../images/arrow.svg'


export default function Navbar() {

const [open, setOpen] = useState(false)

    const displayMenuBar = () => {
        setOpen(true)
        open && setOpen(false)
    }

    return ( 
        <nav className="navbar container">  
            <div className="navbar__mobile">
                <AlignJustify color="#111"/>
            </div>  
            <div className="logo">
                <img 
                    src={Logo} 
                    alt="logo"
                />
            </div> 
            <div className="navbar__icons" >
                <div className="navbar__icons--bell wrapper-icon">
                    <Bell className="bell"  size={18} />
                </div>
                <div className="navbar__icons--avatar">
                    <div className="overlay">
                        <img src={Open} alt="arrow" />
                    </div>
                    <img
                        src={Avatar} 
                        alt="avatar"
                        onClick={displayMenuBar}
                    />
                </div>
                <div className="navbar__icons--open">
                    <img 
                        src={Open} 
                        alt="open"
                    />
                </div>
                <div className="navbar__icons--addFriends wrapper-icon">
                    <img 
                        src={AddFriends} 
                        alt="addFriends"
                    />
                    <span>Invite friends</span>
                </div>
                <div className="navbar__desktop navbar__icons--calendar wrapper-icon">
                    <Calendar size={16}/>
                </div>
                <div className="navbar__desktop navbar__icons--mail wrapper-icon">
                    <Mail size={16}/>
                </div>
            </div>
            <ul className="navbar__options">
                <li>Home</li>
                <li>Meetings</li>
                <li>Rooms</li>
            </ul>
         

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
                }

                .navbar__icons{
                    display:flex;
                    align-items: center;
                }

                .navbar__icons--avatar{
                    position:relative;
                    border-radius: 50%;
                    width:40px;
                    height:40px;
                    overflow:hidden;
                    text-align:center;
                    /* opacity:1 */
                }

                .navbar__icons--avatar:hover > .overlay{
                    opacity:1
                }

                .overlay{
                    position:absolute;
                    background: rgba(180, 180, 190, 0.60);
                    width:100%;
                    height:100%;
                    bottom:0;
                    left:0;
                    opacity:0;
                    border-radius: 40%;
                    display:flex;
                    align-items:center;
                    justify-content:center;

                }

                .overlay img{
                    position:absolute;
                    color:red;
                    transform: scaleY(-1);
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
                        padding: 2em 2.5em
                    }

                    li:hover{
                        background: var(--bg-navlist);
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
                        grid-column:5/6;
                        grid-row: 1/2;
                    }

                    .navbar__icons--open{
                        grid-column:6/7;
                        grid-row: 1/2;
                    }

                }

            
            `}</style>
        </nav>
    )
}
