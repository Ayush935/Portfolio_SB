import "./topbar.scss"

function Topbar(){
    return (
        <div className="topbar" id="topbar">
            <div className="wrapper">
             <p>
                <a href="#intro">Home</a>
             </p>
             <p>
                <a href="#intro">Experience</a>
             </p>
             <p>
                <a href="#intro">Education</a>
             </p>
             <p>
                <a href="#intro">Projects</a>
             </p>
             <p>
                <a href="#intro">Certifications</a>
             </p>
             <p >
                <a href="#intro">Extracurriculars</a>
             </p>
             <p >
                <a href="#intro">Contact</a>
             </p>
                
             
            </div>
        </div>
    )
}

export default Topbar