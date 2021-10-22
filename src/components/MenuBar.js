import { LogOut, Settings, User, Users } from 'react-feather'

export default function MenuBar() {
    return (
        <ul className="menuBar">
            <li>
                <User/>
                <span>My Profile</span>
            </li>
            <li>
                <Settings/>
                <span>My settings</span>
            </li>
            <li>
                <Users/>
                <span>Invite friends</span>
            </li>
            <li>
                <LogOut/>
                <span>Sign out</span>
            </li>
            <style jsx>{`
                .menuBar{
                    background: var(--bg-menuBar);
                    box-shadow: 0px 8px 16px rgba(185, 187, 198, 0.24);
                    border-radius: 5px;
                    width: 175px;
                    font-size: var(--fs-xs)

                }

                .menuBar li{
                    display:flex;
                    align-items:center;
                    gap:1em;
                    padding: 1.6em 1.5em;
                    border-bottom: 1px solid #ECEEF5;
                }

                li:nth-child(4){
                    border-bottom: none;
                }
            
            `}</style>
        </ul>
    )
}
