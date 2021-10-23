import React from 'react'

export default function UpcomingMeets() {
    return (
        <div className="upMeetings">
            <h1>Upcoming meetings</h1>
            <p >Fri, 20th may</p>
            <style jsx>{`

                .upMeetings p{
                    border-bottom: 1px solid #F9FAFD;
                    text-transform: uppercase;
                    padding: 2em 0 0.5em 0;
                    position:relative;
                    z-index: -30;
                }
            `}</style>
        </div>
    )
}
