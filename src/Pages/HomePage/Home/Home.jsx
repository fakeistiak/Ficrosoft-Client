import Hero from "../../Hero/Hero";
import Footer from "../../Shared/Footer/Footer";
import NavBar from "../../Shared/NavBar/NavBar";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Counter from "../Counter/Counter";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <Counter></Counter>
            <Hero></Hero>
            <AboutUs></AboutUs>
            <Testimonials></Testimonials>
            <Footer></Footer>
        </div>
    );
};

export default Home;