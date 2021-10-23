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
            <style jsx>{`
                .links{
                    display:flex;
                    gap:1.5em;
                    padding: 1.4em 2em;
                    border-bottom: 1px solid #ECEEF5;
                    align-items:center;
                    width:100% 
                }

                .links a:last-child {
                    border-bottom: 1px solid red;
                }

                @media screen and (min-width: 768px){
                    .links{
                        border-bottom: none;
                        padding: 1.4em 2.5em;
                    }
                }
                
            `}</style>
        </>
    )
}
