import '../../../styles/sidebar/sidebar.css'
import { Link } from 'react-router-dom'

export default function SideBar(props) {

    const { icon, name, path="/", handleDisplay} = props

    return (
        <>
            <Link 
                className="links"
                to={path}
                onClick={handleDisplay}
            >   
                <img src={icon} alt={icon}/>             
                <span>{name}</span>
            </Link>
        </>
    )
}
