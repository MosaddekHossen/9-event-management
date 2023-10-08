import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Blog = () => {

    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <div className="max-w-7xl mx-auto my-10" data-aos="fade-left">
            Blog
        </div>
    );
};

export default Blog;