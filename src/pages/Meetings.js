import React from 'react'

export default function Meetings() {
    return (
        <div>
            <h1>Upcoming meetings</h1>
            <p>Fri, 20th may</p>
            <style jsx>{`
                p{
                    border-bottom: 1px solid #F9FAFD;
                    text-transform: uppercase;
                    padding: 2em 0 1em 0;
                    position:relative;
                    z-index: -30
                }
            `}</style>
        </div>
    )
}
