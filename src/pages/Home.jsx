import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Services from '../components/Services';
import Projects from '../components/Projects';
import WhyChooseUs from '../components/WhyChooseUs';
import OurCeo from '../components/OurCeo';
import Testimonial from '../components/Testimonial';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Projects />
            <WhyChooseUs />
            <OurCeo />
            <Testimonial />
        </div>
    );
}

export default Home;