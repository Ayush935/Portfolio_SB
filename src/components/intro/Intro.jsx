import "./intro.scss"

function Intro(){
    return (
        <div className="intro" id="intro">
            <div className="intro-content">
            <div className="left">
                <div className="img-container">
                    <img src="assets/images/im1.jpg" alt="" />
                </div>
            </div>
            <div className="right">
                 <div className="right-content">
                   <h2>Hi There, I'm</h2>
                   <h1>Suraj Bhoyar</h1>
                   <h2>Being an Education Facilitator and an Avid Learner is exactly what you would think it’s like. I love helping students and fellow teachers to realize their fullest potential by providing them with resources and opportunities to thrive in a supportive and diverse community.</h2>
                 </div>
            </div>
            </div>
            
        </div>
    )
}

export default Intro