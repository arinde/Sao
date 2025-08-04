import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import BlogPage from './pages/Blog';
import GalleryPage from './pages/Gallery';
import Home from './pages/Home'
import Projects from './pages/Projects';
import Team from './pages/Team';
import WhatsAppFAB from './components/WhatsappFAB';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (
   <BrowserRouter>
   <Navbar />
   <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/gallery' element={<GalleryPage />} />
      </Routes>
    <Footer />
    <WhatsAppFAB />
    </BrowserRouter>
  )
}

export default App
