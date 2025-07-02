import Footer from './components/Footer';
import Navbar from './components/Navbar';
import BlogPage from './pages/Blog';
import Home from './pages/Home'
import Projects from './pages/Projects';
import Team from './pages/Team';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (
   <BrowserRouter>
   <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App
