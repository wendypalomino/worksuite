import '../styles/avatar/overlayAvatar.css'
import Open from'../images/arrow.svg'

export default function Overlay({open}) {
    return (
        <div className={ open ? "overlay opacity" : "overlay"}>
            <img src={Open} alt="arrow" />
        </div>
    )
}
