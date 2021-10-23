import SideBar from './common/SideBar'
import arrowRight from '../../images/sidebarIcons/arrow-right.svg'
import arrowLeft from '../../images/sidebarIcons/arrow-left.svg'

export default function MeetingBarMobile(props) {
    const {
        handleUpcoming,
        handleHistory,   
    } = props
    
    const options = [
        {
            icon:  arrowRight,
            name: 'Upcoming',
            path: '/upcoming-meetings',
            handleDisplay:  () => handleUpcoming(),
        },
        {
            icon: arrowLeft,
            name: 'History',
            path:'/history',
            handleDisplay:  () => handleHistory(),
        }  
    ]


    return (
        <div className="sideBar">
            {options.map ( option => (
                <SideBar
                    key={option.name}
                    name={option.name}
                    icon={option.icon}
                    path={option.path}
                    handleDisplay={option.handleDisplay}
                />
            ))}
        </div>
    )
}
