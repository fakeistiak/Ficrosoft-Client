import Footer from "../../Shared/Footer/Footer";
import NavBar from "../../Shared/NavBar/NavBar";
import Banner from "../Banner/Banner";
import Counter from "../Counter/Counter";

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <Counter></Counter>
            <Footer></Footer>
        </div>
    );
};

export default Home;