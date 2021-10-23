// import {useState} from 'react'
import { Link } from 'react-router-dom'

import { Calendar,Home, Inbox } from 'react-feather'

export default function Footer() {

    return (
        <footer className="footer__wrapper">
            <div className="footer">
                <Link className="footer__info"to="/">
                    <Home size={20} />
                    <span>Home</span>
                </Link>
                <Link className="footer__info" to="/meetings">
                    <Calendar size={20}/>
                    <span>Meetings</span>
                </Link>
                <Link className="footer__info" to="/rooms">
                    <Inbox size={20}/>
                    <span>Rooms</span>
                </Link>
            </div>
            
            <style jsx>{`
                .footer__wrapper{
                    background: var(--bg-card);
                    position: fixed;
                    width:100%;
                    bottom: 0;
                    z-index: -20;
                }
                
                .footer{
                    display:flex;
                    justify-content:space-between;
                }

                .footer__info {
                    display:flex;
                    flex-direction: column;
                    align-items:center;
                    justify-content:center;
                    gap:0.5em;
                    width:100%;
                    min-height:100%;
                    padding: 1em;
                }

                .footer > div:hover, .footer__info:hover{
                    background: #F6F7FC;
                    font-weight: 700;
                    color:var(--fc-title);
                    cursor:pointer;
                }
                
            `}</style>
            
        </footer>
    )
}
