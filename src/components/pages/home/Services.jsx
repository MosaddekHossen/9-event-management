import { useContext, useEffect } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import Service from "./Service";
import 'aos/dist/aos.css';
import Aos from "aos";

const Services = () => {
    const { data } = useContext(AuthContext)
   useEffect(()=>{
    Aos.init();
   },[])
    return (
        <div className="mt-10 md:my-20 mb-10 px-8 lg:px-0" data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
            <div className="text-center">
                <h2 className="lg:text-5xl md:text-3xl text-2xl font-semibold">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
                    {
                        data?.map(service => <Service key={service.id} service={service}></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;