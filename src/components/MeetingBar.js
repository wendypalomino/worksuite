import { ArrowLeft, ArrowRight,  } from 'react-feather'

export default function MeetingBar() {
    return (
        <ul className="meetingBar">
            <li>
                <ArrowRight/>
                <span>Upcoming</span>
            </li>
            <li>
                <ArrowLeft/>
                <span>History</span>
            </li>
            <style jsx>{`
                .meetingBar{
                    position:absolute;
                    background: var(--bg-menuBar);
                    box-shadow: 0px 8px 16px rgba(185, 187, 198, 0.24);
                    border-radius: 5px;
                    width: 175px;
                    font-size: var(--fs-xs);
                    top:100%;
                    left:0;
                    margin:0.5em 0 0 1em;
                    cursor: pointer;
                }

                .meetingBar li{
                    display:flex;
                    align-items:center;
                    gap:1em;
                    padding: 1.6em 1.5em;
                    border-bottom: 1px solid #ECEEF5;
                }

                li:nth-child(2){
                    border-bottom: none;
                }
            
            `}</style>
        </ul>
    )
}
