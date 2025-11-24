import { lazy, Suspense } from 'react'
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navigation/Navbar';
import FullscreenNav from './components/Navigation/FullScreenNav';

const Home = lazy(() => import('./pages/Home'))
const Project = lazy(() => import("./pages/Project"));
const ProjectDetails = lazy(() => import("./pages/ProjectDetails"));
const AboutMe = lazy(() => import("./pages/AboutMe"));
const Contact = lazy(() => import("./pages/Contact"));

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-white text-xl">Loading...</div>
  </div>
);

const App = () => {
  return (
    <div className="overflow-x-hidden"> 
      <Navbar />
      <FullscreenNav />
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Project />} />
          <Route path='/projects/:id' element={<ProjectDetails />} />
          <Route path='/aboutme' element={<AboutMe />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
