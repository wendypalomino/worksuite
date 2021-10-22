import React from 'react'

export default function Ojo() {
    return (
        <div className="container">
            <div className="box">
                <div className="overlay">
                <h3>Wow.</h3>
                </div>
                <h2>Hover me.</h2>
            </div>
            <div className="box">
                <div className="overlay">
                <h3>Swag.</h3>
                </div>
                <h2>Hover me.</h2>
            </div>
            <div className="box">
                <div className="overlay">
                <h3>=)</h3>
                </div>
                <h2>Hover me.</h2>
            </div>
            <style jsx>{`

                .box{ 
                    position: relative;
                    overflow: hidden;
                    text-align: center;
                    width: 20%;
                    line-height: 120px;
                    height: 120px;
                    background: #103B51;
                    border-radius: 10px;
                    box-shadow: 0 5px 1px rgba(0,0,0,0.25);  
                    cursor:pointer;
                }

                .box:hover > .overlay{
                    opacity: 1
                }

                .overlay{
                    position: absolute;
                    border-radius: 10px;
                    opacity: 0;
                    background: #37363B;
                    @include transition (opacity .5s ease-in-out);
                }

            
            `}</style>
        </div>
    )
}
