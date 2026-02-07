import {useState} from 'react'
import './Dropbar.css'


function Dropbar({children, info}) {
    const [show, setShow] = useState(false)
    function handleClick() {
        show == false ? setShow(true) : setShow(false)
    }
    if (show == true) {
        return (
            <div className = "dropBar">
                <p>hello : {children}</p>
                <button onClick={handleClick}>hide</button>
            </div>
        )
    }
    return (
        <div className = "dropBar">
            <button onClick = {handleClick}>show text</button>
        </div>
    )
}

export default Dropbar