import Hero from "../../Hero/Hero";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Counter from "../Counter/Counter";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Counter></Counter>
            <Hero></Hero>
            <AboutUs></AboutUs>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;