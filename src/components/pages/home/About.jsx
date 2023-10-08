import Aos from "aos";
import { useEffect } from "react";
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <div className="mt-10 py-5 md:my-20 px-8 lg:px-0 image2 opacity-80" data-aos="zoom-out-left">
            <div className="text-center">
                <h2 className="lg:text-5xl md:text-5 text-2xl font-semibold mb-2 text-[#fhh45f]">ABOUT</h2>
                <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold pb-2 text-[#3e35a3]">ENNOBLE LEARNING SERVICES</h2>
                <p className="w-[100px] h-1 bg-black mx-auto my-2"></p>
                <p className="pt-4 text-[#ba60d8]">Lorem Ipsum is simply dummy text Of the printing and typesetting industry. Lorem Ipsum has been the s standard dummy text ever since the
                    1 when an unknown printer took a galley Of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also
                    the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                    Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <button className="btn glass my-5 text-white bg-[#1b386d] hover:text-fuchsia-500">Glass button</button>
            </div>
        </div>
    );
};

export default About;