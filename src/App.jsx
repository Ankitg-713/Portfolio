import Home from './pages/Home'
import Project from "./pages/Project";
import ProjectDetails from "./pages/ProjectDetails";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import { Link, Route, Routes } from "react-router-dom";
import Navbar from './components/Navigation/Navbar';
import FullscreenNav from './components/Navigation/FullScreenNav';


const App = () => {

  return (
    <div className="overflow-x-hidden"> 
      <Navbar />
      <FullscreenNav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Project />} />
        <Route path='/projects/:id' element={<ProjectDetails />} />
        <Route path='/aboutme' element={<AboutMe />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
