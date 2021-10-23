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
            <style jsx>{`

            .sideBar{
                box-shadow: 0px 2px 4px rgba(236, 238, 245, 0.64);
                border: 1px solid #ECEEF5;
                border-radius: 5px;

            }

            .rigth{
                right:0;
                margin-right: 4em;
                margin-top: -1.3em;
            }
            
            `}</style>
        </div>
    )
}