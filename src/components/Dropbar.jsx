import {useState} from 'react'
import './Dropbar.css'


function Dropbar({children, info, title, addmore = false}) {
    const [show, setShow] = useState(false)
    function handleClick() {
        show == false ? setShow(true) : setShow(false)
    }
    
    if (show == true) {
        return (
            <div className = "dropBar">
                <p>{title}: </p>
                <p>{children}</p>
                <button className="dropButton" onClick={handleClick}>hide</button>
            </div>
        )
    }
    return (
        <div className = "dropBar">
            <p>{title}: </p>
            <button className  ="dropButton" onClick = {handleClick}>show</button>
        </div>
    )
}

export default Dropbar