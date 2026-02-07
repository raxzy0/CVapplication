import './Resume.css'

function Resume({data}) {
    return (
        <div className = "container">
            <div className="basic">
                <h1 className="resumeText">{data.name}</h1>
                <p>Email: {data.email}</p>
                <p>Number: {data.number}</p>
            </div>
            <div className="education">
                <p>Name of school: {data.schoolName}</p>
                <p>Studying {data.degree}</p>
                <p>from {data.studyDate}</p>
            </div>
            <div className="work">
                <h2>{data.companyName}</h2>
                <p>{data.position}</p>
                <p>{data.achievements}</p>
                <p>From {data.workDate}</p>
            </div>
        </div>
    )
}

export default Resume