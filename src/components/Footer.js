import { Link } from 'react-router-dom'
import '../styles/layout/footer.css'
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
        </footer>
    )
}
