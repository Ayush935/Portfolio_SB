import Topbar from "./components/topbar/Topbar"
import Intro from "./components/intro/Intro"
import Portfolio from "./components/Portfolio/Portfolio"
import Works from "./components/works/Works"
import Testimonials from "./components/Testimonials/Testimonials"
import Contact from "./components/Contact/Contact"
import "./app.scss"

function App(){
  return (
    <div className="app">
     <Topbar/>
     <div className="sections">
     <Intro/>
     <Portfolio/>
     <Works/>
     <Testimonials/>
     <Contact/>
     </div>
    </div>
  )
}
export default App
