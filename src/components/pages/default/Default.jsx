import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Default = () => {
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <div>
            <div className="flex justify-center items-center h-[100vh]" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                <div className="text-center">
                    <h2 className="text-5xl font-bold text-blue-600">No data found!</h2>
                </div>
            </div>
        </div>
    );
};

export default Default;