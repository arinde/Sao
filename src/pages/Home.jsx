import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Services from '../components/Services';
import Projects from '../components/Projects';
import WhyChooseUs from '../components/WhyChooseUs';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Projects />
            <WhyChooseUs />
        </div>
    );
}

export default Home;