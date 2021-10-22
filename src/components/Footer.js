// import {useState} from 'react'
import { Calendar,Home, Inbox } from 'react-feather'

export default function Footer() {

    // const [hidden, setHidden] = useState(false)

    // const handleHidden = () => {
    //     setHidden(true)
    // }

    return (
        <footer className="footer__wrapper">
            <div className="footer">
                <div 
                    // onClick={handleHidden}
                >
                    <Home size={20} />
                    <span>Home</span>
                    {/* <span className={hidden ? "hidden" : ""}>Home</span> */}
                    {/* { hidden && <span>Home</span>} */}
                </div>
                <div 
                    className="footer__calendar"
                    // onClick={handleHidden}
                >
                    <Calendar size={20}/>
                    <span>Meetings</span>
                    {/* { hidden && <span>Meetings</span>} */}


                </div>
                <div 
                    className="footer__inbox"
                    // onClick={handleHidden}
                >
                    <Inbox size={20}/>
                    <span>Rooms</span>
                    {/* { hidden && <span>Rooms</span>} */}

                </div>
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

                .footer > div {
                    display:flex;
                    flex-direction: column;
                    align-items:center;
                    justify-content:center;
                    gap:0.5em;
                    width:100%;
                    min-height:100%;
                    padding: 1em;
                }

                .footer > div:hover{
                    background: #F6F7FC;
                    font-weight: 700;
                    color:var(--fc-title);
                    cursor:pointer;
                }
                
            `}</style>
            
        </footer>
    )
}
