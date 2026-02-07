import './Resume.css'

function Resume({data}) {
    return (
        <div className = "container">
            <p className = "resumeText">Resume info</p>
            <h1>Name: {data.name}</h1>
            <p>Email: {data.email}</p>
            <p>Number: {data.number}</p>
        </div>
    )
}

export default Resume