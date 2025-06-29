import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Services from '../components/Services';
import Projects from '../components/Projects';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Projects />
        </div>
    );
}

export default Home;