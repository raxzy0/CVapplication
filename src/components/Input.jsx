import {useState} from 'react'
import './Input.css'
import Resume from './Resume.jsx'
import Dropbar from './Dropbar.jsx'

function Input() {
    const [info, setInfo] = useState({})
    const handleChange = (event) => {
        var data = event.target.id
        setInfo({...info, [data]: event.target.value})
    }
    return (
        <div className = 'whole'>
            <div className="inputs">
                <Dropbar
                title = "Basic Information"
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
                <Dropbar
                    title="Education"
                    data={info}
                    children={
                        <form className="basicInfo" action="submit">
                            <label for="name">Education Institute</label>
                            <input type="text" id="schoolName" onChange={handleChange} value={info.name} />
                            <label for="email">Title of Study</label>
                            <input type="text" id="degree" onChange={handleChange} value={info.degree} />
                            <label for="number">Date of Study</label>
                            <input type="date" id="studyDate" onChange={handleChange} value={info.number} />
                        </form>
                    }
                />
                <Dropbar
                    title="Experience"
                    data={info}
                    children={
                        <form className="basicInfo" action="submit">
                            <label for="name">Company Name</label>
                            <input type="text" id="companyName" onChange={handleChange} value={info.companyName} />

                            <label for="email">Position</label>
                            <input type="text" id="position" onChange={handleChange} value={info.position} />

                            <label for="number">Main Responsibilities</label>
                            <input type="text" id="achievements" onChange={handleChange} value={info.achievements} />

                            <label for="number">Date worked</label>
                            <input type="date" id="workDate" onChange={handleChange} value={info.workDate} />
                        </form>
                    }
                >
                </Dropbar>

            </div>
            <Resume data={info} />
        </div>
    )
}

function AddDropBar({type}) {
    function addClick() {
        return (
            <Dropbar>

            </Dropbar>
        )
    }
    return(
        <button onclick = {addClick}>
            Add more
        </button>
    )
}


export default Input