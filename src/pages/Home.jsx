import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Project from '../components/Project';
import WhyChooseUs from '../components/WhyChooseUs';
import OurCeo from '../components/OurCeo';
import FAQ from '../components/FAQ';
import Testimonial from '../components/Testimonial';
import GalleryReveal from '../components/Gallery';

const Home = () => {
    return (
        <div>
            <Hero />
            <About />
            <Services />
            <Project />
            <GalleryReveal />
            <WhyChooseUs />
            <OurCeo />
            <FAQ />
            <Testimonial />
           
        </div>
    );
}

export default Home;