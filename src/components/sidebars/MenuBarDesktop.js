import '../../styles/sidebar/menuBarDesktop.css'
import SideBar from './common/SideBar'

export default function MenuBarDesktop(props) {

    const { 
        handleProfile, 
        handleSettings, 
        handleLogout
    } = props
    
    const options = [ 
        {
            name: 'Profile', 
            handleDisplay:  () => handleProfile(),
        }, 
        {
            name: 'Seetings',
            handleDisplay:  () => handleSettings(),
        }, 
        {
            name:'Logout',
            handleDisplay:  () => handleLogout(),
        } 
    ]

    return (
        <div className="sideBar rigth">
            {options.map ( option => (
                <SideBar
                    key={option.name}
                    name={option.name}
                    handleDisplay={option.handleDisplay}
                />
            ))}
        </div>
    )
}