import SideBar from './common/SideBar'

export default function RoomsBar() {
    
    const options = [ 
        {name: 'Room 1',path:'/rooms'}, 
        {name: 'Room 2',path:'/rooms'}
    ]

    return (
        <div className="sideBar">
            {options.map ( option => (
                <SideBar
                    key={option.name}
                    name={option.name}
                    path={option.path}
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