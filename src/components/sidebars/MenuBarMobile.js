import SideBar from './common/SideBar'
import user from '../../images/sidebarIcons/user.svg'
import seetings from '../../images/sidebarIcons/settings.svg'
import users from '../../images/sidebarIcons/users.svg'
import logout from '../../images/sidebarIcons/log-out.svg'


export default function MenuBarMobile(props) {
    const {
        handleProfile,
        handleSettings,
        handleUsers,
        handleLogout
    } = props
    
    const options = [
        {
            icon:  user,
            name: 'My profile',
            handleDisplay:  () => handleProfile(),
        },
        {
            icon: seetings,
            name: 'My settings',
            handleDisplay:  () => handleSettings(),
        },
        {
            icon: users,
            name: 'Invite friends',
            handleDisplay:  () => handleUsers(),
        },
        {
            icon: logout,
            name: 'Sign out',
            handleDisplay:  () => handleLogout(),
        }   
    ]


    return (
        <div className="sideBar toRight">
            {options.map ( option => (
                <SideBar
                    key={option.name}
                    name={option.name}
                    icon={option.icon}
                    handleDisplay={option.handleDisplay}
                />
            ))}
        </div>
    )
}
