import {useState} from 'react'
import './Input.css'
import Resume from './Resume.jsx'
import Dropbar from './Dropbar.jsx'

function Input() {
    const [info, setInfo] = useState({})
    const handleChange = (event) => {
        var data = event.target.id
        setInfo({...info, [data]: event.target.value})
        console.log(info)
    }
    return (
        <div className = 'whole'>
            <Dropbar 
            data = {info}
            children = {
                <form className="basicInfo" action="submit">
                    <label for="name">Enter your Name</label>
                    <input type="text" id="name" onChange={handleChange} value = {info.name}/>

                    <label for="email">Enter your email</label>
                    <input type="text" id="email" onChange={handleChange} value={info.email} />

                    <label for="number">Enter your Number</label>
                    <input type="text" id="number" onChange={handleChange} value={info.number} />
                </form>
            }
            />
            <Resume data={info} />
        </div>
    )
}



export default Input