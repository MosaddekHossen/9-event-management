import './Banner.css'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Banner = () => {
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <div>
            <div>
                <img className="w-full h-[100vh] absolute -top-[0px] image opacity-85 -z-10" alt="" />
            </div>
            <div className="text-center h-[90vh] flex justify-center items-center" data-aos="fade-left">
                <h1 className="lg:text-5xl text-3xl font-bold text-white">Educational and <br /> Training Events</h1>
            </div>
        </div>
    );
};

export default Banner;