import 'aos/dist/aos.css';
import Aos from 'aos';
import { useEffect } from 'react';
import Card from './card';
import TesCard from "./TesCard"
import Image from './Image';

const Testimonial = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    return (<>
        <div className="px-8 md:px-0">
            <Card></Card>
            <div className="my-10" data-aos="fade-right">
                <Image></Image>
                <TesCard></TesCard>
            </div>
        </div>
    </>
    );
};

export default Testimonial;