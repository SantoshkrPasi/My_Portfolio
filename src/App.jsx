import './App.css'
import { useState ,useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './component/Home/Home'
import About from './component/About/About'
import Project from './component/Projects/Project'
import Skills from './component/Skills/Skills'
import Contact from './component/Contact/Contact'
import Navbar from './component/Navbar/Navbar'
import Loading from './component/Load/Loading'

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 3300);
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <BrowserRouter> 
    <Navbar />
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="skill" element={<Skills />} />
            <Route path="project" element={<Project />} />
            <Route path="contact" element={<Contact />} />
         </Routes>
         </BrowserRouter> 
  )
}

export default App
