import Footer from "../../footer/Footer";
import About from "./About";
import Banner from "./Banner";
import Services from "./Services";
import Slider from "./Slider";

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Slider></Slider>
            <div className="max-w-7xl mx-auto">
                <Services></Services>
                <About></About>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Home;