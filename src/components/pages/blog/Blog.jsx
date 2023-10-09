import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import JumBotron from './JumBotron';
import StarS from './StarS';
import TesSlider from './TesSlider';
import Share from './Share';

const Blog = () => {

  useEffect(() => {
    Aos.init();
  }, [])

  return (
    <div className="max-w-7xl mx-auto mb-16 mt-10 px-8 lg:px-0" data-aos="fade-lef">
      <JumBotron></JumBotron>
      <div className="my-10" data-aos="fade-right">
        <TesSlider></TesSlider>
      </div>
      <StarS></StarS>
      <Share></Share>
    </div>
  );
};

export default Blog;