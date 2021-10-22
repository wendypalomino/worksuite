import Open from'../images/arrow.svg'

export default function Overlay({open}) {
    return (
        <div className={ open ? "overlay opacity" : "overlay"}>
            <img src={Open} alt="arrow" />
            <style jsx>{`
            .overlay{
                position:absolute;
                background: rgba(180, 180, 190, 0.60);
                width:100%;
                height:100%;
                bottom:0;
                left:0;
                opacity:0;
                border-radius: 40%;
                display:flex;
                align-items:center;
                justify-content:center;
            }

            .opacity{
                opacity:1
            }

            .overlay img{
                position:absolute;
                transform: scaleY(-1);
            }

            @media screen and (min-width: 768px){
                .overlay{
                    all:initial;
                    display:none
                }
            }
            `}</style>
        </div>
    )
}
