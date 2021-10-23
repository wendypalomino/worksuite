import SideBar from './common/SideBar'

export default function MeetingBarDesktop(props) {
    const {
        handleUpcoming,
        handleHistory,   
    } = props
    
    const options = [
        {
            name: 'Upcoming',
            path: '/upcoming-meetings',
            handleDisplay:  () => handleUpcoming(),
        },
        {
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
                    path={option.path}
                    handleDisplay={option.handleDisplay}
                />
            ))}
            <style jsx>{`

            .sideBar{
                box-shadow: initial;   
            }
            
            
            `}</style>
        </div>
    )
}
